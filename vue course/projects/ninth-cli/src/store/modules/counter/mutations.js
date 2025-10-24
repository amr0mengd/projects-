export default {
  increase(state, payload) {
    state.counter = state.counter + payload.value;
  },
  increment(state) {
    state.counter = state.counter + 2;
  },
};
