import style from "../BodyPart5/BodyPart5.module.css";

const sectionText =
    "可用於遠程工作 AVAILABLE FOR REMOTE WORK ГОТОВ К УДАЛЕННОЙ РАБОТЕ リモートワーク 可能可用於遠程工作 AVAILABLE FOR REMOTE WORK ГОТОВ К УДАЛЕННОЙ РАБОТЕ リモートワーク可能 可用於遠程工作 AVAILABLE FOR REMOTE WORK ГОТОВ К УДАЛЕННОЙ РАБОТЕ リモートワーク可能";

const BodyPart5 = () => {
    return (
        <div className={style.bodySub4MainStyleContainer}>
            <div className={style.bodySub4}>
                <span className={style.bodySub4part1}>{sectionText}</span>
                <span className={style.bodySub4part2}>{sectionText}</span>
            </div>
        </div>
    );
};

export default BodyPart5;
