<script setup>
import CaseBackLink from '@/components/CaseBackLink.vue'
import SectionHeading from '@/components/SectionHeading.vue'
import FigmaActionLink from '@/components/FigmaActionLink.vue'
import OverviewField from '@/components/OverviewField.vue'
import ColorSwatch from '@/components/ColorSwatch.vue'
import TypeSpecimen from '@/components/TypeSpecimen.vue'
import OutlineChip from '@/components/OutlineChip.vue'
import QuoteBlock from '@/components/QuoteBlock.vue'
import HypothesisRow from '@/components/HypothesisRow.vue'
import { bakeryCase as page } from '@/data/bakeryCase'
</script>

<template>
  <div class="bakery-case">
    <header class="bakery-case__header">
      <CaseBackLink />
    </header>

    <main class="bakery-case__main">
      <section class="bakery-case__hero">
        <div class="bakery-case__hero-media">
          <img
            class="bakery-case__hero-left"
            :src="page.hero.left"
            alt="Десктопные экраны сайта пекарни"
            width="830"
            height="461"
          />
          <img
            class="bakery-case__hero-right"
            :src="page.hero.right"
            alt="Мобильные экраны сайта пекарни"
            width="308"
            height="461"
          />
        </div>
        <p class="bakery-case__tags">{{ page.tags }}</p>
      </section>

      <section class="bakery-case__details">
        <div class="bakery-case__task">
          <div class="bakery-case__task-copy">
            <SectionHeading :title="page.task.title" />
            <p class="bakery-case__lead">{{ page.task.text }}</p>
          </div>
          <FigmaActionLink :href="page.task.link.href" :label="page.task.link.label" :icon="page.figmaIcon" />
        </div>
        <div class="bakery-case__overview">
          <SectionHeading :title="page.overview.title" />
          <div class="bakery-case__overview-list">
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

      <div class="bakery-case__collage">
        <img :src="page.collage" alt="Коллаж выпечки и интерьера пекарни" width="1209" height="800" />
      </div>

      <section class="bakery-case__summary">
        <div class="bakery-case__summary-col bakery-case__summary-col--wide">
          <SectionHeading :title="page.context.title" />
          <div class="bakery-case__prose">
            <p v-for="paragraph in page.context.paragraphs" :key="paragraph">{{ paragraph }}</p>
          </div>
        </div>
        <div class="bakery-case__summary-col bakery-case__summary-col--narrow">
          <SectionHeading :title="page.competitive.title" />
          <p class="bakery-case__body">{{ page.competitive.text }}</p>
        </div>
      </section>

      <section class="bakery-case__group">
        <h2 class="bakery-case__group-title">Design/</h2>

        <div class="bakery-case__block">
          <SectionHeading :title="page.uiKit.title" />
          <div class="bakery-case__prose bakery-case__prose--small">
            <p v-for="paragraph in page.uiKit.paragraphs" :key="paragraph">{{ paragraph }}</p>
          </div>
          <div class="bakery-case__kit">
            <div class="bakery-case__swatches">
              <ColorSwatch
                v-for="(swatch, index) in page.uiKit.lightColors"
                :key="`light-${swatch.name}-${index}`"
                :name="swatch.name"
                :color="swatch.color"
                labeled
                square
              />
            </div>
            <div class="bakery-case__swatches">
              <ColorSwatch
                v-for="(swatch, index) in page.uiKit.darkColors"
                :key="`dark-${swatch.name}-${index}`"
                :name="swatch.name"
                :color="swatch.color"
                labeled
                square
              />
            </div>
            <div class="bakery-case__type">
              <TypeSpecimen
                role="Body"
                font-name="Manrope"
                sample-family="Manrope, var(--font-sans)"
                sample-weight="400"
              />
              <TypeSpecimen
                role="Headline"
                :font-name="'Cormorant\nGaramond'"
                sample-family="'Cormorant Garamond', serif"
                sample-weight="700"
              />
            </div>
          </div>
        </div>

        <div class="bakery-case__block">
          <SectionHeading :title="page.responsive.title" />
          <div class="bakery-case__prose bakery-case__prose--small">
            <p v-for="paragraph in page.responsive.paragraphs" :key="paragraph">{{ paragraph }}</p>
          </div>
          <div class="bakery-case__responsive">
            <img
              class="bakery-case__responsive-wide"
              :src="page.responsive.desktop1"
              alt="Десктопная версия каталога"
              width="760"
              height="587"
            />
            <div class="bakery-case__crop bakery-case__crop--left">
              <img :src="page.responsive.split" alt="Мобильная версия каталога" />
            </div>
            <div class="bakery-case__crop bakery-case__crop--right">
              <img :src="page.responsive.split" alt="Мобильная версия оформления заказа" />
            </div>
            <img
              class="bakery-case__responsive-wide"
              :src="page.responsive.desktop2"
              alt="Десктопная версия оформления заказа"
              width="767"
              height="592"
            />
          </div>
        </div>

        <div class="bakery-case__block">
          <SectionHeading :title="page.darkMode.title" />
          <p class="bakery-case__body">{{ page.darkMode.text }}</p>
          <img
            class="bakery-case__dark"
            :src="page.darkMode.image"
            alt="Интерфейс пекарни в тёмной теме"
            width="1195"
            height="620"
          />
        </div>
      </section>

      <section class="bakery-case__group">
        <h2 class="bakery-case__group-title bakery-case__group-title--md">Research/</h2>
        <FigmaActionLink
          compact
          :href="page.researchLink.href"
          :label="page.researchLink.label"
          :icon="page.figmaIcon"
        />

        <div class="bakery-case__block">
          <SectionHeading :title="page.research01.title" />
          <div class="bakery-case__research">
            <p class="bakery-case__question">{{ page.research01.question }}</p>
            <p class="bakery-case__body">{{ page.research01.intro }}</p>
            <div class="bakery-case__tones">
              <OutlineChip v-for="tone in page.research01.tones" :key="tone">{{ tone }}</OutlineChip>
            </div>
            <div class="bakery-case__quotes">
              <QuoteBlock v-for="quote in page.research01.quotes" :key="quote">
                <p>{{ quote }}</p>
              </QuoteBlock>
            </div>
            <p class="bakery-case__body">{{ page.research01.conclusion }}</p>
          </div>
        </div>

        <div class="bakery-case__block">
          <SectionHeading :title="page.research02.title" />
          <div class="bakery-case__research">
            <p class="bakery-case__question">{{ page.research02.question }}</p>
            <p class="bakery-case__body">{{ page.research02.intro }}</p>
            <HypothesisRow
              v-for="item in page.research02.hypotheses"
              :key="item.index"
              :index="item.index"
            >
              {{ item.text }}
            </HypothesisRow>
            <p class="bakery-case__body">{{ page.research02.afterFirstTwo }}</p>
            <HypothesisRow :index="page.research02.third.index">
              {{ page.research02.third.text }}
            </HypothesisRow>
            <p class="bakery-case__body">{{ page.research02.mazeIntro }}</p>
            <QuoteBlock>
              <p>{{ page.research02.mazeTaskLines[0] }}</p>
              <ul>
                <li v-for="line in page.research02.mazeTaskLines.slice(1)" :key="line">{{ line }}</li>
              </ul>
              <p>{{ page.research02.mazeTaskFooter }}</p>
            </QuoteBlock>
            <FigmaActionLink
              v-for="test in page.research02.tests"
              :key="test.href"
              compact
              :href="test.href"
              :label="test.label"
              :icon="page.mazeIcon"
            />
            <p class="bakery-case__body">{{ page.research02.conclusion }}</p>
          </div>
        </div>

        <div class="bakery-case__block">
          <SectionHeading :title="page.research03.title" />
          <div class="bakery-case__research">
            <p class="bakery-case__question">{{ page.research03.question }}</p>
            <p class="bakery-case__body">{{ page.research03.intro }}</p>
            <HypothesisRow
              v-for="item in page.research03.hypotheses"
              :key="item.index"
              :index="item.index"
            >
              {{ item.text }}
            </HypothesisRow>
            <p class="bakery-case__body">{{ page.research03.conclusion }}</p>
          </div>
          <div class="bakery-case__compare">
            <img
              class="bakery-case__compare-before"
              :src="page.research03.before"
              alt="Интерфейс до доработки сценария корзины"
              width="320"
              height="540"
            />
            <img
              class="bakery-case__arrow"
              :src="page.arrowRight"
              alt=""
              width="52"
              height="52"
            />
            <img
              class="bakery-case__compare-after"
              :src="page.research03.after"
              alt="Интерфейс после доработки сценария корзины"
              width="742"
              height="549"
            />
          </div>
        </div>
      </section>

      <section class="bakery-case__block">
        <SectionHeading :title="page.finalSolution.title" />
        <div class="bakery-case__prose">
          <p v-for="paragraph in page.finalSolution.paragraphs" :key="paragraph">{{ paragraph }}</p>
        </div>
      </section>
    </main>
  </div>
