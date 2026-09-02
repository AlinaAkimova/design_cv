<script setup>
defineProps({
  wrap: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <div class="outline-chip" :class="{ 'outline-chip--wrap': wrap }">
    <slot />
  </div>
</template>

<style scoped>
.outline-chip {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  border: 1px solid #d88c3a;
  border-radius: 20px;
  font-family: var(--font-sans);
  font-size: 18px;
  font-weight: 400;
  line-height: normal;
  color: var(--color-text);
  white-space: nowrap;
}

.outline-chip--wrap {
  white-space: normal;
  text-align: left;
}
</style>
