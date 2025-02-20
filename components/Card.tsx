import Image from "next/image";
import Link from "next/link";
import React from "react";

interface CreditCardProps {
  account: {
    appwriteItemId: string;
    name: string;
    currentBalance: number;
    mask: string;
    shareableId: string;
  };
  userName: string;
  showBalance?: boolean;
}

const Card: React.FC<CreditCardProps> = ({ account, userName, showBalance = true }) => {
  return (
    <div className="flex flex-col bg-gradient-to-r from-blue-500 to-blue-700 p-4 rounded-lg shadow-md">
      <Link href={`/transaction-history/?id=${account.appwriteItemId}`} className="bank-card">
        <div className="bank-card_content">
          <div>
            <h1 className="text-lg font-semibold text-white">{account.name}</h1>
            <p className="font-bold text-white">${account.currentBalance.toFixed(2)}</p>
          </div>

          <article className="flex flex-col gap-2 mt-3">
            <div className="flex justify-between">
              <h1 className="text-sm font-semibold text-white">{userName}</h1>
              <h2 className="text-sm font-semibold text-white">●● / ●●</h2>
            </div>
            <p className="text-sm font-semibold tracking-widest text-white">
              ●●●● ●●●● ●●●● <span className="text-lg">{account.mask}</span>
            </p>
          </article>
        </div>
      </Link>
    </div>
  );
};

export default Card;
