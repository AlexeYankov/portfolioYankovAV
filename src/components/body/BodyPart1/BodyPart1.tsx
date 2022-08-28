import style from "../../../cssModules/bodyMain.module.css";
import React from "react";

const BodyPart1 = () => {
    return (
            <article className={style.bodySub1MainStyleContainer}>
                <div className={style.bodySub1}>
                    <div className={style.bodySub1part1}>
                        <span className={style.bodySub1part12}>
                            Welcome! <br/>
                            I'm Alex and<br/>
                            I'm Frontend DEV
                        </span>
                    </div>
                    <div className={style.bodySub1part2}>
                        Photo
                    </div>
                </div>
            </article>
    );
};

export default BodyPart1;
