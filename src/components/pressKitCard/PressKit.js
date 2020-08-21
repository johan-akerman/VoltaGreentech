import React from "react"
import typography from "../typography.module.css"
import styles from "./PressKit.module.css"
import solution from "../../../static/kit_solution.png"
import brand from "../../../static/kit_brand.png"
import team from "../../../static/kit_team.png"

export default function HalfCard(props) {
  return (
    <React.Fragment>
      <div className="row">
        <div className="col-sm-12 col-md-4">
          <img
            className={styles.image}
            src={solution}
            alt="Product & production"
          />
          <div className={styles.cardContent}>
            <h4 className={typography.chapterTitle}>Product & production</h4>
            <a
              className={styles.link}
              href="https://www.google.com/intl/sv_ALL/drive/"
            >
              Download →
            </a>
          </div>
        </div>

        <div className="col-sm-12 col-md-4">
          <img
            className={styles.image}
            src={brand}
            alt="Logo & brand identity"
          />
          <div className={styles.cardContent}>
            <h4 className={typography.chapterTitle}>Logo & brand identity</h4>
            <a
              className={styles.link}
              href="https://www.google.com/intl/sv_ALL/drive/"
            >
              Download →
            </a>
          </div>
        </div>

        <div className="col-sm-12 col-md-4">
          <img className={styles.image} src={team} alt="Team & founders" />
          <div className={styles.cardContent}>
            <h4 className={typography.chapterTitle}>Team & founders</h4>
            <a
              className={styles.link}
              href="https://www.google.com/intl/sv_ALL/drive/"
            >
              Download →
            </a>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
