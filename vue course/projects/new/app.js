const app = Vue.createApp({
  data() {
    return {
      messageA: "Finish the course and learn Vue!",
      messageB: "Master Vue and build amazing apps!",
      vueLink: "https://vuejs.org/",
    };
  },
  methods: {
    outputGoal() {
      const randomNum = Math.random();
      if (randomNum > 0.5) {
        return this.messageA;
      } else {
        return this.messageB;
      }
    },
  },
});

app.mount("#user-goal");
