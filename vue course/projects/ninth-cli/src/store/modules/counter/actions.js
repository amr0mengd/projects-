export default {
  increase(context, payload) {
    console.log(context);
    context.commit("increase", payload);
  },
  increment(context) {
    setTimeout(() => context.commit("increment"), 1000);
  },
};
