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
        <h1 className={styles.jobTitle}>R&D Director</h1>
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
          <br />
          <br />
          Land-based macroalgae cultivation permits control during growth
          conditions, which will generate better product yield and quality when
          manipulated correctly. This strategy will help us achieve our goal
          alongside strain development for increased biomass and product
          biosynthesis.
          <br />
          <br />
          Volta Greentech has an immediate opening for an R&D Director position
          to join the R&D team focusing on macroalgal biology, cultivation, and
          secondary metabolites research projects.
        </p>

        <h2 className={styles.secondaryTitle}>
          What we expect from the successful candidate
        </h2>

        <ul className={styles.ul}>
          <li>
            Willingness to work in a dynamic start-up environment, being part of
            a fast-growing company.
          </li>
          <li>
            Lead one or several major R&D programs in macroalgal biology and
            growth
          </li>
          <li>
            Set the strategy for the R&D program and work closely with other
            relevant leaders in the Product and Engineering workstreams
          </li>
          <li>
            Responsible for budget and resources needed for the R&D program and
            allocation between the projects in the program
          </li>
          <li>
            Hiring manager and leader of a team of research scientists, research
            engineers, and consultants, responsible for team performance and
            helping team members grow
          </li>
          <li>
            Very strong scientific background and actively doing research
            together with their program team
          </li>
          <li>
            Write reports on research activities, literature review, conduct
            data processing and statistical analysis, and present research
            findings in various settings
          </li>
          <li>
            Willingness to work in a dynamic start-up environment, being part of
            a fast-growing company.
          </li>
        </ul>

        <h2 className={styles.secondaryTitle}>Required Qualifications</h2>

        <ul className={styles.ul}>
          <li>
            Relevant Ph.D. with postdoctoral and/or industry research experience
            in algal science and technologies
          </li>
          <li>
            Excellent knowledge algal biology, cultivation technologies, and/or
            algal secondary metabolites production.
          </li>
          <li>
            Excellent ability to initiative, prioritize, multi-task, and work
            well under pressure to meet deadlines
          </li>
          <li>
            Very clear and systematic thinking that demonstrates strong judgment
            and problem-solving competencies
          </li>
          <li>
            Excellent ability to lead strategic research programs with budget
            management
          </li>
          <li>
            Knowledge of managing teams and expert ability to lead and motivate
            a team for optimum performance
          </li>
          <li>
            Strong analytical and technical writing skills (procedures,
            protocols, and reports)
          </li>
          <li>
            Ability to communicate fluently in English, constructively and
            convincingly in small and large group settings
          </li>
        </ul>

        <h2 className={styles.secondaryTitle}>Preferred Qualifications</h2>

        <ul className={styles.ul}>
          <li>
            A Ph.D. in macroalgal biology or biotechnology, ideally on red
            seaweed growth and secondary metabolites formation
          </li>
          <li>
            In depth knowledge of photobioreactor design and large-scale
            cultivation systems for macroalgae
          </li>
          <li>
            Working knowledge in marine biology and ecology, ideally of the
            effects of biotic and abiotic factors on seaweed, interactions with
            other species and parasites
          </li>
          <li>
            Working knowledge of the metabolomics of photosynthetic organisms,
            ideally of halogenated analog metabolite secretion, and primary
            carbon and nitrogen assimilation biochemical and metabolic pathways
          </li>
          <li>
            Analytical method development skills for monitoring of secondary
            metabolites and biomass compositional changes in macroalgae
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
