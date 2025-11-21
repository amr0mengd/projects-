<template>
  <main>
    <!-- heading -->
    <header>
      <img src="./assets/pinia-logo.svg" alt="pinia logo" />
      <h1>Pinia Tasks</h1>
    </header>
    <!-- task list -->
    <div class="task-list">
      <div v-for="task in taskStore" :key="task.id">
        <task-details :task="task"></task-details>
      </div>
    </div>
  </main>
</template>

<script>
import TaskDetails from "./components/TaskDetails.vue";
import { useTaskStore } from "./stores/TaskStore";
export default {
  components: { TaskDetails },
  setup() {
    const taskStore = useTaskStore();
    return { taskStore };
  },
};
</script>
