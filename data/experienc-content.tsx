"use client";

export type Lang = "ru" | "en";

export function ExperienceCyberzion({ lang }: { lang: Lang }) {
  if (lang === "ru") {
    return (
      <div className="flex flex-col gap-4">
        <h3>Cyberzion</h3>
        <p>
          <strong>Middle Frontend Developer</strong> · 2023–2024
        </p>

        <p>
          В компании <strong>Cyberzion</strong> участвовал в разработке и
          развитии финтех-продуктов, включая систему обмена валют и
          корпоративный сайт. Основной фокус был направлен на улучшение
          пользовательского опыта и переход на современный frontend-стек.
        </p>

        <h4>Основные задачи</h4>
        <ul>
          <li>доработка и улучшение интерфейсов системы обмена валют;</li>
          <li>интеграция frontend-части с backend-сервисами;</li>
          <li>
            миграция со стека <em>HTML / CSS / JavaScript</em> на
            <em> Next.js, Tailwind и SCSS</em>;
          </li>
        </ul>

        <h4>Корпоративный сайт</h4>
        <ul>
          <li>разработка пользовательских интерфейсов;</li>
          <li>реализация и оптимизация анимаций;</li>
          <li>оптимизация загрузки данных через REST API.</li>
        </ul>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col gap-4">
        <h3>Cyberzion</h3>
        <p>
          <strong>Middle Frontend Developer</strong> · 2023–2024
        </p>

        <p>
          At <strong>Cyberzion</strong>, I worked on fintech products, including
          a currency exchange system and the company’s corporate website. My
          main focus was improving user experience, performance, and migrating
          projects to a modern frontend stack.
        </p>

        <h4>Key responsibilities</h4>
        <ul>
          <li>
            enhancing and refining the UI of the currency exchange platform;
          </li>
          <li>integrating frontend applications with backend services;</li>
          <li>
            migrating projects from <em>HTML / CSS / JavaScript</em> to
            <em> Next.js, Tailwind, and SCSS</em>;
          </li>
        </ul>

        <h4>Corporate website</h4>
        <ul>
          <li>developing user interfaces;</li>
          <li>implementing and optimizing animations;</li>
          <li>optimizing data loading via REST API.</li>
        </ul>
      </div>
    );
  }
}

export function ExperienceCallerIdReputation({ lang }: { lang: Lang }) {
  if (lang === "ru") {
    return (
      <div className="flex flex-col gap-4">
        <h3>DialTrace</h3>
        <p>
          <strong>Middle Frontend Developer</strong> · 2024–2025
        </p>

        <p>
          DialTrace — внутренняя система мониторинга активности мобильных
          устройств для компании <strong>CallerIdReputation</strong>. Система
          агрегирует данные от нескольких операторов связи, выявляет спам- и
          аномальную активность и формирует репутацию телефонных номеров в
          режиме, близком к реальному времени.
        </p>

        <h4>Зона ответственности</h4>
        <ul>
          <li>проектирование архитектуры и структуры frontend-приложения;</li>
          <li>
            внедрение <em>FSD-подхода</em> для масштабируемости и поддержки;
          </li>
          <li>разработка интерфейсов мониторинга и аналитики;</li>
          <li>создание сложных форм управления данными с валидацией;</li>
          <li>разработка переиспользуемых UI-компонентов.</li>
        </ul>

        <h4>Технические задачи</h4>
        <ul>
          <li>интеграция с backend через REST API и WebSocket;</li>
          <li>
            оптимизация загрузки данных и рендеринга
            <em> (−20% времени загрузки)</em>;
          </li>
          <li>покрытие кода тестами (Jest, React Testing Library);</li>
          <li>code review с упором на DRY, KISS, SOLID;</li>
          <li>работа в CI/CD, Git Flow и Docker-окружении.</li>
        </ul>

        <p>
          <strong>Стек:</strong>{" "}
          <em>
            React, Next.js, TypeScript, Redux Toolkit, TanStack Query, React
            Hook Form, Zod, SCSS, Webpack, Chart.js
          </em>
        </p>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col gap-4">
        <h3>DialTrace</h3>
        <p>
          <strong>Middle Frontend Developer</strong> · 2024–2025
        </p>

        <p>
          DialTrace is an internal mobile activity monitoring system developed
          for
          <strong> CallerIdReputation</strong>. The platform aggregates data
          from multiple telecom operators, detects spam and anomalous activity,
          and builds phone number reputation in near real time.
        </p>

        <h4>Responsibilities</h4>
        <ul>
          <li>designing frontend architecture and application structure;</li>
          <li>
            implementing the <em>FSD approach</em> for scalability and
            maintainability;
          </li>
          <li>developing monitoring and analytics interfaces;</li>
          <li>building complex data management forms with validation;</li>
          <li>creating reusable UI components for internal services.</li>
        </ul>

        <h4>Technical tasks</h4>
        <ul>
          <li>integrating with backend services via REST API and WebSocket;</li>
          <li>
            optimizing data loading and rendering
            <em> (20% faster load time)</em>;
          </li>
          <li>writing and maintaining tests (Jest, React Testing Library);</li>
          <li>
            conducting code reviews with focus on DRY, KISS, and SOLID
            principles;
          </li>
          <li>
            working within CI/CD pipelines, Git Flow, and Docker environments.
          </li>
        </ul>

        <p>
          <strong>Stack:</strong>{" "}
          <em>
            React, Next.js, TypeScript, Redux Toolkit, TanStack Query, React
            Hook Form, Zod, SCSS, Webpack, Chart.js
          </em>
        </p>
      </div>
    );
  }
}

