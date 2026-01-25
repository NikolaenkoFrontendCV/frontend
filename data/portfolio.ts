import { JSX } from "react";
import * as content from "./cases-content";

export type caseType = {
  id: number;
  title: string;
  description: {
    ru: string;
    en: string;
  };
  imageSrc: string;
  content: ({ lang }: { lang: "ru" | "en" }) => JSX.Element;
};

export const portfolioData: caseType[] = [
  {
    id: 0,
    title: "DialTrace",
    description: {
      ru: "Платформа для мониторинга активности мобильных устройств, выявления спам-звонков и анализа операторов связи. Отвечал за разработку двух аналитических дашбордов, интеграцию в существующую систему пользователей и оптимизацию производительности. Проектировал UI/UX, архитектуру приложения и подбирал технологический стек.",
      en: "A platform for monitoring mobile device activity, detecting spam calls, and analyzing telecom operators. I was responsible for developing two analytics dashboards, integrating the platform into the existing user system, and optimizing performance. I designed the UI/UX, application architecture, and selected the technology stack.",
    },
    imageSrc: "/dialtrace.jpg",
    content: content.DialTraceCase,
  },
  {
    id: 1,
    title: "PZKgroup",
    description: {
      ru: "Редизайн и разработка сайта компании PZK Group, занимающейся подсветкой загородных домов. Старый сайт имел устаревший интерфейс и практически нулевую конверсию. В результате был создан новый сайт с сохранением айдентики, интеграцией нейросети и ростом конверсии до 5% в сезон.",
      en: "A full redesign and development of the PZK Group website, a company specializing in country house lighting. The old website had outdated UI and near-zero conversion. The new website preserved brand identity, integrated AI features, and increased conversion up to 5% during peak season.",
    },
    imageSrc: "/pzkgroup.jpg",
    content: content.PZKgroupCase,
  },
  {
    id: 2,
    title: "Cyberzion",
    description: {
      ru: "Корпоративный сайт компании Cyberzion, разработанный с нуля на современном стеке. Отвечал за архитектуру проекта, верстку по Figma, интеграцию с backend, создание UI-kit и настройку CI/CD с последующим деплоем.",
      en: "A corporate website for Cyberzion built from scratch using a modern frontend stack. I was responsible for project architecture, Figma-based layout, backend integration, UI kit creation, and CI/CD setup with deployment.",
    },
    imageSrc: "/cyberzion.jpg",
    content: content.CyberzionCase,
  },
  {
    id: 3,
    title: "Exchange",
    description: {
      ru: "Веб-приложение для обмена валют с миграцией со статической верстки на современный React-стек. Выполнил перенос интерфейсов, интеграцию с backend, адаптацию под новый дизайн и настройку CI/CD с деплоем.",
      en: "A currency exchange web application migrated from static HTML/CSS/JS to a modern React-based stack. I handled UI migration, backend integration, layout updates based on a new design, and CI/CD setup with deployment.",
    },
    imageSrc: "/exchange.jpg",
    content: content.DialTraceCase,
  },
];
