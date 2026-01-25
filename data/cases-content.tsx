export function DialTraceCase({ lang }: { lang: "en" | "ru" }) {
  if (lang === "ru") {
    return (
      <div className="flex flex-col gap-5">
        <h3>DialTrace Platform</h3>
        <p>
          Аналитическая B2B-платформа для мониторинга активности мобильных
          устройств, выявления спам-звонков и анализа данных операторов связи.
          Проект был интегрирован в существующую пользовательскую систему
          компании с учетом ролей и прав доступа.
        </p>

        <h4>Что было сделано</h4>
        <ul>
          <li>
            разработал <strong>два аналитических дашборда</strong> для
            мониторинга активности и анализа спам-звонков;
          </li>
          <li>
            спроектировал <em>UI/UX</em> интерфейсов с упором на удобство работы
            с большими объемами данных;
          </li>
          <li>
            участвовал в проектировании архитектуры frontend-приложения и
            структуры данных;
          </li>
          <li>
            подобрал технологический стек и UI-библиотеки под требования
            высоконагруженной системы;
          </li>
          <li>
            интегрировал платформу в существующую систему пользователей с ролями
            и доступами.
          </li>
        </ul>

        <h4>Оптимизация и результат</h4>
        <ul>
          <li>оптимизировал загрузку данных и рендеринг компонентов;</li>
          <li>
            снизил время загрузки интерфейсов на
            <strong> ~20%</strong>.
          </li>
        </ul>

        <p>
          <strong>Стек:</strong>{" "}
          <em>
            React, Next.js, TypeScript, Redux Toolkit, TanStack Query,
            WebSocket, SCSS, Webpack, Chart.js
          </em>
        </p>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col gap-5">
        <h3>DialTrace Platform</h3>
        <p>
          A B2B analytics platform for monitoring mobile device activity,
          detecting spam calls, and analyzing telecom operator data. The project
          was integrated into the company’s existing user management system with
          role-based access.
        </p>

        <h4>What I worked on</h4>
        <ul>
          <li>
            developed <strong>two analytics dashboards</strong> for activity
            monitoring and spam detection;
          </li>
          <li>
            designed <em>UI/UX</em> with a focus on usability and large data
            volumes;
          </li>
          <li>
            participated in frontend architecture and data structure design;
          </li>
          <li>
            selected the technology stack and UI libraries for a high-load
            system;
          </li>
          <li>
            integrated the platform into the existing user system with roles and
            permissions.
          </li>
        </ul>

        <h4>Optimization & results</h4>
        <ul>
          <li>optimized data loading and component rendering;</li>
          <li>
            reduced interface load time by
            <strong> approximately 20%</strong>.
          </li>
        </ul>

        <p>
          <strong>Stack:</strong>{" "}
          <em>
            React, Next.js, TypeScript, Redux Toolkit, TanStack Query,
            WebSocket, SCSS, Webpack, Chart.js
          </em>
        </p>
      </div>
    );
  }
}

export function PZKgroupCase({ lang }: { lang: "en" | "ru" }) {
  if (lang === "ru") {
    return (
      <div className="flex flex-col gap-5">
        <h3>PZK Group Website</h3>
        <p>
          Корпоративный сайт компании PZK Group, специализирующейся на подсветке
          загородных домов. Изначальный сайт имел устаревший дизайн, плохой UX и
          практически нулевую конверсию, что негативно влияло на
          бизнес-показатели.
        </p>

        <h4>Задача проекта</h4>
        <ul>
          <li>полностью переработать сайт с нуля;</li>
          <li>
            сохранить айдентику бренда и семантическое ядро старого сайта;
          </li>
          <li>улучшить пользовательский опыт и конверсию.</li>
        </ul>

        <h4>Реализация</h4>
        <ul>
          <li>
            совместно с командой переработал дизайн и пользовательские сценарии;
          </li>
          <li>разработал новый frontend сайта;</li>
          <li>
            интегрировал нейросеть для генерации изображений домов с подсветкой;
          </li>
          <li>оптимизировал SEO и структуру страниц.</li>
        </ul>

        <h4>Результат</h4>
        <ul>
          <li>
            рост конверсии до
            <strong> 5%</strong> в сезонное время;
          </li>
          <li>современный UI и улучшенный пользовательский опыт;</li>
          <li>повышение вовлеченности пользователей.</li>
        </ul>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col gap-5">
        <h3>PZK Group Website</h3>
        <p>
          A corporate website for PZK Group, a company specializing in country
          house lighting solutions. The original website had outdated design,
          poor UX, and near-zero conversion, negatively affecting business
          performance.
        </p>

        <h4>Project goals</h4>
        <ul>
          <li>completely redesign and rebuild the website from scratch;</li>
          <li>preserve brand identity and existing semantic SEO core;</li>
          <li>improve user experience and conversion rate.</li>
        </ul>

        <h4>Implementation</h4>
        <ul>
          <li>worked with the team to redesign UI and user flows;</li>
          <li>developed the new frontend of the website;</li>
          <li>
            integrated AI-based image generation for visualizing house lighting;
          </li>
          <li>optimized SEO and page structure.</li>
        </ul>

        <h4>Results</h4>
        <ul>
          <li>
            increased conversion rate up to
            <strong> 5%</strong> during peak season;
          </li>
          <li>modern UI and significantly improved UX;</li>
          <li>higher user engagement and lead generation.</li>
        </ul>
      </div>
    );
  }
}

