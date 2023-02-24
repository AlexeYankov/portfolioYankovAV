import React from 'react';
import style from "../../cssModules/footer.module.css";
import pic1 from '../../cssModules/pictures/facebook-f-brands.svg'
import pic2 from '../../cssModules/pictures/twitter-brands.svg'
import pic3 from '../../cssModules/pictures/instagram-brands.svg'
import pic4 from '../../cssModules/pictures/vk-brands.svg'

const Footer = () => {
    return (
        <section id="Contacts">
            <article className={style.FooterStyleContainer}>
                <div className={style.Footer}>
                    <h2 className={style.FooterPart1}>
                        Contacts
                    </h2>
                    <ul className={style.FooterPart2}>
                        <img src={pic1} alt="FacebookImg" className={style.FooterPart5}/>
                        <img src={pic2} alt="TwitterImg" className={style.FooterPart5}/>
                        <img src={pic3} alt="InstagramImg" className={style.FooterPart5}/>
                        <img src={pic4} alt="VKImg" className={style.FooterPart5}/>
                    </ul>
                    <span className={style.FooterPart3}>
                        Copyright © 2022 All rights reserved. Do not duplicate or redistribute in any form.
                    </span>
                </div>
            </article>
        </section>
    );
};

export default Footer;