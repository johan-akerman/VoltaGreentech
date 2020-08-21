import React from "react"
import styles from "./LinkElement.module.css"
import { Link } from "gatsby"
import arrow from "../../../static/illustrations/arrow.svg"

export default function LinkElement(props) {
  if (props.to) {
    return (
      <Link className={styles.link} to={props.to}>
        <span>
          {props.text}{" "}
          <img className={styles.arrow} src={arrow} alt="volta arrow icon" />
        </span>
      </Link>
    )
  }

  return null
}
