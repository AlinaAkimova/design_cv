<script setup>
defineProps({
  name: {
    type: String,
    required: true
  },
  hex: {
    type: String,
    default: ''
  },
  color: {
    type: String,
    required: true
  },
  labeled: {
    type: Boolean,
    default: false
  },
  square: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <div class="color-swatch" :class="{ 'color-swatch--labeled': labeled, 'color-swatch--square': square }">
    <span class="color-swatch__chip" :style="{ background: color }" />
    <p v-if="labeled" class="color-swatch__name">{{ name }}</p>
  </div>
</template>

<style scoped>
.color-swatch {
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 72px;
}

.color-swatch--labeled {
  gap: 24px;
  width: auto;
  min-width: 70px;
}

.color-swatch--square .color-swatch__chip {
  border-radius: 0;
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
