<script setup>
import BrandAsset from '@/components/BrandAsset.vue'

defineProps({
  href: {
    type: String,
    required: true
  },
  label: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: true
  },
  compact: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <a class="figma-action-link" :class="{ 'figma-action-link--compact': compact }" :href="href" target="_blank" rel="noreferrer">
    <img :src="icon" :alt="alt" width="20px" height="25px" />
    <span>{{ label }}</span>
  </a>
</template>

<style scoped>
.figma-action-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: fit-content;
  padding: 16px 24px;
  background: #eaeaea;
  border: 1px solid var(--color-border);
  border-radius: 12px;
  font-family: var(--font-mono);
  font-size: 20px;
  font-weight: 700;
  line-height: normal;
  color: var(--color-text);
}

.figma-action-link--compact {
  padding: 16px 24px;
  font-size: 18px;
}

.figma-action-link:hover {
  opacity: 0.8;
}
</style>
