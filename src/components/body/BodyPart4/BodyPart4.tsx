import { BodyType2 } from "../BodyPart2/BodyPart2";
import style from "../BodyPart4/BodyPart4.module.css";

const BodyPart5 = ({ scrollStatus }: BodyType2) => {
  const offSetAboutStyle =
    scrollStatus > 1980
      ? `${style.bodySub5part1} ${style._active}`
      : style.bodySub5part1;
  return (
    <div id="About" className={style.sectionName}>
      <h2 className={offSetAboutStyle}>ABOUT </h2>
      <div className={style.container}>
        <div className={style.container__mainPicture} />
        <div className={style.container__aboutDescription}>
          <article className={style.container__past}>
            <div className={style.description}>
              PAST
                <ul className={style.description__text + " " + style.description__past__points}>
                  <li>
                    <b>Last job place:</b> Cheif deputie of planning engeneeir
                  </li>
                  <li>
                    <b>Education:</b> Civil engineer specialist degree
                  </li>
                  <li>
                    <b>English: </b> B2
                  </li>
                  <li>
                    <b>Strengths: </b> Analytical skills, teamwork, fast learning
                  </li>
                </ul>
              {/* </div> */}
            </div>
          </article>
          <article className={style.container__past}>
            <div className={style.description}>
            FUTURE
            <ul className={style.description__text + " " + style.description__past__points}>
                  <li>
                    <b> Current target:</b> Junior frontend developer
                  </li>
                  <li>
                    <b> Goal:</b> Senior frontend developer
                  </li>
              </ul>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default BodyPart5;
