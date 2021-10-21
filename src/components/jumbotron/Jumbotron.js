import React from "react"
import styles from "./Jumbotron.module.css"
import TextDecoration from "../textDecoration/TextDecoration"
import Img from "gatsby-image"

export default function Jumbotron(props) {
  function generateText(page) {
    if (page === "about")
      return (
        <>
          <h1 className={styles.title}>
            A swedish greentech company <TextDecoration text=" committed " /> to
            change.
          </h1>
        </>
      )
    else if (page === "solution")
      return (
        <>
          <h1 className={styles.title}>
            A<TextDecoration text=" miracle " />
            from the bottom of the ocean.
          </h1>
        </>
      )
    else if (page === "production")
      return (
        <>
          <h1 className={styles.title}>
            Engineering The <TextDecoration text=" worlds " /> largest red
            seaweed factory.
          </h1>
        </>
      )
    else if (page === "press")
      return (
        <>
          <h1 className={styles.title}>
            <TextDecoration text=" Pressroom." />
          </h1>
        </>
      )
    else if (page === "careers")
      return (
        <>
          <h1 className={styles.title}>
            Join our
            <TextDecoration text=" mission " />
            to zero emissions.
          </h1>
        </>
      )
    else return ""
  }

  return (
    <div className={styles.container}>
      <Img
        className={styles.backgroundImage}
        fluid={props.jumbotronBackground}
      />

      <div className={styles.content}>{generateText(props.page)}</div>
    </div>
  )
}
