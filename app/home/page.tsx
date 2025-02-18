import Sidebar from "@/components/Sidebar";
import Dashboard from "@/components/Dashboard";
import Budget from "@/components/Budget";

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
