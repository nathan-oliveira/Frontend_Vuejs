<template>
  <main class="main">
    <slot></slot>
  </main>
</template>

<script>
export default {
  name: "Main"
}
</script>

<style scoped>
.main {
  z-index: 1;
}
</style>
