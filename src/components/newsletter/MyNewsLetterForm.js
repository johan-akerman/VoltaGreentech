import React from "react"
import { Form, Button } from "react-bootstrap"
import styles from "./newsletter.module.css"
import typography from "../typography.module.css"

export default function myNewsLetterForm(props) {
  return (
    <React.Fragment>
      <Form className={styles.form}>
        <div className={styles.myForm}>
          <input
            type="email"
            className={styles.inputField}
            placeholder="Enter your email"
          />

          <Button
            className={typography.btn}
            id={styles.submitBtn}
            type="submit"
          >
            Subscribe
          </Button>
        </div>
      </Form>
    </React.Fragment>
  )
}
