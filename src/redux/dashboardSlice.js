import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cards: [
    {
      cardNumber: "3778123456781234",
      cardHolder: "Eddy Cusuma",
      validThru: "12/22",
      balance: "5756",
      primary: true,
    },
    {
      cardNumber: "3778765432101234",
      cardHolder: "John Doe",
      validThru: "01/23",
      balance: "2900",
      primary: false,
    },
  ],
  transactions: [
    {
      icon: "/images/cardIcon.svg", // Path to the icon
      iconBgColor: "#FFF5D9", // Light background for icon
      name: "Deposit from my Card",
      date: "28 January 2021",
      amount: -850,
    },
    {
      icon: "/images/paypalIcon.svg", // Path to the icon
      iconBgColor: "#E7EDFF", // Light background for icon
      name: "Deposit Paypal",
      date: "25 January 2021",
      amount: 2500,
    },
    {
      icon: "/images/dollarIcon.svg", // Path to the icon
      iconBgColor: "#DCFAF8", // Light background for icon
      name: "Jemi Wilson",
      date: "21 January 2021",
      amount: 5400,
    },
  ],
  weeklyTransactionsLabels: ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"],
  weeklyTransactions: [
    {
      label: "Deposit",
      data: [200, 150, 300, 400, 250, 200, 300],
      backgroundColor: "#396AFF",
      borderColor: "#396AFF",
      borderRadius: [10, 10, 10, 10],
      borderSkipped: false,
      barPercentage: 0.7,
      categoryPercentage: 0.4,
    },
    {
      label: "Withdraw",
      data: [100, 50, 150, 500, 200, 100, 250],
      backgroundColor: "#232323",
      borderColor: "#232323",
      borderRadius: [10, 10, 10, 10],
      borderSkipped: false,
      barPercentage: 0.7,
      categoryPercentage: 0.4,
    },
  ],
  expenseStatisticsLabels: ["Expense", "Others", "Investment", "Entertainment"],
  expenseStatistics: [
    {
      data: [15, 35, 20, 30],
      backgroundColor: ["#FC7900", "#232323", "#396AFF", "#343C6A"],
      borderColor: "#FFFFFF",
      offset: [20, 0, 0, 20],
    },
  ],
  contacts: [
    {
      id: 1,
      name: "Livia Bator",
      role: "CEO",
      image: "/images/CEOImage.jpg", // images can be S3 URL links
    },
    {
      id: 2,
      name: "Randy Press",
      role: "Director",
      image: "/images/DirectorImage.jpg",
    },
    {
      id: 3,
      name: "Workman",
      role: "Designer",
      image: "/images/DesignerImage.jpg",
    },
  ],
  balanceHistoryLabels: ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan"],
  balanceHistory: [
    {
      label: "Balance History",
      data: [100, 220, 120, 790, 210, 590, 220],
      fill: true,
      borderColor: "#1814F3",
      tension: 0.4,
      borderWidth: 3,
      pointRadius: 0,
    },
  ],
};

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {},
});

export default dashboardSlice.reducer;
