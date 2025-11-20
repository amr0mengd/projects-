<template>
  <base-container>
    <h2>Active Users</h2>
    <base-search
      @search="updateSearch"
      :search-term="enteredSearchTerm"
    ></base-search>
    <div>
      <button @click="sort('asc')" :class="{ selected: sorting === 'asc' }">
        Sort Ascending
      </button>
      <button @click="sort('desc')" :class="{ selected: sorting === 'desc' }">
        Sort Descending
      </button>
      <ul>
        <user-item
          v-for="user in displayUsers"
          :key="user.id"
          :user-name="user.fullName"
          :id="user.id"
          @list-projects="$emit('list-projects', $event)"
        ></user-item>
      </ul>
    </div>
  </base-container>
</template>

<script>
import useSearch from "@/hooks/search";
import UserItem from "./UserItem.vue";
import { toRefs } from "vue";
import useSort from "@/hooks/sort";
export default {
  components: { UserItem },
  props: ["users"],
  setup(props) {
    const { users } = toRefs(props);
    const [enteredSearchTerm, availableItems, updateSearch] = useSearch(
      users,
      "fullName"
    );
    const { sorting, displayUsers, sort } = useSort(availableItems, "fullName");

    return { updateSearch, enteredSearchTerm, sort, sorting, displayUsers };
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
