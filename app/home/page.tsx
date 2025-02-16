import Sidebar from "@/comonents/Sidebar";
import Dashboard from "@/comonents/Dashboard";
import Budget from "@/comonents/Budget";

const HomePage: React.FC = () => {
  return (
    <div className="flex bg-gray-200">
      <Sidebar />
      <div className="flex-1 p-6">
        <Dashboard />
        <Budget />
      </div>
    </div>
  );
};

export default HomePage;
