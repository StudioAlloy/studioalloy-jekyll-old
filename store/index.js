import Vuex from "vuex";

const createStore = () => {
  return new Vuex.Store({
    state: {
      items: [],
      errors: [],
      title: "studio-alloy",
      author: "Mitchel van Eijgen <mvaneijgen@gmail.com>",
      description: "Nuxt.js project",
    },
    mutations: {
      add(state, payload) {
        state.items = payload;
      },
      error(state, payload) {},
    },
  });
};

export default createStore;
