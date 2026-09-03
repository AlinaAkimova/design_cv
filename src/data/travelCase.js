import heroLeft from '@/assets/images/travel-case/hero-left.webp'
import heroRight from '@/assets/images/travel-case/hero-right.webp'
import collage from '@/assets/images/travel-case/collage.webp'
import competitor1 from '@/assets/images/travel-case/competitor-1.webp'
import competitor2 from '@/assets/images/travel-case/competitor-2.webp'
import userflow from '@/assets/images/travel-case/userflow.webp'
import darkMode from '@/assets/images/travel-case/dark-mode.webp'
import prototype from '@/assets/images/travel-case/prototype.webp'
import figmaIcon from '@/assets/icons/figma.svg'

export const travelCase = {
  tags: 'UX/UI · Mobile · Prototype · Guidline · Dark mode',
  hero: {
    left: heroLeft,
    right: heroRight
  },
  figmaIcon,
  task: {
    title: '.task',
    text: 'Спроектировать мобильное приложение для поиска мест и планирования путешествий с помощью чеклистов.',
    link: {
      label: 'Смотреть фигму',
      href: 'https://www.figma.com/design/6llCFFKJ8SIJXSjFEN5HFS/travel-app?node-id=448-1372&t=M1NiAVSlFQIWnw4E-1'
    }
  },
  overview: {
    title: '.overview',
    fields: [
      { label: 'Моя роль', value: 'Продуктовый дизайнер' },
      { label: 'Инструменты', value: 'Figma' },
      { label: 'Тип проекта', value: 'Учебный' },
      { label: 'Платформа', value: 'Мобильное приложение' },
      { label: 'Язык интерфейса', value: 'Английский' },
      { label: 'Год создания', value: '2026', divided: false }
    ]
  },
  collage,
  context: {
    title: '.context',
    paragraphs: [
      'Я люблю путешествовать и заранее планировать поездки: искать интересные места, сохранять их и составлять список того, что хочется посетить.',
      'Мне нравится ощущение прогресса, которое появляется, когда посещённые места можно отмечать как выполненные. Поэтому я решила исследовать идею приложения, которое объединяет поиск мест, информацию о них и чеклист поездки.'
    ]
  },
  competitive: {
    title: '.competitive_analysis',
    intro: [
      'Перед проектированием я изучила несколько популярных приложений для планирования и документирования путешествий, включая Wanderlog и Polarsteps.',
      'Я анализировала их основные сценарии: поиск мест, сохранение, планирование поездки и взаимодействие с уже сохранёнными местами.'
    ],
    noticeTitle: 'Что я заметила',
    bullets: [
      'существующие приложения предлагают много инструментов для планирования поездки;',
      'я хотела сделать акцент не только на планировании, но и на ощущении прогресса во время путешествия;',
      'центральным элементом моего концепта стал checklist.'
    ],
    phones: [competitor1, competitor2]
  },
  problem: {
    title: '.problem',
    paragraphs: [
      'При планировании путешествия информация о местах часто оказывается разделена между разными сервисами: пользователю приходится искать интересные места, сохранять их и отдельно организовывать план поездки.'
    ],
    hypothesisTitle: 'Моя гипотеза',
    hypothesis:
      'Если объединить поиск мест, информацию о них и чеклист поездки в одном приложении, пользователь сможет проще организовывать список того, что хочет посетить, и видеть прогресс во время путешествия.'
  },
  userFlow: {
    title: '.user_flow',
    steps: [
      'пользователь ищет интересные места',
      'открывает детали места, чтобы узнать больше информации',
      'может сохранить место в избранное',
      'добавляет место в чеклист',
      'посещает место и отмечает его как выполненное'
    ],
    image: userflow
  },
  guideline: {
    title: '.guideline',
    paragraphs: [
      'Чтобы интерфейс оставался последовательным и масштабируемым, я создала гайдлайны с описанием цветов, шрифтов, расстояний, радиусов.',
      'Ключевые элементы интерфейса я собрала в переиспользуемые компоненты и создала необходимые варианты состояний.'
    ],
    link: {
      label: 'Смотреть гайдлайн',
      href: 'https://www.figma.com/design/6llCFFKJ8SIJXSjFEN5HFS/travel-app?node-id=448-1371'
    },
    colors: {
      brand: [
        { name: 'jungle/500', hex: '#1F3D3A', color: '#1F3D3A' },
        { name: 'terracotta/400', hex: '#BF4E1F, 60%', color: 'rgba(191, 78, 31, 0.6)' },
        { name: 'terracotta/500', hex: '#BF4E1F', color: '#BF4E1F' },
        { name: 'terracotta/600', hex: '#A7441A', color: '#A7441A' },
        { name: 'terracotta/700', hex: '#8E3916', color: '#8E3916' },
        { name: 'coastal/100', hex: '#2E6F8E, 12%', color: 'rgba(46, 111, 142, 0.12)' },
        { name: 'coastal/200', hex: '#2E6F8E, 30%', color: 'rgba(46, 111, 142, 0.3)' },
        { name: 'coastal/500', hex: '#2E6F8E', color: '#2E6F8E' }
      ],
      categories: [
        { name: 'gold', hex: '#E8A33D', color: '#E8A33D' },
        { name: 'sage', hex: '#7FA88C', color: '#7FA88C' },
        { name: 'clay', hex: '#C2785A', color: '#C2785A' }
      ],
      background: [
        { name: 'primary', hex: '#FAF7F0', color: '#FAF7F0' },
        { name: 'secondary', hex: '#F4EFE6', color: '#F4EFE6' }
      ],
      semantic: [
        { name: 'success', hex: '#3D7D5A', color: '#3D7D5A' },
        { name: 'error', hex: '#C83D2F', color: '#C83D2F' }
      ]
    },
    typeRows: [
      { sample: 'H1   App / city title', sampleClass: 'h1', style: 'H1', font: 'Space Grotesk', size: '32/auto', weight: 'Bold' },
      { sample: 'H2   Section heading', sampleClass: 'h2', style: 'H2', font: 'Space Grotesk', size: '25/auto', weight: 'Bold' },
      { sample: 'Body Bold   Reaching Out Tea House is', sampleClass: 'body', style: 'Body', font: 'Inter', size: '16/160%', weight: 'SemiBold' }
    ]
  },
  darkMode: {
    title: '.dark_mode',
    text: 'После создания светлой темы я адаптировала интерфейс для тёмного режима. Я пересмотрела цветовые роли и состояния компонентов, чтобы сохранить читаемость и визуальную иерархию интерфейса.',
    image: darkMode
  },
  prototype: {
    title: '.prototype',
    text: 'После завершения основных экранов я собрала интерактивный прототип светлой темы, чтобы проверить целостность основных пользовательских сценариев.',
    link: {
      label: 'Смотреть прототип',
      href: 'https://www.figma.com/proto/6llCFFKJ8SIJXSjFEN5HFS/travel-app?node-id=454-3230&viewport=599%2C234%2C0.2&t=M1NiAVSlFQIWnw4E-0&scaling=scale-down&content-scaling=fixed&starting-point-node-id=454%3A3230'
    },
    image: prototype
  },
  reflection: {
    title: '.reflection',
    paragraphs: [
      'Этот проект помог мне разобраться с полным циклом создания мобильного интерфейса — от формулировки идеи и пользовательского сценария до гайдлайна, компонентов и интерактивного прототипа.',
      'Следующим этапом я бы провела usability-тестирование прототипа, чтобы проверить понятность сценария добавления мест в поездку и механики чеклиста.'
    ]
  }
}
