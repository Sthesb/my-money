import React from 'react'
// styles
import styles from './Home.module.css'
// hooks
import { useFireStore } from '../../Hooks/useFireStore'

export default function TransactionsList({ transactions }) {
  const { deleteDocument } = useFireStore('transactions');
  return (
    <ul className={styles.transactions}>
        {transactions.map((transaction) => (
            <li key={transaction.id}> 
                <p  className={styles.name}>{transaction.name}</p>
                <p className={styles.amount}>R {transaction.amount}</p>
                <button onClick={() => deleteDocument(transaction.id) }>x</button>
            </li>
        ))}
    </ul>
  )
}
