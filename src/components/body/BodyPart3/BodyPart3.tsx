import React from 'react';
import style from "../../../cssModules/bodyMain.module.css";

const BodyPart3 = () => {
    return (
        <article className={style.bodySub3MainStyleContainer}>
            <div className={style.bodySub3}>
                <h2 className={style.bodySub3part1}>
                    Projects
                </h2>
                <div className={style.bodySub3part3}>
                    <div className={style.bodySub3part2}>
                        <div className={style.bodySub3part8}>
                            <a href={'#'} className={style.bodySub3part4} >
                               <span className={style.bodySub3part9}>WATCH</span>
                            </a>
                            <div className={style.bodySub3SubContainer}>
                                <span className={style.bodySub3part5}>
                                    Name of the project
                                </span>
                                <span className={style.bodySub3part6}>
                                    Description
                                </span>
                            </div>
                        </div>
                        <div className={style.bodySub3part8}>
                            <a href={'#'} className={style.bodySub3part4} >
                                <span className={style.bodySub3part9}>WATCH</span>
                            </a>
                            <div className={style.bodySub3SubContainer}>
                                <span className={style.bodySub3part5}>
                                    Name of the project
                                </span>
                                <span className={style.bodySub3part6}>
                                    Description
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default BodyPart3;