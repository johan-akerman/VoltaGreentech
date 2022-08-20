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
        <h1 className={styles.jobTitle}>
          Cultivation Operator - Paid Internship
        </h1>
        <h2 className={styles.jobSubTitle}>Lysekil, Sweden</h2>

        <h2 className={styles.secondaryTitle}>Job Description</h2>
        <p>
          You will have responsibility for the day-to-day operation of our
          cultivation system. After training, your tasks will include assisting
          Volta Greentech’s production team with seaweed harvesting, basic
          maintenance of cultures, performing water analysis data and mixing
          solutions/growth media.
        </p>

        <p>
          In addition, you will work on a project testing a new cultivation
          module. You will work alongside our engineering, production and R&D
          teams to conduct and report on algae-growing experiments in this new
          module. You will share the responsibility for operating this module
          with our production team. There is a great opportunity for anyone
          who’s passionate about algae and/or production systems to learn about
          the aquaculture of the species that we’re growing, use of instruments
          and testing of water chemistry.
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
          dairy products, essentially creating a new supplement called Volta
          Seaweed. This is a great opportunity to get hands-on experience within
          the start-up environment of a company positioned in an emerging field
          within aquaculture and working in a commercial pilot plant.
        </p>

        <h2 className={styles.secondaryTitle}>Requirements</h2>
        <ul className={styles.ul}>
          <li>Strong scientific or technical background</li>
          <li>Independent problem solver</li>
          <li>English speaking and writing ability</li>
          <li>Disciplined, motivated team-worker</li>
          <li>Hands-on approach/experience</li>
          <li>Passionate about climate solutions</li>
        </ul>

        <h2 className={styles.secondaryTitle}>
          The ideal candidate could also have:
        </h2>
        <ul className={styles.ul}>
          <li>Laboratory experience</li>
          <li>Background in aquaculture</li>
          <li>Background working in production facilities</li>
        </ul>

        <h2 className={styles.secondaryTitle}>Duties & Responsibilities</h2>
        <ul className={styles.ul}>
          <li>
            Operate the current Volta Greentech system. This includes seaweed
            harvesting, culture maintenance and water analysis
          </li>
          <li>Data gathering and reporting in a new cultivation module</li>
        </ul>

        <h2 className={styles.secondaryTitle}>What’s in it for you?</h2>
        <ul className={styles.ul}>
          <li>
            An opportunity to work in an innovative, potentially world-changing,
            start-up
          </li>
          <li>High levels of responsibility and decision-making</li>
          <li>A close-knit, motivated team</li>
          <li>Job includes offer of free accommodation in company apartment</li>
        </ul>

        <h2 className={styles.secondaryTitle}>About the role</h2>
        <ul className={styles.ul}>
          <li>Start date: January 2023 </li>
          <li>Contract length: 3-4 months</li>
          <li>Work type: Paid, full time</li>
          <li>Location: Lysekil, Sweden</li>
        </ul>

        <p>
          To apply, send a motivation letter and CV to{" "}
          <span>
            <a
              className={typography.link}
              href="mailto:careers@voltagreentech.com"
            >
              careers@voltagreentech.com
            </a>
          </span>
          .Interviews are conducted on a rolling basis.
        </p>
      </div>
    </Layout>
  )
}
