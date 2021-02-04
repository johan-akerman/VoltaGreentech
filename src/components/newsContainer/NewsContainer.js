import React from "react"
import typography from "../typography.module.css"
import NewsTable from "./NewsTable"
import styles from "./NewsTable.module.css"
import Fade from "react-reveal/Fade"

export default function NewsContainer(props) {
  return (
    <div className={styles.container}>
      <Fade up>
        <p className={typography.lowerLevelHeader}>News</p>
        <h1 className={typography.chapterTitle}>Volta in the news</h1>
      </Fade>

      <NewsTable />
    </div>
  )
}
