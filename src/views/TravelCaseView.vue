<script setup>
import CaseBackLink from '@/components/CaseBackLink.vue'
import SectionHeading from '@/components/SectionHeading.vue'
import FigmaActionLink from '@/components/FigmaActionLink.vue'
import OverviewField from '@/components/OverviewField.vue'
import PhoneMockup from '@/components/PhoneMockup.vue'
import UserFlowStep from '@/components/UserFlowStep.vue'
import ColorSwatch from '@/components/ColorSwatch.vue'
import GuidelinePanel from '@/components/GuidelinePanel.vue'
import { travelCase as page } from '@/data/travelCase'
</script>

<template>
  <div class="travel-case">
    <header class="travel-case__header">
      <CaseBackLink />
    </header>

    <main class="travel-case__main">
      <section class="travel-case__hero">
        <div class="travel-case__hero-media">
          <img
            class="travel-case__hero-left"
            :src="page.hero.left"
            alt="Экраны приложения: карта, поиск и детали места"
            width="709"
            height="527"
          />
          <img
            class="travel-case__hero-right"
            :src="page.hero.right"
            alt="Экран чеклиста путешествия"
            width="446"
            height="527"
          />
        </div>
        <p class="travel-case__tags">{{ page.tags }}</p>
      </section>

      <section class="travel-case__details">
        <div class="travel-case__task">
          <div class="travel-case__task-copy">
            <SectionHeading :title="page.task.title" />
            <p class="travel-case__lead">{{ page.task.text }}</p>
          </div>
          <FigmaActionLink
            :href="page.task.link.href"
            :label="page.task.link.label"
            :icon="page.figmaIcon"
          />
        </div>
        <div class="travel-case__overview">
          <SectionHeading :title="page.overview.title" />
          <div class="travel-case__overview-list">
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

      <div class="travel-case__collage">
        <img :src="page.collage" alt="Коллаж мест и маршрутов из приложения" width="1382" height="753" />
      </div>

      <section class="travel-case__block">
        <SectionHeading :title="page.context.title" />
        <div class="travel-case__prose">
          <p v-for="paragraph in page.context.paragraphs" :key="paragraph">{{ paragraph }}</p>
        </div>
      </section>

      <section class="travel-case__block">
        <SectionHeading :title="page.competitive.title" />
        <div class="travel-case__competitive">
          <div class="travel-case__competitive-copy">
            <p v-for="paragraph in page.competitive.intro" :key="paragraph">{{ paragraph }}</p>
            <p class="travel-case__subtitle">{{ page.competitive.noticeTitle }}</p>
            <ul>
              <li v-for="item in page.competitive.bullets" :key="item">{{ item }}</li>
            </ul>
          </div>
          <div class="travel-case__phones">
            <PhoneMockup
              v-for="(src, index) in page.competitive.phones"
              :key="src"
              :src="src"
              :alt="`Конкурентный экран ${index + 1}`"
            />
          </div>
        </div>
      </section>

      <section class="travel-case__block">
        <SectionHeading :title="page.problem.title" />
        <div class="travel-case__prose">
          <p v-for="paragraph in page.problem.paragraphs" :key="paragraph">{{ paragraph }}</p>
          <p class="travel-case__subtitle">{{ page.problem.hypothesisTitle }}</p>
          <p>{{ page.problem.hypothesis }}</p>
        </div>
      </section>

      <section class="travel-case__block">
        <SectionHeading :title="page.userFlow.title" />
        <div class="travel-case__flow">
          <template v-for="(step, index) in page.userFlow.steps" :key="step">
            <UserFlowStep :label="step" />
            <span v-if="index < page.userFlow.steps.length - 1" class="travel-case__arrow">→</span>
          </template>
        </div>
        <img
          class="travel-case__flow-image"
          :src="page.userFlow.image"
          alt="Последовательность экранов пользовательского сценария"
          width="1198"
          height="463"
        />
      </section>

      <section class="travel-case__block">
        <SectionHeading :title="page.guideline.title" />
        <div class="travel-case__prose travel-case__prose--small">
          <p v-for="paragraph in page.guideline.paragraphs" :key="paragraph">{{ paragraph }}</p>
        </div>
        <FigmaActionLink
          compact
          :href="page.guideline.link.href"
          :label="page.guideline.link.label"
          :icon="page.figmaIcon"
        />
        <GuidelinePanel>
          <p class="travel-case__panel-title">01. COLOR</p>
          <p class="travel-case__panel-note">
            Use color tokens instead of custom values. All colors are defined as variables.
          </p>
          <p class="travel-case__swatch-label">Brand</p>
          <div class="travel-case__swatches">
            <ColorSwatch v-for="swatch in page.guideline.colors.brand" :key="swatch.name" v-bind="swatch" />
          </div>
          <div class="travel-case__swatch-groups">
            <div>
              <p class="travel-case__swatch-label">Categories</p>
              <div class="travel-case__swatches">
                <ColorSwatch
                  v-for="swatch in page.guideline.colors.categories"
                  :key="swatch.name"
                  v-bind="swatch"
                />
              </div>
            </div>
            <div>
              <p class="travel-case__swatch-label">Background</p>
              <div class="travel-case__swatches">
                <ColorSwatch
                  v-for="swatch in page.guideline.colors.background"
                  :key="swatch.name"
                  v-bind="swatch"
                />
              </div>
            </div>
            <div>
              <p class="travel-case__swatch-label">Semantic</p>
              <div class="travel-case__swatches">
                <ColorSwatch
                  v-for="swatch in page.guideline.colors.semantic"
                  :key="swatch.name"
                  v-bind="swatch"
                />
              </div>
            </div>
          </div>
          <p class="travel-case__panel-title">02. TYPOGRAPHY</p>
          <p class="travel-case__panel-note">The app uses two fonts: Space Grotesk and Inter</p>
          <div class="travel-case__type-table">
            <div class="travel-case__type-col travel-case__type-col--sample">
              <p
                v-for="row in page.guideline.typeRows"
                :key="row.sample"
                :class="`travel-case__type-sample travel-case__type-sample--${row.sampleClass}`"
              >
                {{ row.sample }}
              </p>
            </div>
            <div class="travel-case__type-col">
              <p v-for="row in page.guideline.typeRows" :key="`style-${row.style}`">{{ row.style }}</p>
            </div>
            <div class="travel-case__type-col">
              <p v-for="row in page.guideline.typeRows" :key="`font-${row.style}`">{{ row.font }}</p>
            </div>
            <div class="travel-case__type-col">
              <p v-for="row in page.guideline.typeRows" :key="`size-${row.style}`">{{ row.size }}</p>
            </div>
            <div class="travel-case__type-col">
              <p v-for="row in page.guideline.typeRows" :key="`weight-${row.style}`">{{ row.weight }}</p>
            </div>
          </div>
        </GuidelinePanel>
        
      </section>

      <section class="travel-case__block">
        <SectionHeading :title="page.darkMode.title" />
        <p class="travel-case__body">{{ page.darkMode.text }}</p>
        <img
          class="travel-case__dark"
          :src="page.darkMode.image"
          alt="Экраны приложения в тёмной теме"
          width="966"
          height="1061"
        />
      </section>

      <section class="travel-case__block">
        <SectionHeading :title="page.prototype.title" />
        <p class="travel-case__body">{{ page.prototype.text }}</p>
        <FigmaActionLink
          compact
          :href="page.prototype.link.href"
          :label="page.prototype.link.label"
          :icon="page.figmaIcon"
        />
        <img
          class="travel-case__proto"
          :src="page.prototype.image"
          alt="Карта интерактивного прототипа"
          width="979"
          height="366"
        />
      </section>

      <section class="travel-case__block">
        <SectionHeading :title="page.reflection.title" />
        <div class="travel-case__prose">
          <p v-for="paragraph in page.reflection.paragraphs" :key="paragraph">{{ paragraph }}</p>
        </div>
      </section>
    </main>
  </div>
