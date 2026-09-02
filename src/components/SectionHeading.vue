<script setup>
defineProps({
  title: {
    type: String,
    required: true
  }
})
</script>

<template>
  <h2 class="section-heading">{{ title }}</h2>
</template>

<style scoped>
.section-heading {
  margin: 0;
  font-family: var(--font-mono);
  font-size: 24px;
  font-weight: 700;
  line-height: normal;
  color: var(--color-text);
}
</style>
