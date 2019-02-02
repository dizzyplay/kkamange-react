import React from 'react'
import styles from './styles.scss'

export default function Footer(props,context) {
  return(
    <footer className={styles.footer}>
      <div className={styles.column}>
        <span className={styles.copyright}>Copyright 2018 kkamange</span>
      </div>
      <div className={styles.column}>
        <nav className={styles.nav}>
          <ul className={styles.list}>
            <li className={styles.listItem}>About Us</li>
            <li className={styles.listItem}>Press</li>
            <li className={styles.listItem}>Privacy</li>
            <li className={styles.listItem}>Terms</li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}

