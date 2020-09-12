import React from "react"
import styles from "./Card.module.css"
import arrow from "../../../../static/images/illustrations/arrow.svg"

export default function Card(props) {
  return (
    <div className={styles.card}>
      <h1 className={styles.title}>Ica Tornet</h1>
      <h2 className={styles.location}>Stockholmsvägen 43, Stocksund</h2>
    </div>
  )
}
