<script setup>
defineProps({
  href: {
    type: String,
    default: '#'
  }
})
</script>

<template>
  <a class="text-link" :href="href" target="_blank">
    <slot />
  </a>
</template>

<style scoped>
.text-link {
  font-family: var(--font-mono);
  font-size: 18px;
  font-weight: 700;
  line-height: normal;
  color: var(--color-text);
}

.text-link:hover {
  opacity: 0.7;
}
</style>
