import { SkillsTypes } from "../BodyPart2/skillsDescription";
import MappedStars from "./mappedStars";

export const mappedSkills = (
  scrollStatus: number,
  skillsArray: Array<SkillsTypes>,
) => {
  return skillsArray.map((el) => {
    const offSetContainerStyle =
      scrollStatus > el.scrollStatus
        ? `${el.animationStyle} ${el.animationStyleActive}`
        : el.animationStyle;
    return (
      <div key={el.id} className={offSetContainerStyle}>
        <img
          className={el.pictureStyle}
          src={el.picture}
          alt={el.title}
        />
        {/* <span
          className={
            el.descriptionStyle + " " + el.descriptionStyleEdditional
          }
        >
          {el.description}
        </span> */}
        <div className={el.starsContainerStyle}>{el.title}</div>
        <MappedStars stars={el.skillStars} half={el.half}/>
        {/* <span style={{fontSize: "1.5em", fontWeight: "500"}}>{el.title}</span> */}
      </div>
    );
  });
};

export default { mappedSkills };
