import {smoothScroll} from "./smoothScroll";
import styles from "../../cssModules/header.module.css";
import {memo, useEffect, useRef, useState} from "react";

type SectionNameType = {
    sectionName: string;
};

export const Section = memo(({sectionName}: SectionNameType) => {
    const [posY, setPosY] = useState(0);
    const ref = useRef({} as HTMLAnchorElement);
    useEffect(() => {
        const el = ref.current;
        const positionY = el.getBoundingClientRect().top;
        setPosY(positionY);
    }, []);
    const selectedSection = () => {
        const barListener = (e: any) => {
            const finalPositionY = Math.floor(posY / 10);
            e.preventDefault();
            smoothScroll(finalPositionY, posY, finalPositionY);
        };
        ref.current.addEventListener("click", barListener);
        ref.current.removeEventListener("click", barListener);
    };
    return (
        <a className={styles.headerStyleBar} ref={ref} href={"#"+sectionName} onClick={selectedSection}>
            {sectionName}
        </a>
    );
});
