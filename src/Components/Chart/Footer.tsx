import React from "react";
import styles from "./Footer.module.css";

interface Props {
    total: number;
    percentChange: number;
}

const Footer = ({ total, percentChange }: Props) => {
    return (
        <div className={styles.footer__container}>
            <span className={styles.footer__label}>Total this month</span>
            <div className={styles.footer__content}>
                <span className={styles.footer__total}>${total}</span>
                <div className={styles.footer__right}>
                    <span className={styles.footer__percentage}>{percentChange}%</span>
                    <span className={styles.footer__label}>from last month</span>
                </div>
            </div>
        </div>
    );
};

export default Footer;
