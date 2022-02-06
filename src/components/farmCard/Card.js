import React from "react"
import styles from "./Card.module.css"
import LinkElement from "../buttons/link/LinkElement"
import Fade from "react-reveal/Fade"
import Img from "gatsby-image"

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
            <Img
              style={{ height: "100%", width: "100%", marginBottom: 0 }}
              imgStyle={{ objectFit: "contain" }}
              fluid={props.gatsbyImage}
            />
            <div className={styles.cardContent}>
              <div className={styles.type}>{props.location}</div>
              <h4 className={styles.title}>{props.title}</h4>
              <p>{props.text}</p>
              <div className={styles.source}>
                <LinkElement to={props.href} text="Visit restaurant" />
              </div>
            </div>
          </div>
        </a>
      </div>
    </Fade>
  )
}
