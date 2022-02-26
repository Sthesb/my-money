import React from 'react';
// styles
import styles from './Home.module.css'
// form
import TransactionForm from './TransactionForm';
import TransactionsList from './TransactionsList';
// hooks
import { useAuthContext } from '../../Hooks/useAuthContext'
import { useCollection } from '../../Hooks/useCollection';

export default function Home() {
  const { user } = useAuthContext()
  const { document , error} = useCollection(
    'transactions', 
    ['uid', '==', user.uid],
    ['createdAt', 'desc']
    )

    
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        { error && <p>{error}</p>}
        { document && <TransactionsList transactions={document} />}
      </div>
      <div className={styles.sidebar}>
        <TransactionForm uid = {user.uid}/>
      </div>
    </div>
    );
}

