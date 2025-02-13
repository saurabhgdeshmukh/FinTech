interface Transaction {
    name: string;
    amount: string;
    status: string;
    category: string;
    color: string;
  }
  
  const transactions: Transaction[] = [
    { name: "Spotify", amount: "-$15.00", status: "Processing", category: "Subscriptions", color: "text-red-500" },
    { name: "Alexa Doe", amount: "+$88.00", status: "Success", category: "Deposit", color: "text-green-500" },
    { name: "Figma", amount: "-$18.99", status: "Processing", category: "Income", color: "text-red-500" },
    { name: "FSV", amount: "+$80.00", status: "Success", category: "Groceries", color: "text-green-500" },
    { name: "Sam Sulek", amount: "-$40.20", status: "Declined", category: "Food", color: "text-red-500" },
  ];
  
  const Transactions: React.FC = () => {
    return (
      <div className="mt-5 bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-xl font-bold mb-4">Recent Transactions</h2>
        <div className="space-y-4">
          {transactions.map((t, index) => (
            <div key={index} className="flex justify-between items-center border-b pb-2">
              <span>{t.name}</span>
              <span className={`font-medium ${t.color}`}>{t.amount}</span>
              <span className="text-gray-500 text-sm">{t.status}</span>
              <span className="text-gray-400 text-sm">{t.category}</span>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Transactions;
  