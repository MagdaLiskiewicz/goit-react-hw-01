import clsx from "clsx";
import css from "./TransactionHistory.module.css";

export default function TransactionHistory({ items }) {
  return (
    <table className={css.transactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map((transactions) => (
          <tr key={transactions.id}>
            <td>{transactions.type}</td>
            <td>{transactions.amount}</td>
            <td>{transactions.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
