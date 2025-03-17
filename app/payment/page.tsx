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

  const [errors, setErrors] = useState({
    sourceBank: "",
    recipientEmail: "",
    recipientAccount: "",
    amount: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let valid = true;
    let newErrors: any = {};

    if (!formData.sourceBank) {
      newErrors.sourceBank = "Please select a source bank.";
      valid = false;
    }
    if (!formData.recipientEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.recipientEmail)) {
      newErrors.recipientEmail = "Enter a valid email address.";
      valid = false;
    }
    if (!formData.recipientAccount) {
      newErrors.recipientAccount = "Recipient's account number is required.";
      valid = false;
    }
    if (!formData.amount || parseFloat(formData.amount) <= 0) {
      newErrors.amount = "Enter a valid amount.";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Transfer Details: ", formData);
      alert("Transfer initiated successfully!");
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md w-full mt-10">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Payment Transfer</h1>
        <p className="text-gray-500 mb-6 text-sm">Provide the necessary details to process your transfer securely.</p>
        <h3 className="text-xl font-bold text-gray-800 mb-2">Transfer Details</h3>
        <p className="text-gray-500 mb-6 text-sm">Enter the details of the recipent</p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4 flex">
            <div>
          <h3 className="text-l  text-gray-800 mb-2">Select Source Bank</h3>
          <p className="text-gray-500 mb-6 text-sm">Select the bank Account you want to transfer funds from</p>
          </div>
            <select
              name="sourceBank"
              value={formData.sourceBank}
              onChange={handleChange}
              className={`w-full p-3 border rounded-lg bg-gray-50 focus:outline-none ${errors.sourceBank ? "border-red-500" : ""}`}
            >
              <option value="">Select Account</option>
              <option value="Bank A">Bank A</option>
              <option value="Bank B">Bank B</option>
            </select>
            {errors.sourceBank && <p className="text-red-500 text-sm">{errors.sourceBank}</p>}
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Transfer Note (Optional)</label>
            <textarea
              name="transferNote"
              value={formData.transferNote}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg bg-gray-50 focus:outline-none"
              placeholder="Optional message to the recipient."
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Recipient's Email Address</label>
            <input
              type="email"
              name="recipientEmail"
              value={formData.recipientEmail}
              onChange={handleChange}
              className={`w-full p-3 border rounded-lg bg-gray-50 focus:outline-none ${errors.recipientEmail ? "border-red-500" : ""}`}
              placeholder="john@gmail.com"
            />
            {errors.recipientEmail && <p className="text-red-500 text-sm">{errors.recipientEmail}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Recipient's Bank Account Number</label>
            <input
              type="text"
              name="recipientAccount"
              value={formData.recipientAccount}
              onChange={handleChange}
              className={`w-full p-3 border rounded-lg bg-gray-50 focus:outline-none ${errors.recipientAccount ? "border-red-500" : ""}`}
              placeholder="Enter account number"
            />
            {errors.recipientAccount && <p className="text-red-500 text-sm">{errors.recipientAccount}</p>}
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">Amount</label>
            <input
              type="number"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              className={`w-full p-3 border rounded-lg bg-gray-50 focus:outline-none ${errors.amount ? "border-red-500" : ""}`}
              placeholder="40000"
            />
            {errors.amount && <p className="text-red-500 text-sm">{errors.amount}</p>}
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