import React from "react"
import typography from "../typography.module.css"
import styles from "./FAQ.module.css"
import { Accordion } from "react-bootstrap"
import FAQCard from "./FAQCard"

export default function FAQ(props) {
  return (
    <div className={styles.container}>
      <p className={typography.lowerLevelHeader}>FAQ</p>
      <h1 className={typography.chapterTitle}>Frequently asked questions</h1>
      <p>
        We get a lot of questions about what we do. Most people thinks that it
        all sounds to good to be true. It’s not.
      </p>
      <Accordion className={styles.accordion}>
        <FAQCard thisKey="0" question="Question goes here" text="answer" />
        <FAQCard thisKey="1" question="Question goes here" text="answer" />
        <FAQCard thisKey="2" question="Question goes here" text="answer" />
        <FAQCard thisKey="3" question="Question goes here" text="answer" />
      </Accordion>
    </div>
  )
}
