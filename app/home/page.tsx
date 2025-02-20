import Sidebar from "@/components/Sidebar";
import Dashboard from "@/components/Dashboard";
import Budget from "@/components/Budget";

const HomePage: React.FC = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar - Fixed on the left */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex flex-col flex-1 p-4 overflow-y-auto">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Dashboard - Takes full width */}
          <div className="flex-1">
            <Dashboard />
          </div>

          {/* Budget - Keeps its predefined size */}
          <div className="w-auto">
            <Budget />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
