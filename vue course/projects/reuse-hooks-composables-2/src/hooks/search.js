import { ref, computed, watch } from "vue";

export default function useSearch(items) {
  const enteredSearchTerm = ref("");
  const activeSearchTerm = ref("");

  const availableProjects = computed(() => {
    let filteredItems = [];
    if (activeSearchTerm.value) {
      filteredItems = items.value.filter((item) =>
        item[searchProp].includes(activeSearchTerm.value)
      );
    }
    return items.projects;
  });
  function updateSearch(val) {
    enteredSearchTerm.value = val;
  }

  watch(enteredSearchTerm, (val) => {
    setTimeout(() => {
      if (val === enteredSearchTerm.value) {
        activeSearchTerm.value = val;
      }
    }, 300);
  });
  return [enteredSearchTerm, availableProjects, updateSearch];
}
