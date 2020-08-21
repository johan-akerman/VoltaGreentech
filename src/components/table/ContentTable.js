import React from "react"
import typography from "../typography.module.css"
import { Table } from "react-bootstrap"

import styles from "./ComparisonTable.module.css"

export default function ComparisonTable(props) {
  return (
    <div className={styles.container}>
      <p className={typography.lowerLevelHeader}></p>
      <h1 className={typography.chapterTitle}>Näringsvärde per 100g</h1>
      <div className="row">
        <div className="col-lg-4">
          <Table className={styles.table}>
            <tbody>
              <tr>
                <td className={styles.title}>Energi</td>
                <td className={styles.text}>0</td>
              </tr>
              <tr>
                <td className={styles.title}>Fett</td>
                <td className={styles.text}>0</td>
              </tr>
              <tr>
                <td className={styles.title}>Varav mättat fett</td>
                <td className={styles.text}>0</td>
              </tr>
              <tr>
                <td className={styles.title}>Protein</td>
                <td className={styles.text}>0</td>
              </tr>

              <tr>
                <td className={styles.title}>Jod</td>
                <td className={styles.text}>0</td>
              </tr>
            </tbody>
          </Table>
        </div>
        <div className="col-lg-4">
          {" "}
          <Table className={styles.table}>
            <tbody>
              <tr>
                <td className={styles.title}>Kolhydrater</td>
                <td className={styles.text}>0</td>
              </tr>
              <tr>
                <td className={styles.title}>Varav sockerarter</td>
                <td className={styles.text}>0</td>
              </tr>
              <tr>
                <td className={styles.title}>Salt</td>
                <td className={styles.text}>0</td>
              </tr>
              <tr>
                <td className={styles.title}>Vitamin D</td>
                <td className={styles.text}>0</td>
              </tr>
              <tr>
                <td className={styles.title}>Molybden</td>
                <td className={styles.text}>0</td>
              </tr>
            </tbody>
          </Table>
        </div>
        <div className="col-lg-4">
          {" "}
          <Table className={styles.table}>
            <tbody>
              <tr>
                <td className={styles.title}>Pantotensyra</td>
                <td className={styles.text}>0</td>
              </tr>
              <tr>
                <td className={styles.title}>Kalium</td>
                <td className={styles.text}>0</td>
              </tr>
              <tr>
                <td className={styles.title}>Klorid</td>
                <td className={styles.text}>0</td>
              </tr>
              <tr>
                <td className={styles.title}>Kalcium</td>
                <td className={styles.text}>0</td>
              </tr>
              <tr>
                <td className={styles.title}>Fosfor</td>
                <td className={styles.text}>0</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  )
}
