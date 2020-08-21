import React from "react"
import styles from "./IconColumn.module.css"
import typography from "../typography.module.css"

export default function IconColumn(props) {
  return (
    <div className="col-sm-12 col-md-6 col-lg-3">
      <img
        className={styles.image}
        src={props.illustration}
        alt="column icon"
      />

      <h4 className={styles.title}>Title goes here</h4>

      <p>Short text about this step goes here. </p>
    </div>
  )
}
