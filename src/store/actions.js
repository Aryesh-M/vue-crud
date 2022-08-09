import state from "./state";

const axios = require("axios").default;
const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" },
});

export const setAll = async ({ commit }) => {
  let response = await api.get("/posts").catch((error) => console.log(error));
  await commit("setAll", response.data);
  return response.data;
};

export const deletePost = ({ commit }, id) => {
  let allPosts = state.allPosts;
  allPosts = allPosts.filter((post) => {
    return post.id != id;
  });
  commit("setAll", allPosts);
  return "The Post Deleted Successfully!";
};

export const getPost = ({ commit }, id) => {
  let post = state.allPosts.filter((post) => {
    return post.id == id;
  });
  commit("setAll", state.allPosts);
  return post[0];
};

export const updatePost = ({ commit }, postBody) => {
  const { id, body, title } = postBody;
  let index = state.allPosts.findIndex((post) => post.id == id);
  state.allPosts[index].body = body;
  state.allPosts[index].title = title;
  commit("setAll", state.allPosts);
  return "Updated successfully!";
};

export const addPost = ({ commit }, postBody) => {
  const { body, title } = postBody;
  let len = state.allPosts.length;
  state.allPosts.push({ id: len + 1, body: body, title: title });
  commit("setAll", state.allPosts);
  return "Added successfully!";
};
