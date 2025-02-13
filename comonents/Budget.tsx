const Budget: React.FC = () => {
    return (
      <div className="bg-white p-6 rounded-xl shadow-md mt-5">
        <h2 className="text-xl font-bold mb-4">My Budgets</h2>
        <div className="space-y-4">
          <div className="flex justify-between">
            <span>Subscriptions</span>
            <span className="text-blue-500 font-medium">$25 left</span>
          </div>
          <div className="flex justify-between">
            <span>Food and Booze</span>
            <span className="text-red-500 font-medium">$120 left</span>
          </div>
          <div className="flex justify-between">
            <span>Savings</span>
            <span className="text-green-500 font-medium">$50 left</span>
          </div>
        </div>
      </div>
    );
  };
  
  export default Budget;
  