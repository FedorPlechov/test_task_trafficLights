<template>
  <div
      :class="classForLight"
      :style="Opacity"
      class="light">
  </div>
</template>

<script>
export default {
  name: "Light",
  props: ['urlOfLight', 'counter'],
  computed: {
    currentUrlOfPage() {
      return this.$route.path;
    },
    classForLight() {
      return {
        flash: this.counter < 3 && this.currentUrlOfPage === this.urlOfLight,
        red: this.urlOfLight === '/red',
        yellow: this.urlOfLight === '/yellow',
        green: this.urlOfLight === '/green'
      }
    },
    Opacity(){
      return {opacity: this.currentUrlOfPage===this.urlOfLight?'1' :''}
    }

  }
}
</script>

<style scoped>
.light {
  width: 40px;
  height: 40px;
  border-radius: 40px;
  opacity: 0.2;
}

.red {
  position: relative;
  background: rgb(255, 99, 71);
  top: -172px;
}

.yellow {
  position: relative;
  background: rgb(216, 250, 8);
  top: -160px;
}

.green {
  position: relative;
  background: rgb(60, 179, 113);
  top: -148px;
}

.flash {
  animation-duration: 0.2s;
  animation-name: flash;
  animation-iteration-count: infinite;
}

@keyframes flash {
  from {
    opacity: 1;
  }

  to {
    opacity: 0.2;
  }
}
</style>
