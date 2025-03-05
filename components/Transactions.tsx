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
    <div className="mt-5 bg-white p-6 rounded-xl w-full max-w-4xl mx-auto shadow-md overflow-hidden">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl text-gray-700 font-bold">Recent Transactions</h2>
        <button className="text-gray-700 p-2 border rounded-md text-sm font-semibold">View all</button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm min-w-[600px]">
          <thead>
            <tr className="text-left bg-gray-100 text-gray-500 border-b">
              <th className="pb-2 px-4">Transaction</th>
              <th className="pb-2 px-4">Amount</th>
              <th className="pb-2 px-4">Status</th>
              <th className="pb-2 px-4">Category</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((t, index) => (
              <tr key={index} className="border-b hover:bg-gray-50 text-center md:text-left">
                <td className="py-3 flex items-center space-x-3 px-4">
                  <Image src={t.icon} alt={t.name} width={32} height={32} className="rounded-full" />
                  <span className="font-medium text-gray-800">{t.name}</span>
                </td>
                <td className={`font-semibold px-4 ${t.color}`}>{t.amount}</td>
                <td className="px-4">
                  <span className={`px-3 py-1 text-xs font-medium rounded-full ${t.status === "Success" ? "text-green-600 bg-green-100" : t.status === "Processing" ? "text-yellow-600 bg-yellow-100" : "text-red-600 bg-red-100"}`}>{t.status}</span>
                </td>
                <td className="px-4">
                  <span className="border px-3 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-600">{t.category}</span>
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