import React from 'react';
import style from "../../../cssModules/bodyMain.module.css";

const BodyPart5 = () => {
    return (
        <article className={style.bodySub5MainStyleContainer}>
            <div className={style.bodySub5}>
                <h2 className={style.bodySub5part1}>
                    CONTACTS
                </h2>
                <div className={style.bodySub5part2}>
                    <form className={style.bodySub5part11} action="src/components/body/BodyMain">
                        <div className={style.bodySub5part10}>
                            <div className={style.bodySub5part6}>
                                <input
                                    id="GET-email"
                                    placeholder={'Email'}
                                    type="text"
                                    name="Email"
                                    className={style.bodySub5part9}
                                />
                            </div>
                            <div className={style.bodySub5part6}>
                                <input
                                    id="GET-name"
                                    placeholder={'Name'}
                                    type="text"
                                    name="Name"
                                    className={style.bodySub5part9}
                                />
                            </div>
                        </div>
                        <div className={style.bodySub5part8}>
                                <textarea
                                    placeholder={'...'}
                                    name="userInputArea"
                                    className={style.bodySub5part5}
                                />
                        </div>
                    </form>
                </div>
                <span className={style.bodySub5part15}>SEND</span>
            </div>
        </article>
    );
};

export default BodyPart5;