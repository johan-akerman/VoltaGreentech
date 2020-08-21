import React from "react"
import typography from "../typography.module.css"
import MyNewsLetterForm from "./MyNewsLetterForm.js"

import styles from "./newsletter.module.css"

export default function newsletter(props) {
  return (
    <div className={styles.container}>
      <p className={typography.lowerLevelHeader}>Newsletter</p>

      <h1 className={typography.chapterTitle}>
        Want to follow our journey? Sign up for our newsletter.
      </h1>
      <MyNewsLetterForm />

      <p className={styles.infoText}>
        By signing up, you agree to receive emails from Volta.
      </p>
    </div>
  )
}
