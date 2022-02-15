<template>
<div>
  <button class="stop" @click="$emit('stop')">Stop</button>
</div>
</template>

<script>
export default {
  name: "ButtonStop"
}
</script>

<style scoped>
.stop {
  background: none;
  padding: 10px;
  border-radius: 10px;
  color: red;
  font-size: 1.2rem;
  cursor: pointer;
}
</style>