</template>

<style scoped>
.bakery-case {
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100%;
  background: var(--color-page);
  color: var(--color-text);
}

.bakery-case__header {
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 32px var(--page-pad);
}

.bakery-case__main {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 100px;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 12px var(--page-pad) 150px;
}

.bakery-case__hero,
.bakery-case__details,
.bakery-case__block,
.bakery-case__group {
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: min(100%, var(--content-width));
}

.bakery-case__group {
  gap: 64px;
}

.bakery-case__group-title {
  margin: 0;
  font-family: var(--font-mono);
  font-size: 32px;
  font-weight: 700;
  line-height: normal;
  color: var(--color-text);
}

.bakery-case__group-title--md {
  font-size: 24px;
}

.bakery-case__hero {
  gap: 68px;
}

.bakery-case__hero-media {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 24px;
  width: 100%;
  height: 461px;
  overflow: clip;
}

.bakery-case__hero-left,
.bakery-case__hero-right {
  height: 100%;
  object-fit: contain;
}

.bakery-case__hero-left {
  width: min(100%, 830px);
}

.bakery-case__hero-right {
  width: min(100%, 308px);
}

.bakery-case__tags {
  margin: 0;
  font-family: var(--font-mono);
  font-size: 18px;
  font-weight: 700;
  line-height: normal;
  color: var(--color-faint);
}

