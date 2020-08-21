import React from "react"
import styles from "./OpenPositions.module.css"
import { Card } from "react-bootstrap"
import arrow_white from "../../../static/illustrations/arrow_white.png"

export default function FAQCard(props) {
  return (
    <Card className={styles.card}>
      <div className={styles.header}>
        <span>
          {props.title}
          <br />
          {props.location},{props.time}
          <img
            className={styles.arrow}
            src={arrow_white}
            alt="volta arrow icon"
          />
        </span>
      </div>
    </Card>
  )
}
