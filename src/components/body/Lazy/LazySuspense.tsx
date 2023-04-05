import s from "./../../../cssModules/bodyMain.module.css";
import pic from "../../../imges/BodyPartImges/gooey-balls-2.svg";

export const LazyJSX = (
  <div className={s.lazyContainer}>
    <img className={s.ring} src={pic} alt="loading" />
  </div>
);
