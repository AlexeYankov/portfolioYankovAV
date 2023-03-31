import styles from "../../cssModules/header.module.css";

const Header = () => {
  const barList: Array<string> = [
    "Main",
    "Skills",
    "Projects",
    "About",
    "Contacts",
  ];
  const jsxBarList = barList.map((el) => {
    const smoothScroll = (screen: number, height: number, speed: number) => {
      const i = screen;
      if (i <= height) {
        setTimeout(() => {
          window.scrollTo(0, i);
          smoothScroll(screen + speed, height, speed);
        }, 10);
      }
    };
    const selectedSection = () => {
      const selectedMenu = (id: string) => document.getElementById(id);
      const selectedTag: HTMLElement = selectedMenu(el)!;
      const positionY = selectedTag.getBoundingClientRect().top;
      console.log(positionY)
      const finalPositionY = Math.floor(positionY / 10);
      selectedTag.addEventListener("click", function (e) {
        e.preventDefault();
        smoothScroll(finalPositionY, positionY, finalPositionY);
      });
    };
    return (
      <a
        className={styles.headerStyleBar}
        key={crypto.randomUUID()}
        href={"#" + el}
        onClick={selectedSection}
      >
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
