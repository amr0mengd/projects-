const app = Vue.createApp({
  data() {
    return {
      output: "",
      output2: "",
    };
  },
  methods: {
    Alert() {
      alert("Task 2 completed");
    },
    keyD(event) {
      this.output = event.target.value;
    },
    keyU(event) {
      this.output2 = event.target.value;
    },
  },
});

app.mount("#assignment");
