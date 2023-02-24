import { BodyType2 } from "../BodyPart2/BodyPart2";
import style from "../BodyPart3/BodyPart3.module.css";
import projectsList from "./Projects";
import { projectComponent } from "./ProjectComponent";

const BodyPart3 = ({ scrollStatus }: BodyType2) => {
  const offSetSkillsStyle =
    scrollStatus > 980
      ? `${style.bodySub3part1} ${style._active}`
      : `${style.bodySub3part1}`;
  const projectsData = projectsList.map((el) => {
    return projectComponent(el, scrollStatus, el.reversed);
  });

  return (
    <div id="Projects" className={style.bodySub3MainStyleContainer}>
      <div className={style.bodySub3}>
        <h2 className={offSetSkillsStyle}>Projects</h2>
        <div className={style.bodySub3part2}>{projectsData}</div>
      </div>
    </div>
  );
};

export default BodyPart3;
