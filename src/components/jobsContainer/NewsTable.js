import React from "react"
import typography from "../typography.module.css"
import { Table, Button } from "react-bootstrap"

import styles from "./NewsTable.module.css"

export default function NewsTable(props) {
  return (
    <div className={styles.container}>
      <Table className={styles.table}>
        <thead>
          <tr>
            <th className={typography.lowerLevelHeader}>Job title</th>
            <th className={typography.lowerLevelHeader}>Location</th>
            <th className={typography.lowerLevelHeader}>Time</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={styles.title}>Mechanical engineer</td>
            <td className={styles.title}>Stockholm</td>
            <td className={styles.title}>Full time</td>
          </tr>
          <tr>
            <td className={styles.title}>Mechanical engineer</td>
            <td className={styles.title}>Stockholm / Lysekil</td>
            <td className={styles.title}>Full time</td>
          </tr>
          <tr>
            <td className={styles.title}>Summer internship</td>
            <td className={styles.title}>Stockholm</td>
            <td className={styles.title}>Full time</td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}
