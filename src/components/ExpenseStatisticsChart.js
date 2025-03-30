"use client";
import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { useSelector } from "react-redux";

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const ExpenseStatisticsChart = () => {
  const labels = useSelector(
    (state) => state.dashboard.expenseStatisticsLabels
  );
  const expenseStatistics = useSelector(
    (state) => state.dashboard.expenseStatistics
  );
  const data = {
    labels: labels ?? [],
    datasets: expenseStatistics ?? [],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: false,
      datalabels: {
        display: true,
        color: "white",
        font: {
          weight: 700,
          size: 12,
        },
        formatter: (value, context) => {
          const percentage = context.dataset.data[context.dataIndex];
          const label = context.chart.data.labels[context.dataIndex];
          return `${percentage}% \n ${label}`;
        },
        textAlign: "center",
        anchor: "center",
        align: "center",
      },
      tooltip: false,
    },
  };

  //   // Adding a media query for smaller screens to adjust the font size
  //   const mobileOptions = {
  //     ...options,
  //     plugins: {
  //       ...options.plugins,
  //       datalabels: {
  //         ...options.plugins.datalabels,
  //         font: {
  //           ...options.plugins.datalabels.font,
  //           size: typeof window !== undefined && window.innerWidth < 600 ? 8 : 12, // Adjust font size based on screen width
  //         },
  //       },
  //     },
  //   };

  return <Pie data={data} options={options} />;
};

export default ExpenseStatisticsChart;
