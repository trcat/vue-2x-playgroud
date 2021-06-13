<template>
  <h2>
    <slot>this is second title</slot>
  </h2>
</template>
<script>
export default {
  name: "TitleSlot",
  updated() {
    alert('title slot component updated!')
  }
}
</script>