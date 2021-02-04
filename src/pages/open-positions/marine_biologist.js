import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/Layout"
import typography from "../../components/typography.module.css"
import styles from "../../components/openPosition.module.css"
import goBack from "../../../static/images/illustrations/goBack.png"

export default function About() {
  return (
    <Layout>
      <div className={styles.container}>
        <Link to="/careers">
          <img alt="go back" className={styles.goBack} src={goBack} />
        </Link>
        <h1 className={styles.jobTitle}>Marine Biologist</h1>
        <h2 className={styles.jobSubTitle}>Full time, Stockholm Sweden</h2>
        <h2 className={styles.secondaryTitle}>About the role</h2>
        <p>
          We are looking for exceptionally talented and purpose-driven people
          that want to help battle global warming by reducing methane emissions
          generated by cows. As a marine biologist at Volta, you are going to be
          in charge of building a large scale production system for macroalgae.
          The production needs to be as efficient, safe and economical as
          possible. You will work closely with our engineers both strategically
          and practically.
        </p>

        <h2 className={styles.secondaryTitle}>Responsibilities</h2>
        <p>
          Volta is a new company, in a fast-changing environment. The company
          will evolve, and your role, responsibilities and deliverables will
          change with it.
        </p>
        <ul className={styles.ul}>
          <li>
            Building and designing a large scale production system in
            cooperation with our engineers.
          </li>
          <li>
            Develop the system in order to be as efficient and economical as
            possible.
          </li>
          <li>Purchase and install lab equipment.</li>
          <li>Inventive and an “out-of-the-box” thinker.</li>
        </ul>

        <h2 className={styles.secondaryTitle}>You are:</h2>
        <ul className={styles.ul}>
          <li>Interested in the environment and share our and values.</li>
          <li>Knowledgeable and preferably experienced in algae production.</li>
          <li>
            Good at teamwork. We are a small, tight-knit team working together.
          </li>
        </ul>

        <p>
          If you are ready to take on some of our generations greatest
          challenges and feel that you are the one we are looking for, please
          send us your CV and a personal letter to{" "}
          <span>
            <a
              className={typography.link}
              href="mailto:fredrik@voltagreentech.com"
            >
              fredrik@voltagreentech.com
            </a>
          </span>
        </p>
      </div>
    </Layout>
  )
}
