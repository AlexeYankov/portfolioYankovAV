import {SkillsTypes} from "../BodyPart2/skillsDescription";
import MappedStars from "./mappedStars";

export const mappedSkills = (scrollStatus: number, skillsArray: Array<SkillsTypes>) => {
    return skillsArray.map((el) => {
        const offSetContainerStyle =
            scrollStatus > el.scrollStatus
                ? `${el.animationStyle} ${el.animationStyleActive}`
                : el.animationStyle;
        return (
            <div key={el.id} className={offSetContainerStyle}>
                <img className={el.pictureStyle} src={el.picture} alt={el.title} />
                <div className={el.starsContainerStyle}>{el.title}</div>
                <MappedStars stars={el.skillStars} half={el.half} />
            </div>
        );
    });
};

export default {mappedSkills};
