import React, { useState } from 'react';
import styles from './Signup.module.css'

export default function Signup() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  

  // handles submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, password)


  }

  

  return (
    <form className={styles['signup-form']} onSubmit={handleSubmit}>
      <h2>Sign Up</h2>
      <label>
        <span>Name:</span>
        <input type="text" value={name} onChange={(e)=> setName(e.target.value)} />
      </label>
      <label>
        <span>Email:</span>
        <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)} />
      </label>
      <label>
        <span>Password:</span>
        <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)} />
      </label>
      <button className="btn">Signup</button>
    </form>
    );
}
