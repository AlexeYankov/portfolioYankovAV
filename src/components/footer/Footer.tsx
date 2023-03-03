import style from "../../cssModules/footer.module.css";
import pic3 from "../../cssModules/pictures/codewars.svg";
import pic2 from "../../cssModules/pictures/github.svg";
import pic4 from "../../cssModules/pictures/mail.svg";
import pic1 from "../../cssModules/pictures/telegram.png";



const Footer = () => {

  return (
    <section id="Contacts" className={style.FooterStyleContainer}>
      <div className={style.Footer}>
        <h2 className={style.FooterPart1}>Contacts</h2>
        <div className={style.FooterPart2}>
          <a className={style.FooterPart5} href="https://t.me/AlexeYankoV">
            <img className={style.FooterPart6} src={pic1} alt="Telegram" />
          </a>
          <a className={style.FooterPart5} href="mailto:yankovav.wm@gmail.com">
            <img className={style.FooterPart61} src={pic4} alt="mail" />
          </a>
          <a
            className={style.FooterPart5}
            href="https://github.com/AlexeYankov"
          >
            <img className={style.FooterPart62} src={pic2} alt="github" />
          </a>
          <a
            className={style.FooterPart51}
            href="https://www.codewars.com/users/PrinceMyshkin"
          >
            <img src={pic3} alt="Codewars" className={style.FooterPart6} />
          </a>
        </div>
        <div className={style.FooterPart3}>
          <span>
            Copyright © 2023 All rights reserved. Do not duplicate or
            redistribute in any form.
          </span>
            <b>YankovAV.wm@gmail.com</b>
        </div>
      </div>
    </section>
  );
};

export default Footer;
