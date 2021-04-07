<template>
  <div class="breadcrumb">
    <ol>
      <slot></slot>
    </ol>
  </div>
</template>

<script>
export default {
  name: "Breadcrumb",
};
</script>

<style scoped>
.breadcrumb {
  margin: 0 9px;
  margin-top: 1rem;
  margin-bottom: 1rem;
}

ol {
  display: flex;
  padding: 0;
  margin-top: 0;
}
</style>
