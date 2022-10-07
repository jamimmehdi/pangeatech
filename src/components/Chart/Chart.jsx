import React from 'react'
import { Line } from 'react-chartjs-2'
import Chart from 'chart.js/auto';
import { useSelector } from 'react-redux';

export default function LineChart() {
    const color = ["#ff6384", "#5959e6", "#2babab", "#8c4d15", "#8bc34a", "#607d8b", "#009688"];
    const currentPageData = useSelector((state) => state.chart.currentPageData);
    const labels = ["January", "February", "March", "April", "May", "June", "July",
        "August", "September", "October", "November", "December"];
    const uniqData = [...new Set(currentPageData.map((data) => data.product))];
    const datasets = uniqData.map((data, index) => {
        const product = currentPageData.filter((item, index) => item.product === data);
        return {
            axis: 'x',
            label: data,
            data: product.map((data) => data.acv),
            borderWidth: 1,
            backgroundColor: color[index],
            parsing: {
                yAxisKey: 'acv',
                xAxisKey: 'month',
            }
        }
    })
    const data = {
        labels: labels,
        datasets: [...datasets],
    };
    return (
        <Line data={data} />
    )
}
