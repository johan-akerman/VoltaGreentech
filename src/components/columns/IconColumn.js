import React from "react"
import styles from "./IconColumn.module.css"

export default function IconColumn(props) {
  return (
    <div className="col-sm-12 col-md-6 col-lg-3">
      <img
        className={styles.image}
        src={props.illustration}
        alt="column icon"
      />
      <h4 className={styles.title}>{props.title}</h4> <p>{props.text}</p>
    </div>
  )
}
