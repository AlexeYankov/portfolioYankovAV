import style from "../BodyPart1/BodyPart1.module.css";
import img2 from "../../../imges/MainPhoto/1.png";
import img3 from "../../../imges/MainPhoto/2.png";
import img4 from "../../../imges/MainPhoto/3.png";
import img5 from "../../../imges/MainPhoto/4.png";
import img6 from "../../../imges/MainPhoto/5.png";
import img7 from "../../../imges/MainPhoto/6.png";
import img8 from "../../../imges/MainPhoto/7.png";
import img9 from "../../../imges/MainPhoto/8.png";
import img11 from "../../../imges/MainPhoto/11.png";
import img12 from "../../../imges/MainPhoto/12.png";

const BodyPart1 = () => {
  return (
    <div className={style.bodySub1MainStyleContainer}>
      <div className={style.bodySub1MainStyleContainer1}>
        <div className={style.fontSizeForMainPicture}>
          <span className={style.fontSizeText1}>
            <span>
              網絡 ウェブ WEB ВЕБ ağ 網絡 ウェブ WEB ВЕБ ağ 網絡 ウェブ WEB ВЕБ
              ağ 網絡 ウェブ WEB ВЕБ ağ 網絡 ウェブ WEB ВЕБ ağ
              ağ 網絡 ウェブ WEB ВЕБ ağ 網絡 ウェブ WEB ВЕБ ağ
            </span>
            <span className={style.fontSizeText2}>
              網絡 ウェブ WEB ВЕБ ağ 網絡 ウェブ WEB ВЕБ ağ 網絡 ウェブ WEB ВЕБ
              網絡 ウェブ WEB ВЕБ ağ 網絡 ウェブ WEB ВЕБ ağ 網絡 ウェブ WEB ВЕБ
              ağ 網絡 ウェブ WEB ВЕБ ağ 網絡 ウェブ WEB ВЕБ ağ 網絡 ウェブ WEB
              ВЕБ ağ
            </span>
          </span>
          <span className={style.fontSizeText3}>
            <span>
              FRONTEND ФРОНТЕНД FRONTEND ФРОНТЕНД FRONTEND ФРОНТЕНД FRONTEND
              ФРОНТЕНД FRONTEND ФРОНТЕНД FRONTEND ФРОНТЕНД FRONTEND ФРОНТЕНД
            </span>
            <span className={style.fontSizeText4}>
              FRONTEND ФРОНТЕНД FRONTEND ФРОНТЕНД FRONTEND ФРОНТЕНД FRONTEND
              ФРОНТЕНД FRONTEND ФРОНТЕНД FRONTEND ФРОНТЕНД FRONTEND ФРОНТЕНД
            </span>
          </span>
          <span className={style.fontSizeText5}>
            開發者 РАЗРАБ DEV 開發者 РАЗРАБ DEV 開發者 РАЗРАБ DEV 開發者 РАЗРАБ
            DEV 開發者 РАЗРАБ DEV 開發者 РАЗРАБ DEV 開發者 РАЗРАБ DEV 開發者
            РАЗРАБ DEV 開發者 РАЗРАБ DEV
            <span className={style.fontSizeText2}>
              開發者 РАЗРАБ DEV 開發者 РАЗРАБ DEV 開發者 РАЗРАБ DEV 開發者
              РАЗРАБ DEV 開發者 РАЗРАБ DEV 開發者 РАЗРАБ DEV 開發者 РАЗРАБ DEV
              開發者 РАЗРАБ DEV 開發者 РАЗРАБ DEV
            </span>
          </span>
          {/* <div className={style.mainPhotoContainer}> */}
            <img className={style.mainPhotoContent1} src={img2} alt="" />
            <img className={style.mainPhotoContent2} src={img3} alt="" />
            <img className={style.mainPhotoContent3} src={img4} alt="" />
            <img className={style.mainPhotoContent4} src={img5} alt="" />
            <img className={style.mainPhotoContent5} src={img6} alt="" />
            <img className={style.mainPhotoContent6} src={img7} alt="" />
            <img className={style.mainPhotoContent7} src={img8} alt="" />
            <img className={style.mainPhotoContent8} src={img9} alt="" />
            <img className={style.mainPhotoContent11} src={img11} alt="" />
            <img className={style.mainPhotoContent12} src={img12} alt="" />
            <div className={style.mainPhotoContentSmallSizes} />
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default BodyPart1;
