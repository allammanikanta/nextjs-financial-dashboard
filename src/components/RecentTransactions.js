import React from "react";

const RecentTransactions = ({ transactions }) => {
  return (
    <div className="bg-white p-6 rounded-[25px] shadow-md h-[235px] w-full">
      <div className="space-y-4">
        {transactions.map((transaction, index) => (
          <div
            key={index}
            className="flex items-center justify-between rounded-[25px]"
          >
            <div
              className="w-12 h-12 flex justify-center items-center rounded-full"
              style={{
                backgroundColor: transaction.iconBgColor,
              }}
            >
              <img
                src={transaction.icon}
                alt="transaction icon"
                className="w-6 h-6 object-contain"
              />
            </div>

            <div className="flex-1 ml-4">
              <div
                className="text-lg pb-2"
                style={{
                  color: "#232323",
                  fontWeight: "500",
                  fontSize: "16px",
                  lineHeight: "100%",
                  letterSpacing: "0%",
                }}
              >
                {transaction.name}
              </div>
              <div
                className="text-sm"
                style={{
                  color: "#718EBF",
                  fontWeight: "400",
                  fontSize: "15px",
                  lineHeight: "100%",
                  letterSpacing: "0%",
                }}
              >
                {transaction.date}
              </div>
            </div>

            <div
              className="text-lg font-semibold"
              style={{
                color: transaction.amount < 0 ? "#FF4B4A" : "#41D4A8",
                fontWeight: "500",
                fontSize: "16px",
                lineHeight: "100%",
                letterSpacing: "0%",
              }}
            >
              {transaction.amount < 0
                ? `-$${Math.abs(transaction.amount)}`
                : `+$${transaction.amount}`}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentTransactions;
