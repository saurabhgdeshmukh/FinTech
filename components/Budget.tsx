import React from "react";
import { FaPlus } from "react-icons/fa";
import Card from "@/components/Card";

const Budget: React.FC = () => {
  // Dummy Bank Accounts Data for Cards
  const accounts = [
    {
      appwriteItemId: "1",
      name: "Chase Bank",
      currentBalance: 5200,
      mask: "1234",
      shareableId: "CHASE-123",
    },
    {
      appwriteItemId: "2",
      name: "Bank of America",
      currentBalance: 3500,
      mask: "5678",
      shareableId: "BOFA-567",
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow-md w-full max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto p-4">
      {/* Profile Section */}
      <div
        className="flex flex-col border-b border-gray-200 relative bg-cover bg-center"
        style={{ backgroundImage: `url('/icons/gradient-mesh.svg')`, height: "100px" }}
      >
        {/* Overlay to Improve Readability */}
        <div className="bg-black bg-opacity-10 rounded-t-lg"></div>

        {/* Profile Picture */}
        <div className="border-2 border-white ml-3 w-16 h-16 shadow-lg rounded-full mt-[65px]">
          <img
            src="/icons/jsm.svg"
            alt="Profile Logo"
            className="w-16 h-16 rounded-full"
          />
        </div>
      </div>
      <div className="p-6">
        {/* User Info */}
        <h2 className="text-lg font-semibold text-gray-900 mt-2 relative text-center md:text-left">
          Saurabh Deshmukh
        </h2>
        <p className="text-gray-500 text-sm relative text-center md:text-left">Saurabh@Deshmukh.pro</p>

        {/* My Banks Section */}
        <div className="mt-5">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-md font-semibold text-gray-700">My Banks</h3>
            <button className="text-gray-500 flex items-center text-sm">
              <FaPlus className="mr-1" />
              Add bank
            </button>
          </div>

          {/* Render Cards */}
          <div className="space-y-3">
            {accounts.map((account) => (
              <Card key={account.appwriteItemId} account={account} userName="Saurabh Deshmukh" showBalance />
            ))}
          </div>
        </div>
      </div>

      <hr className="border-t border-gray-200 my-4" />

      {/* My Budgets Section */}
      <div className="mt-5 bg-white p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg text-gray-600 font-bold">My Budgets</h2>
          <button className="text-gray-500 hover:text-gray-700 text-lg">⋮</button>
        </div>

        <div className="space-y-4">
          {/* Subscriptions */}
          <div className="p-3 bg-blue-50 rounded-lg flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2">
              <img
                src="/icons/monitor.svg"
                alt="Subscriptions"
                className="w-8 h-8 p-2 bg-blue-200 rounded-full"
              />
              <span className="text-gray-700 font-medium">Subscriptions</span>
            </div>
            <span className="text-blue-600 font-medium">$25 left</span>
          </div>

          {/* Food and Booze */}
          <div className="p-3 bg-red-50 rounded-lg flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2">
              <img
                src="/icons/shopping-bag.svg"
                alt="Food and booze"
                className="w-8 h-8 p-2 bg-red-200 rounded-full"
              />
              <span className="text-gray-700 font-medium">Food and booze</span>
            </div>
            <span className="text-red-600 font-medium">$120 left</span>
          </div>

          {/* Savings */}
          <div className="p-3 bg-green-50 rounded-lg flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2">
              <img
                src="/icons/coins.svg"
                alt="Savings"
                className="w-8 h-8 p-2 bg-green-200 rounded-full"
              />
              <span className="text-gray-700 font-medium">Savings</span>
            </div>
            <span className="text-green-600 font-medium">$50 left</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Budget;
