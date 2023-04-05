import style from "../../cssModules/bodyMain.module.css";
import lazyHOC from "./Lazy/LazyHOC";
import BodyPart1 from "./BodyPart1/BodyPart1";
import BodyPart2 from "./BodyPart2/BodyPart2";
import BodyPart3 from "./BodyPart3/BodyPart3";
import BodyPart4 from "./BodyPart4/BodyPart4";
import BodyPart5 from "./BodyPart5/BodyPart5";

type BodyMainType = {
  scrollStatus: number;
};
const Part1 = lazyHOC(BodyPart1);

const BodyMain = ({ scrollStatus }: BodyMainType) => {
  return (
    <section className={style.bodyMainStyleWrapper}>
      <Part1 />
      <BodyPart2 scrollStatus={scrollStatus} />
      <BodyPart3 scrollStatus={scrollStatus} />
      <BodyPart4 scrollStatus={scrollStatus} />
      <BodyPart5 />
    </section>
  );
};

export default BodyMain;
