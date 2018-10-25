import Vuex from "vuex";

const createStore = () => {
  return new Vuex.Store({
    state: {
      items: [],
      errors: [],
      title: "Studio Alloy",
      author: "Mitchel van Eijgen <mvaneijgen@gmail.com>",
      description: "Wij maken impact met pixels.",
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
