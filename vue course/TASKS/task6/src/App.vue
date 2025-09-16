<template>
  <div>
    <active-user :name="user.Name" :age="user.Age"></active-user>
    <user-data @data="updateData"></user-data>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        Name: "Amr",
        Age: 20,
      },
    };
  },

  methods: {
    updateData(n, a) {
      this.user.Name = n;
      this.user.Age = +a;
    },
  },
};
</script>
