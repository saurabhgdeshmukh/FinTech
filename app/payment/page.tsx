"use client";
import React, { useState } from "react";
import Sidebar from "@/components/Sidebar";

const PaymentTransfer: React.FC = () => {
  const [formData, setFormData] = useState({
    sourceBank: "",
    transferNote: "",
    recipientEmail: "",
    recipientAccount: "",
    amount: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Transfer Details: ", formData);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md w-full mt-10">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Payment Transfer</h1>
        <p className="text-gray-500 mb-6 text-sm">Please provide any specific details or notes related to the payment transfer</p>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Select Source Bank</label>
            <div className="relative border rounded-lg p-2 bg-gray-50 flex items-center">
              <span className="absolute left-3 text-gray-500">🏦</span>
              <select
                name="sourceBank"
                value={formData.sourceBank}
                onChange={handleChange}
                className="w-full pl-8 pr-2 bg-transparent focus:outline-none"
              >
                <option value="">Select Account</option>
                <option value="Bank A">Bank A</option>
                <option value="Bank B">Bank B</option>
              </select>
            </div>
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Transfer Note (Optional)</label>
            <textarea
              name="transferNote"
              value={formData.transferNote}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg bg-gray-50 focus:outline-none"
              placeholder="Dear John,\nI hope this message finds you well. I am transferring $100 to your account for fun. Please confirm once you receive it."
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Recipient's Email Address</label>
            <input
              type="email"
              name="recipientEmail"
              value={formData.recipientEmail}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg bg-gray-50 focus:outline-none"
              placeholder="john@gmail.com"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Recipient's Bank Account Number</label>
            <input
              type="text"
              name="recipientAccount"
              value={formData.recipientAccount}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg bg-gray-50 focus:outline-none"
              placeholder="Enter the account number"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">Amount</label>
            <input
              type="number"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg bg-gray-50 focus:outline-none"
              placeholder="40000"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg text-lg hover:bg-blue-700 transition"
          >
            Transfer Funds
          </button>
        </form>
      </div>
    </div>
  );
};

export default PaymentTransfer;