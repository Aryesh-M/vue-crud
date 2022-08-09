import Vue from "vue";
import AddPost from "@/components/Add-Post.vue";
import EditPost from "@/components/Edit-Post.vue";
import ToDo from "@/components/ToDo.vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  { path: "/", component: ToDo },
  { path: "/add-post", component: AddPost },
  { path: "/edit-post/:id", component: EditPost },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
