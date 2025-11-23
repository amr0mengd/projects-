<template>
  <main>
    <!-- heading -->
    <header>
      <img src="./assets/pinia-logo.svg" alt="pinia logo" />
      <h1>Pinia Tasks</h1>
    </header>
    <!-- new Task Form -->
    <div class="new-task-form">
      <task-form></task-form>
    </div>
    <!-- filter -->
    <nav class="filter">
      <button @click="filter = 'all'">All tasks</button>
      <button @click="filter = 'fav'">Fav tasks</button>
    </nav>

    <!-- loading -->
    <div class="loading" v-if="isLoading">Loading tasks...</div>

    <!-- task list -->
    <div class="task-list" v-if="filter === 'all'">
      <p>You have {{ totalCount }} tasks left to do</p>
      <div v-for="task in tasks" :key="task.id">
        <task-details :task="task"></task-details>
      </div>
    </div>
    <!--favorites task list -->
    <div class="task-list" v-else-if="filter === 'fav'">
      <p>You have {{ favCount }} Favorites to do</p>
      <div v-for="task in fav" :key="task.id">
        <task-details :task="task"></task-details>
      </div>
    </div>

    <button @click="taskStore.$reset">reset state</button>
  </main>
</template>

<script>
import { ref } from "vue";
import TaskDetails from "./components/TaskDetails.vue";
import { useTaskStore } from "./stores/TaskStore";
import TaskForm from "./components/TaskForm.vue";
import { storeToRefs } from "pinia";
export default {
  components: { TaskDetails, TaskForm },
  setup() {
    const taskStore = useTaskStore();

    const { tasks, isLoading, fav, favCount, totalCount } =
      storeToRefs(taskStore);
    //fetch tasks
    taskStore.getTasks();
    const filter = ref("all");
    return { taskStore, filter, tasks, isLoading, fav, favCount, totalCount };
  },
};
</script>
