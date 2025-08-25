const app = Vue.createApp({
  data() {
    return {
      monsterHealth: 100,
      playerHealth: 100,
      round: 0,
      winner: null,
    };
  },
  computed: {
    monsterBarStyle() {
      if (this.winner && this.winner === "player") {
        return { width: 0 + "%" };
      } else if (this.winner && this.winner === "draw") {
        return { width: 0 + "%" };
      } else {
        return { width: this.monsterHealth + "%" };
      }
    },
    playerBarStyle() {
      if (this.winner && this.winner === "monster") {
        return { width: 0 + "%" };
      } else if (this.winner && this.winner === "draw") {
        return { width: 0 + "%" };
      } else {
        return { width: this.playerHealth + "%" };
      }
    },
  },
  watch: {
    monsterHealth(value) {
      if (value <= 0 && this.playerHealth <= 0) {
        this.winner = "draw";
      } else if (value <= 0) {
        this.winner = "player";
      }
    },
    playerHealth(value) {
      if (value <= 0 && this.monsterHealth <= 0) {
        this.winner = "draw";
      } else if (value <= 0) {
        this.winner = "monster";
      }
    },
  },
  methods: {
    attackMonster() {
      if (!this.winner) {
        this.round++;
        const damage = randomValue(12, 5);
        this.monsterHealth -= damage;
        // you can call methods like data with this
        this.attackPlayer();
      }
    },
    specialAttack() {
      if (!this.winner) {
        this.round++;
        const damage = randomValue(20, 10);
        this.monsterHealth -= damage;
        this.attackPlayer();
      }
    },
    attackPlayer() {
      const damage = randomValue(15, 8);
      this.playerHealth -= damage;
    },
    Heal() {
      if (!this.winner) {
        this.round++;
        const heal = randomValue(20, 8);
        if (this.playerHealth + heal > 100) {
          this.playerHealth = 100;
        } else {
          this.playerHealth += heal;
        }
        this.attackPlayer();
      }
    },
    surrender() {
      this.winner = "monster"
    },
  },
});

app.mount("#game");

function randomValue(max, min) {
  return Math.floor(Math.random() * (max - min) + min);
}
