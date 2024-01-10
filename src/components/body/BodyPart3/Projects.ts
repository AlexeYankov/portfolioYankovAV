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
      style.bodySub3part5 + " " + style._projectSpecificHomeworks
    }`,
    desctiptionStyle: style.projectSocialNetworkText,
    projectTextStyle: style.projectSocialNetwork,
    projectName: "Inctagram",
    desctiptionFeatures: [
      "1. Next js.",
      "2. Next intl.",
      "3. Server side generation content.",
      "4. SCRUM Agile, Jira.",
    ],
    reversed: true,
    repo: "https://github.com/FightersForJustice/Inctagram-Next-AppDir?tab=readme-ov-file",
    demo: "https://inctagramm.vercel.app",
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
    projectName: "Flash Cards",
    desctiptionFeatures: [
      "1. Teamwork Git.",
      "2. Radix UI, Storybook.",
      "3. RTK Query, Postman.",
      "4. TypeScript and Axios.",
    ],
    repo: "https://github.com/AlexeYankov/LearningCards",
    demo: "https://learning-cards-beige.vercel.app",
    buttonsStyleCode: style.buttonsStyleCode,
    buttonsStyleDemo: style.buttonsStyleDemo,
    buttonsContainer: style.buttonsContainer,
    scrollStatus: scrollStatusTop1,
  },
  {
    container: style.bodySub3part3,
    renderStyle: style._active2,
    projectPicture: `${style.bodySub3part5 + " " + style._projectSpecificSocialNetwork}`,
    desctiptionStyle: style.projectSocialNetworkText,
    projectTextStyle: style.projectSocialNetwork,
    projectName: "Buddy",
    desctiptionFeatures: [
      "1. Custom design Figma.",
      "2. CRUD operations.",
      "3. REST API.",
      "4. TypeScript Application.",
    ],
    reversed: true,
    repo: "https://github.com/AlexeYankov/todoWIthToolkit",
    demo: "https://alexeyankov.github.io/todoWIthToolkit",
    buttonsStyleCode: style.buttonsStyleCode,
    buttonsStyleDemo: style.buttonsStyleDemo,
    buttonsContainer: style.buttonsContainer,
    scrollStatus: scrollStatusBottom,
  },
  {
    container: style.bodySub3part4,
    renderStyle: style._active2,
    projectPicture: `${
      style.bodySub3part5 + " " + style._projectSpecificToDo
    }`,
    desctiptionStyle: style.projectSocialNetworkText,
    projectTextStyle: style.projectSocialNetwork,
    projectName: "Task manager",
    desctiptionFeatures: [
      "1. Redux Toolkit.",
      "2. Websocket io.",
      "3. Node js, Express.",
      "4. PostgreSQL, pgAdmin.",
    ],
    
    repo: "https://github.com/AlexeYankov/todoWIthToolkit",
    demo: "https://alexeyankov.github.io/todoWIthToolkit",
    buttonsStyleCode: style.buttonsStyleCode,
    buttonsStyleDemo: style.buttonsStyleDemo,
    buttonsContainer: style.buttonsContainer,
    scrollStatus: scrollStatusBottom1,
  },
 
];

export default projects;
