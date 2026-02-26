const app = Vue.createApp({
  data() {
    return {
      Name: "AmrMonged",
      Age: 20,
      picLink: 'https://i.pinimg.com/1200x/85/95/cd/8595cdd5af00cdac149d861ba9e8fcce.jpg',
      rad: `RandomNum3: ${Math.random().toFixed(4)}`,
    };
  },
  methods: {
    calculateAge(){
      return this.Age + 5;
    },
    random(){
      const random = Math.random().toFixed(4);
      return random;
    },
    nameSync(event){
      this.Name = event.target.value;
    }
  },
});

app.mount('#ass');
