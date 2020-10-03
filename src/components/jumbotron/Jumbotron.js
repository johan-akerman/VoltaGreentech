import React from "react"
import styles from "./Jumbotron.module.css"
import readMore from "../../../static/images/illustrations/readMore.png"
import underline1 from "../../../static/images/illustrations/drawed_underline_alt1.svg"
import underline2 from "../../../static/images/illustrations/drawed_underline_alt2.svg"
// import circle from "../../../static/images/illustrations/drawed_underline_alt1.svg"
import typography from "../typography.module.css"

export default function Jumbotron(props) {
  function generateText(page) {
    if (page === "home") {
      return (
        <React.Fragment>
          Battling global warming by reducing{" "}
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

            <span className={styles.textDecorationText}>methane</span>
          </span>{" "}
          emissions from cows
        </React.Fragment>
      )
    } else if (page === "about") {
      return (
        <React.Fragment>
          A team of{" "}
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
            <span className={styles.textDecorationText}>innovators</span>
          </span>{" "}
          <br />
          committed to change.
        </React.Fragment>
      )
    } else if (page === "solution") {
      return (
        <React.Fragment>
          A{" "}
          <span className={styles.textDecorationContainer}>
            <span className={styles.textDecorationImageContainer}>
              {" "}
              <img
                className={styles.textDecorationImage}
                src={underline2}
                aria-hidden="true"
                alt="text decoration"
              />
            </span>
            <span className={styles.textDecorationText}>miracle</span>
          </span>{" "}
          from the <br /> bottom of the ocean.
        </React.Fragment>
      )
    } else if (page === "production") {
      return (
        <React.Fragment>
          We got the{" "}
          <span className={styles.textDecorationContainer}>
            <span className={styles.textDecorationImageContainer}>
              {" "}
              <img
                className={styles.textDecorationImage}
                src={underline2}
                aria-hidden="true"
                alt="text decoration"
              />
            </span>
            <span className={styles.textDecorationText}>blueprint</span>
          </span>{" "}
          <br />
          for seaweed production.
        </React.Fragment>
      )
    } else if (page === "press") {
      return (
        <React.Fragment>
          Sometimes we are in<br></br> the{" "}
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
            <span className={styles.textDecorationText}>spotlight.</span>
          </span>{" "}
        </React.Fragment>
      )
    } else if (page === "solution") {
      return (
        <React.Fragment>
          A{" "}
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
            <span className={styles.textDecorationText}>miracle</span>
          </span>{" "}
          from the bottom of the{" "}
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
            <span className={styles.textDecorationText}>ocean.</span>
          </span>{" "}
        </React.Fragment>
      )
    } else if (page === "careers") {
      return (
        <React.Fragment>
          Want to join our{" "}
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
            <span className={styles.textDecorationText}>mission</span>
          </span>
          <br />
          towards zero emissions?
        </React.Fragment>
      )
    } else {
      return ""
    }
  }

  return (
    <div
      className={styles.jumbotronContainer}
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,0), rgba(35,35,38,0.35), rgba(20,21,23,1) ), url(${props.image})`,
      }}
    >
      <div className={styles.jumbotronContent}>
        <h1 className={typography.heroTitle}>{generateText(props.page)}</h1>

        <br></br>
      </div>
      <div className={styles.jumbotronFooter}>
        <img src={readMore} alt="Read more" />
      </div>
    </div>
  )
}
