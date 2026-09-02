<script setup>
import { computed } from 'vue'
import TextLink from '@/components/TextLink.vue'
import CollageMedia from '@/components/CollageMedia.vue'

const props = defineProps({
  index: {
    type: String,
    required: true
  },
  tags: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  href: {
    type: String,
    default: '#'
  },
  image: {
    type: String,
    default: ''
  },
  imageHeight: {
    type: Number,
    default: 432
  },
  description: {
    type: String,
    default: ''
  },
  bullets: {
    type: Array,
    default: () => []
  },
  collage: {
    type: Object,
    default: null
  }
})

const isInternal = computed(() => props.href.startsWith('/'))
</script>

<template>
  <component
    :is="isInternal ? 'RouterLink' : 'article'"
    class="project-card"
    v-bind="isInternal ? { to: href } : {}"
  >
    <div class="project-card__meta">
      <p class="project-card__index">/{{ index }}</p>
      <p class="project-card__tags">{{ tags }}</p>
    </div>

    <CollageMedia
      v-if="collage"
      :background="collage.background"
      :front="collage.front"
      :back="collage.back"
    />
    <div
      v-else
      class="project-card__image"
      :style="{ height: `${imageHeight}px` }"
    >
      <img :src="image" :alt="title" width="100%" height="100%" />
    </div>

    <div class="project-card__copy">
      <h3 class="project-card__title">{{ title }}</h3>
      <ul v-if="bullets.length" class="project-card__bullets">
        <li v-for="item in bullets" :key="item">{{ item }}</li>
      </ul>
    </div>

    <TextLink v-if="!isInternal" :href="href">посмотреть проект →</TextLink>
    <span v-else class="project-card__cta">посмотреть проект →</span>
  </component>
</template>

<style scoped>
.project-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  width: min(100%, 730px);
  color: inherit;
  text-decoration: none;
}

a.project-card {
  cursor: pointer;
}

.project-card__meta {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  font-family: var(--font-mono);
  font-size: 18px;
  font-weight: 700;
  line-height: normal;
}

.project-card__index,
.project-card__tags,
.project-card__title,
.project-card__description {
  margin: 0;
}

.project-card__index {
  color: var(--color-text);
  white-space: nowrap;
}

.project-card__tags {
  max-width: 320px;
  color: var(--color-meta);
}

.project-card__image {
  width: 100%;
  overflow: clip;
}

.project-card__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.project-card__copy {
  width: 100%;
}

.project-card__title {
  font-family: var(--font-sans);
  font-size: 24px;
  font-weight: 400;
  line-height: normal;
  color: var(--color-text);
}

.project-card__description {
  font-family: var(--font-sans);
  font-size: 18px;
  line-height: normal;
  color: var(--color-muted);
}

.project-card__bullets {
  padding-left: 1.5em;
  margin-top: 24px;
  font-family: var(--font-sans);
  font-size: 18px;
  line-height: normal;
  color: var(--color-muted);
}

.project-card :deep(.text-link),
.project-card__cta {
  align-self: stretch;
  font-family: var(--font-mono);
  font-size: 18px;
  font-weight: 700;
  line-height: normal;
  color: var(--color-text);
}

.project-card:hover .project-card__cta {
  opacity: 0.7;
}
</style>
