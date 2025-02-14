"use client";
import Image from "next/image";
import HomeIcon from "@/public/icons/home.svg";
import mybanksIcon from "@/public/icons/dollar.svg";
import transaction from "@/public/icons/transaction.svg";
import payment from "@/public/icons/payment-transfer.svg";
import connectBank from "@/public/icons/connect-bank.svg";
import logout from "@/public/icons/logout.svg";
import { useState } from "react";
import { Search } from "lucide-react";

const Sidebar: React.FC = () => {
  const [query, setQuery] = useState("");
  return (
    <div className="w-64 h-screen bg-white shadow-lg p-5  flex-row justify-between">
      <div className="mt-5 space-y-4">
        <div className="relative flex items-center">
          <div className="flex items-center border border-gray-400 rounded-lg overflow-hidden w-80 shadow-md">
            <input
              type="text"
              placeholder="Search..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full p-2 outline-none text-gray-700"
            />
            <button className="p-2 bg-gray-200 hover:bg-gray-300 transition">
              <Search className="h-5 w-5 text-gray-600" />
            </button>
          </div>
        </div>
        <div className="flex items-center space-x-3 text-blue-500 font-medium cursor-pointer">
          <Image src={HomeIcon} alt="Home" width={24} height={24} />
          <span>Home</span>
        </div>
        <div className="flex items-center space-x-3 cursor-pointer">
          <Image src={mybanksIcon} alt="My Banks" width={24} height={24} />
          <span>My Banks</span>
        </div>
        <div className="flex items-center space-x-3 cursor-pointer">
          <Image src={transaction} alt="Transaction History" width={24} height={24} />
          <span>Transaction History</span>
        </div>
        <div className="flex items-center space-x-3 cursor-pointer">
          <Image src={payment} alt="Payment Transfer" width={24} height={24} />
          <span>Payment Transfer</span>
        </div>
        <div className="flex items-center space-x-3 cursor-pointer">
          <Image src={connectBank} alt="Connect Bank" width={24} height={24} />
          <span>Connect Bank</span>
        </div>
      </div>
      <div className="mt-auto flex items-center space-x-3">
        <div className="flex">
          <div>
            <p className="text-sm font-semibold">Saurabh</p>
            <p className="text-xs text-gray-500">Saurabh@gmail.com</p>
          </div>
          <div>
            <Image src={logout} alt="Logout" width={24} height={24} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;