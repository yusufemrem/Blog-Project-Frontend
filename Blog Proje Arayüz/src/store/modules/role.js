import Vue from "vue";
const state = {
  roles: [],
};

const getters = {
  getProducts(state) {
    return state.roles;
  },
  getListroles(state) {},
};

const mutations = {
  updateProductList(state, product) {
    state.role.push(role);
  },
};

const actions = {
  initApp({ commit }) {},
  saverole({ commit }, payload) {
    Vue.http
      .post("https://localhost:44392/api/Role/AddRole", payload)
      .then((response) => {
        console.log(response); // product list üsttekini kastediyor
      });
  },
  sellComment({ commit }, payload) {
    //Vue Resource İşlemleri...
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
