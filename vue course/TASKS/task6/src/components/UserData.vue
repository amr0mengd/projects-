<template>
  <form @submit.prevent="$emit('data', inputtedName,inputtedAge)">
    <div>
      <label>Name: </label>
      <input v-model="inputtedName" type="text">
    </div>
    <div>
      <label>Age: </label>
      <input v-model="inputtedAge" type="number">
    </div>
    <button>Update Data</button>
  </form>
</template>

<script>
export default {
  emits:['data'],
  data(){
    return{
      inputtedName: '',
      inputtedAge: '',
    }
  }
};
</script>
