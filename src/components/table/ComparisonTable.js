import React from "react"
import typography from "../typography.module.css"
import { Table } from "react-bootstrap"
import Fade from "react-reveal/Fade"
import styles from "./ComparisonTable.module.css"

export default function ComparisonTable(props) {
  return (
    <div className={styles.container}>
      <Fade up>
        <p className={typography.lowerLevelHeader}>Volta factory 02</p>
        <h1 className={typography.chapterTitle}>
          The world’s largest red seaweed factory
        </h1>
        <br />
      </Fade>

      <div className="row">
        <Fade up delay={350}>
          <div className="col-lg-6" id={styles.firstColumn}>
            <Table className={styles.table}>
              <tbody>
                <tr>
                  <td className={styles.title}>Location</td>
                  <td className={styles.text}>Lysekil, Sweden</td>
                </tr>
                <tr>
                  <td className={styles.title}>Production</td>
                  <td className={styles.text}>120 ton algae / year</td>
                </tr>
                <tr>
                  <td className={styles.title}>Investment</td>
                  <td className={styles.text}>€20M </td>
                </tr>
                <tr>
                  <td className={styles.title}>Production modules</td>
                  <td className={styles.text}>20</td>
                </tr>
              </tbody>
            </Table>
          </div>
          <div className="col-lg-6">
            {" "}
            <Table className={styles.table}>
              <tbody>
                <tr>
                  <td className={styles.title}>Size</td>
                  <td className={styles.text}>10 000 sqm</td>
                </tr>
                <tr>
                  <td className={styles.title}>Jobs created</td>
                  <td className={styles.text}>{">"} 50</td>
                </tr>
                <tr>
                  <td className={styles.title}>Installed seapipe</td>
                  <td className={styles.text}>
                    50 m deep. 200m out from coast
                  </td>
                </tr>
                <tr>
                  <td className={styles.title}>Energy source</td>
                  <td className={styles.text}>
                    Waste heat and 100 % renewable electricity
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </Fade>
      </div>
    </div>
  )
}