</template>

<style scoped>
.travel-case {
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100%;
  background: var(--color-page);
  color: var(--color-text);
}

.travel-case__header {
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 32px var(--page-pad);
}

.travel-case__main {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 100px;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 12px var(--page-pad) 150px;
}

.travel-case__hero,
.travel-case__details,
.travel-case__block {
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: min(100%, var(--content-width));
}

.travel-case__hero {
  gap: 68px;
}

.travel-case__hero-media {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 24px;
  width: 100%;
  height: 527px;
  overflow: clip;
}

.travel-case__hero-left {
  width: min(100%, 709px);
  height: 527px;
  object-fit: cover;
}

.travel-case__hero-right {
  width: min(100%, 446px);
  height: 527px;
  object-fit: cover;
}

.travel-case__tags {
  margin: 0;
  font-family: var(--font-mono);
  font-size: 18px;
  font-weight: 700;
  line-height: normal;
  color: var(--color-faint);
}

.travel-case__details {
  flex-direction: row;
  align-items: stretch;
  justify-content: space-between;
  gap: 40px;
}

.travel-case__task {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 40px;
  width: min(100%, 524px);
}

.travel-case__task-copy {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.travel-case__lead {
  margin: 0;
  font-family: var(--font-sans);
  font-size: 20px;
  font-weight: 400;
  line-height: normal;
  color: var(--color-text);
}

.travel-case__prose p,
.travel-case__subtitle {
  margin: 0;
  font-family: var(--font-sans);
  font-size: 18px;
  font-weight: 400;
  line-height: normal;
  color: var(--color-text);
}

.travel-case__overview {
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: min(100%, 552px);
}

.travel-case__overview-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: min(100%, 337px);
}

