"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Search } from "lucide-react";

import HomeIcon from "@/public/icons/home.svg";
import mybanksIcon from "@/public/icons/dollar.svg";
import transaction from "@/public/icons/transaction.svg";
import payment from "@/public/icons/payment-transfer.svg";
import connectBank from "@/public/icons/connect-bank.svg";
import logout from "@/public/icons/logout.svg";

const Sidebar = () => {
  const [query, setQuery] = useState("");
  const [activeItem, setActiveItem] = useState("My Banks"); // Active item state

  const menuItems = [
    { name: "Home", icon: HomeIcon },
    { name: "My Banks", icon: mybanksIcon },
    { name: "Transaction History", icon: transaction },
    { name: "Payment Transfer", icon: payment },
    { name: "Connect Bank", icon: connectBank },
  ];

  return (
    <div className="p-3 w-78 h-screen bg-white shadow-lg flex flex-col justify-between">
      {/* Search Bar */}
      <div>
        <div className="px-1 flex items-center border border-gray-200 rounded-md shadow-sm bg-white">
          <Search className="h-5 w-5 text-gray-500" />
          <input
            type="text"
            placeholder="Search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="p-2 w-full rounded-md text-gray-700 bg-transparent outline-none"
          />
        </div>
      </div>

      {/* Navigation Links */}
      <div className="mt-5 space-y-3 flex-grow">
        {menuItems.map((item) => (
          <div
            key={item.name}
            className={`flex items-center space-x-3 p-3 rounded-md cursor-pointer transition ${
              activeItem === item.name
                ? "bg-blue-500 text-white"
                : "text-gray-600 hover:bg-gray-100"
            }`}
            onClick={() => setActiveItem(item.name)}
          >
            <Image src={item.icon} alt={item.name} width={24} height={24} />
            <span className="text-sm font-medium">{item.name}</span>
          </div>
        ))}
      </div>

      {/* User Section - Fixed at the Bottom */}
      <div className="justify-center border-t border-gray-200 pt-4 flex items-center space-x-3 px-3">
        <div>
          <p className="text-sm font-semibold text-gray-800">Saurabh</p>
          <p className="text-xs text-gray-500">Saurabh@gmail.com</p>
        </div>
        <Image
          src={logout} // Replace with actual user avatar
          alt="User Avatar"
          width={28}
          height={28}
          className="mr-6 rounded-full cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Sidebar;
