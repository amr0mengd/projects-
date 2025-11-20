<template>
  <section>
    <base-container v-if="user">
      <h2>{{ user.fullName }}: Projects</h2>
      <base-search
        v-if="hasProjects"
        @search="updateSearch"
        :search-term="enteredSearchTerm"
      ></base-search>
      <ul v-if="hasProjects">
        <project-item
          v-for="project in availableProjects"
          :key="project.id"
          :title="project.title"
        ></project-item>
      </ul>
      <h3 v-else>No Projects Found.</h3>
    </base-container>
    <base-container v-else>
      <h3>No user Selected.</h3>
    </base-container>
  </section>
</template>

<script>
import ProjectItem from "./ProjectItem.vue";
import { computed, watch, toRefs } from "vue";
import useSearch from "@/hooks/search";
export default {
  components: { ProjectItem },
  props: ["user"],
  setup(props) {
    const { user } = toRefs(props);
    const projects = computed(() => {
      return user.value ? user.value.projects : [];
    });
    const [enteredSearchTerm, availableProjects, updateSearch] = useSearch(
      projects,
      "title"
    );
    // const enteredSearchTerm = ref("");
    // const activeSearchTerm = ref("");

    // const availableProjects = computed(() => {
    //   if (activeSearchTerm.value) {
    //     return props.user.projects.filter((prj) =>
    //       prj.title.includes(activeSearchTerm.value)
    //     );
    //   }
    //   return props.user.projects;
    // });
    const hasProjects = computed(() => {
      return user.value.projects && availableProjects.value.length > 0;
    });

    // function updateSearch(val) {
    //   enteredSearchTerm.value = val;
    // }

    // watch(enteredSearchTerm, (val) => {
    //   setTimeout(() => {
    //     if (val === enteredSearchTerm.value) {
    //       activeSearchTerm.value = val;
    //     }
    //   }, 300);
    // });
    watch(user, () => {
      enteredSearchTerm.value = "";
    });
    return {
      enteredSearchTerm,
      availableProjects,
      hasProjects,
      updateSearch,
    };
  },
  // data() {
  //   return {
  //     enteredSearchTerm: "",
  //     activeSearchTerm: "",
  //   };
  // },
  // computed: {
  //   hasProjects() {
  //     return this.user.projects && this.availableProjects.length > 0;
  //   },
  //   availableProjects() {
  //     if (this.activeSearchTerm) {
  //       return this.user.projects.filter((prj) =>
  //         prj.title.includes(this.activeSearchTerm)
  //       );
  //     }
  //     return this.user.projects;
  //   },
  // },
  // methods: {
  //   updateSearch(val) {
  //     this.enteredSearchTerm = val;
  //   },
  // },
  // watch: {
  //   enteredSearchTerm(val) {
  //     setTimeout(() => {
  //       if (val === this.enteredSearchTerm) {
  //         this.activeSearchTerm = val;
  //       }
  //     }, 300);
  //   },
  //   user() {
  //     this.enteredSearchTerm = "";
  //   },
  // },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