.travel-case__collage {
  width: 100%;
  height: 335px;
  overflow: clip;
  background: var(--color-surface);
}

.travel-case__collage img {
  width: 100%;
  height: 753px;
  margin-top: -209px;
  object-fit: cover;
}

.travel-case__prose,
.travel-case__competitive-copy {
  display: flex;
  flex-direction: column;
  gap: 1em;
  max-width: 944px;
}

.travel-case__competitive-copy {
  max-width: 673px;
  font-family: var(--font-sans);
  font-size: 18px;
  line-height: normal;
}

.travel-case__competitive-copy p,
.travel-case__competitive-copy ul {
  margin: 0;
}

.travel-case__competitive-copy ul {
  padding-left: 30px;
}

.travel-case__subtitle {
  font-weight: 600;
}

.travel-case__competitive {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 24px;
  width: 100%;
}

.travel-case__phones {
  display: flex;
  gap: 24px;
  width: min(100%, 488px);
}

.travel-case__flow {
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
}

.travel-case__flow .user-flow-step,
.travel-case__flow :deep(.user-flow-step) {
  flex: 1;
}

.travel-case__arrow {
  font-family: var(--font-mono);
  font-size: 20px;
  color: var(--color-muted);
}

.travel-case__flow-image,
.travel-case__dark,
.travel-case__proto {
  width: 100%;
  max-width: 1198px;
  height: auto;
}

.travel-case__dark {
  max-width: 966px;
}

.travel-case__proto {
  max-width: 979px;
}

.travel-case__prose--small p,
.travel-case__body {
  margin: 0;
  max-width: 944px;
  font-family: var(--font-sans);
  font-size: 18px;
  font-weight: 400;
  line-height: normal;
}

.travel-case__panel-title,
.travel-case__swatch-label {
  margin: 0;
  font-family: var(--font-mono);
  font-weight: 700;
  line-height: normal;
  color: var(--color-text);
}

.travel-case__panel-title {
  font-size: 20px;
}

.travel-case__panel-title--lg {
  font-size: 24px;
}

.travel-case__swatch-label {
  font-size: 16px;
  margin-bottom: 16px;
}

.travel-case__panel-note {
  margin: 0;
  max-width: 221px;
  font-family: var(--font-sans);
  font-size: 16px;
  line-height: normal;
}

.travel-case__swatches {
  display: flex;
  flex-wrap: wrap;
  gap: 16px 16px;
}

.travel-case__swatch-groups {
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
}

.travel-case__type-table {
  display: flex;
  gap: 24px;
  width: 100%;
  font-family: var(--font-sans);
  font-size: 16px;
  line-height: 1.6;
}

.travel-case__type-col {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 64px;
}

.travel-case__type-col p {
  margin: 0;
}

.travel-case__type-col--sample {
  width: min(100%, 313px);
}

.travel-case__type-sample--h1,
.travel-case__type-sample--h2 {
  font-family: 'Space Grotesk', var(--font-sans);
  font-weight: 700;
  line-height: normal;
}

.travel-case__type-sample--h1 {
  font-size: 32px;
}

.travel-case__type-sample--h2 {
  font-size: 25px;
}

.travel-case__type-sample--body {
  font-weight: 600;
  line-height: 1.6;
}

.travel-case__component-note {
  max-width: 575px;
  font-family: var(--font-sans);
  font-size: 16px;
  line-height: 1.6;
}

.travel-case__component-note p {
  margin: 0 0 8px;
}

.travel-case__component-heading {
  font-family: var(--font-mono);
  font-size: 18px;
  font-weight: 700;
}

.travel-case__component-usage {
  font-family: var(--font-mono);
  font-size: 18px;
  font-weight: 500;
}

@media (max-width: 1100px) {
  .travel-case__header,
  .travel-case__main {
    padding-left: 24px;
    padding-right: 24px;
  }

  .travel-case__details,
  .travel-case__competitive,
  .travel-case__hero-media,
  .travel-case__flow {
    flex-direction: column;
  }

  .travel-case__hero-media,
  .travel-case__hero-left,
  .travel-case__hero-right {
    height: auto;
  }

  .travel-case__flow .user-flow-step,
  .travel-case__flow :deep(.user-flow-step) {
    width: 100%;
  }

  .travel-case__arrow {
    transform: rotate(90deg);
  }
}
</style>
