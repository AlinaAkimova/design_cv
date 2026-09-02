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
  <article class="timeline-item">
    <div class="timeline-item__row">
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
    </div>
    <span v-if="divided" class="timeline-item__divider" />
  </article>
</template>

<style scoped>
.timeline-item {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-bottom: 20px;
}

.timeline-item__row {
  display: flex;
  align-items: flex-start;
  gap: 28px;
  width: 100%;
}

.timeline-item__divider {
  display: block;
  margin-top: 20px;
  width: 100%;
  height: 1px;
  background-image: repeating-linear-gradient(to right, rgba(0, 0, 0, 0.3) 0 6px, transparent 6px 10px);
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
