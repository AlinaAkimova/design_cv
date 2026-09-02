<script setup>
import BrandAsset from '@/components/BrandAsset.vue'

defineProps({
  logo: {
    type: String,
    required: true
  },
  logoAlt: {
    type: String,
    default: ''
  },
  logoWidth: {
    type: Number,
    required: true
  },
  logoHeight: {
    type: Number,
    required: true
  },
  dates: {
    type: String,
    required: true
  },
  title: {
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
  <article class="timeline-item" :class="{ 'timeline-item--divided': divided }">
    <BrandAsset
      :src="logo"
      :alt="logoAlt"
      :width="logoWidth"
      :height="logoHeight"
    />
    <div class="timeline-item__text">
      <p class="timeline-item__dates">{{ dates }}</p>
      <p class="timeline-item__title">{{ title }}</p>
    </div>
  </article>
</template>

<style scoped>
.timeline-item {
  display: flex;
  align-items: flex-start;
  gap: 28px;
  width: 100%;
  padding-bottom: 20px;
}

.timeline-item--divided {
  border-bottom: 1px dashed var(--color-muted);
}

.timeline-item__text {
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 16px;
  min-width: 0;
}

.timeline-item__dates,
.timeline-item__title {
  margin: 0;
  font-size: 20px;
  line-height: normal;
}

.timeline-item__dates {
  font-family: var(--font-mono);
  font-weight: 300;
  color: var(--color-muted);
}

.timeline-item__title {
  font-family: var(--font-sans);
  font-weight: 400;
  color: var(--color-text);
}
</style>
