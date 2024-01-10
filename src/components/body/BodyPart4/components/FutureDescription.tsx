import style from "../../BodyPart4/BodyPart4.module.css";

export const FutureDescription = () => {
  return (
    <article className={style.container__past}>
      <div className={style.description}>
        FUTURE
        <ul className={ style.description__text + " " + style.description__past__points } >
          <li>
            <b> Current target:</b> Middle frontend developer
          </li>
          <li>
            <b> Goal:</b> Tech lead frontend developer
          </li>
        </ul>
      </div>
    </article>
  );
};
