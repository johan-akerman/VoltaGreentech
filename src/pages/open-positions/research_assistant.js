import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/Layout"
import typography from "../../components/typography.module.css"
import styles from "../../components/openPosition.module.css"
import goBack from "../../../src/images/illustrations/goBack.png"

export default function About() {
  return (
    <Layout>
      <div className={styles.container}>
        <Link to="/careers">
          <img alt="go back" className={styles.goBack} src={goBack} />
        </Link>
        <h1 className={styles.jobTitle}>Research Assistant</h1>
        <h2 className={styles.jobSubTitle}>Stockholm, Sweden</h2>
        <h2 className={styles.secondaryTitle}>Background</h2>
        <p>
          Volta Greentech is a rapidly growing biotech company that produces
          seaweed-based animal feed with anti-methanogenic properties. Founded
          in 2019 in Sweden with a research lab in Stockholm and a land-based
          seaweed cultivation facility in Lysekil. Our mission is to fight
          climate change by curbing the massive methane emission by cattle by
          adding seaweed to their feed. We are now well on our way to become the
          largest producer of anti-methanogenic macroalgae in the world.
          Land-based macroalgae cultivation permits control during growth
          conditions, which will generate better product yield and quality when
          manipulated correctly. This strategy will help us achieve our goal
          alongside strain development for increased biomass and product
          biosynthesis.
          <br />
          <br />
          Volta Greentech has an immediate opening for a research assistant
          position to join the R&D team in Stockholm and provide critical
          support to the macroalgal research projects and lab operations.
        </p>

        <h2 className={styles.secondaryTitle}>
          What we expect from the successful candidate
        </h2>

        <ul className={styles.ul}>
          <li>
            Support the R&D Projects on macroalgae by running experiments and
            collecting data
          </li>
          <li>Cultivate macroalgae and maintain lab equipment</li>
          <li>Conduct water analysis and freeze-drying of seaweed biomass</li>
          <li>
            Assist in data processing and reports writing, and collect relevant
            literature
          </li>
        </ul>

        <h2 className={styles.secondaryTitle}>Required Qualifications</h2>

        <ul className={styles.ul}>
          <li>
            Bachelors or master’s degree in biology, biotechnology,
            biochemistry, environmental sciences or equivalent with significant
            lab experience
          </li>
          <li>Prior experience with algal culturing or similar</li>
          <li>Good team-working spirit</li>
          <li>Ability to communicate at ease in English</li>
          <li>
            Computer skills in MS Office and Google suites (documents,
            spreadsheets)
          </li>
        </ul>

        <h2 className={styles.secondaryTitle}>Preferred Qualifications</h2>

        <ul className={styles.ul}>
          <li>Master’s degree on algal biology or biotechnology</li>
          <li>
            Experience in photobioreactors, microscopy, water analysis, and/or
            freeze-drying
          </li>
        </ul>

        <h2 className={styles.secondaryTitle}>Procedure</h2>

        <p>
          Please send your cover letter, resume, and contact info of two
          references to{" "}
          <span>
            <a
              className={typography.link}
              href="mailto:careers@voltagreentech.com"
            >
              careers@voltagreentech.com
            </a>
          </span>
          . References will be contacted only after the candidate has been
          interviewed and selected for further evaluation. The selected
          candidate will be appointed for a six-month probation period and be
          offered a long-term position if concluded with satisfaction.
          Applications are to be reviewed immediately with starting date
          negotiable.
        </p>
      </div>
    </Layout>
  )
}
