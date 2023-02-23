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
        <h1 className={styles.jobTitle}>Research Scientist</h1>
        <h2 className={styles.jobSubTitle}>Lysekil, Sweden</h2>
        <h2 className={styles.secondaryTitle}>Background</h2>
        <p>
          Do you want to work on solving one of the world’s most important
          challenges together with a driven team in a fast moving environment?
          <br />
          <br />
          Volta Greentech was founded with the mission to eliminate methane
          emissions from cows by 2050. We develop and produce methane-reducing
          feed supplements based on algae, which when fed to cows drastically
          reduce their methane emissions. We are designing and scaling up our
          algae production systems after having succeeded with several
          commercial farm pilots showing consistent methane reductions of up to
          90% per day using our product.
          <br />
          <br />
          We are looking for a Research Scientist to lead research from our
          pilot factory in Lysekil. As a Research Scientist, you will work in
          cross-functional teams focused on critical company objectives
          advancing our algae production systems.
        </p>

        <h2 className={styles.secondaryTitle}>
          Key responsibilities include but not limited to:
        </h2>

        <ul className={styles.ul}>
          <li>
            Lead and project manage critical research projects on macroalgal
            biology and growth, algae cultivation systems, and secondary
            metabolites enhancement
          </li>
          <li>
            Have a key role in designing our cultivation strategy and
            streamlining of cultivation processes
          </li>
          <li>
            Working hands-on running experiments in small to large scale
            cultivation systems
          </li>
          <li>
            Set the strategy, budget and resource allocation for R&D projects
          </li>
          <li>
            Write reports on research activities, conduct data processing and
            statistical analysis, and present research findings in various
            settings to drive progress
          </li>
          <li>
            Work closely together with engineers, product developers,
            cultivation specialists and production technicians on developing our
            algae production systems and production capacities
          </li>
        </ul>

        <p>
          The role is a full–time position based in Lysekil, Sweden and the role
          reports to our R&D Director. Work travel is required on a monthly
          basis.
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

        <h2 className={styles.secondaryTitle}>Skills & Requirements</h2>

        <ul className={styles.ul}>
          <li>
            +4 years of experience working in a similar role in industry or in
            academia doing a phd
          </li>
          <li>
            A masters degree in biology, biotechnology or related field and
            extensive knowledge and research experience in algal or plant
            biology and cultivation; in particular, photophysiology, growth and
            nutrients optimization
          </li>
          <li>
            Hands-on experience researching algae cultivation in mid to large
            scale photobioreactors and/or raceways is a big plus, but not a
            requirement
          </li>
          <li>
            Know-how and proven track-record of successfully designing and
            conducting experiments, data gathering, data analysis and scientific
            reports writing
          </li>
          <li>Experience of effectively managing projects and a team</li>
          <li>Strong written and verbal communication skills in English</li>
          <li>
            Ability to drive work independently and lead others in a fast-paced,
            deadline-driven environment
          </li>
          <li>Possess an extraordinary ability and drive to solve problems</li>
        </ul>

        <h2 className={styles.secondaryTitle}>What’s in it for you?</h2>

        <ul className={styles.ul}>
          <li>
            An opportunity to work in an innovative, potentially world-changing,
            start-up company
          </li>
          <li>High levels of responsibility and decision-making</li>
          <li>Work in a close-knit and motivated team</li>
          <li>Competitive salary and company stocks</li>
        </ul>

        <h2 className={styles.secondaryTitle}>Procedure</h2>

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
          .
        </p>
      </div>
    </Layout>
  )
}
