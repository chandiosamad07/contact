import React from 'react'
import styles from './Navigation.module.css'
function Navigation() {
  return (
    <nav className={`${styles.navigation} container`}>
        <div className='logo'>
            <img src='/asset/logo.png' alt=''></img>
        </div>

        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul> 
      
    </nav>
  )
}

export default Navigation
