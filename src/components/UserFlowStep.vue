<script setup>
defineProps({
  label: {
    type: String,
    required: true
  }
})
</script>

<template>
  <p class="user-flow-step">{{ label }}</p>
</template>

<style scoped>
.user-flow-step {
  display: flex;
  align-items: center;
  margin: 0;
  min-height: 106px;
  padding: 16px;
  border: 1px solid var(--color-border);
  border-radius: 20px;
  font-family: var(--font-sans);
  font-size: 18px;
  font-weight: 400;
  line-height: normal;
  color: var(--color-text);
}
</style>
