<script setup>
import SiteHeader from '@/components/SiteHeader.vue'
import HeroSection from '@/components/HeroSection.vue'
import ResumeSection from '@/components/ResumeSection.vue'
import TimelineItem from '@/components/TimelineItem.vue'
import DetailList from '@/components/DetailList.vue'
import ProjectCard from '@/components/ProjectCard.vue'
import SkillTag from '@/components/SkillTag.vue'
import BrandAsset from '@/components/BrandAsset.vue'
import TextLink from '@/components/TextLink.vue'
import SiteFooter from '@/components/SiteFooter.vue'
import {
  hero,
  aboutParagraphs,
  designReasonParagraphs,
  education,
  workExperience,
  workDetails,
  projects,
  experiments,
  skills,
  tools,
  contacts
} from '@/data/resume'

const footerLinks = [
  { label: 'Проекты', href: '#projects' },
  { label: 'Резюме', href: `${import.meta.env.BASE_URL}Cv.Akimova-design.pdf` }
]
</script>

<template>
  <div class="home-view">
    <div class="home-view__hero">
      <SiteHeader />
      <HeroSection v-bind="hero" />
    </div>

    <ResumeSection id="about" title=".about_me">
      <div class="prose-block">
        <p v-for="(paragraph, index) in aboutParagraphs" :key="index">{{ paragraph }}</p>
      </div>
    </ResumeSection>

    <ResumeSection id="education" title=".education">
      <div class="timeline-list">
        <TimelineItem
          v-for="(item, index) in education"
          :key="item.title"
          v-bind="item"
          :divided="index < education.length - 1"
        />
      </div>
    </ResumeSection>

    <ResumeSection id="resume" title=".work_experience">
      <div class="work-layout">
        <div class="timeline-list timeline-list--work">
          <TimelineItem
            v-for="(item, index) in workExperience"
            :key="item.title"
            v-bind="item"
            :divided="index < workExperience.length - 1"
          />
        </div>
        <div class="work-details">
          <DetailList title="/задачи" :items="workDetails.tasks" />
          <DetailList title="/технологии" :items="workDetails.technologies" />
          <DetailList title="/что мне это даёт" :text="workDetails.outcome" />
          <TextLink :href="`${import.meta.env.BASE_URL}/Cv.Akimova-front.pdf`" target="_blank"">смотреть резюме фронтендера →</TextLink>
          
        </div>
      </div>
    </ResumeSection>

    <ResumeSection id="design-reason" title=".design_reason">
      <div class="prose-block prose-block--wide">
        <p v-for="(paragraph, index) in designReasonParagraphs" :key="index">{{ paragraph }}</p>
      </div>
    </ResumeSection>

    <ResumeSection id="projects" title=".selected_projects">
      <div class="project-list">
        <ProjectCard v-for="project in projects" :key="project.index" v-bind="project" />
      </div>
    </ResumeSection>

    <ResumeSection id="experiments" title=".experiments">
      <div class="project-list">
        <ProjectCard v-for="item in experiments" :key="item.index" v-bind="item" />
      </div>
    </ResumeSection>

    <ResumeSection id="skills" title=".skills">
      <div class="skill-list">
        <SkillTag v-for="skill in skills" :key="skill" :label="skill" />
      </div>
    </ResumeSection>

    <ResumeSection id="tools" title=".tools">
      <div class="tool-marquee">
        <div class="tool-marquee__track">
          <div
            v-for="copy in 2"
            :key="copy"
            class="tool-list"
            :aria-hidden="copy === 2"
          >
            <div
              v-for="tool in tools"
              :key="`${copy}-${tool.alt}`">
                <img
                  :src="tool.src"
                  :alt="copy === 1 ? tool.alt : ''"
                  :width="tool.width"
                  :height="tool.height"
                />
            </div>
          </div>
        </div>
      </div>
    </ResumeSection>

    <SiteFooter name="Акимова Алина" :links="footerLinks" :contacts="contacts" />
  </div>
</template>

<style scoped>
.home-view {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-section);
  background: var(--color-page);
}

.home-view__hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 100px;
  width: 100%;
  padding: 0 var(--page-pad);
  background: var(--color-surface);
  border-radius: 0 0 var(--radius-shell) var(--radius-shell);
  overflow: clip;
}

.prose-block {
  max-width: 951px;
}

.prose-block--wide {
  max-width: 1200px;
}

.prose-block p {
  margin: 0 0 1em;
  font-family: var(--font-mono);
  font-size: 24px;
  font-weight: 400;
  line-height: normal;
  color: var(--color-text);
}

.prose-block p:last-child {
  margin-bottom: 0;
}

.timeline-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: min(100%, 649px);
}

.timeline-list--work {
  width: min(100%, 453px);
}

.work-layout {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 40px;
  width: 100%;
}

.work-details {
  display: flex;
  flex-direction: column;
  gap: 36px;
  width: min(100%, 576px);
}

.project-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 100px;
  width: 100%;
}

.skill-list {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 16px;
}

.tool-marquee {
  width: 100%;
  overflow: hidden;
  mask-image: linear-gradient(
    to right,
    transparent,
    #000 48px,
    #000 calc(100% - 48px),
    transparent
  );
}

.tool-marquee__track {
  display: flex;
  width: max-content;
  animation: tool-marquee 28s linear infinite;
}

.tool-list {
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  gap: 32px;
  padding-right: 32px;
}

@keyframes tool-marquee {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-50%);
  }
}

@media (prefers-reduced-motion: reduce) {
  .tool-marquee__track {
    animation: none;
  }

  .tool-list[aria-hidden='true'] {
    display: none;
  }
}

@media (max-width: 1100px) {
  .home-view__hero,
  .home-view :deep(.site-footer) {
    padding-left: 32px;
    padding-right: 32px;
    gap: 40px;
  }

    .home-view__hero {
      border-radius: 50px;
    }

  .work-layout {
    flex-direction: column;
  }

  .prose-block p {
    font-size: 24px;
  }
}
</style>
