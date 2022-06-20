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
        <h1 className={styles.jobTitle}>Factory Technician</h1>
        <h2 className={styles.jobSubTitle}>Full time, Lysekil Sweden</h2>
        <h2 className={styles.secondaryTitle}>About the role</h2>
        <p>
          Volta Greentech is looking for a factory technician to join our team.
          We currently have the world’s largest land-based Asparagopsis-growing
          facility. Within the next 5-years we aim to increase production by
          over 10 times. We need technical experience to make this happen. If
          you have electrical, building or plumbing experience (or similar),
          then we are interested to hear from you.
        </p>

        <h2 className={styles.secondaryTitle}>Background</h2>
        <p>
          There are 1.5 billion cows on the planet that together burp out 5% of
          the world’s greenhouse gas emissions. That’s 2x more emissions than
          the world’s fleet of airplanes. Volta Greentech is on a mission to
          work with the beef and dairy industry to reduce emissions to mitigate
          global warming. By providing farmers with the means to drastically
          reduce the methane emissions produced by dairy cows and beef cattle,
          the agriculture sector can take a massive leap in becoming
          sustainable.
        </p>
        <p>
          At Volta Greentech, we believe that with the right team, we can change
          the future. For success, it is crucial to recruit world-class experts
          and highly driven individuals who want to join our mission.
        </p>
        <p>
          We are focused on the cultivation of macroalgae (seaweed) at our pilot
          factory in Lysekil. The red macroalgae Asparagopsis sp. has been
          proven to reduce methane emissions when fed to ruminant animals thus
          helping in the fight against global warming.
        </p>
        <p>
          As we refine our culturing model, the algae will be used to supplement
          cattle feed to reduce the methane emissions associated with beef and
          dairy products, essentially creating a new supplement. This is a great
          opportunity to get hands-on experience within the start-up environment
          of a company positioned in an emerging field within aquaculture and
          working in a commercial pilot plant.
        </p>

        <h2 className={styles.secondaryTitle}>Job description</h2>

        <p>
          This job is hands-on. You will be part of the team operating the
          production facility and assist in the construction and maintenance of
          new systems. Tasks may include:
        </p>
        <ul className={styles.ul}>
          <li>Extending and adapting the pipe network</li>
          <li>Installing new equipment</li>
          <li>Building a new outdoor cultivation tanks</li>
          <li>Maintenance of factory equipment</li>
          <li>Problem solving and repairs</li>
          <li>Harvesting and processing seaweed</li>
          <li>Data logging</li>
        </ul>
        <p>
          You will have a mix of independent and team work. Volta Greentech is a
          small team, working closely together. This job will involve especially
          close interaction with our engineering and operational teams.
        </p>

        <h2 className={styles.secondaryTitle}>REQUIREMENTS</h2>
        <ul className={styles.ul}>
          <li>Strong technical background and hands-on approach/experience</li>
          <li>English speaking and writing ability</li>
          <li>Disciplined. Motivated. A problem solver</li>
        </ul>

        <h2 className={styles.secondaryTitle}>
          THE IDEAL CANDIDATE COULD ALSO HAVE:
        </h2>
        <ul className={styles.ul}>
          <li>Plumbing, building or electrical experience</li>
          <li>Background working in production facilities </li>
        </ul>

        <h2 className={styles.secondaryTitle}>WHAT’S IN IT FOR YOU?</h2>
        <ul className={styles.ul}>
          <li>
            An opportunity to work in an innovative, potentially world-changing,
            start-up
          </li>
          <li>Fun, practical projects to work on daily</li>
          <li>High levels of responsibility and decision-making</li>
          <li>A close-knit, motivated team</li>
        </ul>

        <h2 className={styles.secondaryTitle}>About the role</h2>
        <ul className={styles.ul}>
          <li>Start date: ASAP (exact date flexible)</li>
          <li>Contract type: Permanent</li>
          <li>Work type: Full-time (Part-time also possible)</li>
          <li>Location: Lysekil, Sweden</li>
        </ul>

        <p>
          Want more information? Contact{" "}
          <a className={typography.link} href="mailto:cora@voltagreentech.com ">
            cora@voltagreentech.com
          </a>
          Want to apply? Send a motivation letter and CV to{" "}
          <span>
            <a
              className={typography.link}
              href="mailto:careers@voltagreentech.com"
            >
              careers@voltagreentech.com
            </a>
          </span>
          {". "}
          We will be conducting interviews on a rolling basis and filling the
          position as soon as we find a suitable candidate.
        </p>
      </div>
    </Layout>
  )
}
