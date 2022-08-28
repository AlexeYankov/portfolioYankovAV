import React from 'react';
import style from "../cssModules/footer.module.css";

const Footer = () => {
    return (
        <div>
            <div className={style.FooterStyleContainer}>
                <div className={style.Footer}>
                    <div className={style.FooterPart1}>
                        <label
                            style={{backgroundColor: 'red', opacity: '0.8'}}
                            htmlFor='foo7'>
                            <button
                                id='foo7'
                                onClick={() => (alert('Contacts with me'))}
                                style={{display: 'none'}}
                            />
                            Alexey Yankov
                        </label>
                    </div>
                    <div className={style.FooterPart2}>
                        <div className={style.FooterPart5}>1</div>
                        <div className={style.FooterPart5}>2</div>
                        <div className={style.FooterPart5}>3</div>
                        <div className={style.FooterPart5}>4</div>

                    </div>
                    <div className={style.FooterPart3}>
                        Copyright © 2020 All rights reserved. Do not duplicate or redistribute in any form.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;