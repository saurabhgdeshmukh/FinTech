"use client";
import { PieChart, Pie, Cell } from "recharts";
import Transactions from "./Transactions";

const data = [
  { name: "Filled", value: 30 }, // Change this value for different progress
  { name: "Remaining", value: 70 },
];

const COLORS = ["#1570EF", "#E5E7EB"]; // Blue and light gray

const Dashboard = () => {
  return (
    <div className="flex-1 p-4">
      {/* Welcome Text */}
      <h1 className="text-3xl font-bold text-gray-700">
        Welcome, <span className="text-3xl text-blue-500">Saurabh</span>
      </h1>
      <p className="text-gray-600 mt-1">
        Access & manage your account and transactions efficiently.
      </p>

      {/* Bank Account Widget with Donut Chart */}
      <div className="mt-5 bg-white p-6 rounded-xl border shadow-md flex items-center w-full">
        {/* Donut Chart */}
        <PieChart width={100} height={100}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={37}
            outerRadius={50}
            startAngle={90}
            endAngle={-270}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
          </Pie>
        </PieChart>

        {/* Bank Account Info */}
        <div className="ml-9 flex justify-between w-full">
          {/* Left Side - Bank Details */}
          <div>
            <p className="text-gray-800 font-bold">2 Bank Accounts</p>
            <p className="mt-4 text-gray-600">Total Current Balance</p>
            <h2 className="text-3xl font-semibold">$2,698.12</h2>
          </div>

          {/* Right Side - Add Bank Button */}
          <button className="text-blue-500 font-semibold text-sm">
            + Add bank
          </button>
        </div>
      </div>

      {/* Recent Transactions */}
      <Transactions />
    </div>
  );
};

export default Dashboard;
