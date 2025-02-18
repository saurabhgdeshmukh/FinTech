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
  const [activeItem, setActiveItem] = useState("My Banks"); // Active item state

  const menuItems = [
    { name: "Home", icon: HomeIcon },
    { name: "My Banks", icon: mybanksIcon },
    { name: "Transaction History", icon: transaction },
    { name: "Payment Transfer", icon: payment },
    { name: "Connect Bank", icon: connectBank },
  ];

  return (
    <div className="p-3 w-78  bg-white shadow-lg">
      {/* Search Bar */}
      <div >
        <div className="px-3 py-3 pr-3 flex items-center border border-gray-800 rounded-md shadow-sm bg-white">
          <Search className="h-5 w-5 text-gray-500" />
          <input
            type="text"
            placeholder="Search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className=" p-2 rounded-md text-gray-700 bg-transparent"
          />
        </div>
      </div>

      {/* Navigation Links */}
      <div className="space-y-3">
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
      <div className="mt-auto border-t border-gray-200 pt-4 flex items-center space-x-3 px-3">
        <div>
          <p className="text-sm font-semibold text-gray-800">Saurabh</p>
          <p className="text-xs text-gray-500">Saurabh@gmail.com</p>
        </div>
        <Image
          src={logout} // Replace with actual user avatar
          alt="User Avatar"
          width={32}
          height={32}
          className="rounded-full"
        />
      </div>
    </div>
  );
};

export default Sidebar;
