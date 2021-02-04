import React from "react"
import typography from "../typography.module.css"
import styles from "./FAQ.module.css"
import { Accordion } from "react-bootstrap"
import FAQCard from "./FAQCard"
import Fade from "react-reveal/Fade"

export default function FAQ(props) {
  return (
    <div className="row">
      <Fade up>
        <div className="col-md-6 col-sm-12" id={styles.titleContainer}>
          <p className={typography.lowerLevelHeader}>FAQ</p>

          <h1 className={typography.chapterTitle}>{props.title}</h1>
        </div>
      </Fade>
      <Fade up delay={400}>
        <div className="col-md-6 col-sm-12">
          <Accordion className={styles.accordion}>
            <FAQCard thisKey="0" question={props.q1} text={props.a1} />
            <FAQCard thisKey="1" question={props.q2} text={props.a2} />
            <FAQCard thisKey="2" question={props.q3} text={props.a3} />
            <FAQCard thisKey="3" question={props.q4} text={props.a4} />
            <FAQCard thisKey="4" question={props.q5} text={props.a5} />
          </Accordion>
        </div>
      </Fade>
    </div>
  )
}
