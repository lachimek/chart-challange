import React from "react";
import Chart from "./Components/Chart/Chart";

const data = [
    {
        day: "mon",
        dayIndex: 1,
        amount: 17.45,
    },
    {
        day: "tue",
        dayIndex: 2,
        amount: 34.91,
    },
    {
        day: "wed",
        dayIndex: 3,
        amount: 52.36,
    },
    {
        day: "thu",
        dayIndex: 4,
        amount: 31.07,
    },
    {
        day: "fri",
        dayIndex: 5,
        amount: 23.39,
    },
    {
        day: "sat",
        dayIndex: 6,
        amount: 43.28,
    },
    {
        day: "sun",
        dayIndex: 0,
        amount: 25.48,
    },
];

function App() {
    return <Chart title={"Spending"} data={data} footerData={{ monthTotal: 780.23, percentChange: 3.5 }} />;
}

export default App;
