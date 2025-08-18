const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    increase(num) {
      this.counter += num;
    },
    decrease(num) {
      this.counter -= num;
    },
  },
});
app.mount("#events");
