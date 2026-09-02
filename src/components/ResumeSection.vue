<script setup>
import SectionHeading from '@/components/SectionHeading.vue'

defineProps({
  id: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  wide: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <section :id="id" class="resume-section" :class="{ 'resume-section--wide': wide }">
    <SectionHeading :title="title" />
    <slot />
  </section>
</template>

<style scoped>
.resume-section {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--space-block);
  width: min(100%, var(--content-width));
  padding: 0 24px;
}

@media (min-width: 1440px) {
  .resume-section {
    padding: 0;
  }
}
</style>
