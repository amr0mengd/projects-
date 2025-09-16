<template>
  <div>
    <h2>userName: {{ name }}</h2>
    <h3>age: {{ age }}</h3>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    age: {
      type: Number,
      required: true
    }
  }
};
</script>
