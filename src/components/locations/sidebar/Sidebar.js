import React from "react"

import Card from "../storeCard/Card.js"

import styles from "./Sidebar.module.css"

export default function Sidebar() {
  return (
    <div className={styles.container}>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  )
}
