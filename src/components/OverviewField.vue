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
  <div class="overview-field">
    <div class="overview-field__row">
      <p class="overview-field__label">{{ label }}</p>
      <p class="overview-field__value">{{ value }}</p>
    </div>
    <span v-if="divided" class="overview-field__divider" />
  </div>
</template>

<style scoped>
.overview-field {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.overview-field__row {
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
}

.overview-field__divider {
  display: block;
  margin-top: 20px;
  width: 100%;
  height: 1px;
  background-image: repeating-linear-gradient(to right, rgba(0, 0, 0, 0.3) 0 6px, transparent 6px 10px);
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
