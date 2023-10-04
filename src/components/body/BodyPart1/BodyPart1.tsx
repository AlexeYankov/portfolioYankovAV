import React from "react";
import style from "../BodyPart1/BodyPart1.module.css";
import lazyHOC from "../Lazy/LazyHOC";

const SmallPic = React.lazy(() => import("./SmallPic"));
const FullPic = React.lazy(() => import("./FullScreen"));
const sectionText = {
    top: "網絡 ウェブ WEB ВЕБ ağ 網絡 ウェブ WEB ВЕБ ağ 網絡 ウェブ WEB ВЕБ ağ 網絡 ウェブ WEB ВЕБ ağ 網絡 ウェブ WEB ВЕБ ağ ağ 網絡 ウェブ WEB ВЕБ ağ 網絡 ウェブ WEB ВЕБ ağ",
    topContinied:
        "網絡 ウェブ WEB ВЕБ ağ 網絡 ウェブ WEB ВЕБ ağ 網絡 ウェブ WEB ВЕБ 網絡 ウェブ WEB ВЕБ ağ 網絡 ウェブ WEB ВЕБ ağ 網絡 ウェブ WEB ВЕБ ağ 網絡 ウェブ WEB ВЕБ ağ 網絡 ウェブ WEB ВЕБ ağ 網絡 ウェブ WEB ВЕБ ağ",
    middle: "FRONTEND ФРОНТЕНД FRONTEND ФРОНТЕНД FRONTEND ФРОНТЕНД FRONTEND ФРОНТЕНД FRONTEND ФРОНТЕНД FRONTEND ФРОНТЕНД FRONTEND ФРОНТЕНД",
    bottom: "開發者 РАЗРАБ DEV 開發者 РАЗРАБ DEV 開發者 РАЗРАБ DEV 開發者 РАЗРАБ DEV 開發者 РАЗРАБ DEV 開發者 РАЗРАБ DEV 開發者 РАЗРАБ DEV 開發者 РАЗРАБ DEV 開發者 РАЗРАБ DEV"
};
const FinalPicSize = window.screen.width <= 1440 ? lazyHOC(SmallPic) : lazyHOC(FullPic);

const BodyPart1 = () => {
    return (
        <div className={style.bodySub1MainStyleContainer}>
            <div className={style.bodySub1MainStyleContainer1}>
                <div className={style.fontSizeForMainPicture}>
                    <span className={style.fontSizeText1}>
                        <span>{sectionText.top}</span>
                        <span className={style.fontSizeText2}>{sectionText.topContinied}</span>
                    </span>
                    <span className={style.fontSizeText3}>
                        <span>{sectionText.middle}</span>
                        <span className={style.fontSizeText4}>{sectionText.middle}</span>
                    </span>
                    <span className={style.fontSizeText5}>
                        <span>{sectionText.bottom}</span>
                        <span className={style.fontSizeText2}>{sectionText.bottom}</span>
                    </span>
                    {<FinalPicSize />}
                </div>
            </div>
        </div>
    );
};

export default BodyPart1;
