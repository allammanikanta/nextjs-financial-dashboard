"use client";
import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { useSelector } from "react-redux";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const BalanceHistoryChart = () => {
  const labels = useSelector((state) => state.dashboard.balanceHistoryLabels);
  const balanceHistory = useSelector((state) => state.dashboard.balanceHistory);

  const gradient = (ctx) => {
    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, "rgba(57, 106, 255, 0.25)");
    gradient.addColorStop(1, "rgba(57, 106, 255, 0)");
    return gradient;
  };

  const addGradientBG = (balanceHistory) => {
    return balanceHistory.map((dataset) => ({
      ...dataset,
      backgroundColor: (ctx) => gradient(ctx.chart.ctx),
    }));
  };

  const data = {
    labels: labels ?? [],
    datasets: addGradientBG(balanceHistory) ?? [],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        mode: "index",
        intersect: false,
      },
      datalabels: {
        display: false,
      },
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        border: {
          display: false,
          dash: [5, 5],
        },
      },
      y: {
        border: {
          display: false,
          dash: [5, 5],
        },
        ticks: {
          stepSize: 200,
          beginAtZero: true,
        },
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default BalanceHistoryChart;
