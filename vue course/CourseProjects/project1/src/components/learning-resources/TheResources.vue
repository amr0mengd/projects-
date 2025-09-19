<template>
  <div>
    <base-card>
      <base-button
        :mode="storedResButton"
        @click="setSelectedTab('stored-resources')"
      >
        Stored Resources
      </base-button>
      <base-button :mode="addResButton" @click="setSelectedTab('add-resource')">
        Add Resources</base-button
      >
    </base-card>
    <keep-alive>
      <component :is="selectedTab"></component>
    </keep-alive>
  </div>
</template>

<script>
import StoredResources from "./StoredResources.vue";
import AddResource from "./AddResource.vue";

export default {
  provide() {
    return {
      resources: this.storedResources,
      deleteRes: this.deleteRes,
      addResource: this.addResource,
    };
  },
  components: { StoredResources, AddResource },
  data() {
    return {
      selectedTab: "stored-resources",
      storedResources: [
        {
          id: "official-guide",
          title: "Official Guide",
          description: "The official Vue.js documentation",
          link: "https://vuejs.org",
        },
        {
          id: "google",
          title: "Google",
          description: "Learn to google...",
          link: "https://google.org",
        },
      ],
    };
  },
  computed: {
    storedResButton() {
      return this.selectedTab === "stored-resources" ? null : "flat";
    },
    addResButton() {
      return this.selectedTab === "add-resource" ? null : "flat";
    },
  },
  methods: {
    setSelectedTab(cmp) {
      this.selectedTab = cmp;
    },
    deleteRes(id) {
      const resIndex = this.storedResources.findIndex((res) => res.id === id);
      this.storedResources.splice(resIndex, 1);
    },
    addResource(title, description, url) {
      const newResource = {
        id: new Date().toISOString(),
        title: title,
        description: description,
        link: url,
      };
      this.storedResources.unshift(newResource);
      if (title === "" || description === "" || url === "") {
        this.selectedTab = "add-resource";
      } else {
        this.selectedTab = "stored-resources";
      }
    },
  },
};
</script>
