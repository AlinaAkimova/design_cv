<script setup>
import quoteLeft from '@/assets/icons/quote-left.svg'
import quoteRight from '@/assets/icons/quote-right.svg'
</script>

<template>
  <blockquote class="quote-block">
    <img class="quote-block__mark" :src="quoteLeft" alt="" width="24" height="24" />
    <div class="quote-block__text">
      <slot />
    </div>
    <img class="quote-block__mark quote-block__mark--end" :src="quoteRight" alt="" width="24" height="24" />
  </blockquote>
</template>

<style scoped>
.quote-block {
  display: flex;
  align-items: stretch;
  justify-content: center;
  gap: 10px;
  margin: 0;
  padding: 20px;
}

.quote-block__mark {
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  object-fit: contain;
}

.quote-block__mark--end {
  align-self: flex-end;
}

.quote-block__text {
  font-family: var(--font-sans);
  font-size: 18px;
  font-weight: 300;
  line-height: normal;
  color: #000;
}

.quote-block__text :deep(p) {
  margin: 0;
}

.quote-block__text :deep(ul) {
  margin: 0;
  padding-left: 27px;
}
</style>
