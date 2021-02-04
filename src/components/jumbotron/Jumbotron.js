import React from "react"
import styles from "./Jumbotron.module.css"
import TextDecoration from "../textDecoration/TextDecoration"
import { Link } from "gatsby"

import CustomButton from "../buttons/circleButton/CircleButton.js"

export default function Jumbotron(props) {
  function generateText(page) {
    if (page === "home")
      return (
        <>
          <h1 className={styles.title}>
            We reduce methane emissions from <TextDecoration text="cows." />
          </h1>
          <p className={styles.text}>
            On a mission to battle global warming by making cows fart and burp
            less methane gas, using seaweed.
          </p>
          <Link to="/solution">
            {" "}
            <CustomButton text="read more" to="/about" />
          </Link>
        </>
      )
    else if (page === "planet-food")
      return (
        <>
          <h1 className={styles.title}>
            The same food. Better for the <TextDecoration text=" planet." />
          </h1>
          <p className={styles.text}>
            Planetfood är precis som vilken mat som helst, förutom en viktig
            skillnad: det har möjliggjort att metanustläppen har minskats med
            upp till 80%.
          </p>
        </>
      )
    else if (page === "about")
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
            A <TextDecoration text=" blueprint " />
            for a scalable production.
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
    <div
      className={styles.container}
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,0), rgba(35,35,38,0.35), rgba(20,21,23,1) ), url(${props.image})`,
      }}
    >
      <div className={styles.content}>{generateText(props.page)}</div>
    </div>
  )
}
