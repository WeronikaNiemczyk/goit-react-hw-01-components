import PropTypes from 'prop-types';
import css from './TransactionsStyle.module.css';

export const Transactions = ({ items }) => {
  return (
    <>
      <div className={css.container}>
        <table className={css.transaction_history}>
          <thead>
            <tr>
              <th>Type</th>
              <th>Amount</th>
              <th>Currency</th>
            </tr>
          </thead>

          <tbody>
            {items.map((item, index) => (
              <tr key={index}>
                <td>{item.type}</td>
                <td>{item.amount}</td>
                <td>{item.currency}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
Transactions.propTypes = {
  items: PropTypes.string,
};
