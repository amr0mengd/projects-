const app = Vue.createApp({
  data() {
    return {
      enteredTask: "",
      tasks: [],
      isVisible: true,
    };
  },
  computed: {
    Visibility() {
      return this.isVisible ? "Hide List" : "Show List";
    },
  },
  methods: {
    toggle() {
      this.isVisible = !this.isVisible;
    },
    addTask() {
      this.tasks.push(this.enteredTask);
      console.log(this.tasks);
    },
    removeTask(idx) {
      this.tasks.splice(idx, 1);
    },
  },
});

app.mount("#assignment");
