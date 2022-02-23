import React from 'react';
// styles
import styles from './Home.module.css'
// form
import TransactionForm from './TransactionForm';
// hooks
import { useAuthContext } from '../../Hooks/useAuthContext'

export default function Home() {
  const { user } = useAuthContext()
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        transaction lists
      </div>
      <div className={styles.sidebar}>
        <TransactionForm uid = {user.uid}/>
      </div>
    </div>
    );
}

