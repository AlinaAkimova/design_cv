import photo from '@/assets/images/photo.png'
import effective from '@/assets/images/effective.png'
import projectTravel from '@/assets/images/project-travel.png'
import projectBakery from '@/assets/images/project-bakery.png'
import projectFrontend from '@/assets/images/project-frontend.png'
import experimentCjm from '@/assets/images/experiment-cjm.png'
import experiment from '@/assets/images/experiment.jpg'
import experimentMockup1 from '@/assets/images/experiment-mockup-1.png'
import experimentMockup2 from '@/assets/images/experiment-mockup-2.png'
import school21 from '@/assets/icons/school21.svg'
import nova from '@/assets/icons/nova.svg'
import fruktorum from '@/assets/icons/fruktorum.svg'
import upwork from '@/assets/icons/upwork.svg'
import figmaIcon from '@/assets/icons/figma.svg'
import photoshop from '@/assets/icons/photoshop.svg'
import tilda from '@/assets/icons/tilda.svg'
import miro from '@/assets/icons/miro.svg'
import notion from '@/assets/icons/notion.svg'
import slack from '@/assets/icons/slack.svg'
import jira from '@/assets/icons/jira.svg'
import vscode from '@/assets/icons/vscode.svg'
import css from '@/assets/icons/css.svg'
import html5 from '@/assets/icons/html5.svg'
import omsu from '@/assets/icons/omsu.svg'
import vue from '@/assets/icons/vue.svg'
import react from '@/assets/icons/react.svg'
import telegram from '@/assets/icons/telegram.svg'
import gmail from '@/assets/icons/gmail.svg'

export const hero = {
  photo,
  greeting: 'Привет,',
  name: 'я Алина!',
  bio: ['Развиваюсь', 'в продуктовом дизайне.', 'За плечами — 3 года фронтенд-разработки.'],
  tags: 'UX/UI · Product Design · Frontend'
}

export const aboutParagraphs = [
  'До перехода в дизайн я больше трёх лет работала фронтенд-разработчиком. Благодаря этому опыту я привыкла смотреть на интерфейс не только как на визуальную систему, но и понимать, как дизайн превращается в работающий продукт.',
  'Сейчас я развиваюсь как продуктовый дизайнер и учусь проходить путь от пользовательской задачи до готового решения: исследую, проектирую, прототипирую и проверяю свои гипотезы.'
]

export const designReasonParagraphs = [
  'Работая с интерфейсами на этапе разработки, я всё больше интересовалась тем, почему продукт устроен именно так и как можно сделать взаимодействие с ним проще.',
  'Я поняла, что хочу участвовать в создании продукта ещё до этапа разработки — исследовать задачи пользователей, продумывать сценарии и искать решения, удобные в использовании и реализуемые технически. Это привело меня в дизайн.'
]

export const education = [
  {
    logo: school21,
    logoAlt: 'Школа 21',
    logoWidth: 50,
    logoHeight: 50,
    dates: 'май 2026 → настоящее время',
    title: 'UX/UI дизайн, Школа 21'
  },
  {
    logo: omsu,
    logoAlt: 'ОмГУ',
    logoWidth: 50,
    logoHeight: 50,
    dates: '2019 → 2023',
    title: 'Институт математики и информационных технологий, ОмГУ им. Достоевского'
  }
]

export const workExperience = [
  {
    logo: nova,
    logoAlt: 'Нова',
    logoWidth: 82,
    logoHeight: 24,
    dates: 'октябрь 2025 → февраль 2026',
    title: 'Нова, фронтенд-разработчик'
  },
  {
    logo: fruktorum,
    logoAlt: 'Fruktorum',
    logoWidth: 87,
    logoHeight: 42,
    dates: 'октябрь 2023 → июль 2025',
    title: 'Fruktorum, Vue-разработчик'
  },
  {
    logo: upwork,
    logoAlt: 'Upwork',
    logoWidth: 56,
    logoHeight: 56,
    dates: 'апрель 2023 → август 2023',
    title: 'Фриланс, Vue-разработчик'
  },
  {
    logo: effective,
    logoAlt: 'Effective',
    logoWidth: 62,
    logoHeight: 62,
    dates: 'июль 2022 → апрель 2023',
    title: 'Effective, React-разработчик'
  }
]

export const workDetails = {
  tasks: [
    'разработка пользовательских интерфейсов;',
    'взаимодействие с командой разработки: дизайнерами, бэкендерами, тестировщиками, менеджерами.'
  ],
  technologies: ['JavaScript', 'TypeScript', 'HTML', 'CSS', 'Vue', 'React'],
  outcome:
    'понимание ограничений разработки, работа с компонентным подходом и внимание к деталям реализации интерфейсов. Я понимаю, что происходит после передачи макета разработчику.'
}

export const projects = [
  {
    index: '01',
    tags: 'UX/UI · Mobile · Prototype · Guidline · Dark mode',
    image: projectTravel,
    imageHeight: 550,
    title: 'Мобильное приложение для планирования путешествий',
    href: '/projects/travel'
  },
  {
    index: '02',
    tags: 'UX/UI research · Responsive · Guidline · Dark mode',
    image: projectBakery,
    imageHeight: 432,
    title: 'Сайт пекарни с оформлением заказа',
    href: '/projects/bakery'
  },
  {
    index: '03',
    tags: 'UX/UI · Responsive · Frontend',
    image: projectFrontend,
    imageHeight: 380,
    title: 'Сайт-визитка фронтенд-разработчика',
    href: '/projects/front'
  }
]

export const experiments = [
  {
    index: '01',
    tags: 'UX/UI · fonts · viewing experience',
    title: 'Учебные наработки',
    href: '#',
    image: experiment,
    bullets: [
      'Daily UI;',
      'шрифты на разные случаи;',
      'CJM, User Flow и персона пользователя приложения “Самокат”;',
      'разбор сайта по Heuristic evaluation'
    ],
    href: 'https://www.figma.com/design/CFW18MTpbkgRbOoQ0s6OIT/UX-UI-study?node-id=1-3&t=X6KqnU5XjtyHRkvA-1'
  }
]

export const skills = [
  'UX Design',
  'UI Design',
  'Responsive Web Design',
  'Mobile App Design (iOS & Android)',
  'Usability Testing',
  'Accessibility (WCAG)',
  'Wireframing & Prototyping',
  'Guidelines',
  'UI kit',
  'English – B2'
]

export const tools = [
  { src: figmaIcon, alt: 'Figma', width: 80, height: 80 },
  { src: photoshop, alt: 'Photoshop', width: 80, height: 80 },
  { src: miro, alt: 'Miro', width: 80, height: 80 },
  { src: tilda, alt: 'Tilda', width: 80, height: 80 },
  { src: notion, alt: 'Notion', width: 78, height: 82 },
  { src: slack, alt: 'Slack', width: 80, height: 80 },
  { src: jira, alt: 'Jira', width: 80, height: 80 },
  { src: vscode, alt: 'VS Code', width: 80, height: 80 },
  { src: css, alt: 'CSS', width: 88, height: 88 },
  { src: html5, alt: 'HTML5', width: 64, height: 91 },
  { src: vue, alt: 'Vue', width: 80, height: 69 },
  { src: react, alt: 'React', width: 64, height: 78 }
]

export const contacts = [
  { src: telegram, alt: 'Telegram', href: 'https://t.me/akimova_alinaaa', width: 30, height: 30 },
  { src: gmail, alt: 'Email', href: 'mailto:linakim107@gmail.com', width: 36, height: 36 }
]
