import React from 'react';
import style from '../../cssModules/bodyMain.module.css'
import BodyPart1 from "./BodyPart1/BodyPart1";
import BodyPart2 from "./BodyPart2/BodyPart2";
import BodyPart3 from "./BodyPart3/BodyPart3";
import BodyPart4 from "./BodyPart4/BodyPart4";
import BodyPart5 from "./BodyPart5/BodyPart5";

const BodyMain = () => {
    return (
        <section className={style.bodyMainStyleWrapper}>
            <BodyPart1/>
            <BodyPart2/>
            <BodyPart3/>
            <BodyPart4/>
            <BodyPart5/>
        </section>
    );
};

export default BodyMain;