<script setup>
defineProps({
  photo: {
    type: String,
    required: true
  },
  greeting: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  bio: {
    type: Array,
    required: true
  },
  tags: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="hero-section">
    <p class="hero-section__greeting">{{ greeting }}</p>
    <img class="hero-section__photo" :src="photo" alt="Алина" width="352" height="439" />
    <p class="hero-section__name">{{ name }}</p>
    <p class="hero-section__bio">
      {{ bio[0] }}<br />
      {{ bio[1] }}<br />
      {{ bio[2] }}
    </p>
    <p class="hero-section__tags">{{ tags }}</p>
  </div>
</template>

<style scoped>
.hero-section {
  position: relative;
  width: 100%;
  max-width: 1200px;
  min-height: 682px;
}

.hero-section__greeting,
.hero-section__name,
.hero-section__bio,
.hero-section__tags {
  margin: 0;
  color: var(--color-text);
}

.hero-section__greeting {
  position: absolute;
  top: 0;
  left: 0;
  width: 210px;
  font-family: var(--font-mono);
  font-size: 36px;
  font-weight: 400;
  z-index: 2;
}

.hero-section__photo {
  position: absolute;
  top: 0;
  left: 87px;
  width: 352px;
  height: 439px;
  object-fit: cover;
}

.hero-section__name {
  position: absolute;
  top: 373px;
  left: 404px;
  font-family: var(--font-mono);
  font-size: 36px;
  font-weight: 400;
}

.hero-section__bio {
  position: absolute;
  top: 323px;
  left: 870px;
  width: 330px;
  font-family: var(--font-sans);
  font-size: 24px;
  font-weight: 400;
  line-height: normal;
}

.hero-section__tags {
  position: absolute;
  top: 539px;
  left: 0;
  font-family: var(--font-mono);
  font-size: 18px;
  font-weight: 700;
  color: var(--color-faint);
}

@media (max-width: 1100px) {
  .hero-section {
    display: flex;
    flex-direction: column;
    gap: 24px;
    min-height: 0;
    padding-bottom: 40px;
  }

  .hero-section__greeting,
  .hero-section__photo,
  .hero-section__name,
  .hero-section__bio,
  .hero-section__tags {
    position: static;
    width: auto;
    max-width: 100%;
  }

  .hero-section__photo {
    height: auto;
  }
}
</style>
