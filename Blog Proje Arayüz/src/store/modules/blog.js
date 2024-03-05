import Vue from "vue";
const state = {
  blogs: [],
};

const getters = {
  getBlogs(state) {
    return state.blogs;
  },
  getListBlog(state) {},
};

const mutations = {
  updateBlogList(state, blog) {
    state.comments.push(blogs);
  },
};

const actions = {
  initApp({ commit }) {},
  saveBlog({ commit }, payload) {
    Vue.http
      .post("https://localhost:44392/api/Home/addBlog", payload)
      .then((response) => {
        console.log(response); // product list üsttekini kastediyor
      });
  },
  sellBlog({ commit }, payload) {
    //Vue Resource İşlemleri...
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
