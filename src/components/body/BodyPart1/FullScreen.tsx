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

const altText = "Photo must be here";

const FullScreenJSX = () => {
    return (
        <>
            <img className={style.mainPhotoContent1} src={img2} alt={altText} />
            <img className={style.mainPhotoContent2} src={img3} alt={altText} />
            <img className={style.mainPhotoContent3} src={img4} alt={altText} />
            <img className={style.mainPhotoContent4} src={img5} alt={altText} />
            <img className={style.mainPhotoContent5} src={img6} alt={altText} />
            <img className={style.mainPhotoContent6} src={img7} alt={altText} />
            <img className={style.mainPhotoContent7} src={img8} alt={altText} />
            <img className={style.mainPhotoContent8} src={img9} alt={altText} />
            <img className={style.mainPhotoContent11} src={img11} alt={altText} />
            <img className={style.mainPhotoContent12} src={img12} alt={altText} />
        </>
    );
};

export default FullScreenJSX;
