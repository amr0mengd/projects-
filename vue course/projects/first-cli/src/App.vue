<template>
  <section>
    <header><h1>My Friends</h1></header>
    <new-friend @add-contact="addNewFriend"></new-friend>
    <ul>
      <friend-contact
        v-for="friend in friends"
        :key="friend.id"
        :id="friend.id"
        :name="friend.name"
        :phone-number="friend.phone"
        :email="friend.email"
        :is-favorite="friend.isFavorite"
        @toggle-favorite="toggleFavoriteStatus"
        @delete="deleteContact"
      ></friend-contact>
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
          // isFavorite: true,
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
  methods: {
    toggleFavoriteStatus(Id) {
      const identifiedFriend = this.friends.find((friend) => friend.id === Id);
      identifiedFriend.isFavorite = !identifiedFriend.isFavorite;
    },
    addNewFriend(name, phone, email) {
      const NewFriend = {
        id: new Date().toISOString(),
        name: name,
        phone: phone,
        email: email,
      };
      this.friends.push(NewFriend);
    },
    deleteContact(Id) {
      this.friends = this.friends.filter(friend => friend.id !== Id)
    },
  },
};
</script>

<style></style>
