import Vue from 'vue'
import Vuex from 'vuex'
import axiosReq from "../config/axios.js";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    allQuestions: [],
    isLogin: false,
    searchStr: "",
    currentQuestion: {}
  },
  mutations: {
    SET_ALL_QUESTIONS(state,payload) {
      state.allQuestions = payload;
    },
    SET_LOGIN_STATE(state,payload) {
      state.isLogin = payload;
    },
    SET_SEARCH_STR(state,payload) {
      state.searchStr = payload;
    },
    SET_CURRENT_QUESTION(state,payload) {
      state.currentQuestion = payload;
    }
  },
  actions: {
    getAllQuestions(context) {
      axiosReq({
        url: `/questions?search=${context.state.searchStr}`,
        method: "get"
      })
      .then(({data}) => {
        context.commit('SET_ALL_QUESTIONS',data);
      })

    },
    getOneQuestion(context,id) {
      axiosReq({
        url: `/questions/${id}`,
        method: "get"
      })
      .then(({data}) => {
        context.commit('SET_CURRENT_QUESTION',data);
      })
    }
  },
  modules: {
  }
})
