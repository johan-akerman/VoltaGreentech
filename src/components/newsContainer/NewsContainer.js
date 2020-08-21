import React from "react"
import typography from "../typography.module.css"
import NewsTable from "./NewsTable"
import styles from "./NewsContainer.module.css"

export default function NewsContainer(props) {
  return (
    <div className={styles.container}>
      <p className={typography.lowerLevelHeader}>News</p>
      <h1 className={typography.chapterTitle}>Volta in the news</h1>
      <NewsTable />
    </div>
  )
}
