import { createStore } from 'vuex'

import axios from 'axios'

export default createStore({
  state: {
    categories: [],
    mealInfo: []
  },
  getters: {
    getCategories: (state) => state.categories,
    getMealInfo: (state) => state.mealInfo,
  },
  actions: {
    async fetchCategories() {
      try {
        await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php').then((res) => {
          this.commit('SET_CATEGORIES', res.data)
        })
      } catch (error) {
        console.log(error)
      }
    },
    async fetchDetailCategories({ commit }, name) {
      try {
        await axios
          .get('https://www.themealdb.com/api/json/v1/1/filter.php?c=' + name)
          .then((res) => {
            commit('SET_CATEGORIES', res.data)
          })
      } catch (error) {
        console.log(error)
      }
    },
    async fetchMealInfo({ commit }, id) {
      try {
        await axios
          .get('https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + id)
          .then((res) => {
            commit('SET_MEALINFO', res.data)
          })
      } catch (error) {
        console.log(error)
      }
    }
  },
  mutations: {
    SET_CATEGORIES(state, categories) {
      state.categories = categories
    },
    SET_MEALINFO(state, mealInfo) {
      state.mealInfo = mealInfo
    }
  }
})
