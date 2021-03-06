import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0,
    articles: [],
    price: 0.0
  },
  mutations: {

    addArticle (state, product) {
      state.articles.push(product)
    },
    deleteArticle (state, product) {
      state.articles.splice(state.articles.indexOf(product), 1)
    },

  },

  actions: {
    addArticle ({state, commit, getters}, product) {
      commit('addArticle', product)
    },

    deleteArticle ({state, commit}, product) {
      commit('deleteArticle', product)
    }
  },

  getters: {
    totalPrice (state) {
      let res = 0
      for (var i = 0; i < state.articles.length; i++) {
        res += state.articles[i].productPrice
      }
      return res
    },

    totalArticles (state) {
      return state.articles.length
    },

    articleToShow (state) {
      return [...new Set(state.articles)]
    },

    quantityArticle (state) {
      console.log(state.articles.productId)
      return state.articles.productId
    }
  }

})

export default store
