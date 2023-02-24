import styles from "../../cssModules/header.module.css";

const Header = () => {
  const barList: Array<string> = ["Main", "Skills", "Projects", "About", "Contacts"];
  const jsxBarList = barList.map((el, id) => {
    return (
      <a className={styles.headerStyleBar} key={id} href={"#" + el} >
        {el}
      </a>
    );
  });
  return (
    <section className={styles.headerModuleStyle}>
      <article className={styles.headerStyleBarWrapper}>
        <nav className={styles.headerStyleBar}>{jsxBarList}</nav>
      </article>
    </section>
  );
};

export default Header;
