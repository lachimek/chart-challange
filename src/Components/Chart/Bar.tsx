import React from "react";
import styles from "./Bar.module.css";

interface BarProps {
    day: string;
    amount: number;
    height: number;
    today: boolean;
}

const Bar = ({ day, amount, height, today }: BarProps) => {
    const [amountVisible, setAmountVisible] = React.useState(false);

    return (
        <div className={styles.bar__container}>
            <span className={styles.bar__amount} style={{ opacity: amountVisible ? 100 : 0 }}>
                ${amount}
            </span>
            <div
                className={today ? styles.bar__bar_today : styles.bar__bar}
                style={{ height: `${height}%` }}
                onMouseEnter={() => setAmountVisible(true)}
                onMouseLeave={() => setAmountVisible(false)}
            ></div>
            <span className={styles.bar__label}>{day}</span>
        </div>
    );
};

export default Bar;
