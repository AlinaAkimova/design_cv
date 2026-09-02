<script setup>
defineProps({
  src: {
    type: String,
    required: true
  },
  alt: {
    type: String,
    default: ''
  },
  width: {
    type: Number,
    required: true
  },
  height: {
    type: Number,
    required: true
  }
})
</script>

<template>
  <span
    class="brand-asset"
  >
    <img :src="src" :alt="alt" width="100%" height="100%" />
  </span>
</template>

<style scoped>
.brand-asset {
  display: inline-flex;
  flex-shrink: 0;
  overflow: clip;
  width: 60px;
}

.brand-asset img {
  max-width: 100%;
  height: 100%;
  object-fit: contain;
}
</style>
