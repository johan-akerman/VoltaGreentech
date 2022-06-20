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
        <h1 className={styles.jobTitle}>Process Design Engineer</h1>
        <h2 className={styles.jobSubTitle}>
          Full time, Stockholm or Göteborg, Sweden
        </h2>
        <h2 className={styles.secondaryTitle}>About the role</h2>
        <p>
          As a Process Design Engineer at Volta Greentech you will be a core
          team member in Volta Greentech’s engineering team. That means you will
          be designing and building up large-scale seaweed factories to enable
          the production of our product. We are a tightly knit team, and you’ll
          work together with our founders, engineers and R & D team in
          developing all manufacturing aspects.
        </p>

        <h2 className={styles.secondaryTitle}>Responsibilities</h2>
        <p>
          Volta is a new company, in a fast-changing environment. The company
          grows fast, and your role, responsibilities and deliverables will
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
            Be heavily involved in the designing, engineering, testing and
            build-up of Volta Greentechs pilot factory in Lysekil, Sweden and
            Volta Factory 02
          </li>
          <li>
            Produce Process Flow Diagrams with engineering requirements for
            further detailed engineering work
          </li>
          <li>Lead / assist in recruitment of key team members</li>
        </ul>

        <h2 className={styles.secondaryTitle}>Key skills</h2>
        <ul className={styles.ul}>
          <li>
            Degree in Chemical Engineering, or similar, and more than 2 years
            working experience
          </li>
          <li>
            Experience in developing BFD, PFD and P&ID for chemical processes
          </li>
          <li>
            Experience of taking manufacturing from prototype stage to
            large-scale production. Be prepared to showcase some of your
            designs.
          </li>
          <li>Purpose-driven, hands-on and strategic</li>
          <li>Good at leading projects and teams to meet tight deadlines</li>
        </ul>

        <h2 className={styles.secondaryTitle}>ADDITIONAL PREFERRED SKILLS</h2>
        <ul className={styles.ul}>
          <li>Experience within Food Processing Industry</li>
          <li>
            Experience within Dewatering and drying of sensitive organic
            materials
          </li>
          <li>Experience within water mixing, dosing and pH control</li>
          <li>
            Knowledge of a wide range of food processing and biomanufacturing
            technologies
          </li>
          <li>Experience of working in a startup</li>
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
