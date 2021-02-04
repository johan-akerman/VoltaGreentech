import React from "react"
import styles from "./Card.module.css"
import LinkElement from "../buttons/link/LinkElement"
import Fade from "react-reveal/Fade"

export default function CenteredTextAndImage(props) {
  return (
    <Fade up delay={props.delay}>
      <div className="col-sm-12 col-md-6 col-lg-4">
        <a
          className={styles.wrapperAnchor}
          href={props.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className={styles.card}>
            <img
              className={styles.image}
              src={props.image}
              alt="article thumbnail"
            />
            <div className={styles.cardContent}>
              <div className={styles.type}>{props.date}</div>
              <h4 className={styles.title}>{props.title}</h4>
              <div className={styles.source}>
                <LinkElement to={props.href} text="Read story" />
              </div>
            </div>
          </div>
        </a>
      </div>
    </Fade>
  )
}
