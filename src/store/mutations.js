export const setAll = (state, payload) => {
  state.allPosts = payload;
};

export const listAll = (state, payload) => {
  state.currentPosts = payload;
};
