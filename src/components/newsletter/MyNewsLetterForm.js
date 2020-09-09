import React from "react"
import { Form, Button } from "react-bootstrap"
import styles from "./newsletter.module.css"
import typography from "../typography.module.css"

import LinkElement from "../link/LinkElement"

export default function myNewsLetterForm(props) {
  return (
    <React.Fragment>
      <Form className={styles.form}>
        <div className={styles.myForm}>
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
