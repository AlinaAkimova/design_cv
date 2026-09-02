<script setup>
import OutlineChip from '@/components/OutlineChip.vue'

defineProps({
  index: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="hypothesis-row">
    <p class="hypothesis-row__index">{{ index }}</p>
    <OutlineChip wrap>
      <slot />
    </OutlineChip>
  </div>
</template>

<style scoped>
.hypothesis-row {
  display: flex;
  align-items: flex-start;
  gap: 24px;
}

.hypothesis-row__index {
  margin: 0;
  width: 40px;
  flex-shrink: 0;
  font-family: var(--font-mono);
  font-size: 18px;
  font-weight: 700;
  line-height: normal;
  color: #000;
}

.hypothesis-row :deep(.outline-chip) {
  max-width: 385px;
}
</style>
