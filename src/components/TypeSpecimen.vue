<script setup>
defineProps({
  role: {
    type: String,
    required: true
  },
  fontName: {
    type: String,
    required: true
  },
  sampleFamily: {
    type: String,
    required: true
  },
  sampleWeight: {
    type: String,
    default: '400'
  }
})
</script>

<template>
  <div class="type-specimen">
    <div class="type-specimen__meta">
      <p class="type-specimen__role">{{ role }}</p>
      <p class="type-specimen__font" :style="{ fontFamily: sampleFamily }">{{ fontName }}</p>
    </div>
    <p
      class="type-specimen__sample"
      :style="{ fontFamily: sampleFamily, fontWeight: sampleWeight }"
    >
      Aa
    </p>
  </div>
</template>

<style scoped>
.type-specimen {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 24px;
  width: 310px;
  height: 230px;
  padding: 30px;
  background: #f6efdc;
  border-radius: 16px;
  color: #4a453e;
}

.type-specimen__meta {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
}

.type-specimen__role,
.type-specimen__font,
.type-specimen__sample {
  margin: 0;
}

.type-specimen__role {
  font-family: var(--font-sans);
  font-size: 18px;
  font-weight: 400;
  line-height: normal;
  color: #4a453e;
}

.type-specimen__font {
  font-size: 20px;
  font-weight: 500;
  line-height: normal;
  white-space: pre-line;
  text-align: right;
}

.type-specimen__sample {
  font-size: 96px;
  line-height: 1;
}
</style>
