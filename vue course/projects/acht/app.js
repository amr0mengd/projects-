const app = Vue.createApp({
  data() {
    return {
      message: "Vue is Great!",
    };
  },
  methods: {
    setText() {
      this.message = this.$refs.userInput.value;
    },
  },
  
});



const app2 = Vue.createApp({
  template:`<p>{{favoriteMeal}}</p>`,
  data(){
    return{
      favoriteMeal: 'Koshary',
    }
  }
})

app.mount("#app");
app2.mount("#app2");


//this is how to use proxy in vanilla java script Vue uses a similar method to render data
// const data = {
//   message: 'Hello!',
//   longMessage: 'Hello! World!'
// };

// const handler = {
//   set(target, key, value) {
//     if (key === 'message') {
//       target.longMessage = value + ' World!';
//     }
//     target.message = value;
//   }
// };

// const proxy = new Proxy(data, handler);

// proxy.message = 'Hello!!!!';

// console.log(proxy.longMessage);
