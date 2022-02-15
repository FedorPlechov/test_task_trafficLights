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
      timerId: null,
      prevRoute: null
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
    nextRoute() {
      if ((this.$route.path === '/red') || (this.$route.path === '/green')) return {name: 'Yellow', query: {timer: 3}};
      if (this.$route.path === '/yellow' && this.prevRoute.path === '/red') return {name: 'Green', query: {timer: 15}};
      if (this.$route.path === '/yellow' && this.prevRoute.path === '/green') return {name: 'Red', query: {timer: 10}};
      if (this.$route.path === '/yellow') return {name: 'Green', query: {timer: 15}}
    },
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
          this.$router.push(this.nextRoute);
          return;
        }
        this.timerId = setTimeout(tick, 1000);
      }
      this.timerId = setTimeout(tick, 1000);
    },
    stopInterval() {
      clearTimeout(this.timerId);
    }
  },
  created() {
    this.setCounterAndQuery()
  },
  mounted() {
    this.setInterval()
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.prevRoute = from
    })
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
