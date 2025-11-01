export default {
  async registerCoach(context, payload) {
    const userId = context.rootGetters.userId;
    const coachData = {
      firstName: payload.first,
      lastName: payload.last,
      description: payload.desc,
      hourlyRate: payload.rate,
      areas: payload.areas,
    };
    const response = await fetch(
      `https://vue-http-demo-b6bc0-default-rtdb.firebaseio.com/coaches/${userId}.json`,
      {
        method: "PUT",
        body: JSON.stringify(coachData),
      }
    );
    // const responseData = await response.json();
    if (!response.ok) {
      //error....
    }
    context.commit("registerCoach", coachData);
  },
  async loadCoaches(context, payload) {
    const response = await fetch(
      `https://vue-http-demo-b6bc0-default-rtdb.firebaseio.com/coaches.json`
    );
    const responseData = await response.json();
    if (!response.ok) {
      //....
    }

    const coaches = [];
    for (const key in responseData){
      
    }
  },
};
