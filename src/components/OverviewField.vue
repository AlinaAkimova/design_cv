<script setup>
defineProps({
  label: {
    type: String,
    required: true
  },
  value: {
    type: String,
    required: true
  },
  divided: {
    type: Boolean,
    default: true
  }
})
</script>

<template>
  <div class="overview-field" :class="{ 'overview-field--divided': divided }">
    <p class="overview-field__label">{{ label }}</p>
    <p class="overview-field__value">{{ value }}</p>
  </div>
</template>

<style scoped>
.overview-field {
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
}

.overview-field--divided {
  padding-bottom: 20px;
  border-bottom: 1px dashed var(--color-muted);
}

.overview-field__label,
.overview-field__value {
  margin: 0;
  font-size: 20px;
  line-height: normal;
}

.overview-field__label {
  font-family: var(--font-mono);
  font-weight: 300;
  color: var(--color-muted);
}

.overview-field__value {
  font-family: var(--font-sans);
  font-weight: 400;
  color: var(--color-text);
}
</style>
