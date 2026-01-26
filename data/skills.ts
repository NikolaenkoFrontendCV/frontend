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
  shortDescription: {
    ru: string;
    en: string
  }
  fullDescription: {
    ru: string;
    en: string
  }
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
    shortDescription:{
      ru: "Использую семантическую и доступную разметку для построения структурированных интерфейсов.",
      en: "I use semantic and accessible markup to build structured interfaces."
    },      
    fullDescription:{
      ru:       "Применяю HTML для создания семантически корректной, доступной и масштабируемой структуры интерфейсов. Учитываю SEO, accessibility и удобство дальнейшей поддержки, особенно в крупных приложениях и корпоративных системах.",
      en: "I use HTML to create semantically correct, accessible, and scalable interface structures. I consider SEO, accessibility, and ease of maintenance, especially in large applications and enterprise systems."
    },
    image: "@/public/html-icon.svg",
  },
  {
    id: 1,
    name: "CSS",
    type: "Layout",
    shortDescription:{
      ru: "Разрабатываю адаптивные и кроссбраузерные интерфейсы с акцентом на производительность.",
      en: "I develop responsive and cross-browser interfaces with a focus on performance."
    },      
    fullDescription:{
      ru:             "Использую CSS для построения отзывчивых, кроссбраузерных интерфейсов, уделяя внимание адаптивности, производительности и читаемости кода. Уверенно работаю с современными возможностями CSS и архитектурой стилей.",
      en: "I use CSS to build responsive, cross-browser interfaces, paying attention to adaptability, performance, and code readability. I confidently work with modern CSS features and style architecture."
    },
    image: "@/public/css-icon.svg",
  },
  {
    id: 2,
    name: "JavaScript",
    type: "Languages",
    shortDescription:{
      ru: "Основной язык для разработки интерактивных и сложных клиентских приложений.",
      en: "Main language for developing interactive and complex client applications."
    },      
    fullDescription:{
      ru: "Использую JavaScript для реализации бизнес-логики, работы с асинхронными данными и взаимодействия с API. Хорошо понимаю принципы работы языка, событийную модель и особенности производительности в браузере.",
      en: "I use JavaScript to implement business logic, work with asynchronous data, and interact with APIs. I have a good understanding of the language's principles, event model, and performance characteristics in the browser."
    },
    image: "@/public/js-icon.svg",
  },
  {
    id: 3,
    name: "TypeScript",
    type: "Languages",
    shortDescription:{
      ru: "Применяю TypeScript для повышения надежности и масштабируемости кода.",
      en: "I use TypeScript to improve code reliability and scalability."
    },      
    fullDescription:{
      ru: "Активно использую TypeScript для строгой типизации, улучшения читаемости и предотвращения ошибок на этапе разработки. Проектирую типы для API, форм, состояния и сложных бизнес-сценариев.",
      en: "I actively use TypeScript for strict typing, improving readability, and preventing errors during development. I design types for APIs, forms, state, and complex business scenarios."
    },
    image: "@/public/ts-icon.svg",
  },
  {
    id: 4,
    name: "Sass",
    type: "Layout",
    shortDescription:{
      ru: "Использую препроцессоры для удобной организации и масштабирования стилей.",
      en: "I use preprocessors for convenient organization and scaling of styles."
    },      
    fullDescription:{
      ru: "Применяю Sass для структурирования стилей, переиспользования логики и поддержки крупных UI-модулей. Использую переменные, миксины и вложенность для повышения читаемости и поддержки кода.",
      en: "I use Sass to structure styles, reuse logic, and support large UI modules. I use variables, mixins, and nesting to improve code readability and maintainability."
    },
    image: "@/public/sass-icon.svg",
  },
  {
    id: 5,
    name: "Figma",
    type: "Other",
    shortDescription:{
      ru: "Работаю с дизайн-макетами и дизайн-системами напрямую.",
      en: "I work directly with design mockups and design systems."
    },      
    fullDescription:{
      ru: "Использую Figma для анализа дизайн-макетов, работы с дизайн-системами и взаимодействия с дизайнерами. Умею быстро переносить дизайн в код с сохранением визуальной и логической консистентности.",
      en: "I use Figma to analyze design mockups, work with design systems, and collaborate with designers. I can quickly translate design into code while maintaining visual and logical consistency."
    },
    image: "@/public/figma-icon.svg",
  },
  {
    id: 6,
    name: "React",
    type: "Frameworks",
    shortDescription:{
      ru: "Основной инструмент для разработки компонентных интерфейсов.",
      en: "Main tool for developing component-based interfaces."
    },      
    fullDescription:{
      ru: "Разрабатываю приложения на React с фокусом на архитектуру, переиспользуемость компонентов и производительность. Использую хуки, композицию и современные паттерны для построения масштабируемых интерфейсов.",
      en: "I develop React applications with a focus on architecture, component reusability, and performance. I use hooks, composition, and modern patterns to build scalable interfaces."
    },
    image: "@/public/react-icon.svg",
  },
  {
    id: 7,
    name: "Next.js",
    type: "Frameworks",
    shortDescription:{
      ru: "Использую Next.js для production-ready приложений.",
      en: "I use Next.js for production-ready applications."
    },      
    fullDescription:{
      ru: "Применяю Next.js для разработки производительных веб-приложений с SSR и SSG. Работаю с маршрутизацией, оптимизацией загрузки, SEO и конфигурацией сборки под реальные бизнес-задачи.",
      en: "I use Next.js to develop high-performance web applications with SSR and SSG. I work with routing, loading optimization, SEO, and build configuration for real business needs."
    },
    image: "@/public/next-icon.svg",
  },
  {
    id: 8,
    name: "Redux",
    type: "State managers",
    shortDescription:{
      ru: "Использую Redux Toolkit для управления сложным состоянием.",
      en: "I use Redux Toolkit to manage complex state."
    },      
    fullDescription:{
      ru: "Работаю с Redux Toolkit для управления глобальным состоянием в сложных приложениях. Проектирую сторы, слайсы и асинхронную логику с упором на предсказуемость и масштабируемость.",
      en: "I work with Redux Toolkit to manage global state in complex applications. I design stores, slices, and asynchronous logic with a focus on predictability and scalability."
    },
    image: "@/public/redux-icon.svg",
  },
  {
    id: 9,
    name: "React Query",
    type: "State managers",
    shortDescription:{
      ru: "Управляю серверным состоянием и кэшированием данных.",
      en: "I manage server state and data caching."
    },      
    fullDescription:{
      ru: "Использую React Query для работы с серверным состоянием, кэшированием, повторными запросами и синхронизацией данных. Это позволяет упростить логику и повысить стабильность приложений.",
      en: "I use React Query to work with server state, caching, refetching, and data synchronization. This simplifies logic and improves application stability."
    },
    image: "@/public/react-query-icon.svg",
  },
  {
    id: 10,
    name: "Git",
    type: "Version control",
    shortDescription:{
      ru: "Основной инструмент контроля версий в командной разработке.",
      en: "Main version control tool for team development."
    },      
    fullDescription:{
      ru: "Использую Git для повседневной разработки: работа с ветками, pull request, code review и разрешение конфликтов. Следую Git Flow и командным процессам.",
      en: "I use Git for daily development: working with branches, pull requests, code reviews, and conflict resolution. I follow Git Flow and team processes."
    },
    image: "@/public/git-icon.svg",
  },
  {
    id: 11,
    name: "GitHub",
    type: "Version control",
    shortDescription:{
      ru: "Использую GitHub для командной разработки и CI/CD.",
      en: "I use GitHub for team development and CI/CD."
    },      
    fullDescription:{
      ru: "Работаю с GitHub для ведения репозиториев, code review и автоматизации процессов. Использую issues, pull requests и CI для поддержки качества кода.",
      en: "I work with GitHub to manage repositories, code reviews, and process automation. I use issues, pull requests, and CI to maintain code quality."
    },
    image: "@/public/github-icon.svg",
  },
  {
    id: 12,
    name: "Bitbucket",
    type: "Version control",
    shortDescription:{
      ru: "Использую Bitbucket в корпоративных проектах.",
      en: "I use Bitbucket in enterprise projects."
    },      
    fullDescription:{
      ru: "Работал с Bitbucket в командных и корпоративных проектах, используя pull request, code review и интеграцию с CI/CD пайплайнами.",
      en: "I worked with Bitbucket in team and enterprise projects, using pull requests, code reviews, and CI/CD pipeline integration."
    },
    image: "@/public/bb-icon.svg",
  },
  {
    id: 13,
    name: "Material UI",
    type: "UI libraries",
    shortDescription:{
      ru: "Использую готовые UI-компоненты для ускорения разработки.",
      en: "I use ready-made UI components to speed up development."
    },      
    fullDescription:{
      ru: "Работаю с Material UI для создания интерфейсов на основе готовых компонентов. Кастомизирую темы и компоненты под требования дизайн-системы проекта.",
      en: "I work with Material UI to create interfaces based on ready-made components. I customize themes and components to meet project design system requirements."
    },
    image: "@/public/material-ui-icon.svg",
  },
  {
    id: 14,
    name: "Material-tailwind",
    type: "UI libraries",
    shortDescription:{
      ru: "Комбинирую Tailwind и готовые UI-решения.",
      en: "I combine Tailwind with ready-made UI solutions."
    },      
    fullDescription:{
      ru: "Использую Material Tailwind для быстрого создания интерфейсов с сохранением гибкости Tailwind. Подходит для проектов с ограниченными сроками и готовыми дизайн-гайдами.",
      en: "I use Material Tailwind to quickly create interfaces while maintaining Tailwind's flexibility. Suitable for projects with tight deadlines and ready-made design guides."
    },
    image: "@/public/material-tailwind-icon.svg",
  },
  {
    id: 15,
    name: "Shadcn UI",
    type: "UI libraries",
    shortDescription:{
      ru: "Создаю гибкие интерфейсы на базе headless-компонентов.",
      en: "I create flexible interfaces based on headless components."
    },      
    fullDescription:{
      ru: "Использую Shadcn UI для построения кастомных интерфейсов поверх headless-компонентов. Позволяет сохранить контроль над стилями и логикой без привязки к жёсткой UI-библиотеке.",
      en: "I use Shadcn UI to build custom interfaces on top of headless components. It allows maintaining control over styles and logic without being tied to a rigid UI library."
    },
    image: "@/public/shadcn-ui-icon.svg",
  },
  {
    id: 16,
    name: "AntDesign",
    type: "UI libraries",
    shortDescription:{
      ru: "Использую Ant Design в корпоративных и B2B-продуктах.",
      en: "I use Ant Design in enterprise and B2B products."
    },      
    fullDescription:{
      ru: "Работал с Ant Design при разработке сложных административных и корпоративных интерфейсов. Использую готовые компоненты, таблицы и формы для ускорения разработки.",
      en: "I worked with Ant Design when developing complex administrative and enterprise interfaces. I use ready-made components, tables, and forms to speed up development."
    },
    image: "@/public/antdesign-icon.svg",
  },
  {
    id: 17,
    name: "Framer Motion",
    type: "UI libraries",
    shortDescription:{
      ru: "Добавляю анимации и интерактивность интерфейсам.",
      en: "I add animations and interactivity to interfaces."
    },      
    fullDescription:{
      ru: "Использую Framer Motion для создания плавных анимаций и интерактивных переходов. Помогает улучшить пользовательский опыт без ущерба для производительности.",
      en: "I use Framer Motion to create smooth animations and interactive transitions. It helps improve user experience without compromising performance."
    },
    image: "@/public/framer-motion-icon.svg",
  },
  {
    id: 18,
    name: "Nginx",
    type: "Deploy",
    shortDescription:{
      ru: "Использую для настройки веб-серверов и проксирования.",
      en: "I use it for configuring web servers and proxying."
    },      
    fullDescription:{
      ru: "Работал с Nginx для настройки серверов, проксирования запросов и раздачи статических файлов. Понимаю базовые принципы конфигурации и взаимодействия с frontend-приложениями.",
      en: "I worked with Nginx to configure servers, proxy requests, and serve static files. I understand the basic principles of configuration and interaction with frontend applications."
    },
    image: "@/public/nginx-icon.svg",
  },
  {
    id: 19,
    name: "Docker",
    type: "Deploy",
    shortDescription:{
      ru: "Использую Docker для стандартизации окружений.",
      en: "I use Docker to standardize environments."
    },      
    fullDescription:{
      ru: "Применяю Docker для контейнеризации frontend-приложений и упрощения локальной разработки и деплоя. Позволяет обеспечить связанность окружений между разработкой и продакшеном.",
      en: "I use Docker to containerize frontend applications and simplify local development and deployment. It ensures consistency between development and production environments."
    },
    image: "@/public/docker-icon.svg",
  },
];
