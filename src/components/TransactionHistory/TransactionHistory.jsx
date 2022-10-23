import PropTypes from 'prop-types';
import css from "./Transaction.module.css";
// import { TransactionTable, TransactionHead } from './TransactionHistory.styled';

const TransactionHistory = ({items}) => {
  // console.log(items)
  return    <table className={css.table}>
    <thead className={css.thead}>
    <tr className={css.tr}>
      <th className={css.th}>Type</th>
      <th className={css.th}>Amount</th>
      <th className={css.th}>Currency</th>
    </tr>
  </thead>

    <tbody className={css.tbody}>
      {
        (items.map(item =>{
        return  <tr key={item.id} className={css.tr}>
                  <td className={css.td}>{item.type}</td>
                  <td className={css.td}>{item.amount}</td>
                  <td className={css.td}>{ item.currency}</td>
                </tr>
        }))
      }
      
   
  </tbody>
</table>
  

}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired
  }))
}

export default TransactionHistory;