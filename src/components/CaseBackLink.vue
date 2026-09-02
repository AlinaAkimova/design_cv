<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <RouterLink class="case-back-link" to="/">← Назад</RouterLink>
</template>

<style scoped>
.case-back-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 170px;
  padding: 16px;
  border: 1px solid var(--color-border);
  border-radius: 12px;
  font-family: var(--font-mono);
  font-size: 18px;
  font-weight: 700;
  line-height: normal;
  color: var(--color-text);
}

.case-back-link:hover {
  opacity: 0.7;
}
</style>
