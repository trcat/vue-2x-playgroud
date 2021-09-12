<template>
  <div id="app">
    <h1>{{ count }}</h1>
    <button @click="count += 1">click add count</button>
    <title-slot>
        this is second title（by slot）
    </title-slot>
  </div>
</template>

<script>
import TitleSlot from "./components/title-slot.vue"

export default {
  name: 'App',
  components: {
    TitleSlot
  },
  data() {
    return {
      count: 0
    }
  },
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
