<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  items: {
    type: Array,
    default: () => []
  },
  text: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <div class="detail-list">
    <p class="detail-list__title">{{ title }}</p>
    <ul v-if="items.length" class="detail-list__items">
      <li v-for="item in items" :key="item">{{ item }}</li>
    </ul>
    <p v-if="text" class="detail-list__text">{{ text }}</p>
    <slot />
  </div>
</template>

<style scoped>
.detail-list {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.detail-list__title {
  margin: 0;
  font-family: var(--font-mono);
  font-size: 20px;
  font-weight: 700;
  line-height: normal;
}

.detail-list__items {
  padding-left: 1.5em;
  font-family: var(--font-sans);
  font-size: 18px;
  line-height: normal;
  color: var(--color-text);
}

.detail-list__text {
  margin: 0;
  font-family: var(--font-sans);
  font-size: 18px;
  line-height: normal;
}
</style>
