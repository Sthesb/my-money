import React from 'react'
// styles
import styles from './Home.module.css'
// hooks
import { useFireStore } from '../../Hooks/useFireStore'

export default function TransactionsList({ transactions }) {
  const amounts = []
  const { deleteDocument } = useFireStore('transactions');
  transactions.map(transact => (
    amounts.push(parseInt(transact.amount))
  ))
  var sum = amounts.reduce(function(a, b){
    return a + b;
  }, 0);

  return (
    <>
      <h4>Total amount spent:</h4>
      <h2>R {sum}</h2>
      <ul className={styles.transactions}>
        {transactions.map((transaction) => (
            <li key={transaction.id}> 
                  <p  className={styles.name}>{transaction.name}</p>
                  <p className={styles.amount}>R {transaction.amount}</p>
                  <button onClick={() => deleteDocument(transaction.id) }>x</button>
            </li>
        ))}
      </ul>
    </>
  )
}
