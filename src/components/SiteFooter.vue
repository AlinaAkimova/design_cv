<script setup>
import SectionHeading from '@/components/SectionHeading.vue'
import BrandAsset from '@/components/BrandAsset.vue'

defineProps({
  name: {
    type: String,
    required: true
  },
  links: {
    type: Array,
    default: () => []
  },
  contacts: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <footer id="contact" class="site-footer">
    <div class="site-footer__brand">
      <p class="site-footer__name">{{ name }}</p>
      <a v-for="link in links" :key="link.label" class="site-footer__link" :href="link.href">
        {{ link.label }}
      </a>
    </div>
    <div class="site-footer__contact">
      <SectionHeading title=".contact_me" />
      <div class="site-footer__icons">
        <a v-for="item in contacts" :key="item.alt" :href="item.href" :aria-label="item.alt" target="_blank">
          <img
            :src="item.src"
            :alt="item.alt"
            :width="item.width"
            :height="item.height"
          />
        </a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  max-width: 1440px;
  min-height: 228px;
  padding: 40px var(--page-pad);
  background: var(--color-surface);
  border-radius: var(--radius-shell) var(--radius-shell) 0 0;
}

.site-footer__brand {
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: var(--color-text);
}

.site-footer__name,
.site-footer__link {
  margin: 0;
  font-family: var(--font-mono);
  line-height: normal;
}

.site-footer__name {
  font-size: 24px;
  font-weight: 700;
}

.site-footer__link {
  font-size: 20px;
  font-weight: 400;
}

.site-footer__link:hover {
  opacity: 0.7;
}

.site-footer__contact {
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 228px;
}

.site-footer__icons {
  display: flex;
  gap: 40px;
  align-items: flex-start;
}

@media (max-width: 700px) {
  .site-footer {
    flex-direction: column;
    gap: 40px;
  }
}
</style>
