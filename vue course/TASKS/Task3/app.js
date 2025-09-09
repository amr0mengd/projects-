const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  // you can watch computed properties so every time the compute executes the watch changes the value 
  //it's more efficient to watch change in computed data than from the data itself
  watch: {
    result() {
      const that = this;
      setTimeout(() => {
        that.counter = 0;
      }, 5000);
    },
  },
  computed: {
    result() {
      if (this.counter < 37) {
        return "Not there yet";
      } else if (this.counter === 37) {
        return this.counter;
      } else {
        return "Too much!";
      }
    },
  },
  methods: {
    count(num) {
      this.counter += num;
      console.log(this.counter);
    },
  },
});

app.mount("#assignment");
