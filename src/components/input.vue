<template>
  <input type="text" @keydown="handleKeydown" @keyup="handleKeyup">
</template>

<script>
export default {
  name: 'Input',
  methods: {
    handleKeydown(e) {
      console.log('keydown', e.target.selectionStart)
    },
    handleKeyup(e) {
      console.log('keyup', e.target.selectionStart)
    }
  }
}
</script>

<style>

</style>