import { Home, Banknote, History, Send } from "lucide-react";

const Sidebar: React.FC = () => {
  return (
    <div className="w-64 h-screen bg-white shadow-lg p-5 flex flex-col">
      <div className="mt-5 space-y-4">
        <div className="flex items-center space-x-3 text-blue-500 font-medium cursor-pointer">
          <Home />
          <span>Home</span>
        </div>
        <div className="flex items-center space-x-3 cursor-pointer">
          <Banknote />
          <span>My Banks</span>
        </div>
        <div className="flex items-center space-x-3 cursor-pointer">
          <History />
          <span>Transaction History</span>
        </div>
        <div className="flex items-center space-x-3 cursor-pointer">
          <Send />
          <span>Payment Transfer</span>
        </div>
      </div>
      <div className="mt-auto flex items-center space-x-3">
        <img src="/user.jpg" alt="User" className="w-10 h-10 rounded-full" />
        <div>
          <p className="text-sm font-semibold">Saurabh</p>
          <p className="text-xs text-gray-500">Saurabh@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
