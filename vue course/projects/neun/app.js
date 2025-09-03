const app = Vue.createApp({
  data() {
    return {
      // dataIsVisible: false,
      friends: [
        {
          id: "manuel",
          name: "Manuel Lorenz",
          phoneNumber: "0123 4567 899",
          email: "manuel@localhost.com",
        },
        {
          id: "julie",
          name: "Julie Jones",
          phoneNumber: "09876 543 221",
          email: "julie@localhost.com",
        },
      ],
    };
  },
});

app.component("friend-contact", {
  template: `
  <li>
    <h2>{{friend.name}}</h2>
    <button @click="showData">{{dataIsVisible ? "Hide" : "Show"}} Details</button>
    <ul v-if="dataIsVisible">
      <li>Phone Number: {{friend.phoneNumber}}</li>
      <li>Email: {{friend.email}}</li>
    </ul>
  </li>
  `,
  data() {
    return {
      friend: {
        name: "Manuel Lorenz",
        phoneNumber: "0123 4567 899",
        email: "manuel@localhost.com",
      },
      dataIsVisible: false,
    };
  },
  methods: {
    showData() {
      this.dataIsVisible = !this.dataIsVisible;
    },
  },
});
app.mount("#app");
