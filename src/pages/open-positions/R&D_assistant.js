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
        <h1 className={styles.jobTitle}>R&D Assistant</h1>
        <h2 className={styles.jobSubTitle}>Lysekil, Sweden</h2>
        <h2 className={styles.secondaryTitle}>Background</h2>
        <p>
          Are you a creative and goal-driven biologist/chemist who wants to work
          on solving one of the world’s most important challenges? Do you want
          to hone and apply your scientific skills in a more exciting
          environment than a conventional science lab?
          <br />
          At Volta Greentech, we believe that with the right team, we can change
          the future. For success, it is crucial to recruit world-class talent
          and highly driven individuals who want to join our mission.
          <br />
          We are focused on the cultivation of macroalgae (seaweed) at our pilot
          factory in Lysekil. The red macroalgae Asparagopsis sp. have proven to
          reduce methane emissions when fed to ruminant animals thus helping in
          the fight against global warming. As we refine our culturing model,
          our algae is being used to supplement cattle feed to reduce the
          methane emissions associated with beef and dairy products.
        </p>
        <h2 className={styles.secondaryTitle}>Job description</h2>
        <p>
          The cultivation assistant will act as a link between the Volta
          Greentech R&D, product development and production workstreams. They
          will work on projects within all these workstreams, with the ultimate
          aim of optimizing the cultivation and processing recipe of our
          seaweed. This will allow Volta Greentech to reduce as much methane as
          possible, as quickly as possible.
          <br />
          After training, tasks will include assisting our R&D team with
          algae-growing experiments, investigating and researching
          next-generation product development alongside our product team and
          performing culture maintenance and lab analysis as part of the
          production team.
          <br />
          The largest project during this period involves testing a new
          cultivation module. The R&D assistant will work alongside our
          production and R&D teams to conduct and report on algae-growing
          experiments in this new module.
          <br />
          There is a great opportunity for anyone who is passionate about
          biology and chemistry to learn about aquaculture and applications of
          our product, and to work at the frontiers of algae-science in a
          fast-paced business environment.
        </p>
        <h2 className={styles.secondaryTitle}>Requirements</h2>
        <ul className={styles.ul}>
          <li>A degree in chemistry or biology</li>
          <li>Laboratory experience</li>
          <li>Independent problem solver</li>
          <li>Excellent English skills (oral and written)</li>
          <li>Disciplined, motivated team-worker</li>
          <li>Curious, eager to develop and learn</li>
          <li>Passionate about climate solutions</li>
        </ul>
        <h2 className={styles.secondaryTitle}>
          THE IDEAL CANDIDATE COULD ALSO HAVE
        </h2>
        <ul className={styles.ul}>
          <li>Experience in aquaculture</li>
          <li>Research experience in biology and/or chemistry</li>
          <li>Experience working in production facilities</li>
        </ul>
        <h2 className={styles.secondaryTitle}>DUTIES & RESPONSIBILITIES</h2>
        <ul className={styles.ul}>
          <li>Culture maintenance, microscopical analysis, water analysis</li>
          <li>Independently conducting experiments</li>
          <li>
            Assisting with communication, data collection and reports in
            long-term experiments
          </li>
          <li>Data gathering and reporting in a new cultivation module</li>
        </ul>

        <h2 className={styles.secondaryTitle}>WHAT’S IN IT FOR YOU?</h2>
        <ul className={styles.ul}>
          <li>
            An opportunity to work in an innovative, potentially world-changing,
            start-up
          </li>
          <li>High levels of responsibility and decision-making</li>
          <li>A close-knit, motivated team</li>
        </ul>

        <h2 className={styles.secondaryTitle}>About the role</h2>
        <ul className={styles.ul}>
          <li>Applications taken until the position is filled</li>
          <li>Start date: February or March 2023</li>
          <li>Contract length: 6 months, with possibility for extension</li>
          <li>Work type: Paid. full time</li>
          <li>Location: Lysekil, Sweden</li>
        </ul>

        <br />
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
        </p>

        <h2 className={styles.secondaryTitle}>About Volta Greentech</h2>
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
      </div>
    </Layout>
  )
}
