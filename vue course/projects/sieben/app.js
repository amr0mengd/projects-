const app = Vue.createApp({
  data() {
    return {
      monsterHealth: 100,
      playerHealth: 100,
    };
  },
  methods: {
    attackMonster() {
      const damage = randomValue(12, 5);
      this.monsterHealth -= damage;
      // you can call methods like data with this
      this.attackPlayer();
    },
    attackPlayer() {
      const damage = randomValue(15, 8);
      this.playerHealth -= damage;
    },
  },
});

app.mount("#game");

function randomValue(max, min) {
  return Math.floor(Math.random() * (max - min) + min);
}
