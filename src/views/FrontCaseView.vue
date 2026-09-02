<script setup>
import CaseBackLink from '@/components/CaseBackLink.vue'
import SectionHeading from '@/components/SectionHeading.vue'
import FigmaActionLink from '@/components/FigmaActionLink.vue'
import OverviewField from '@/components/OverviewField.vue'
import PhoneMockup from '@/components/PhoneMockup.vue'
import UserFlowStep from '@/components/UserFlowStep.vue'
import ColorSwatch from '@/components/ColorSwatch.vue'
import GuidelinePanel from '@/components/GuidelinePanel.vue'
import { frontCase as page } from '@/data/frontCase'
</script>

<template>
  <div class="front-case">
    <header class="front-case__header">
      <CaseBackLink />
    </header>

    <main class="front-case__main">
      <section class="front-case__hero">
        <div class="front-case__hero-media">
          <img
            class="front-case__hero-left"
            :src="page.hero.left"
            alt="Экраны приложения: обо мне"
            width="830"
            height="460"
          />
          <img
            class="front-case__hero-right"
            :src="page.hero.right"
            alt="Экран проектов"
            width="320"
            height="460"
          />
        </div>
        <p class="front-case__tags">{{ page.tags }}</p>
      </section>

      <section class="front-case__details">
        <div class="front-case__task">
          <div class="front-case__task-copy">
            <SectionHeading :title="page.task.title" />
            <p class="front-case__lead">{{ page.task.text }}</p>
          </div>
          <FigmaActionLink
            :href="page.task.link.href"
            :label="page.task.link.label"
            :icon="page.webIcon"
          />
        </div>
        <div class="front-case__overview">
          <SectionHeading :title="page.overview.title" />
          <div class="front-case__overview-list">
            <OverviewField
              v-for="field in page.overview.fields"
              :key="field.label"
              :label="field.label"
              :value="field.value"
              :divided="field.divided !== false"
            />
          </div>
        </div>
      </section>

      <section class="front-case__block">
        <SectionHeading :title="page.context.title" />
        <div class="front-case__prose">
          <p v-for="paragraph in page.context.paragraphs" :key="paragraph">{{ paragraph }}</p>
        </div>
      </section>

      <section class="front-case__block">
        <SectionHeading :title="page.prototype.title" />
        <div class="front-case__prose">
          <p v-for="paragraph in page.prototype.intro" :key="paragraph">{{ paragraph }}</p>
        </div>
        <FigmaActionLink
          compact
          :href="page.prototype.link.href"
          :label="page.prototype.link.label"
          :icon="page.gitIcon"
        />
      </section>

    </main>
  </div>
</template>

<style scoped>
.front-case {
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100%;
  background: var(--color-page);
  color: var(--color-text);
}

.front-case__header {
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 32px var(--page-pad);
}

.front-case__main {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 100px;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 12px var(--page-pad) 150px;
}

.front-case__hero,
.front-case__details,
.front-case__block {
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: min(100%, var(--content-width));
}

.front-case__hero {
  gap: 68px;
}

.front-case__hero-media {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 24px;
  width: 100%;
  height: 527px;
  overflow: clip;
}

.front-case__hero-left {
  //width: min(100%, 709px);
  height: 100%;
  object-fit: contain;
}

.front-case__hero-right {
  //width: min(100%, 446px);
  height: 100%;
  object-fit: contain;
}

.front-case__tags {
  margin: 0;
  font-family: var(--font-mono);
  font-size: 18px;
  font-weight: 700;
  line-height: normal;
  color: var(--color-faint);
}

.front-case__details {
  flex-direction: row;
  align-items: stretch;
  justify-content: space-between;
  gap: 40px;
}

.front-case__task {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 40px;
  width: min(100%, 524px);
}

.front-case__task-copy {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.front-case__lead {
  margin: 0;
  font-family: var(--font-sans);
  font-size: 20px;
  font-weight: 400;
  line-height: normal;
  color: var(--color-text);
}

.front-case__prose p,
.front-case__subtitle {
  margin: 0;
  font-family: var(--font-sans);
  font-size: 18px;
  font-weight: 400;
  line-height: normal;
  color: var(--color-text);
}

.front-case__overview {
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: min(100%, 552px);
}

.front-case__overview-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: min(100%, 337px);
}

