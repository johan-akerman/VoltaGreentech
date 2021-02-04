import React from "react"
import { Form, Button } from "react-bootstrap"
import typography from "../typography.module.css"

import styles from "./newsletter.module.css"
import LinkElement from "../buttons/link/LinkElement"

export default function FooterForm(props) {
  return (
    <React.Fragment>
      <Form className={styles.form} id={styles.footerForm}>
        <div className={styles.myForm} id={styles.footerMyForm}>
          <input
            type="email"
            className={styles.inputField}
            placeholder="First name"
          />
          <input
            type="email"
            className={styles.inputField}
            placeholder="Last name"
          />
          <input
            type="email"
            className={styles.inputField}
            placeholder="Email"
          />

          <Button
            className={typography.btn}
            id={styles.submitBtn}
            type="submit"
          >
            <LinkElement to="/" text="Sign up" />
          </Button>
        </div>
      </Form>
    </React.Fragment>
  )
}
