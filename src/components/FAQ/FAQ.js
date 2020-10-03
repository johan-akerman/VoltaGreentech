import React from "react"
import typography from "../typography.module.css"
import styles from "./FAQ.module.css"
import { Accordion } from "react-bootstrap"
import FAQCard from "./FAQCard"
import underline1 from "../../../static/images/illustrations/drawed_underline_alt1.svg"

export default function FAQ(props) {
  return (
    <div className="row">
      <div className="col-md-6 col-sm-12" id={styles.titleContainer}>
        <p className={typography.lowerLevelHeader}>FAQ</p>

        <h1 className={typography.chapterTitle}>
          Frequently asked<br></br>{" "}
          <span className={styles.textDecorationContainer}>
            <span className={styles.textDecorationImageContainer}>
              {" "}
              <img
                className={styles.textDecorationImage}
                src={underline1}
                aria-hidden="true"
                alt="text decoration"
              />
            </span>
            <span className={styles.textDecorationText}>questions</span>
          </span>{" "}
        </h1>
      </div>

      <div className="col-md-6 col-sm-12">
        <Accordion className={styles.accordion}>
          <FAQCard thisKey="0" question={props.q1} text={props.a1} />
          <FAQCard thisKey="1" question={props.q2} text={props.a2} />
          <FAQCard thisKey="2" question={props.q3} text={props.a3} />
          <FAQCard thisKey="3" question={props.q4} text={props.a4} />
        </Accordion>
      </div>
    </div>
  )
}