.front-case__collage {
  width: 100%;
  height: 335px;
  overflow: clip;
  background: var(--color-surface);
}

.front-case__collage img {
  width: 100%;
  height: 753px;
  margin-top: -209px;
  object-fit: cover;
}

.front-case__prose,
.front-case__competitive-copy {
  display: flex;
  flex-direction: column;
  gap: 1em;
  max-width: 944px;
}

.front-case__competitive-copy {
  max-width: 673px;
  font-family: var(--font-sans);
  font-size: 18px;
  line-height: normal;
}

.front-case__competitive-copy p,
.front-case__competitive-copy ul {
  margin: 0;
}

.front-case__competitive-copy ul {
  padding-left: 30px;
}

.front-case__subtitle {
  font-weight: 600;
}

.front-case__competitive {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 24px;
  width: 100%;
}

.front-case__phones {
  display: flex;
  gap: 24px;
  width: min(100%, 488px);
}

.front-case__flow {
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
}

.front-case__flow .user-flow-step,
.front-case__flow :deep(.user-flow-step) {
  flex: 1;
}

.front-case__arrow {
  font-family: var(--font-mono);
  font-size: 20px;
  color: var(--color-muted);
}

.front-case__flow-image,
.front-case__dark,
.front-case__proto {
  width: 100%;
  max-width: 1198px;
  height: auto;
}

.front-case__dark {
  max-width: 966px;
}

.front-case__proto {
  max-width: 979px;
}

.front-case__prose--small p,
.front-case__body {
  margin: 0;
  max-width: 944px;
  font-family: var(--font-sans);
  font-size: 18px;
  font-weight: 400;
  line-height: normal;
}

.front-case__panel-title,
.front-case__swatch-label {
  margin: 0;
  font-family: var(--font-mono);
  font-weight: 700;
  line-height: normal;
  color: var(--color-text);
}

.front-case__panel-title {
  font-size: 20px;
}

.front-case__panel-title--lg {
  font-size: 24px;
}

.front-case__swatch-label {
  font-size: 16px;
  margin-bottom: 16px;
}

.front-case__panel-note {
  margin: 0;
  max-width: 221px;
  font-family: var(--font-sans);
  font-size: 16px;
  line-height: normal;
}

.front-case__swatches {
  display: flex;
  flex-wrap: wrap;
  gap: 16px 16px;
}

.front-case__swatch-groups {
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
}

.front-case__type-table {
  display: flex;
  gap: 24px;
  width: 100%;
  font-family: var(--font-sans);
  font-size: 16px;
  line-height: 1.6;
}

.front-case__type-col {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 64px;
}

.front-case__type-col p {
  margin: 0;
}

.front-case__type-col--sample {
  width: min(100%, 313px);
}

.front-case__type-sample--h1,
.front-case__type-sample--h2 {
  font-family: 'Space Grotesk', var(--font-sans);
  font-weight: 700;
  line-height: normal;
}

.front-case__type-sample--h1 {
  font-size: 32px;
}

.front-case__type-sample--h2 {
  font-size: 25px;
}

.front-case__type-sample--body {
  font-weight: 600;
  line-height: 1.6;
}

.front-case__component-note {
  max-width: 575px;
  font-family: var(--font-sans);
  font-size: 16px;
  line-height: 1.6;
}

.front-case__component-note p {
  margin: 0 0 8px;
}

.front-case__component-heading {
  font-family: var(--font-mono);
  font-size: 18px;
  font-weight: 700;
}

.front-case__component-usage {
  font-family: var(--font-mono);
  font-size: 18px;
  font-weight: 500;
}

@media (max-width: 1100px) {
  .front-case__header,
  .front-case__main {
    padding-left: 24px;
    padding-right: 24px;
  }

  .front-case__details,
  .front-case__competitive,
  .front-case__hero-media,
  .front-case__flow {
    flex-direction: column;
  }

  .front-case__hero-media,
  .front-case__hero-left,
  .front-case__hero-right {
    height: auto;
  }

  .front-case__flow .user-flow-step,
  .front-case__flow :deep(.user-flow-step) {
    width: 100%;
  }

  .front-case__arrow {
    transform: rotate(90deg);
  }
}
</style>
