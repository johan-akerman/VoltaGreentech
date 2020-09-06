import React from "react"
import styles from "./TeamMemberCard.module.css"
import typography from "../typography.module.css"

export default function teamMemberCard(props) {
  return (
    <div className="col-sm-12 col-md-6 col-lg-4">
      <a href={props.href} target="_blank" rel="noopener noreferrer">
        <div className={styles.card}>
          <img
            className={styles.image}
            src={props.image}
            alt="article thumbnail"
          />
          <div className={styles.cardContent}>
            <h4 className={styles.title}>{props.title}</h4>
            <div className={styles.position}>{props.position}</div>
            <a
              id={styles.link}
              className={typography.link}
              href={`mailto:${props.email}`}
            >
              {props.email}
            </a>
          </div>
        </div>
      </a>
    </div>
  )
}
