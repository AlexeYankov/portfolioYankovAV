import styles from "../../cssModules/header.module.css";
import {Section} from "./Section";

const barList: Array<string> = ["Main", "Skills", "Projects", "About", "Contacts"];

const Header = () => {
    const sectionList = barList.map((el) => <Section key={crypto.randomUUID()} sectionName={el} />);
    return (
        <section className={styles.headerModuleStyle}>
            <div className={styles.headerStyleBarWrapper}>
                <nav className={styles.headerStyleBar}>{sectionList}</nav>
            </div>
        </section>
    );
};

export default Header;
