import React from "react"
import { Form } from "react-bootstrap"

import styles from "./newsletter.module.css"
import arrow from "../../../static/illustrations/arrow.svg"
import LinkElement from "../link/LinkElement"

export default function myNewsLetterForm(props) {
  if (props.footer) {
    return (
      <React.Fragment>
        <Form className={styles.form} id={styles.footerForm}>
          <div className={styles.myForm} id={styles.footerMyForm}>
            <input
              type="email"
              class="form-control"
              className={styles.inputField}
              id={styles.footerInputFied}
              placeholder="Enter your email"
            />
            <span className={styles.subscribeBtn}>
              <button
                className={styles.subscribeBtn}
                id={styles.footerSubscribeBtn}
                type="submit"
              >
                <LinkElement to="asdf" text="" />
              </button>
            </span>
          </div>
        </Form>
      </React.Fragment>
    )
  } else
    return (
      <React.Fragment>
        <Form className={styles.form}>
          <div className={styles.myForm}>
            <input
              type="email"
              class="form-control"
              className={styles.inputField}
              placeholder="Enter your email"
            />
            <span className={styles.subscribeBtn}>
              <button className={styles.subscribeBtn} type="submit">
                <LinkElement to="asdf" text="Sign up" />
              </button>
            </span>
          </div>
        </Form>
      </React.Fragment>
    )
}
