"use client";
import React from "react";
import Card from "../../components/Card";
import Link from "next/link";
import RecentTransactions from "../../components/RecentTransactions";
import WeeklyActivityChart from "../../components/WeeklyActivityChart";
import ExpenseStatisticsChart from "../../components/ExpenseStatisticsChart";
import QuickTransfer from "../../components/QuickTransfer";
import BalanceHistoryChart from "../../components/BalanceHistoryChart";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const cards = useSelector((state) => state.dashboard.cards);
  const transactions = useSelector((state) => state.dashboard.transactions);

  return (
    <div className="space-y-8 bg-gray-100">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">
        <div className="col-span-4">
          <div className="flex justify-between items-center mb-4">
            <div className="text-[22px] font-semibold text-[#343C6A]">
              My Cards
            </div>
            <Link href="/creditcards" className="text-[#343C6A] font-semibold">
              See All
            </Link>
          </div>
          <div className="flex flex-row gap-4 space-x-4 overflow-x-auto">
            {cards.map((card, index) => (
              <Card
                key={index}
                cardNumber={card.cardNumber}
                cardHolder={card.cardHolder}
                validThru={card.validThru}
                balance={card.balance}
                primary={card.primary}
              />
            ))}
          </div>
        </div>

        <div className="col-span-2 w-[325px] sm:w-[325px] lg:w-[350px]">
          <div className="text-[22px] font-semibold text-[#343C6A] mb-4">
            Recent Transactions
          </div>
          <RecentTransactions transactions={transactions} />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">
        <div className="col-span-4">
          <div className="text-[22px] font-semibold text-[#343C6A] mb-4">
            Weekly Activity
          </div>
          <div className="bg-white p-4 shadow-md rounded-[25px] sm:h-[254px] lg:h-[322px] ">
            <WeeklyActivityChart />
          </div>
        </div>

        <div className="col-span-2 w-[325px] sm:w-[325px] lg:w-[350px]">
          <div className="text-[22px] font-semibold text-[#343C6A] mb-4">
            Expense Statistics
          </div>
          <div className="flex align-middle justify-center bg-white p-4 shadow-md rounded-[25px] sm:h-[254px] lg:h-[322px] sm:w-[325px] md:w-[350px] lg:w-full">
            <ExpenseStatisticsChart />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-10 gap-6">
        <div className="col-span-4 max-w-[425px] min-w-[300px]">
          <div className="text-[22px] font-semibold text-[#343C6A] mb-4">
            Quick Transfer
          </div>
          <div className="bg-white p-4 shadow-md rounded-[25px] sm:h-[276px] lg:h-[276px]">
            <QuickTransfer />
          </div>
        </div>

        <div className="col-span-6">
          <div className="text-[22px] font-semibold text-[#343C6A] mb-4">
            Balance History
          </div>
          <div className="bg-white p-4 shadow-md rounded-[25px] sm:h-[276px] lg:h-[276px]">
            <BalanceHistoryChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
