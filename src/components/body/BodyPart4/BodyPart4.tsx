import { BodyType2 } from "../BodyPart2/BodyPart2";
import style from "../BodyPart4/BodyPart4.module.css";
import { FutureDescription } from "./components/FutureDescription";
import { PastDescription } from "./components/PastDescription";
import mainPic from "../../../imges/MainPhoto/AboutPhoto.png";

const BodyPart5 = ({ scrollStatus }: BodyType2) => {
  const offSetAboutStyle =
    scrollStatus > 2680
      ? `${style.bodySub5part1} ${style._active}`
      : style.bodySub5part1;
  return (
    <div id="About" className={style.sectionName}>
      <h2 className={offSetAboutStyle}>ABOUT </h2>
      <div className={style.container}>
        <img className={style.container__mainPicture} src={mainPic} alt="" />
        <div className={style.container__aboutDescription}>
          <PastDescription />
          <FutureDescription />
        </div>
      </div>
    </div>
  );
};

export default BodyPart5;
