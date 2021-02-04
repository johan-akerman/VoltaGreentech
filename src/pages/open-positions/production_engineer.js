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
        <h1 className={styles.jobTitle}>Production Engineer</h1>
        <h2 className={styles.jobSubTitle}>Full time, Stockholm Sweden</h2>
        <h2 className={styles.secondaryTitle}>About the role</h2>
        <p>
          As a Production Engineer at Volta Greentech you will be a core team
          member in Volta Greentech’s manufacturing team. That means you will be
          designing and building up large-scale factories to enable the
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
            Work closely with R&D and Engineering team on development of Volta
            Greentech’s production blueprint to ensure excellent production
            results optimized for low-cost, high output production
          </li>
          <li>
            Design, build and improve Volta Greentech’s production blueprint
            including systems for upstream treatment of water, bioreactors for
            cultivation, downstream processing and automation of production
          </li>
          <li>
            Be heavily involved in the designing, engineering and buildup of
            Volta Greentechs pilot factory in Lysekil, Sweden and future
            factories
          </li>
          <li>Lead / assist in recruitment of key team members</li>
        </ul>

        <h2 className={styles.secondaryTitle}>Key skills</h2>
        <ul className={styles.ul}>
          <li>
            Degree in mechanical engineering, electrical engineering, computer
            science or similar
          </li>
          <li>Purpose driven and experience of working in a startup</li>
          <li>
            Experience of taking manufacturing from prototype stage to large
            scale production
          </li>
          <li>
            A working knowledge of a wide range of food and bio manufacturing
            processes
          </li>
          <li>
            Track record of having excelled at designing and building up high
            performing production lines
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
