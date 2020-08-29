import React from "react"
import typography from "../typography.module.css"
import { Table } from "react-bootstrap"

import styles from "./ComparisonTable.module.css"

export default function ComparisonTable(props) {
  return (
    <div className={styles.container}>
      <div>
        <p className={typography.lowerLevelHeader}>Specs</p>
        <h1 className={typography.chapterTitle}>Factory 01 specifications</h1>
      </div>
      <div className="row">
        <div className="col-lg-6" id={styles.firstColumn}>
          <Table className={styles.table}>
            <tbody>
              <tr>
                <td className={styles.title}>Loading capacity</td>
                <td className={styles.text}>15-18 pallets</td>
              </tr>
              <tr>
                <td className={styles.title}>Range per charge</td>
                <td className={styles.text}>130-180 km</td>
              </tr>
              <tr>
                <td className={styles.title}>Gross vehicle weight</td>
                <td className={styles.text}>26 tonnes</td>
              </tr>
              <tr>
                <td className={styles.title}>Payload</td>
                <td className={styles.text}>16 tonnes</td>
              </tr>
            </tbody>
          </Table>
        </div>
        <div className="col-lg-6">
          {" "}
          <Table className={styles.table}>
            <tbody>
              <tr>
                <td className={styles.title}>Loading capacity</td>
                <td className={styles.text}>15-18 pallets</td>
              </tr>
              <tr>
                <td className={styles.title}>Range per charge</td>
                <td className={styles.text}>130-180 km</td>
              </tr>
              <tr>
                <td className={styles.title}>Gross vehicle weight</td>
                <td className={styles.text}>26 tonnes</td>
              </tr>
              <tr>
                <td className={styles.title}>Payload</td>
                <td className={styles.text}>16 tonnes</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  )
}
