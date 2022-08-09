<template>
    <div class="modal fade">
        <div class="modal-dialog">
            <div class="modal-content">
                <form @submit="updatePostData">
                    <div class="modal-header">
                        <h4 class="modal-title">Add Post</h4>
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
                        <input type="submit" class="btn btn-success" value="Add" />
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import store from '@/store';

export default {
    name: 'Add-Post',
    props: {},
    created() {
    },
    data() {
        return {
            body: '',
            title: '',
        }
    },
    methods: {
        updatePostData(e) {
            e.preventDefault();
            let _this = this;
            store.dispatch('addPost', { body: _this.body, title: _this.title }).then(() => {
                _this.$router.push({ path: '/' });
            })
        }
    }
}
</script>