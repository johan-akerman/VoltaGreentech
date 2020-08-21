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
            <th className={typography.lowerLevelHeader}>Title</th>
            <th className={typography.lowerLevelHeader}>Publisher</th>
            <th className={typography.lowerLevelHeader}>Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={styles.title}>
              Swedish start-up tackling methane emissions in cattle attracts
              investors
            </td>
            <td className={styles.title}>Feed Navigator</td>
            <td className={styles.text}>2020.06.02</td>
          </tr>
          <tr>
            <td className={styles.title}>
              The startup waging war against cows farts
            </td>
            <td className={styles.title}>Sifted</td>
            <td className={styles.text}>2020.06.01</td>
          </tr>
          <tr>
            <td className={styles.title}>
              This factory is growing a new kind of food for cows
            </td>
            <td className={styles.title}>Fast Company</td>
            <td className={styles.text}>2020.06.01</td>
          </tr>

          <tr>
            <td className={styles.title}>
              Swedish start-up tackling methane emissions in cattle attracts
              investors
            </td>
            <td className={styles.title}>Feed Navigator</td>
            <td className={styles.text}>2020.06.02</td>
          </tr>
          <tr>
            <td className={styles.title}>
              The startup waging war against cows farts
            </td>
            <td className={styles.title}>Sifted</td>
            <td className={styles.text}>2020.06.01</td>
          </tr>
          <tr>
            <td className={styles.title}>
              This factory is growing a new kind of food for cows
            </td>
            <td className={styles.title}>Fast Company</td>
            <td className={styles.text}>2020.06.01</td>
          </tr>
        </tbody>
      </Table>
      <div className={typography.btnContainer}>
        <a className={typography.btn}>Load more</a>
      </div>
    </div>
  )
}
