import style from "../../../cssModules/bodyMain.module.css";
import React from "react";

type SkillsTypes = {
    id: number
    title: string
    picture: string
    description: string
}

const BodyPart2 = () => {
    const skills: Array<SkillsTypes> = [
        {id: 89, title: 'REACT', picture: 'somePic1', description: 'some text1'},
        {id: 88, title: 'JAVASCRIPT', picture: 'somePic2', description: 'some text2'},
        {id: 56, title: 'REDUX', picture: 'somePic3', description: 'some text3'},
        // {id: 4, title: 'HTML', picture: '', description: 'some text'},
        // {id: 5, title: 'CSS', picture: '', description: 'some text'},
        // {id: 5, title: 'CSS', picture: '', description: 'some text'},
    ]
    const mappedSkills = skills.map((el) => {
        return (
            <ul key={el.id} className={style.bodySub2part4Container}>
                <li className={style.bodySub2part4Picture}>{el.picture}</li>
                <li className={style.bodySub2part4Title}>{el.title}</li>
                <li className={style.bodySub2part4Description}>{el.description}</li>
            </ul>
        )
    })
    return (
            <article className={style.bodySub2MainStyleContainer}>
                <div className={style.bodySub2}>
                    <h2 className={style.bodySub2part1}>
                        SKILLS
                    </h2>
                    <div className={style.bodySub2part3}>
                        <div className={style.bodySub2part2}>
                            {mappedSkills}
                        </div>
                    </div>
                </div>
            </article>
    );
};

export default BodyPart2;

