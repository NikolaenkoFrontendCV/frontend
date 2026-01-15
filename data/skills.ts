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
    shortDescription: "Lorem ipsum dolor sit amet consectetur.",
    fullDescription:
      "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.",
    image: "@/public/html-icon.svg",
  },
  {
    id: 1,
    name: "CSS",
    type: "Layout",
    shortDescription: "Lorem ipsum dolor sit amet consectetur.",
    fullDescription:
      "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.",
    image: "@/public/css-icon.svg",
  },
  {
    id: 2,
    name: "JavaScript",
    type: "Languages",
    shortDescription: "Lorem ipsum dolor sit amet consectetur.",
    fullDescription:
      "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.",
    image: "@/public/js-icon.svg",
  },
  {
    id: 3,
    name: "TypeScript",
    type: "Languages",
    shortDescription: "Lorem ipsum dolor sit amet consectetur.",
    fullDescription:
      "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.",
    image: "@/public/ts-icon.svg",
  },
  {
    id: 4,
    name: "Sass",
    type: "Layout",
    shortDescription: "Lorem ipsum dolor sit amet consectetur.",
    fullDescription:
      "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.",
    image: "@/public/sass-icon.svg",
  },
  {
    id: 5,
    name: "Figma",
    type: "Other",
    shortDescription: "Lorem ipsum dolor sit amet consectetur.",
    fullDescription:
      "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.",
    image: "@/public/figma-icon.svg",
  },
  {
    id: 6,
    name: "React",
    type: "Frameworks",
    shortDescription: "Lorem ipsum dolor sit amet consectetur.",
    fullDescription:
      "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.",
    image: "@/public/react-icon.svg",
  },
  {
    id: 7,
    name: "Next.js",
    type: "Frameworks",
    shortDescription: "Lorem ipsum dolor sit amet consectetur.",
    fullDescription:
      "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.",
    image: "@/public/next-icon.svg",
  },
  {
    id: 8,
    name: "Redux",
    type: "State managers",
    shortDescription: "Lorem ipsum dolor sit amet consectetur.",
    fullDescription:
      "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.",
    image: "@/public/redux-icon.svg",
  },
  {
    id: 9,
    name: "React Query",
    type: "State managers",
    shortDescription: "Lorem ipsum dolor sit amet consectetur.",
    fullDescription:
      "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.",
    image: "@/public/react-query-icon.svg",
  },
  {
    id: 10,
    name: "Git",
    type: "Version control",
    shortDescription: "Lorem ipsum dolor sit amet consectetur.",
    fullDescription:
      "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.",
    image: "@/public/git-icon.svg",
  },
  {
    id: 11,
    name: "GitHub",
    type: "Version control",
    shortDescription: "Lorem ipsum dolor sit amet consectetur.",
    fullDescription:
      "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.",
    image: "@/public/github-icon.svg",
  },
  {
    id: 12,
    name: "Bitbucket",
    type: "Version control",
    shortDescription: "Lorem ipsum dolor sit amet consectetur.",
    fullDescription:
      "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.",
    image: "@/public/bb-icon.svg",
  },
  {
    id: 13,
    name: "Material UI",
    type: "UI libraries",
    shortDescription: "Lorem ipsum dolor sit amet consectetur.",
    fullDescription:
      "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.",
    image: "@/public/material-ui-icon.svg",
  },
  {
    id: 14,
    name: "Material-tailwind",
    type: "UI libraries",
    shortDescription: "Lorem ipsum dolor sit amet consectetur.",
    fullDescription:
      "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.",
    image: "@/public/material-tailwind-icon.svg",
  },
  {
    id: 15,
    name: "Shadcn UI",
    type: "UI libraries",
    shortDescription: "Lorem ipsum dolor sit amet consectetur.",
    fullDescription:
      "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.",
    image: "@/public/shadcn-ui-icon.svg",
  },
  {
    id: 16,
    name: "AntDesign",
    type: "UI libraries",
    shortDescription: "Lorem ipsum dolor sit amet consectetur.",
    fullDescription:
      "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.",
    image: "@/public/antdesign-icon.svg",
  },
  {
    id: 17,
    name: "Nginx",
    type: "Deploy",
    shortDescription: "Lorem ipsum dolor sit amet consectetur.",
    fullDescription:
      "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.",
    image: "@/public/nginx-icon.svg",
  },
  {
    id: 18,
    name: "Docker",
    type: "Deploy",
    shortDescription: "Lorem ipsum dolor sit amet consectetur.",
    fullDescription:
      "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.",
    image: "@/public/docker-icon.svg",
  },
];
