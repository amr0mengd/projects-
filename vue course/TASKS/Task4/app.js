const app = Vue.createApp({
  data() {
    return {
      bg: "",
      Class: "",
      toggle: true,
    };
  },
  computed: {
    inputClass() {
      // return {user1 : this.Class === 'user1', user2: this.Class === 'user2'};
      return {
        user1: this.Class === "user1",
        user2: this.Class === "user2",
        visible: this.toggle,
        hidden: !this.toggle,
      };
    },
  },
  methods: {
    tog() {
      this.toggle = !this.toggle;
    },
  },
});

app.mount("#assignment");
