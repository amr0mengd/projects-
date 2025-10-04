<template>
  <base-card>
    <h2>Submitted Experiences</h2>
    <div>
      <base-button @click="loadExperiences"
        >Load Learning Experiences
      </base-button>
    </div>
    <p v-if="isLoading">Loading...</p>
    <p v-else-if="!isLoading && error">{{ error }}</p>
    <p v-else-if="!isLoading && (!results || results.length === 0)">
      No saved experiences. start adding some survey results to be saved
    </p>
    <ul v-else>
      <survey-result
        v-for="result in results"
        :key="result.id"
        :name="result.name"
        :rating="result.rating"
      ></survey-result>
    </ul>
  </base-card>
</template>

<script>
import SurveyResult from "./SurveyResult.vue";
export default {
  components: { SurveyResult },
  data() {
    return {
      results: [],
      isLoading: false,
      error: null,
    };
  },
  methods: {
    loadExperiences() {
      this.isLoading = true;
      fetch(
        "https://vue-http-demo-d30e3-default-rtdb.firebaseio.com/survey.json"
      )
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
        })
        .then((data) => {
          this.isLoading = false;
          const results = [];
          for (const id in data) {
            results.push({
              id: id,
              name: data[id].name,
              rating: data[id].rating,
            });
          }
          this.results = results;
        })
        .catch((error) => {
          console.log(error);
          this.isLoading = false;
          this.error =
            "Failed to fetch the data from server - please try again later";
        });
    },
  },
  mounted() {
    this.loadExperiences();
  },
};
</script>
