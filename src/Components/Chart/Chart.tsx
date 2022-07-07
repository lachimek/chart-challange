import React from "react";
import Balance from "./Balance";
import Bar from "./Bar";
import styles from "./Chart.module.css";
import Footer from "./Footer";

export interface ChartProps {
    title: string;
    data: {
        day: string;
        dayIndex: number;
        amount: number;
    }[];
    footerData: {
        monthTotal: number;
        percentChange: number;
    };
    balance?: number;
}

const Chart = ({ title, data, footerData, balance }: ChartProps) => {
    const maxHeight = Math.max(...data.map((d) => d.amount));
    const today = new Date().getDay();

    return (
        <div className={styles.chart__with_balance}>
            {balance && <Balance balance={balance} />}
            <div className={styles.chart__container}>
                <div>
                    <h1 className={styles.chart__title}>{title} - Last 7 days</h1>
                </div>
                <div className={styles.chart__bar_container}>
                    {data.map(({ day, amount, dayIndex }, idx) => (
                        <Bar
                            day={day}
                            amount={amount}
                            height={(amount * 100) / maxHeight}
                            today={dayIndex === today}
                            key={`${idx}-${day}`}
                        />
                    ))}
                </div>
                <hr className={styles.chart__divider} />
                <Footer total={footerData.monthTotal} percentChange={footerData.percentChange} />
            </div>
        </div>
    );
};

export default Chart;
