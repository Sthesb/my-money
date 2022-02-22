import React, { useState } from 'react';
import styles from './Login.module.css'

// hooks
import { useAuthLogin } from '../../Hooks/useAuthLogin';

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { error, isPending, login } = useAuthLogin()

    const handleSubmit = (e) => {
        e.preventDefault();
        
        login(email, password)
        
        
    }
    return (
        <form className={styles['login-form']} onSubmit={handleSubmit}>
            <h2>Login</h2>
            <label >
                <span>Email:</span>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
            </label>
            <label >
                <span>Password:</span>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            </label>
            { !isPending && <button className="btn">Sign In</button>}
            { isPending && <button className="btn" disabled>Loading...</button>}
            { error && <p>{error}</p> }
        </form>
    );
}
