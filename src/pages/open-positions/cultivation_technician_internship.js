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
        <h1 className={styles.jobTitle}>Cultural Technician Internship</h1>
        <h2 className={styles.jobSubTitle}>Lysekil, Sweden</h2>
        <h2 className={styles.secondaryTitle}>Background</h2>
        <p>
          Do you want to work on solving one of the world’s most important
          challenges together with a great team?
          <br />
          <br />
          Volta Greentech was founded with the mission to eliminate methane
          emissions from cows by 2050. We develop and produce methane-reducing
          feed additives based on algae, which when fed to cows drastically
          reduce their methane emissions. We are designing and scaling up our
          algae production systems after having succeeded with several
          commercial farm pilots showing consistent methane reductions of up to
          90% per day using our product.
          <br />
          <br />
          As a Cultivation Technician at Volta Greentech, you will be on the
          front lines of our mission. You'll have the opportunity to roll up
          your sleeves and get hands-on experience in cultivating the very algae
          that will revolutionize sustainable agriculture. We are looking for
          action-oriented problem solvers dedicated to our mission. You’ll be a
          key player in a fast-paced, close-knit team, operating and improving
          our Pilot Facility. No challenge is too small or too large - you’ll do
          whatever it takes to find a solution.
        </p>

        <h2 className={styles.secondaryTitle}>
          Key responsibilities include, but are not limited to:
        </h2>

        <ul className={styles.ul}>
          <li>
            Day-to-day operations at our land-based Pilot Facility, actively
            participating in algae cultivation and maintenance.
          </li>
          <li>
            Collecting and analyzing data to support cultivation strategies and
            process improvements.
          </li>
          <li>
            Contributing to the design and optimization of cultivation
            strategies, with a focus on process enhancement.
          </li>
          <li>
            Collaborating closely with engineers, product developers,
            cultivation specialists, and production technicians to innovate and
            enhance our algae production systems and capacities.
          </li>
        </ul>

        <h2 className={styles.secondaryTitle}>We believe that you have:</h2>

        <ul className={styles.ul}>
          <li>
            Current pursuit of a degree or a background in marine biology, or
            experience as a factory technician is very meritorious.
          </li>
          <li>Strong written and verbal communication skills in English</li>
          <li>Excellent problem-solving skills and creativity.</li>
          <li>A can-do mentality, resilience, and a positive attitude.</li>
        </ul>

        <h2 className={styles.secondaryTitle}>What’s in it for you?</h2>

        <ul className={styles.ul}>
          <li>
            <strong>Purpose-driven mission:</strong> An opportunity to work in
            an innovative, potentially world-changing, start-up company.
          </li>

          <li>
            <strong>Immediate Impact:</strong> From the first day, you'll have
            meaningful responsibility, shaping our company's future and making a
            tangible difference.
          </li>
          <li>
            <strong>Collaborative Environment:</strong> Work in a close-knit and
            motivated team.
          </li>
        </ul>

        <p>
          The role is a full-time 3-month internship based in our Pilot Factory
          in Lysekil, Sweden, with a possible extension. We can support you with
          accommodation for a shorter period if you move to Lysekil from afar.
          <br />
          <br />
          Planned start date is as soon as possible.
          <br />
          <br />
          Apply with CV and Cover Letter in English and/or your complete
          LinkedIn profile to{" "}
          <span>
            <a
              className={typography.link}
              href="mailto:careers@voltagreentech.com"
            >
              careers@voltagreentech.com
            </a>
          </span>
        </p>

        <p>We are looking forward to reading your application!</p>
      </div>
    </Layout>
  )
}
