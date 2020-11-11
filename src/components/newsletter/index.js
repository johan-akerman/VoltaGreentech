import React from "react"
import typography from "../typography.module.css"
import MyNewsLetterForm from "./MyNewsLetterForm.js"
import styles from "./newsletter.module.css"
import Fade from 'react-reveal/Fade';

export default function newsletter(props) {
  return (
    <div className={styles.container}>
      <div className="row">
        <Fade up>
        <div className="col-md-12 col-lg-6" id={styles.textColumn}>
          <p className={typography.lowerLevelHeader}>Newsletter</p>

          <h1 className={typography.chapterTitle}>
            Sign up for our newsletter.
            {/* <br></br>our{" "}
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
              <span className={styles.textDecorationText}>newsletter</span>
            </span> */}
          </h1>

          <p>
            Follow our journey towards zero greenhouse gas emissions. By signing
            up, you agree to receive emails from Volta Greentech.
          </p>
        </div>
        </Fade>
        <Fade up delay={500}>
        <div className="col-md-12 col-lg-6">
          <MyNewsLetterForm />
        </div>
        </Fade>
      </div>
    </div>
  )
}
