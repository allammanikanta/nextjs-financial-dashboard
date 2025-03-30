"use client";
import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useSelector } from "react-redux";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const WeeklyActivityChart = () => {
  const weeklyTransactions = useSelector(
    (state) => state.dashboard.weeklyTransactions
  );
  const labels = useSelector(
    (state) => state.dashboard.weeklyTransactionsLabels
  );

  const data = {
    labels: labels ?? [],
    datasets: weeklyTransactions ?? [],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    aspectRatio: 2,
    plugins: {
      datalabels: {
        display: false,
      },
      tooltip: {
        mode: "index",
        intersect: false,
      },
      legend: {
        title: { padding: 200 },
        position: "top",
        align: "end",
        labels: {
          padding: 20,
          usePointStyle: true,
          pointStyle: "circle",
          font: {
            size: 12,
          },
        },
      },
    },
    scales: {
      x: {
        stacked: false,
        grid: {
          display: false,
        },
      },
      y: {
        stacked: false,
        border: { display: false },
        ticks: {
          padding: 10,
          stepSize: 100,
        },
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default WeeklyActivityChart;
