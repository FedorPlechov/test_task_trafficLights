<template>
  <div>
    <div class="container">
      <img alt="logo" class="logo" src="../assets/traffic_lights.png"/>
      <Light :counter="counter" url-of-light="/red"/>
      <Light :counter="counter" url-of-light="/yellow"/>
      <Light :counter="counter" url-of-light="/green"/>
    </div>
    <ButtonStop @stop="stopInterval"/>
    <h1>{{ counter }} sec left</h1>
    <h1>Traffic lights</h1>
  </div>
</template>

<script>
import Light from "../components/Light";
import ButtonStop from "../components/ButtonStop";
export default {
  name: "TrafficLights",
  data() {
    return {
      counter: null,
      timerId: null
    }
  },
  components: {
    ButtonStop,Light
  },
  computed: {
    timer() {
      if (this.$route.path === '/red') return 10;
      if (this.$route.path === '/yellow') return 3;
      if (this.$route.path === '/green') return 15;
    },
    nextLight() {
      if (this.$route.path === '/red') return 'Yellow';
      if (this.$route.path === '/yellow') return 'Green';
      if (this.$route.path === '/green') return 'Red';
    },
    nextTimer() {
      if (this.$route.path === '/red') return 3;
      if (this.$route.path === '/yellow') return 15;
      if (this.$route.path === '/green') return 10;
    }
  },
  methods: {
    setCounterAndQuery(){
      if (this.$route.query.timer) {
        this.counter = this.$route.query.timer;
      } else {
        this.counter = this.timer;
        this.$router.push({query: {timer: this.timer}})
      }
    },
    setInterval() {
      const tick = () => {
        this.counter = this.counter - 1;
        this.$router.push({query: {timer: this.counter}})
        if (this.counter === 0) {
          this.$router.push({name: this.nextLight, query: {timer: this.nextTimer}})
          return;
        }
        this.timerId = setTimeout(tick, 1000);
      }
      this.timerId = setTimeout(tick, 1000);
    },
    stopInterval(){
      clearTimeout(this.timerId);
    }
  },
  created() {
    this.setCounterAndQuery()
  },
  mounted() {
    this.setInterval()
  }

}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
