Vue.createApp({
  data() {
    return {
      goals: [],
      enteredValue: "",
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredValue);
      this.enteredValue = "";
    },
  },
}).mount("#app");

// const btn = document.querySelector('button');
// const input = document.querySelector('input');
// const list = document.querySelector('ul');

// function addGoal(){
//   const li = input.value;
//   const newLi = document.createElement('li');
//   newLi.textContent = li;
//   list.appendChild(newLi);
//   input.value = '';
// }

// btn.addEventListener('click', addGoal);
