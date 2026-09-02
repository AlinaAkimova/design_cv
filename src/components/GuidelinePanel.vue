<script setup>
</script>

<template>
  <div class="guideline-panel">
    <slot />
  </div>
</template>

<style scoped>
.guideline-panel {
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: min(100%, 892px);
  padding: 40px;
  background: #eaeaea;
  border-radius: 24px;
}
</style>
