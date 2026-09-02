<script setup>
</script>

<template>
  <header class="site-header">
    <a
      class="site-header__action"
      :href="`${import.meta.env.BASE_URL}Cv.Akimova-design.pdf`"
      target="_blank"
      rel="noopener noreferrer"
    >
      Смотреть резюме
    </a>

    <a href="mailto:linakim107@gmail.com" class="site-header__action">Связаться</a>
   
  </header>
</template>

<style scoped>
.site-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  padding: 32px 0;
  font-family: var(--font-mono);
  font-size: 18px;
  font-weight: 700;
  line-height: normal;
  color: var(--color-text);
}

.site-header__action {
  background: none;
  border: none;
  padding: 0;
  font: inherit;
  color: inherit;
  cursor: pointer;
}

.site-header__action:hover {
  opacity: 0.7;
}
</style>
