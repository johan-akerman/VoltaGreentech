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
        <h1 className={styles.jobTitle}>Head of manufacturing</h1>
        <h2 className={styles.jobSubTitle}>Full time, Stockholm Sweden</h2>
        <h2 className={styles.secondaryTitle}>About the role</h2>
        <p>
          As Head of Manufacturing you will lead our manufacturing efforts. That
          means that you will build up large-scale factories to enable the
          production of Volta Seafeed that will transform the food industry. We
          are a tightly knit team, and you’ll work together with our founders,
          business team and R&D team in developing all manufacturing aspects.
        </p>

        <h2 className={styles.secondaryTitle}>Responsibilities</h2>
        <p>
          Volta is a new company, in a fast-changing environment. The company
          will evolve, and your role, responsibilities and deliverables will
          change with it.
        </p>
        <ul className={styles.ul}>
          <li>
            Lead the manufacturing strategy and execute tactical plans to scale
            up production of our macroalgae based feed supplement by working
            closely with R&D and Engineering team.
          </li>
          <li>
            Develop strategic partnership with key production partners and
            suppliers
          </li>
          <li>Lead / assist in recruitment of key team members</li>
          <li>Supply chain management</li>
          <li>
            Project management of site selection and site construction from idea
            to start up to assure early choices and decisions are made to
            maximize speed and scale up.
          </li>
          <li>
            Work closely with R&D and Engineering team on development of Volta
            Greentech’s production blueprint to ensure excellent production
            results optimized for low-cost, high output production.
          </li>
          <li>Financial cost breakdown and budgeting</li>
        </ul>

        <h2 className={styles.secondaryTitle}>Key skills</h2>
        <ul className={styles.ul}>
          <li>Degree in Engineering</li>
          <li>Purpose driven</li>
          <li>Experience of working in a startup</li>
          <li>
            Experience of leading teams to take manufacturing from lab scale to
            large scale production
          </li>
          <li>
            Experience with developing and commercializing technologies within
            food, beverages, biotechnology, life sciences or synthetic biology
            sector.
          </li>
          <li>
            A working knowledge of a wide range of food and bio manufacturing
            processes
          </li>
          <li>
            Strong project management skills and ability to lead large
            manufacturing expansion projects
          </li>
          <li>
            A deep expertise in operations and quality management leveraging
            LEAN, six-sigma and/or other leading metrics-driven methodologies;
            Known for establishing an operating system and cadence based on
            KPIs.
          </li>
          <li>
            Problem solving: you thrive in change, learn fast and view
            challenges as growth opportunities
          </li>
          <li>
            Excellent execution: you get things done, fast and with high quality
          </li>
          <li>
            Team player: you believe a good company starts from within, and act
            accordingly
          </li>
          <li>
            Excellent verbal and written communication skills and are a hard
            working, self-motivated individual.
          </li>
          <li>- A skilled prioritizer</li>
        </ul>

        <p>
          If you are ready to take on some of our generations greatest
          challenges and feel that you are the one we are looking for, please
          send us your CV and a personal letter to{" "}
          <span>
            <a
              className={typography.link}
              href="mailto:careers@voltagreentech.com"
            >
              careers@voltagreentech.com
            </a>
          </span>
        </p>
      </div>
    </Layout>
  )
}
