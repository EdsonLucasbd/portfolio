import React from 'react'
import styles from '../styles/pages/Home.module.css';

export default function Home() {
  return (
    <section className={styles.container}>
      <h1>Home</h1>
      <img src="/fotoPortfolio.png" alt="profile avatar"/>
    </section>
  )
}
