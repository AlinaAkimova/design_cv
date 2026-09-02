<script setup>
defineProps({
  label: {
    type: String,
    required: true
  }
})
</script>

<template>
  <span class="skill-tag">{{ label }}</span>
</template>

<style scoped>
.skill-tag {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  border: 1px solid var(--color-border);
  border-radius: 20px;
  font-family: var(--font-sans);
  font-size: 20px;
  font-weight: 400;
  line-height: normal;
  color: var(--color-text);
  white-space: nowrap;
}
</style>
