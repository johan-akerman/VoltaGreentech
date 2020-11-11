import React from "react"
import typography from "../typography.module.css"
import { Table } from "react-bootstrap"
import Fade from 'react-reveal/Fade';

import styles from "./ComparisonTable.module.css"

export default function ComparisonTable(props) {
  return (
  
    <div className={styles.container}>
      <Fade up>
   
        <p className={typography.lowerLevelHeader}>Specs</p>
        <h1 className={typography.chapterTitle}>Factory 01 specifications</h1>
  
      </Fade>

      <div className="row">

      <Fade up delay={350}>
        <div className="col-lg-6" id={styles.firstColumn}>
          <Table className={styles.table}>
          
            <tbody>
              <tr>
                <td className={styles.title}>Spec title</td>
                <td className={styles.text}>Spec value</td>
              </tr>
              <tr>
                <td className={styles.title}>Spec title</td>
                <td className={styles.text}>Spec value</td>
              </tr>
              <tr>
                <td className={styles.title}>Spec title</td>
                <td className={styles.text}>Spec value</td>
              </tr>
              <tr>
                <td className={styles.title}>Spec title</td>
                <td className={styles.text}>Spec value</td>
              </tr>
            </tbody>
      
          </Table>
        </div>
        <div className="col-lg-6">
          {" "}
          <Table className={styles.table}>
            <tbody>
              <tr>
                <td className={styles.title}>Spec title</td>
                <td className={styles.text}>Spec value</td>
              </tr>
              <tr>
                <td className={styles.title}>Spec title</td>
                <td className={styles.text}>Spec value</td>
              </tr>
              <tr>
                <td className={styles.title}>Spec title</td>
                <td className={styles.text}>Spec value</td>
              </tr>
              <tr>
                <td className={styles.title}>Spec title</td>
                <td className={styles.text}>Spec value</td>
              </tr>
            </tbody>
          </Table>
        </div>
        </Fade>
      </div>
    </div>
  )
}
