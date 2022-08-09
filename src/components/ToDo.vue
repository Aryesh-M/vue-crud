<template>
    <div>
        <div class="container">
            <div class="table-wrapper">
                <div class="table-title">
                    <div class="row">
                        <div class="col-sm-6">
                            <h2>Manage <b>Posts</b></h2>
                        </div>
                        <div class="col-sm-6" style="padding-bottom:1em">
                            <router-link tag="a" to="/add-post" class="btn btn-success" exact><i
                                    class="material-icons">&#xE147;</i>
                                <span>Add New Post</span>
                            </router-link>
                        </div>
                    </div>
                </div>
                <table class="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th>Body</th>
                            <th>Title</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(post) in freshPosts" :key="post.id">
                            <td>{{post.body}}</td>
                            <td>{{post.title}}</td>
                            <td>
                                <router-link tag="a" :to="'/edit-post/'+post.id" class="btn btn-success edit" exact>
                                    <i class="material-icons">&#xE254;</i>
                                </router-link>
                                <a href="javascript:void(0)" @click="deletePost(post.id)"
                                    class="btn btn-success delete">
                                    <i class="material-icons">&#xE872;</i>
                                </a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import store from '@/store';
import { mapGetters, mapActions } from 'vuex';

export default {
    name:'ToDo',
    computed: {
        ...mapGetters({
            allPosts: 'allPosts'
        }),
        freshPosts() {
            return store.getters.allPosts
        }
    },
    watch: {
        freshPosts() {
        }
    },
    mounted() {
        if (!(this.freshPosts && this.freshPosts.length)){
            store.dispatch('setAll').catch(error=> console.log(error));
        }
    },
    data(){
        return {
            localPosts: [],
       }
    },
    methods: {
        ...mapActions([
        'increment',
        'decrement',
        'incrementIfOdd',
        'incrementAsync'
    ]),
        deletePost(id){
            let result = confirm('Are you sure you want to delete the post?');
            if(result){
                store.dispatch('deletePost',id).then((response)=>{
                    console.log(response);
                })
            }
        }
    },
    
    
}
</script>
<style src="./todo.css" scoped>
</style>