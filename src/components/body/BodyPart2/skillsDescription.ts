import style from "../BodyPart2/BodyPart2.module.css";
import html from "../../../imges/skills/HTML5.png";
import css from "../../../imges/skills/CSS3.png";
import git from "../../../imges/skills/git.png";
import gulp from "../../../imges/skills/gulp.png";
import javaScript from "../../../imges/skills/JS.png";
import typeScript from "../../../imges/skills/TS.png";
import react from "../../../imges/skills/React-icon.svg.png";
import redux from "../../../imges/skills/redux.png";
import webpack from "../../../imges/skills/webpack.png";
import sass from "../../../imges/skills/sass.png";
import restapi from "../../../imges/skills/REST.webp";
import mui from "../../../imges/skills/material-ui.png";

export type SkillsTypes = {
  id: number;
  title: string;
  picture: string;
  description: string;
  pictureStyle: string;
  descriptionStyle: string;
  descriptionStyleEdditional?: string;
  pictureStyleEdditional?: string;
  animationStyle: string;
  animationStyleActive: string;
  scrollStatus: number;
  skillStars: number;
  half?: boolean;
  starsContainerStyle: string;
};

const pictureStyleNormal = style.bodySub2part4PictureLeft1;
const descriptionStyleNormal = style.bodySub2part4DescriptionLeft1;
const animationStyleNormal = style.animationSkillsHTML;
const animationStyleNormalRigth = style.animationSkillsJS;
const scrollStatusHTMLJS = 180;
const scrollStatusCSSREACT = 300;
const scrollStatusGITREDUX = 400;
const scrollStatusGULPWEBPACK = 500;

export const skillsLeft: Array<SkillsTypes> = [
  {
    id: 89,
    title: "HTML",
    picture: html,
    description:
      "HTML — язык разметки для создания структуры веб-страницы и представления контента",
    pictureStyle: pictureStyleNormal,
    pictureStyleEdditional: style.bodySub2part4PictureLeft2,
    descriptionStyle: descriptionStyleNormal,
    descriptionStyleEdditional: style.bodySub2part4DescriptionLeft5,
    animationStyle: animationStyleNormal,
    animationStyleActive: style._activeHTML,
    scrollStatus: scrollStatusHTMLJS,
    skillStars: 4,
    starsContainerStyle: style.skillsContainer,
  },
  {
    id: 88,
    title: "CSS",
    picture: css,
    description:
      "CSS — язык каскадных стилей, который задаёт визуальное оформление для HTML, SVG и других языков разметки",
    pictureStyle: pictureStyleNormal,
    pictureStyleEdditional: style.bodySub2part4PictureLeft3,
    descriptionStyle: descriptionStyleNormal,
    descriptionStyleEdditional: style.bodySub2part4DescriptionLeft2,
    animationStyle: animationStyleNormal,
    animationStyleActive: style._activeCSS,
    scrollStatus: scrollStatusCSSREACT,
    skillStars: 4,
    starsContainerStyle: style.skillsContainer,
  },
  {
    id: 19,
    title: "JavaScript",
    picture: javaScript,
    description: "JavaScript — мультипарадигменный язык программирования",
    pictureStyle: pictureStyleNormal,
    pictureStyleEdditional: style.bodySub2part4PictureLeft6,
    descriptionStyle: descriptionStyleNormal,
    descriptionStyleEdditional: style.bodySub2part4DescriptionLeft2,
    animationStyle: animationStyleNormal,
    animationStyleActive: style._activeJS,
    scrollStatus: scrollStatusCSSREACT,
    skillStars: 4,
    half: true,
    starsContainerStyle: style.skillsContainer,
  },
  {
    id: 55,
    title: "TypeScript",
    picture: typeScript,
    description: "JavaScript — мультипарадигменный язык программирования",
    pictureStyle: pictureStyleNormal,
    pictureStyleEdditional: style.bodySub2part4PictureLeft6,
    descriptionStyle: descriptionStyleNormal,
    descriptionStyleEdditional: style.bodySub2part4DescriptionLeft2,
    animationStyle: animationStyleNormal,
    animationStyleActive: style._activeTS,
    scrollStatus: scrollStatusCSSREACT,
    skillStars: 4,
    half: true,
    starsContainerStyle: style.skillsContainer,
  },
  {
    id: 18,
    title: "React",
    picture: react,
    description: "React — библиотека для создания пользовательских интерфейсов",
    pictureStyle: pictureStyleNormal,
    pictureStyleEdditional: style.bodySub2part4PictureLeft7,
    descriptionStyle: descriptionStyleNormal,
    descriptionStyleEdditional: style.bodySub2part4DescriptionLeft2,
    animationStyle: animationStyleNormal,
    animationStyleActive: style._activeReact,
    scrollStatus: scrollStatusCSSREACT,
    skillStars: 4,
    half: true,
    starsContainerStyle: style.skillsContainer,
  },
  {
    id: 26,
    title: "Redux",
    picture: redux,
    description:
      "Redux — state контейнер с предсказуемым состоянием для JavaScritp приложений",
    pictureStyle: pictureStyleNormal,
    pictureStyleEdditional: style.bodySub2part4PictureLeft8,
    descriptionStyle: descriptionStyleNormal,
    descriptionStyleEdditional: style.bodySub2part4DescriptionLeft2,
    animationStyle: animationStyleNormal,
    animationStyleActive: style._activeRedux,
    scrollStatus: scrollStatusCSSREACT,
    skillStars: 4,
    half: true,
    starsContainerStyle: style.skillsContainer,
  },
];

