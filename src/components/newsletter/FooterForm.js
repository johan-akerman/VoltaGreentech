import React from "react"
import { Form } from "react-bootstrap"

import styles from "./newsletter.module.css"
import LinkElement from "../link/LinkElement"

export default function FooterForm(props) {
  return (
    <React.Fragment>
      <Form className={styles.form} id={styles.footerForm}>
        <div className={styles.myForm} id={styles.footerMyForm}>
          <input
            type="email"
            className={styles.inputField}
            id={styles.footerInputFied}
            placeholder="Your email"
          />
        </div>

        <button className={styles.subscribeBtn} type="submit">
          <LinkElement to="asdf" text="Subscribe" />
        </button>
      </Form>
    </React.Fragment>
  )
}
