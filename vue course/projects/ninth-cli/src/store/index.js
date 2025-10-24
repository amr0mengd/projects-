import { createStore } from "vuex";
const counterModule = {
  namespaced: true,
  state() {
    return {
      counter: 0,
    };
  },
  mutations: {
    increase(state, payload) {
      state.counter = state.counter + payload.value;
    },
    increment(state) {
      state.counter = state.counter + 2;
    },
  },
  actions: {
    increase(context, payload) {
      console.log(context);
      context.commit("increase", payload);
    },
    increment(context) {
      setTimeout(() => context.commit("increment"), 1000);
    },
  },
  getters: {
    finalCounter(state) {
      return state.counter * 3;
    },
    normalizedCounter(_, getters) {
      const finalCounter = getters.finalCounter;
      if (finalCounter < 0) {
        return 0;
      } else if (finalCounter > 100) {
        return 100;
      }
      return finalCounter;
    },
    testAuth(state) {
      return state.isLoggedIn;
    },
  },
};

const store = createStore({
  modules: {
    numbers: counterModule,
  },
  state() {
    return {
      isLoggedIn: false,
    };
  },
  mutations: {
    setAuth(state, payload) {
      state.isLoggedIn = payload.isAuth;
    },
  },
  actions: {
    logIn(context) {
      context.commit("setAuth", { isAuth: true });
    },
    logOut(context) {
      context.commit("setAuth", { isAuth: false });
    },
  },
  getters: {
    userAuthenticated(state) {
      return state.isLoggedIn;
    },
  },
});

export default store;
