const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      lastName: "",
      // fullName: "",
    };
  },
  // watchers are like computes but they are used modifying a data that doesn't depend on other data  
  watch: {
    counter(value) {
      if (value > 50) {
        this.counter = 0;
      }
    },
    // name(value) {
    //   if (value === "") {
    //     this.name = "";
    //   } else {
    //     this.fullName = this.name + " " + this.lastName;
    //   }
    // },
    // lastName(value) {
    //   if (value === "") {
    //     this.lastName = "";
    //   } else {
    //     this.fullName = this.name + ' ' + this.lastName
    //   }
    // },
  },
  /*computed works like methods in creating functions but we actually
  use it as variables or properties as this fullName vue only execute these
  functions only when it's called on the other hand the methods functions
  executes whenever something change on the DOM*/
  //you can't use bind directors with computed that's why we use it as properties or variables just to output values
  computed: {
    fullName() {
      if (this.name === "" || this.lastName === "") {
        return "";
      }
      return this.name + " " + this.lastName;
    },
  },
  methods: {
    // outputFullName() {
    //   if (this.name === "") {
    //     return "";
    //   }
    //   return this.name + " " + "monged";
    // },
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = "";
    },
  },
});

app.mount("#events");
