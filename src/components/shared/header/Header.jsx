import React from 'react';
import styles from './Header.module.css'

export default function Header() {
  return (
    <nav className={styles.Header}>
      <span className={styles.Header__logo}>The Blog</span>
      <input type="text" className={styles.Header__searchInput} placeholder="Search"/>
      <span className={styles.Header__userMenuIcon}>meu usuario</span>
    </nav>
  );
}