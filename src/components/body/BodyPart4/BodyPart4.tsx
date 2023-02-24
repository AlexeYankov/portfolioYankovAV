import style from "../BodyPart4/BodyPart4.module.css";
import { BodyType2 } from "../BodyPart2/BodyPart2";

const BodyPart4 = ({ scrollStatus }: BodyType2) => {
  return (
    <div className={style.bodySub4MainStyleContainer}>
      <div className={style.bodySub4}>
        <span className={style.bodySub4part1}>
          <span>
            可用於遠程工作 AVAILABLE FOR REMOTE WORK ГОТОВ К УДАЛЕННОЙ РАБОТЕ
            リモートワーク 可能可用於遠程工作 AVAILABLE FOR REMOTE WORK ГОТОВ К
            УДАЛЕННОЙ РАБОТЕ リモートワーク可能 可用於遠程工作 AVAILABLE FOR
            REMOTE WORK ГОТОВ К УДАЛЕННОЙ РАБОТЕ リモートワーク可能2
          </span>
          
        </span>
        <span className={style.bodySub4part2}>
            可用於遠程工作 AVAILABLE FOR REMOTE WORK ГОТОВ К УДАЛЕННОЙ РАБОТЕ
            リモートワーク 可能可用於遠程工作 AVAILABLE FOR REMOTE WORK ГОТОВ К
            УДАЛЕННОЙ РАБОТЕ リモートワーク可能 可用於遠程工作 AVAILABLE FOR
            REMOTE WORK ГОТОВ К УДАЛЕННОЙ РАБОТЕ リモートワーク可能
          </span>
        {/* <div className={style.bodySub4part2}>
                    <span className={style.bodySub4part3}>
                        HIRE ME
                    </span>
                </div> */}
      </div>
    </div>
  );
};

export default BodyPart4;