export function ExperienceFreelance({ lang }: { lang: Lang }) {
  if (lang === "ru") {
    return (
      <div className="flex flex-col gap-4">
        <h3>Фриланс</h3>
        <p>
          <strong>Frontend Developer</strong> · 2022–2024
        </p>

        <p>
          Работал над образовательными и корпоративными веб-проектами — от
          интерфейсов приложений до коммерческих сайтов, уделяя внимание
          производительности и бизнес-результатам.
        </p>

        <h4>Проекты и задачи</h4>
        <ul>
          <li>разработка интерфейсов образовательных веб-приложений;</li>
          <li>участие в межуниверситетских проектах для студентов;</li>
          <li>оптимизация производительности рендеринга;</li>
          <li>
            интеграция платёжных систем <em>(ЮKassa)</em>.
          </li>
        </ul>

        <h4>Сайт компании PZK</h4>
        <ul>
          <li>
            обновление пользовательского интерфейса
            <em> (+40% к конверсии)</em>;
          </li>
          <li>интеграция генерации изображений с использованием нейросети;</li>
          <li>
            SEO-оптимизация
            <em> (+5 позиций в поисковой выдаче)</em>;
          </li>
          <li>интеграция сайта с CRM-системой.</li>
        </ul>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col gap-4">
        <h3>Freelance</h3>
        <p>
          <strong>Frontend Developer</strong> · 2022–2024
        </p>

        <p>
          Worked on educational and corporate web projects, ranging from
          application interfaces to commercial websites, with a strong focus on
          performance and business outcomes.
        </p>

        <h4>Projects and tasks</h4>
        <ul>
          <li>building interfaces for educational web applications;</li>
          <li>contributing to inter-university student platforms;</li>
          <li>optimizing rendering performance;</li>
          <li>
            integrating payment systems <em>(YooKassa)</em>.
          </li>
        </ul>

        <h4>PZK corporate website</h4>
        <ul>
          <li>
            redesigning the user interface
            <em> (40% conversion increase)</em>;
          </li>
          <li>integrating AI-based image generation;</li>
          <li>
            improving SEO
            <em> (+5 positions in search rankings)</em>;
          </li>
          <li>integrating the website with an existing CRM system.</li>
        </ul>
      </div>
    );
  }
}
