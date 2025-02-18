import Transactions from "./Transactions";

const Dashboard = () => {
  return (
    <div className="flex-1 p-6">
      <h1 className="text-3xl font-bold">
        Welcome, <span className="text-3xl  text-blue-500">Saurabh</span>
      </h1>
      <p className="text-gray-600 mt-1">
        Access & manage your account and transactions efficiently.
      </p>

      {/* Bank Account Widget */}
      <div className="mt-5 bg-white p-6 rounded-xl shadow-md flex justify-between">
        <div>
          <p className="text-gray-600">Total Current Balance</p>
          <h2 className="text-3xl font-bold">$2,698.12</h2>
        </div>
        <button className="text-blue-500 font-semibold">+ Add bank</button>
      </div>

      {/* Recent Transactions */}
      <Transactions />
    </div>
  );
};

export default Dashboard;
