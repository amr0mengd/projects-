const app = Vue.createApp({
  data() {
    return {
      boxA: false,
      boxB: false,
      boxC: false,
    };
  },
  computed: {
    boxASelect() {
      return { active: this.boxA };
    },
    boxBSelect() {
      return { active: this.boxB };
    },
    boxCSelect() {
      return { active: this.boxC };
    },
  },
  methods: {
    select(box) {
      if (box === "A") {
        this.boxA = !this.boxA;
      } else if (box === "B") {
        this.boxB = !this.boxB;
      } else if (box === "C") {
        this.boxC = !this.boxC;
      }
    },
  },
});
app.mount("#styling");
