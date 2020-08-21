import React from "react"
import typography from "../typography.module.css"
import NewsTable from "./NewsTable"
import styles from "./NewsContainer.module.css"

export default function NewsContainer(props) {
  return (
    <div className={styles.container}>
      <p className={typography.lowerLevelHeader}>Join us</p>
      <h1 className={typography.chapterTitle}>Open positions</h1>
      <NewsTable />
    </div>
  )
}