export const skillsRight: Array<SkillsTypes> = [
  {
    id: 49,
    title: "SASS",
    picture: sass,
    description:
      "SASS — система управления версиями с распределенной архитектурой",
    pictureStyle: pictureStyleNormal,
    pictureStyleEdditional: style.bodySub2part4PictureRight2,
    descriptionStyle: descriptionStyleNormal,
    descriptionStyleEdditional: style.bodySub2part4DescriptionLeft5,
    animationStyle: animationStyleNormalRigth,
    animationStyleActive: style._activeHTML,
    scrollStatus: scrollStatusGULPWEBPACK,
    skillStars: 3,
    half: true,
    starsContainerStyle: style.skillsContainer,
  },
  {
    id: 4,
    title: "Material UI",
    picture: mui,
    description:
      "Material UI —  reactJS's библиотека компонент",
    pictureStyle: pictureStyleNormal,
    pictureStyleEdditional: style.bodySub2part4PictureRight2,
    descriptionStyle: descriptionStyleNormal,
    descriptionStyleEdditional: style.bodySub2part4DescriptionLeft5,
    animationStyle: animationStyleNormalRigth,
    animationStyleActive: style._activeCSS,
    scrollStatus: scrollStatusGULPWEBPACK,
    skillStars: 3,
    half: true,
    starsContainerStyle: style.skillsContainer,
  },
  {
    id: 56,
    title: "GIT",
    picture: git,
    description:
      "Git — система управления версиями с распределенной архитектурой",
    pictureStyle: pictureStyleNormal,
    pictureStyleEdditional: style.bodySub2part4PictureRight3,
    descriptionStyle: descriptionStyleNormal,
    descriptionStyleEdditional: style.bodySub2part4DescriptionLeft5,
    animationStyle: animationStyleNormalRigth,
    animationStyleActive: style._activeJS,
    scrollStatus: scrollStatusGULPWEBPACK,
    skillStars: 4,
    starsContainerStyle: style.skillsContainer,
  },
  {
    id: 2,
    title: "REST API",
    picture: restapi,
    description: "REST API ",
    pictureStyle: pictureStyleNormal,
    pictureStyleEdditional: style.bodySub2part4PictureRight7,
    descriptionStyle: descriptionStyleNormal,
    descriptionStyleEdditional: style.bodySub2part4DescriptionLeft5,
    animationStyle: animationStyleNormalRigth,
    animationStyleActive: style._activeTS,
    scrollStatus: scrollStatusGULPWEBPACK,
    skillStars: 3,
    half: true,
    starsContainerStyle: style.skillsContainer,
  },
  {
    id: 34,
    title: "Webpack",
    picture: webpack,
    description:
      "Webpack — сборщик статических модулей для современных приложений JavaScript",
    pictureStyle: pictureStyleNormal,
    pictureStyleEdditional: style.bodySub2part4PictureRight4,
    descriptionStyle: descriptionStyleNormal,
    descriptionStyleEdditional: style.bodySub2part4DescriptionLeft5,
    animationStyle: animationStyleNormalRigth,
    animationStyleActive: style._activeREACT,
    scrollStatus: scrollStatusGULPWEBPACK,
    skillStars: 3,
    starsContainerStyle: style.skillsContainer,
  },
  {
    id: 3,
    title: "Gulp",
    picture: gulp,
    description:
      "Gulp — Менеджер для организации и выполнения задач при разработке приложений с использованием платформы Node.js",
    pictureStyle: pictureStyleNormal,
    pictureStyleEdditional: style.bodySub2part4PictureRight5,
    descriptionStyle: descriptionStyleNormal,
    descriptionStyleEdditional: style.bodySub2part4DescriptionLeft5,
    animationStyle: animationStyleNormalRigth,
    animationStyleActive: style._activeREDUX,
    scrollStatus: scrollStatusGULPWEBPACK,
    skillStars: 3,
    starsContainerStyle: style.skillsContainer,
  },
];

export default { skillsLeft, skillsRight };
