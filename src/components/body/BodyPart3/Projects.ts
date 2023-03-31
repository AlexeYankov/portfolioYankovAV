import style from "../BodyPart3/BodyPart3.module.css";

export type ProjectsType = {
  container: string;
  renderStyle: string; 
  projectTextStyle: string;
  projectName: string;
  projectPicture: string;
  desctiptionStyle: string;
  desctiptionFeatures: Array<string>;
  reversed?: boolean;
  repo: string;
  demo: string;
  buttonsStyleCode: string;
  buttonsStyleDemo: string;
  buttonsContainer: string;
  scrollStatus: number;
};

const scrollStatusTop = 1400;
const scrollStatusTop1 = 1800;
const scrollStatusBottom = 2000;
const scrollStatusBottom1 = 2400;

export const projects: ProjectsType[] = [
  {
    container: style.bodySub3part3,
    renderStyle: style._active1,
    projectPicture: `${
      style.bodySub3part5 + " " + style._projectSpecificSocialNetwork
    }`,
    desctiptionStyle: style.projectSocialNetworkText,
    projectTextStyle: style.projectSocialNetwork,
    projectName: "Social network",
    desctiptionFeatures: [
      "1. Custom design.",
      "2. CRUD operations.",
      "3. REST API.",
      "4. TypeScript Application.",
    ],
    reversed: true,
    repo: "https://github.com/AlexeYankov/samuraiway",
    demo: "https://alexeyankov.github.io/samuraiway/",
    buttonsStyleCode: style.buttonsStyleCode,
    buttonsStyleDemo: style.buttonsStyleDemo,
    buttonsContainer: style.buttonsContainer,
    scrollStatus: scrollStatusTop,
  },
  {
    container: style.bodySub3part4,
    renderStyle: style._active1,
    projectPicture: `${
      style.bodySub3part5 + " " + style._projectSpecificCards
    }`,
    desctiptionStyle: style.projectSocialNetworkText,
    projectTextStyle: style.projectSocialNetwork,
    projectName: "Cards",
    desctiptionFeatures: [
      "1. Teamwork.",
      "2. Material UI.",
      "3. REST API.",
      "4. TypeScript & Axios & CSS.",
    ],
    repo: "https://github.com/Chernik1991/cards",
    demo: "https://chernik1991.github.io/cards/",
    buttonsStyleCode: style.buttonsStyleCode,
    buttonsStyleDemo: style.buttonsStyleDemo,
    buttonsContainer: style.buttonsContainer,
    scrollStatus: scrollStatusTop1,
  },
  {
    container: style.bodySub3part3,
    renderStyle: style._active2,
    projectPicture: `${style.bodySub3part5 + " " + style._projectSpecificToDo}`,
    desctiptionStyle: style.projectSocialNetworkText,
    projectTextStyle: style.projectSocialNetwork,
    projectName: "To do",
    desctiptionFeatures: [
      "1. REST API requests.",
      "2. Redux, thunks, middleware.",
      "3. LAN and CRUD errors.",
      "4. Material UI.",
    ],
    reversed: true,
    repo: "https://github.com/AlexeYankov/Todolist",
    demo: "https://alexeyankov.github.io/Todolist/",
    buttonsStyleCode: style.buttonsStyleCode,
    buttonsStyleDemo: style.buttonsStyleDemo,
    buttonsContainer: style.buttonsContainer,
    scrollStatus: scrollStatusBottom,
  },
  {
    container: style.bodySub3part4,
    renderStyle: style._active2,
    projectPicture: `${
      style.bodySub3part5 + " " + style._projectSpecificHomeworks
    }`,
    desctiptionStyle: style.projectSocialNetworkText,
    projectTextStyle: style.projectSocialNetwork,
    projectName: "Hello world!",
    desctiptionFeatures: [
      "1. React components.",
      "2. React hooks.",
      "3. GIT.",
      "4. React Router DOM v5-6.",
    ],
    repo: "https://github.com/AlexeYankov/Homework",
    demo: "https://alexeyankov.github.io/Homework/",
    buttonsStyleCode: style.buttonsStyleCode,
    buttonsStyleDemo: style.buttonsStyleDemo,
    buttonsContainer: style.buttonsContainer,
    scrollStatus: scrollStatusBottom1,
  },
];

export default projects;
