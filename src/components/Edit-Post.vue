<template>
    <div class="modal fade">
        <div class="modal-dialog">
            <div class="modal-content">
                <form @submit="updatePostData">
                    <div class="modal-header">
                        <h4 class="modal-title">Edit Post</h4>
                    </div>
                    <div class="modal-body">
                        <div class="form-group">
                            <label>Body</label>
                            <textarea class="form-control" v-model="body" required />
                        </div>
                        <div class="form-group">
                            <label>Title</label>
                            <textarea class="form-control" v-model="title" required />
                        </div>
                    </div>
                    <div class="modal-footer">
                        <router-link to="/"><input type="button" class="btn btn-default" data-dismiss="modal" value="Cancel" /></router-link>
                        <input type="submit" class="btn btn-success" value="Update" />
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import store from '@/store';

export default {
    name: 'Edit-Post',
    props: {},
    created(){
        let _this = this;
        _this.id = _this.$route.params.id;
        _this.listenToReload();
        if (_this.id) {
                store.dispatch('getPost', _this.id).then(res => {
                    _this.body = res.body;
                    _this.title = res.title;
                }).catch(error => {
                    alert(`Due to ${error} you will be redirected to home page`);
                    _this.$router.push({ path: '/' });
                });
            }                    
    },
    data() {
        return {
            body: '',
            title: '',
            id: '',
        }
    },
    methods: {
        updatePostData(e){
            e.preventDefault();
            let _this = this;
            console.log(_this.id);
            console.log(_this.body);
            console.log(_this.title);
            store.dispatch('updatePost', { id: _this.id, body: _this.body, title: _this.title}).then(()=>{
                _this.removeListener();
                _this.$router.push({path: '/'});
            })
        },
        listenToReload(){
            window.onbeforeunload = function () {
                return "Dude, are you sure you want to leave? Think of the kittens!";
            }
        },
        removeListener(){
            window.onbeforeunload = function () {}
        }
    },
    destroyed(){
        this.removeListener();
    }
}
</script>