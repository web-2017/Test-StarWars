import Vue from "vue"
import Vuex from "vuex"
import getStarships from "./getStarships"
import loading from "./loadings"

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    getStarships,
    loading,
  },
})
