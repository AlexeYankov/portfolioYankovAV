import style from "../BodyPart2/BodyPart2.module.css";
import { mappedSkills } from "./mappedSkillsLeft";
import { skillsLeft, skillsRight } from "../BodyPart2/skillsDescription";

export type BodyType2 = {
  scrollStatus: number;
};

const BodyPart2 = ({ scrollStatus }: BodyType2) => {
  const offSetSkillsStyle = scrollStatus > 80 ? `${style.bodySub2part1} ${style._active}` : style.bodySub2part1;
  return (
    <div id="Skills" className={style.bodySub2MainStyleContainer}>
      <div className={style.bodySub2}>
        <h2 className={offSetSkillsStyle}>SKILLS</h2>
        <div className={style.bodySub2part3}>
          {mappedSkills(scrollStatus, skillsLeft)}
        </div>
        <div className={style.bodySub2part3_1}>
          {mappedSkills(scrollStatus, skillsRight)}
        </div>
      </div>
    </div>
  );
};

export default BodyPart2;
