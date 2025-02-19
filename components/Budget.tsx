import React from "react";
import { FaPlus } from "react-icons/fa";

const Dashboard: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      {/* Profile Section */}
      <div className="flex flex-col items-center pb-4 border-b border-gray-200">
        <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center">
          <img src="/logo.png" alt="Profile Logo" className="w-12 h-12" />
        </div>
        <h2 className="text-lg font-semibold text-gray-900 mt-2">Saurabh Deshmukh</h2>
        <p className="text-gray-500 text-sm">Saurabh@Deshmukh.pro</p>
      </div>

      {/* My Banks Section */}
      <div className="mt-5">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-md font-semibold text-gray-700">My Banks</h3>
          <button className="text-gray-500 flex items-center text-sm">
            <FaPlus className="mr-1" />
            Add bank
          </button>
        </div>
        <div className="relative w-full">
          <div className="absolute top-4 left-4 w-full">
            <div className="bg-gradient-to-r from-gray-900 to-gray-700 text-white p-4 rounded-xl shadow-lg relative z-10">
              <p className="text-sm font-medium">Saurabh Deshmukh.</p>
              <p className="text-xs mt-1">Saurabh Deshmukh</p>
              <p className="text-xs">06/24</p>
              <p className="text-md font-semibold mt-2">1234 1234 1234 1234</p>
              <span className="absolute bottom-2 right-2 text-xs text-gray-300">VISA</span>
            </div>
          </div>
          <div className="bg-blue-500 p-4 rounded-xl shadow-md mt-6"></div>
        </div>
      </div>

      {/* My Budgets Section */}
      <div className="mt-5">
        <h2 className="text-lg font-bold mb-4">My Budgets</h2>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between">
              <span className="text-gray-600">Subscriptions</span>
              <span className="text-blue-500 font-medium">$25 left</span>
            </div>
            <div className="w-full bg-gray-200 h-2 rounded-full mt-1">
              <div className="bg-blue-500 h-2 rounded-full w-1/4"></div>
            </div>
          </div>

          <div>
            <div className="flex justify-between">
              <span className="text-gray-600">Food and booze</span>
              <span className="text-red-500 font-medium">$120 left</span>
            </div>
            <div className="w-full bg-gray-200 h-2 rounded-full mt-1">
              <div className="bg-red-500 h-2 rounded-full w-3/4"></div>
            </div>
          </div>

          <div>
            <div className="flex justify-between">
              <span className="text-gray-600">Savings</span>
              <span className="text-green-500 font-medium">$50 left</span>
            </div>
            <div className="w-full bg-gray-200 h-2 rounded-full mt-1">
              <div className="bg-green-500 h-2 rounded-full w-2/4"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
