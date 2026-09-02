import heroLeft from '@/assets/images/front-case/hero-left.jpg'
import heroRight from '@/assets/images/front-case/hero-right.jpg'
import webIcon from '@/assets/icons/web.svg'
import gitIcon from '@/assets/icons/git.svg'

export const frontCase = {
  tags: 'UX/UI · Responsive · React',
  hero: {
    left: heroLeft,
    right: heroRight
  },
  webIcon,
  gitIcon,
  task: {
    title: '.task',
    text: 'Сайт-визитка, который знакомит с разработчиком через сам интерфейс.',
    link: {
      label: 'Смотреть сайт',
      href: 'https://alinaakimova.github.io/about-me/'
    }
  },
  overview: {
    title: '.overview',
    fields: [
      { label: 'Моя роль', value: 'Дизайнер и разработчик' },
      { label: 'Инструменты', value: 'React, Github' },
      { label: 'Тип проекта', value: 'Личный' },
      { label: 'Платформа', value: 'Web, responsive' },
      { label: 'Язык интерфейса', value: 'Русский, английский' },
      { label: 'Год создания', value: '2025', divided: false }
    ]
  },
  context: {
    title: '.context',
    paragraphs: [
      'Я хотела создать собственный сайт-визитку, который не только рассказывал бы обо мне и моём опыте, но и демонстрировал мои фронтенд-навыки через интерфейс. Поэтому я выбрала дружелюбное визуальное направление и добавила небольшие интерактивные анимации.',
    ]
  },
  prototype: {
    title: '.development',
    intro: [
      'В отличие от предыдущих проектов, этот сайт я не проектировала в Figma. Я сразу реализовала интерфейс в коде, поэтому дизайн и разработка происходили параллельно.',
      'У меня было много коммерческого опыта на Vue, поэтому сайт я решила сделать на React, чтобы вспомнить этот фреймворк.',
      'Сайт адаптирован под разные размеры экранов с сохранением основной визуальной концепции и поведения интерактивных элементов.',
    ],
    link: {
      label: 'Смотреть гитхаб',
      href: 'https://github.com/AlinaAkimova/about-me'
    }
  }
}
