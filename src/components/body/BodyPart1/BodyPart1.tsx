import React from "react";
import style from "../BodyPart1/BodyPart1.module.css";
import lazyHOC from "../Lazy/LazyHOC";

const SmallPic = React.lazy(() => import("./SmallPic"));
const FullPic = React.lazy(() => import("./FullScreen"));
const FinalPicSize = window.screen.width <= 1440 ? lazyHOC(SmallPic) : lazyHOC(FullPic);

const BodyPart1 = () => {
  return (
    <div className={style.bodySub1MainStyleContainer}>
      <div className={style.bodySub1MainStyleContainer1}>
        <div className={style.fontSizeForMainPicture}>
          <span className={style.fontSizeText1}>
            <span>
              網絡 ウェブ WEB ВЕБ ağ 網絡 ウェブ WEB ВЕБ ağ 網絡 ウェブ WEB ВЕБ
              ağ 網絡 ウェブ WEB ВЕБ ağ 網絡 ウェブ WEB ВЕБ ağ ağ 網絡 ウェブ
              WEB ВЕБ ağ 網絡 ウェブ WEB ВЕБ ağ
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
          {<FinalPicSize/>}
        </div>
      </div>
    </div>
  );
};

export default BodyPart1;