.bakery-case__details {
  flex-direction: row;
  align-items: stretch;
  justify-content: space-between;
  gap: 40px;
}

.bakery-case__task {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 40px;
  width: min(100%, 524px);
}

.bakery-case__task-copy {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.bakery-case__lead {
  margin: 0;
  font-family: var(--font-sans);
  font-size: 24px;
  font-weight: 400;
  line-height: normal;
  color: var(--color-text);
}

.bakery-case__overview {
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: min(100%, 552px);
}

.bakery-case__overview-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: min(100%, 337px);
}

.bakery-case__collage {
  width: 100%;
  height: 335px;
  overflow: clip;
  background: var(--color-surface);
}

.bakery-case__collage img {
  width: 100%;
  height: 237%;
  margin-top: -135px;
  object-fit: cover;
}

.bakery-case__summary {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 40px;
  width: min(100%, var(--content-width));
}

.bakery-case__summary-col {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.bakery-case__summary-col--wide {
  width: min(100%, 639px);
}

.bakery-case__summary-col--narrow {
  width: min(100%, 456px);
}

.bakery-case__prose,
.bakery-case__research {
  display: flex;
  flex-direction: column;
  gap: 1em;
  max-width: 944px;
}

.bakery-case__research {
  gap: 24px;
}

.bakery-case__prose p,
.bakery-case__body,
.bakery-case__question {
  margin: 0;
  font-family: var(--font-sans);
  font-weight: 400;
  line-height: normal;
  color: var(--color-text);
}

.bakery-case__prose p,
.bakery-case__body {
  font-size: 18px;
}

.bakery-case__question {
  font-size: 20px;
}

.bakery-case__kit {
  display: flex;
  flex-direction: column;
  gap: 56px;
}

.bakery-case__swatches {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
}

.bakery-case__type {
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
}

.bakery-case__responsive {
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  width: 100%;
}

.bakery-case__responsive-wide {
  width: min(100%, 760px);
  height: auto;
  object-fit: cover;
}

.bakery-case__crop {
  width: min(100%, 372px);
  height: 587px;
  overflow: hidden;
}

.bakery-case__crop img {
  height: 100%;
  max-width: none;
  object-fit: cover;
}

.bakery-case__crop--left img {
  width: 195%;
}

.bakery-case__crop--right img {
  width: 198%;
  margin-left: -98%;
}

.bakery-case__dark {
  width: 100%;
  max-width: 1195px;
  height: auto;
}

.bakery-case__tones,
.bakery-case__quotes {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  width: 100%;
}

.bakery-case__quotes :deep(.quote-block__text) {
  width: min(100%, 300px);
}

.bakery-case__compare {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 40px;
  width: 100%;
}

.bakery-case__compare-before {
  width: min(100%, 320px);
  height: auto;
}

.bakery-case__compare-after {
  width: min(100%, 742px);
  height: auto;
}

.bakery-case__arrow {
  width: 52px;
  height: 52px;
  object-fit: contain;
}

@media (max-width: 1100px) {
  .bakery-case__header,
  .bakery-case__main {
    padding-left: 24px;
    padding-right: 24px;
  }

  .bakery-case__details,
  .bakery-case__summary,
  .bakery-case__hero-media,
  .bakery-case__compare {
    flex-direction: column;
  }

  .bakery-case__hero-media,
  .bakery-case__hero-left,
  .bakery-case__hero-right {
    height: auto;
  }

  .bakery-case__crop {
    height: auto;
    aspect-ratio: 372 / 587;
  }

  .bakery-case__arrow {
    transform: rotate(90deg);
  }
}
</style>
