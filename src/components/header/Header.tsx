import React from 'react';
import styles from '../cssModules/header.module.css'

const Header = () => {
    const barList: Array<string> = ['Main', 'Skills', 'Projects', 'Contacts']
    const jsxBarList = barList.map((el, id) => {
        return (
            <a className={styles.headerStyleBar} key={id} href={''}>{el}</a>
        )
    })
    return (
        <div className={styles.headerModuleStyle}>
            <span className={styles.headerStyle}>Header</span>
            <div className={styles.headerStyleBarWrapper}>{jsxBarList}</div>
        </div>
    );
};

export default Header;