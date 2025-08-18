const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      confirmedName: "",
    };
  },
  methods: {
    confirmed() {
      this.confirmedName = this.name;
    },
    submitForm() {
      // event.preventDefault();
      alert("Submitted");
    },
    setName(event, lastName) {
      this.name = event.target.value + " " + lastName;
    },
    increase(num) {
      this.counter += num;
    },
    decrease(num) {
      this.counter -= num;
    },
  },
});
app.mount("#events");
