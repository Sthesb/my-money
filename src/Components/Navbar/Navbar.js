import React from 'react';
import { Link } from 'react-router-dom'


import styles from './Navbar.module.css'
// Hooks
import { useAuthLogout } from '../../Hooks/useAuthLogout';
import { useAuthContext } from '../../Hooks/useAuthContext';

export default function Navbar() {
  const { logout } = useAuthLogout()
  const { user } = useAuthContext();
  return (
      <nav className={styles.navbar}>
        <ul>
          <li className={styles.title}><Link to="/">myMoney</Link></li>
          {!user && (
            <>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/signup">Signup</Link></li>
            </>
          )}
          {user && (
            <>
              <li>{ user.displayName }</li>
              <li><button className="btn" onClick={logout}>Logout</button></li>
            </>
          )}

          
        </ul>
      </nav>
    )
}
