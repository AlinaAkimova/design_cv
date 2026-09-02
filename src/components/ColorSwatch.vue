<script setup>
defineProps({
  name: {
    type: String,
    required: true
  },
  hex: {
    type: String,
    required: true
  },
  color: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="color-swatch">
    <span class="color-swatch__chip" :style="{ background: color }" />
  </div>
</template>

<style scoped>
.color-swatch {
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 72px;
}

.color-swatch__chip {
  display: block;
  width: 70px;
  height: 70px;
  border-radius: 8px;
}

.color-swatch__name,
.color-swatch__hex {
  margin: 0;
  font-family: var(--font-sans);
  font-size: 14px;
  font-weight: 400;
  line-height: normal;
  color: var(--color-text);
}
</style>
