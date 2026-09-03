<script setup>
defineProps({
  src: {
    type: String,
    required: true
  },
  alt: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <div class="phone-mockup">
    <img :src="src" :alt="alt" width="230" height="499" />
  </div>
</template>

<style scoped>
.phone-mockup {
  width: 230px;
  height: 499px;
  overflow: clip;
  border: 3px solid #8d8d8d;
  border-radius: 46px;
  flex-shrink: 0;
}

.phone-mockup img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media (max-width: 600px) {
  .phone-mockup {
    width: 50%;
  }
}
</style>
