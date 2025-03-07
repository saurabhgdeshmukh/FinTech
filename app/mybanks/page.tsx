import Sidebar from "@/components/Sidebar";
import Card from "@/components/Card";
import React from "react";

const accounts = [
  {
    appwriteItemId: "1",
    name: "Horizon Banking",
    currentBalance: 2840.4,
    mask: "1234",
    shareableId: "abc123",
    spending: 1200,
  },
  {
    appwriteItemId: "2",
    name: "Bank of Australia",
    currentBalance: 2840.4,
    mask: "5678",
    shareableId: "def456",
    spending: 800,
  },
  {
    appwriteItemId: "3",
    name: "Bank of India",
    currentBalance: 2840.4,
    mask: "9101",
    shareableId: "ghi789",
    spending: 1500,
  },
  {
    appwriteItemId: "4",
    name: "Bank of America",
    currentBalance: 2840.4,
    mask: "1121",
    shareableId: "jkl012",
    spending: 1000,
  },
  {
    appwriteItemId: "5",
    name: "Bank of Canada",
    currentBalance: 2840.4,
    mask: "3141",
    shareableId: "mno345",
    spending: 600,
  },
  {
    appwriteItemId: "6",
    name: "Bank of Pakistan",
    currentBalance: 2840.4,
    mask: "5161",
    shareableId: "pqr678",
    spending: 1700,
  },
];

const MyBanks: React.FC = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar - Fixed on the left */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold text-gray-800">My Bank Accounts</h1>
        <p className="text-gray-500 mb-6">Effortlessly Manage Your Banking Activities</p>

        {/* Bank Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {accounts.map((account) => (
            <div key={account.appwriteItemId} className="p-4">
              <Card account={account} userName="Adrian Hajon" />
              <div className="mt-4">
                <p className="text-sm text-gray-600">Spending this month</p>
                <div className="w-full bg-gray-200 rounded-full h-1.5 mt-1">
                  <div
                    className="bg-blue-500 h-1.5 rounded-full"
                    style={{ width: `${(account.spending / account.currentBalance) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyBanks;