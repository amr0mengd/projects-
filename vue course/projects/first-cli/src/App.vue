<template>
  <section>
    <h2>My Friends</h2>
    <ul>
      <friend-contact
        name="Manuel Lorenz"
        phone-number="0123 4536 6564"
        email="manuel@localhost.com"
      ></friend-contact>
      <friend-contact name="Mohamed Yasser" phone-number="0112 9627 884" email="mohamed@gmail.com"></friend-contact>
    </ul> 
  </section>
</template>

<script>
export default {
  data() {
    return {
      // friends: [
      //   {
      //     id: "manuel",
      //     name: "Manuel Lorenz",
      //     phone: "0123 45678 90",
      //     email: "manuel@localhost.com",
      //   },
      //   {
      //     id: "julie",
      //     name: "Julie Jones",
      //     phone: "089 13478 90",
      //     email: "julie@localhost.com",
        // },
      // ],
    };
  },
};
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Jost&display=swap');
</style>