export function CyberzionCase({ lang }: { lang: "en" | "ru" }) {
  if (lang === "ru") {
    return (
      <div className="flex flex-col gap-5">
        <h3>Cyberzion Company Website</h3>
        <p>
          Корпоративный сайт компании <strong>Cyberzion</strong>, разработанный
          с нуля как масштабируемая платформа для презентации услуг и
          дальнейшего развития продуктовой линейки компании.
        </p>

        <h4>Задачи проекта</h4>
        <ul>
          <li>проектирование архитектуры frontend-приложения;</li>
          <li>
            верстка сайта по дизайн-макетам из <em>Figma</em>;
          </li>
          <li>интеграция frontend-части с backend-сервисами;</li>
          <li>
            разработка <strong>UI Kit</strong> для переиспользования компонентов
            и масштабирования сайта;
          </li>
          <li>настройка CI/CD пайплайнов и деплой проекта.</li>
        </ul>

        <h4>Особенности реализации</h4>
        <ul>
          <li>
            использование анимаций для улучшения пользовательского опыта
            <em> (Framer Motion, AOS)</em>;
          </li>
          <li>единый подход к стилям с использованием Tailwind и SCSS;</li>
          <li>подготовка проекта к дальнейшему расширению.</li>
        </ul>

        <p>
          <strong>Стек:</strong>{" "}
          <em>Next.js, Tailwind CSS, SCSS, Framer Motion, AOS, Redux</em>
        </p>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col gap-5">
        <h3>Cyberzion Company Website</h3>
        <p>
          A corporate website for <strong>Cyberzion</strong>, developed from
          scratch as a scalable platform for showcasing company services and
          supporting future product growth.
        </p>

        <h4>Project responsibilities</h4>
        <ul>
          <li>designing the frontend application architecture;</li>
          <li>
            implementing layouts based on <em>Figma</em> designs;
          </li>
          <li>integrating frontend with backend services;</li>
          <li>
            creating a <strong>UI Kit</strong> for component reuse and long-term
            scalability;
          </li>
          <li>setting up CI/CD pipelines and deploying the project.</li>
        </ul>

        <h4>Implementation highlights</h4>
        <ul>
          <li>
            enhancing user experience with animations
            <em> (Framer Motion, AOS)</em>;
          </li>
          <li>combining Tailwind CSS and SCSS for consistent styling;</li>
          <li>preparing the codebase for future expansion.</li>
        </ul>

        <p>
          <strong>Stack:</strong>{" "}
          <em>Next.js, Tailwind CSS, SCSS, Framer Motion, AOS, Redux</em>
        </p>
      </div>
    );
  }
}

export function ExchangeCase({ lang }: { lang: "en" | "ru" }) {
  if (lang === "ru") {
    return (
      <div className="flex flex-col gap-5">
        <h3>Exchange Platform</h3>
        <p>
          Веб-приложение для обмена валют, изначально реализованное в виде
          статической верстки на <em>HTML, CSS и JavaScript</em>. Проект
          требовал перехода на современный frontend-стек для улучшения поддержки
          и масштабируемости.
        </p>

        <h4>Задачи проекта</h4>
        <ul>
          <li>
            перенос существующей статической верстки на
            <strong> React</strong>-приложение;
          </li>
          <li>
            внедрение современного стека
            <em> (React, Tailwind CSS, SCSS, Redux)</em>;
          </li>
          <li>интеграция frontend-приложения с backend-сервисами;</li>
          <li>адаптация интерфейсов под обновленные дизайн-макеты;</li>
          <li>настройка CI/CD и деплой проекта.</li>
        </ul>

        <h4>Результат</h4>
        <ul>
          <li>повышена поддерживаемость и читаемость кода;</li>
          <li>улучшена масштабируемость интерфейсов;</li>
          <li>обновленный UI, соответствующий новому дизайну.</li>
        </ul>

        <p>
          <strong>Стек:</strong>{" "}
          <em>React, React Router, Tailwind CSS, SCSS, Redux</em>
        </p>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col gap-5">
        <h3>Exchange Platform</h3>
        <p>
          A currency exchange web application that was originally built as a
          static website using <em>HTML, CSS, and JavaScript</em>. The project
          required a full migration to a modern frontend stack to improve
          maintainability and scalability.
        </p>

        <h4>Project tasks</h4>
        <ul>
          <li>
            migrating existing static layouts into a<strong> React</strong>{" "}
            application;
          </li>
          <li>
            adopting a modern stack
            <em> (React, Tailwind CSS, SCSS, Redux)</em>;
          </li>
          <li>integrating frontend with backend services;</li>
          <li>updating layouts according to new design mockups;</li>
          <li>setting up CI/CD pipelines and deploying the project.</li>
        </ul>

        <h4>Results</h4>
        <ul>
          <li>improved code maintainability and structure;</li>
          <li>enhanced scalability of the application;</li>
          <li>updated UI aligned with the new design system.</li>
        </ul>

        <p>
          <strong>Stack:</strong>{" "}
          <em>React, React Router, Tailwind CSS, SCSS, Redux</em>
        </p>
      </div>
    );
  }
}
