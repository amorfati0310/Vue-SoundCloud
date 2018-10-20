import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    musicLibrary: {}
  },
  mutations: {
    FilterHomeList(state, searchText) {
      const lowerSearchText = searchText.toLowerCase();
      state.musicLibrary.searched = state.musicLibrary.searched.filter(({ title }) => {
        return title.toLowerCase().includes(lowerSearchText);
      });
    },
    BackToBeforeSearchList(state) {
      state.musicLibrary.searched = state.musicLibrary.showList;
    }
  }
});

export default store;
