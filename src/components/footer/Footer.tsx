import style from "../../cssModules/footer.module.css";
import pic3 from "../../cssModules/pictures/codewars.svg";
import pic1 from "../../cssModules/pictures/telegram.png";

const Footer = () => {
  return (
    <section id="Contacts" className={style.FooterStyleContainer}>
      <div className={style.Footer}>
        <h2 className={style.FooterPart1}>Contacts</h2>
        <div className={style.FooterPart2}>
          <a className={style.FooterPart5} href="https://t.me/AlexeYankoV">
            <img
              className={style.FooterPart6}
              src={pic1}
              alt="Telegram"
            />
          </a>
          <a className={style.FooterPart5} href="mailto:yankovav.wm@gmail.com">
            <svg
              className={style.FooterPart6}
              fill="#fff"
              viewBox="0 0 512 512"
            >
              <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
            </svg>
          </a>
          <a
            className={style.FooterPart5}
            href="https://github.com/AlexeYankov"
          >
            <svg
              className={style.FooterPart6}
              fill="#fff"
              viewBox="0 0 1024 1024"
            >
              <path
                d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"
                transform="scale(64)"
              />
            </svg>
          </a>
          <a
            className={style.FooterPart7}
            href="https://www.codewars.com/users/PrinceMyshkin"
          >
            <img
              src={pic3}
              alt="Codewars"
              className={style.FooterPart6}
            />
          </a>
        </div>
        <span className={style.FooterPart3}>
          Copyright © 2023 All rights reserved. Do not duplicate or redistribute
          in any form.
        </span>
      </div>
    </section>
  );
};

export default Footer;
