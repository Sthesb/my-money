import { useEffect, useState } from 'react'
import { useFireStore } from '../../Hooks/useFireStore'


export default function TransactionForm({ uid }) {
  const [name, setName] = useState('')
  const [amount, setAmount] = useState('')
  const { addDocument, response } = useFireStore('transactions')

  // add transaction
  const handleSubmit = (e) => {
    e.preventDefault()
    addDocument({ 
      uid: uid,
      name, 
      amount,
    })

  }

  // reset fields
  useEffect(() => {
    if(response.success){
      setName('');
      setAmount('')
    }
  }, [response.success])

  return (
    <>
      <h3>Add a Transaction</h3>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Transaction name:</span>
          <input 
            type="text"
            required
            onChange={(e) => setName(e.target.value)} 
            value={name} 
          />
        </label>
        <label>
          <span>Amount (R):</span>
          <input
            type="number"
            required
            onChange={(e) => setAmount(e.target.value)} 
            value={amount} 
          />
        </label>
        <button>Add Transaction</button>
      </form>
    </>
  )
}