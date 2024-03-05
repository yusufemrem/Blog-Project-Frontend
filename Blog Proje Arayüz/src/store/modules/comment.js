import Vue from "vue";

const state = {
  comments: [],
};

const getters = {
  getComments: (state) => state.comments, // düzeltilmiş fonksiyon adı
};

const mutations = {
  updateCommentList(state, comment) {
    // düzeltilmiş fonksiyon adı
    state.comments.push(comment);
  },
  setComments(state, comments) {
    state.comments = comments; // düzeltilmiş alan adı
  },
};

const actions = {
  initApp({ commit }) {
    // initApp ile ilgili işlemleri buraya ekleyebilirsiniz.
  },
  saveComment({ commit }, payload) {
    Vue.http
      .post("https://localhost:44392/api/Comment/AddComment", payload)
      .then((response) => {
        console.log(response.data); // response.data, eklenen yorumu içerir
        commit("updateCommentList", response.data); // state.comments'a yorumu ekle
      });
  },
  async getComment({ commit }) {
    try {
      const response = await Vue.http.get(
        "https://localhost:44392/api/Comment/CommentList"
      );

      const comments = response.data;

      commit("setComments", comments);

      return comments;
    } catch (error) {
      // Hata durumlarıyla ilgili işlemleri buraya ekleyebilirsiniz.
      console.error("Error fetching comments:", error);
      throw error;
    }
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
