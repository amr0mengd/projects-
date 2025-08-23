const app = Vue.createApp({
  data() {
    return {
      enteredTask: "",
      tasks: [],
      isVisible: true,
    };
  },
  methods: {
    addTask() {
      this.tasks.push(this.enteredTask);
      console.log(this.tasks);
    },
    toggle(){
      this.isVisible = !this.isVisible;
    }
  },
});

app.mount("#assignment");
