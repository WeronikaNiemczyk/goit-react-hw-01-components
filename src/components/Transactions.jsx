import { transactions } from 'transactions';

export const Transactions = () => {
  return (
    <>
      <table class="transaction-history">
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((t, index) => (
            <tr>
              <td key={index}>{t.type}</td>
              <td>{t.amount}</td>
              <td>{t.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
