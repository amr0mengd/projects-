<template>
  <section>
    <base-card>
      <h2>How was your learning experience?</h2>
      <form @submit.prevent="submitSurvey">
        <div class="form-control">
          <label for="name">Your Name</label>
          <input type="text" id="name" name="name" v-model.trim="enteredName" />
        </div>
        <h3>my learning experience was ...</h3>
        <div class="form-control">
          <input
            type="radio"
            value="great"
            name="rating"
            id="rating-great"
            v-model="chosenRating"
          />
          <label for="rating-great">Great</label>
        </div>
        <div class="form-control">
          <input
            type="radio"
            value="average"
            name="rating"
            id="rating-average"
            v-model="chosenRating"
          />
          <label for="rating-average">Average</label>
        </div>
        <div class="form-control">
          <input
            type="radio"
            value="poor"
            name="rating"
            id="rating-poor"
            v-model="chosenRating"
          />
          <label for="rating-poor">Poor</label>
        </div>
        <div>
          <p v-if="invalidInput">one of the inputs is invalid pls try again</p>
          <p v-if="error">{{ error }}</p>
        </div>
        <base-button>submit</base-button>
      </form>
    </base-card>
  </section>
</template>

<script>
export default {
  data() {
    return {
      enteredName: "",
      chosenRating: null,
      invalidInput: false,
      error: null,
    };
  },
  methods: {
    submitSurvey() {
      if (this.enteredName === "" || !this.chosenRating) {
        this.invalidInput = true;
        return;
      }
      this.invalidInput = false;
      this.error = null;

      fetch(
        "https://vue-http-demo-d30e3-default-rtdb.firebaseio.com/survey.json",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: this.enteredName,
            rating: this.chosenRating,
          }),
        }
      )
        .then((response) => {
          if (response.ok) {
            //....
          } else {
            throw new Error("could not save data!");
          }
        })
        .catch((error) => {
          this.error = error.message;
        });

      this.enteredName = "";
      this.chosenRating = null;
    },
  },
};
</script>

<style scoped>
.form-control {
  margin: 0.5rem 0;
}

input[type="text"] {
  display: block;
  width: 20rem;
  margin-top: 0.5rem;
}
</style>
