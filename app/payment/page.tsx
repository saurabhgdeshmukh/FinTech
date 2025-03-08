"use client"
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
      {/* Sidebar - Fixed on the left */}
      <Sidebar />
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
      
      <h1 className="text-2xl font-bold text-gray-800">Payment Transfer</h1>
      <p className="text-gray-500 mb-6">Please provide any specific details or notes related to the payment transfer</p>

      <form onSubmit={handleSubmit}>
        {/* Transfer details */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Select Source Bank</label>
          <select
            name="sourceBank"
            value={formData.sourceBank}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
          >
            <option value="">Select Account</option>
            <option value="Bank A">Bank A</option>
            <option value="Bank B">Bank B</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Transfer Note (Optional)</label>
          <textarea
            name="transferNote"
            value={formData.transferNote}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
            placeholder="Enter transfer note"
          />
        </div>

        {/* Recipient details */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Recipient's Email Address</label>
          <input
            type="email"
            name="recipientEmail"
            value={formData.recipientEmail}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
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
            className="w-full p-2 border rounded-lg"
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
            className="w-full p-2 border rounded-lg"
            placeholder="Enter amount"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
        >
          Transfer Funds
        </button>
      </form>
    </div>
    </div>
  );
};

export default PaymentTransfer;