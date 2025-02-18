import Image from "next/image";

interface Transaction {
  name: string;
  amount: string;
  status: string;
  category: string;
  color: string;
  icon: string; // Image path for icons
}

const transactions: Transaction[] = [
  {
    name: "Spotify",
    amount: "-$15.00",
    status: "Processing",
    category: "Subscriptions",
    color: "text-red-500",
    icon: "/icons/spotify.svg",
  },
  {
    name: "Alexa Doe",
    amount: "+$88.00",
    status: "Success",
    category: "Deposit",
    color: "text-green-500",
    icon: "/icons/a-coffee.svg",
  },
  {
    name: "Figma",
    amount: "-$18.99",
    status: "Processing",
    category: "Income",
    color: "text-red-500",
    icon: "/icons/figma.svg",
  },
  {
    name: "FSV",
    amount: "+$80.00",
    status: "Success",
    category: "Groceries",
    color: "text-green-500",
    icon: "/icons/fresh-fv.svg",
  },
  {
    name: "Sam Sulek",
    amount: "-$40.20",
    status: "Declined",
    category: "Food",
    color: "text-red-500",
    icon: "/icons/a-coffee.svg",
  },
];

const Transactions: React.FC = () => {
  return (
    <div className="mt-5 bg-white p-6 rounded-xl ">
      {/* Header with View All Button */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl text-gray-700 font-bold">Recent Transactions</h2>
        <button className="text-gray-700 p-2 border rounded-md text-sm font-semibold">View all</button>
      </div>

      {/* Bank Selection Tabs */}
      <div className="flex space-x-6 border-b pb-3">
        <button className="text-blue-500 text-sm font-semibold border-b-2 border-blue-500 pb-2">Chase Bank</button>
        <button className="text-gray-500 text-sm font-semibold pb-2">Bank of America</button>
        <button className="text-gray-500 text-sm font-semibold pb-2">First Platypus Bank</button>
      </div> 

      {/* Bank Card */}
      <div className="flex items-center justify-between bg-blue-50 px-4 py-3 rounded-lg mt-4">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-blue-500 text-white flex items-center justify-center rounded-full text-lg font-semibold">
            CB
          </div>
          <div>
            <p className="font-semibold text-gray-800">Chase Bank</p>
            <p className="text-blue-500 font-bold text-lg">$2,588.12</p>
          </div>
        </div>
        <span className="text-green-600 bg-green-100 px-3 py-1 text-xs font-semibold rounded-md">savings</span>
      </div>

      {/* Transaction List */}
      <div className="mt-4">
        <table className="w-full">
          <thead>
            <tr className="text-left bg-gray-100 px-2 text-gray-500 text-sm border-b rounded-lg">
              <th className="pb-2 text-xs font-medium">Transaction</th>
              <th className="pb-2 text-xs font-medium">Amount</th>
              <th className="pb-2 text-xs font-medium">Status</th>
              <th className="pb-2 text-xs font-medium">Date</th>
              <th className="pb-2 text-xs font-medium">Category</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((t, index) => (
              <tr key={index} className="border-b">
                {/* Transaction Name with Icon */}
                <td className="py-3 flex items-center space-x-3">
                  <Image src={t.icon} alt={t.name} width={32} height={32} className="rounded-full" />
                  <span className="font-medium text-sm text-gray-800">{t.name}</span>
                </td>

                {/* Amount */}
                <td className={`font-semibold text-sm ${t.color}`}>{t.amount}</td>

                {/* Status Badge */}
                <td>
                  <span
                    className={`px-3 py-1 text-xs font-medium rounded-full ${
                      t.status === "Success"
                        ? "text-green-600 bg-green-100"
                        : t.status === "Processing"
                        ? "text-yellow-600 bg-yellow-100"
                        : "text-red-600 bg-red-100"
                    }`}
                  >
                    {t.status}
                  </span>
                </td>

                {/* Date */}
                <td className="text-sm text-gray-500 ">{index % 2 === 0 ? "Wed 1:00pm" : "Tue 6:10pm"}</td>

                {/* Category Badge */}
                <td>
                  <span
                    className={`border px-2  text-xs font-medium rounded-full ${
                      t.category === "Deposit"
                        ? "bg-green-100 text-green-600"
                        : t.category === "Groceries"
                        ? "bg-purple-100 text-purple-600"
                        : t.category === "Food"
                        ? "bg-red-100 text-red-600"
                        : "bg-blue-100 text-blue-600"
                    }`}
                  >
                    {t.category}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Transactions;
