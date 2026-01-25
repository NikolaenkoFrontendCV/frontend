export type TypeOfSkill =
  | "Layout"
  | "Languages"
  | "Frameworks"
  | "UI libraries"
  | "State managers"
  | "Version control"
  | "Deploy"
  | "Other";

export type Skill = {
  id: number;
  name: string;
  type: TypeOfSkill;
  shortDescription: string;
  fullDescription: string;
  image: string;
};

export const skillsTypes: TypeOfSkill[] = [
  "Layout",
  "Languages",
  "Frameworks",
  "UI libraries",
  "State managers",
  "Version control",
  "Deploy",
  "Other",
];

export const skills: Skill[] = [
  {
    id: 0,
    name: "HTML",
    type: "Layout",
    shortDescription:
      "Использую семантическую и доступную разметку для построения структурированных интерфейсов.",
    fullDescription:
      "Применяю HTML для создания семантически корректной, доступной и масштабируемой структуры интерфейсов. Учитываю SEO, accessibility и удобство дальнейшей поддержки, особенно в крупных приложениях и корпоративных системах.",
    image: "@/public/html-icon.svg",
  },
  {
    id: 1,
    name: "CSS",
    type: "Layout",
    shortDescription:
      "Разрабатываю адаптивные и кроссбраузерные интерфейсы с акцентом на производительность.",
    fullDescription:
      "Использую CSS для построения отзывчивых, кроссбраузерных интерфейсов, уделяя внимание адаптивности, производительности и читаемости кода. Уверенно работаю с современными возможностями CSS и архитектурой стилей.",
    image: "@/public/css-icon.svg",
  },
  {
    id: 2,
    name: "JavaScript",
    type: "Languages",
    shortDescription:
      "Основной язык для разработки интерактивных и сложных клиентских приложений.",
    fullDescription:
      "Использую JavaScript для реализации бизнес-логики, работы с асинхронными данными и взаимодействия с API. Хорошо понимаю принципы работы языка, событийную модель и особенности производительности в браузере.",
    image: "@/public/js-icon.svg",
  },
  {
    id: 3,
    name: "TypeScript",
    type: "Languages",
    shortDescription:
      "Применяю TypeScript для повышения надежности и масштабируемости кода.",
    fullDescription:
      "Активно использую TypeScript для строгой типизации, улучшения читаемости и предотвращения ошибок на этапе разработки. Проектирую типы для API, форм, состояния и сложных бизнес-сценариев.",
    image: "@/public/ts-icon.svg",
  },
  {
    id: 4,
    name: "Sass",
    type: "Layout",
    shortDescription:
      "Использую препроцессоры для удобной организации и масштабирования стилей.",
    fullDescription:
      "Применяю Sass для структурирования стилей, переиспользования логики и поддержки крупных UI-модулей. Использую переменные, миксины и вложенность для повышения читаемости и поддержки кода.",
    image: "@/public/sass-icon.svg",
  },
  {
    id: 5,
    name: "Figma",
    type: "Other",
    shortDescription: "Работаю с дизайн-макетами и дизайн-системами напрямую.",
    fullDescription:
      "Использую Figma для анализа дизайн-макетов, работы с дизайн-системами и взаимодействия с дизайнерами. Умею быстро переносить дизайн в код с сохранением визуальной и логической консистентности.",
    image: "@/public/figma-icon.svg",
  },
  {
    id: 6,
    name: "React",
    type: "Frameworks",
    shortDescription:
      "Основной инструмент для разработки компонентных интерфейсов.",
    fullDescription:
      "Разрабатываю приложения на React с фокусом на архитектуру, переиспользуемость компонентов и производительность. Использую хуки, композицию и современные паттерны для построения масштабируемых интерфейсов.",
    image: "@/public/react-icon.svg",
  },
  {
    id: 7,
    name: "Next.js",
    type: "Frameworks",
    shortDescription: "Использую Next.js для production-ready приложений.",
    fullDescription:
      "Применяю Next.js для разработки производительных веб-приложений с SSR и SSG. Работаю с маршрутизацией, оптимизацией загрузки, SEO и конфигурацией сборки под реальные бизнес-задачи.",
    image: "@/public/next-icon.svg",
  },
  {
    id: 8,
    name: "Redux",
    type: "State managers",
    shortDescription:
      "Использую Redux Toolkit для управления сложным состоянием.",
    fullDescription:
      "Работаю с Redux Toolkit для управления глобальным состоянием в сложных приложениях. Проектирую сторы, слайсы и асинхронную логику с упором на предсказуемость и масштабируемость.",
    image: "@/public/redux-icon.svg",
  },
  {
    id: 9,
    name: "React Query",
    type: "State managers",
    shortDescription: "Управляю серверным состоянием и кэшированием данных.",
    fullDescription:
      "Использую React Query для работы с серверным состоянием, кэшированием, повторными запросами и синхронизацией данных. Это позволяет упростить логику и повысить стабильность приложений.",
    image: "@/public/react-query-icon.svg",
  },
  {
    id: 10,
    name: "Git",
    type: "Version control",
    shortDescription:
      "Основной инструмент контроля версий в командной разработке.",
    fullDescription:
      "Использую Git для повседневной разработки: работа с ветками, pull request, code review и разрешение конфликтов. Следую Git Flow и командным процессам.",
    image: "@/public/git-icon.svg",
  },
  {
    id: 11,
    name: "GitHub",
    type: "Version control",
    shortDescription: "Использую GitHub для командной разработки и CI/CD.",
    fullDescription:
      "Работаю с GitHub для ведения репозиториев, code review и автоматизации процессов. Использую issues, pull requests и CI для поддержки качества кода.",
    image: "@/public/github-icon.svg",
  },
  {
    id: 12,
    name: "Bitbucket",
    type: "Version control",
    shortDescription: "Использую Bitbucket в корпоративных проектах.",
    fullDescription:
      "Работал с Bitbucket в командных и корпоративных проектах, используя pull request, code review и интеграцию с CI/CD пайплайнами.",
    image: "@/public/bb-icon.svg",
  },
  {
    id: 13,
    name: "Material UI",
    type: "UI libraries",
    shortDescription:
      "Использую готовые UI-компоненты для ускорения разработки.",
    fullDescription:
      "Работаю с Material UI для создания интерфейсов на основе готовых компонентов. Кастомизирую темы и компоненты под требования дизайн-системы проекта.",
    image: "@/public/material-ui-icon.svg",
  },
  {
    id: 14,
    name: "Material-tailwind",
    type: "UI libraries",
    shortDescription: "Комбинирую Tailwind и готовые UI-решения.",
    fullDescription:
      "Использую Material Tailwind для быстрого создания интерфейсов с сохранением гибкости Tailwind. Подходит для проектов с ограниченными сроками и готовыми дизайн-гайдами.",
    image: "@/public/material-tailwind-icon.svg",
  },
  {
    id: 15,
    name: "Shadcn UI",
    type: "UI libraries",
    shortDescription: "Создаю гибкие интерфейсы на базе headless-компонентов.",
    fullDescription:
      "Использую Shadcn UI для построения кастомных интерфейсов поверх headless-компонентов. Позволяет сохранить контроль над стилями и логикой без привязки к жёсткой UI-библиотеке.",
    image: "@/public/shadcn-ui-icon.svg",
  },
  {
    id: 16,
    name: "AntDesign",
    type: "UI libraries",
    shortDescription: "Использую Ant Design в корпоративных и B2B-продуктах.",
    fullDescription:
      "Работал с Ant Design при разработке сложных административных и корпоративных интерфейсов. Использую готовые компоненты, таблицы и формы для ускорения разработки.",
    image: "@/public/antdesign-icon.svg",
  },
  {
    id: 17,
    name: "Framer Motion",
    type: "UI libraries",
    shortDescription: "Добавляю анимации и интерактивность интерфейсам.",
    fullDescription:
      "Использую Framer Motion для создания плавных анимаций и интерактивных переходов. Помогает улучшить пользовательский опыт без ущерба для производительности.",
    image: "@/public/framer-motion-icon.svg",
  },
  {
    id: 18,
    name: "Nginx",
    type: "Deploy",
    shortDescription: "Использую для настройки веб-серверов и проксирования.",
    fullDescription:
      "Работал с Nginx для настройки серверов, проксирования запросов и раздачи статических файлов. Понимаю базовые принципы конфигурации и взаимодействия с frontend-приложениями.",
    image: "@/public/nginx-icon.svg",
  },
  {
    id: 19,
    name: "Docker",
    type: "Deploy",
    shortDescription: "Использую Docker для стандартизации окружений.",
    fullDescription:
      "Применяю Docker для контейнеризации frontend-приложений и упрощения локальной разработки и деплоя. Позволяет обеспечить связанность окружений между разработкой и продакшеном.",
    image: "@/public/docker-icon.svg",
  },
];
