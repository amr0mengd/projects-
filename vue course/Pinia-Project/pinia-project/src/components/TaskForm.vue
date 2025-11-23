<template>
  <form @submit.prevent="handleSubmit">
    <input type="text" placeholder="i need to..." v-model="newTask" />
    <button>Add</button>
  </form>
</template>

<script>
import { useTaskStore } from "@/stores/TaskStore";
import { ref } from "vue";
export default {
  setup() {
    const taskStore = useTaskStore();
    const newTask = ref("");
    const handleSubmit = () => {
      if (newTask.value.length > 0) {
        taskStore.addTask({
          id: new Date().toISOString(),
          title: newTask.value,
          isFav: false,
        });
        newTask.value = "";
      }
    };
    return { handleSubmit, newTask };
  },
};
</script>
