<template>
  <section>
    <header><h1>My Friends</h1></header>
    <ul>
      <friend-contact
      name="Manuel Lorenz"
      phone-number="0123 45678 90"
      email="manuel@localhost.com"></friend-contact>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      friends: [
        {
          id: "manuel",
          name: "Manuel Lorenz",
          phone: "0123 45678 90",
          email: "manuel@localhost.com",
        },
        {
          id: "julie",
          name: "Julie Jones",
          phone: "0987 654421 21",
          email: "julie@localhost.com",
        },
      ],
    };
  },
};
</script>

<style></style>
