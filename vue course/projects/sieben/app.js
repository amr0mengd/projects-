const app = Vue.createApp({
  data() {
    return {
      monsterHealth: 100,
      playerHealth: 100,
      round: 0,
      winner: null,
      log: [],
    };
  },
  computed: {
    monsterBarStyle() {
      if (this.winner && this.winner === "player") {
        return { width: "0%" };
      } else if (this.winner && this.winner === "draw") {
        return { width: "0%" };
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
    startTheGame() {
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.round = 0;
      this.winner = null;
      this.log = [];
    },
    /*every control method has an if (!this.winner) i did it before the course to prevent the user 
from using the controls after ending the game but in the course we hide the controls after the game 
so iam leaving it for me and iam hiding the controls as in the project*/
    attackMonster() {
      if (!this.winner) {
        this.round++;
        const damage = randomValue(12, 5);
        this.monsterHealth -= damage;
        // you can call methods like data with this
        this.attackPlayer();
        this.addLog("player", "damages monster for", `${damage}HP`);
      }
    },
    specialAttack() {
      if (!this.winner) {
        this.round++;
        const damage = randomValue(20, 10);
        this.monsterHealth -= damage;
        this.attackPlayer();
        this.addLog("player", "damages the monster for", `${damage}HP`);
      }
    },
    attackPlayer() {
      const damage = randomValue(15, 8);
      this.playerHealth -= damage;
      this.addLog("monster", "damages player for", `${damage}HP`);
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
        this.addLog("player", "heals himself for", `${heal}HP`);
      }
    },
    surrender() {
      if (!this.winner) {
        this.winner = "monster";
      }
    },
    addLog(who, what, value) {
      this.log.unshift({
        By: who,
        action: what,
        value: value,
      });
    },
  },
});

app.mount("#game");

function randomValue(max, min) {
  return Math.floor(Math.random() * (max - min) + min);
}
