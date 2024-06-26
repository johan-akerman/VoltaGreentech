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
            A swedish <TextDecoration text=" greentech " /> company
          </h1>
        </>
      )
    else if (page === "solution")
      return (
        <>
          <h1 className={styles.title}>
            The
            <TextDecoration text=" solution " />
            to reach climate targets in agriculture
          </h1>
        </>
      )
    else if (page === "production")
      return (
        <>
          <h1 className={styles.title}>
            Engineering <TextDecoration text=" large " /> scale seaweed
            production.
          </h1>
        </>
      )
    else if (page === "farms")
      return (
        <>
          <h1 className={styles.title}>
            Probably the most climate-friendly beef on the{" "}
            <TextDecoration text="planet. " />
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
