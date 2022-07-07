import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import Chart from "./Chart";

const sampleData = [
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

export default {
    /* 👇 The title prop is optional.
     * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
     * to learn how to generate automatic titles
     */
    title: "Chart",
    component: Chart,
} as ComponentMeta<typeof Chart>;

const Template: ComponentStory<typeof Chart> = (args) => <Chart {...args} />;

export const Default = Template.bind({});
Default.args = {
    title: "Spending",
    data: sampleData,
    footerData: {
        monthTotal: 555.55,
        percentChange: 6.2,
    },
};

export const WithBalance = Template.bind({});
WithBalance.args = {
    title: "Big Spending",
    data: sampleData,
    footerData: {
        monthTotal: 1337.0,
        percentChange: -4.2,
    },
    balance: 1200.25,
};
