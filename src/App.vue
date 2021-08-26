<template>
  <div id="app">
    <c-input></c-input>
  </div>
</template>

<script>
import Input from './components/input.vue'

export default {
  name: 'App',
  components: {
    'c-input': Input
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
