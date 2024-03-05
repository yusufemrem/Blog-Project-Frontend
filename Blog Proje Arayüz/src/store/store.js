import Vue from "vue";
import Vuex from "vuex";
import comment from "./modules/comment";
import register from "./modules/register";
import blog from "./modules/blog";
import role from "./modules/role";
import axios from "axios";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: { token: "", fbAPIKey: "", username: "" },
  mutations: {
    setToken(state, token) {
      state.token = token;
    },
    setUserName(state, username) {
      state.username = username;
    },
    clearToken(state) {
      state.token = "";
    },
  },
  actions: {
    login({ commit, dispatch, state }, authData) {
      return axios
        .post("https://localhost:44392/api/Auth/Login", {
          username: authData.username,
          password: authData.password,
          returnSecureToken: true,
        })
        .then((response) => {
          console.log(response.data);
          commit("setToken", response.data.token);
          localStorage.setItem("token", response.data.token);
          localStorage.getItem("token");
        });
    },
    setUserName({ commit }, username) {
      commit("setUserName", username);
    },
  },
  modules: {
    comment,
    register,
    blog,
    role,
  },
});
export default store;
