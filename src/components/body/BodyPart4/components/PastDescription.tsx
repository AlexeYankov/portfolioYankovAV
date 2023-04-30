import style from "../../BodyPart4/BodyPart4.module.css";

export const PastDescription = () => {
  return (
    <article className={style.container__past}>
      <div className={style.description}>
        PAST
        <ul className={ style.description__text + " " + style.description__past__points } >
          <li>
            <b>Last job place:</b> Cheif deputie of planning engineer
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
      </div>
    </article>
  );
};
