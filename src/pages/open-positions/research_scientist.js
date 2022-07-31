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
          Volta Greentech has an immediate opening for a research scientist
          position to join the R&D team focusing on macroalgal biology, growth,
          and secondary metabolites projects.
        </p>

        <h2 className={styles.secondaryTitle}>
          What we expect from the successful candidate
        </h2>

        <ul className={styles.ul}>
          <li>
            Willingness to work in a dynamic start-up environment, being part of
            a fast-growing company
          </li>
          <li>
            Conducting critical research in one or several major R&D projects on
            macroalgal biology and growth, cultivation system optimization,
            and/or secondary metabolites enhancement
          </li>
          <li>
            Project management, designing and setting the strategy for the R&D
            project as well as required budget and resources with support from
            R&D Director
          </li>
          <li>
            Maintain and cultivate seaweed in both laboratory and production
            environments.
          </li>
          <li>
            Conduct advanced continuous physiological state- and nutrient uptake
            monitoring
          </li>
          <li>
            Write reports on research activities, literature review, conduct
            data processing and statistical analysis, and present research
            findings in various settings
          </li>
          <li>
            Lead/coordinate a team of research assistants, interns, and
            consultants and be responsible for supporting their growth in the
            company
          </li>
          <li>
            Flexibility towards the relocation and working at two different
            sites in Sweden.
          </li>
          <li>Contribution to the development of the production blueprint</li>
        </ul>

        <h2 className={styles.secondaryTitle}>Required Qualifications</h2>

        <ul className={styles.ul}>
          <li>
            Relevant Ph.D. or M.s. with extensive background knowledge and
            research experience in algal biology and cultivation; in particular,
            photophysiology, growth and nutrients optimization, secondary
            metabolites production, photobioreactors
          </li>
          <li>
            Know-how and proven experience in designing and conducting
            experiments in a lab setup, data analysis, scientific reports
            writing
          </li>
          <li>
            Project management and organizational skills, good team-working
            spirit
          </li>
          <li>
            Ability to communicate science at ease in English, constructively
            and convincingly in small and large group settings
          </li>
          <li>
            Computer skills in MS Office and Google suites (documents,
            spreadsheets, presentations), statistical analysis tools
          </li>
        </ul>

        <h2 className={styles.secondaryTitle}>Preferred Qualifications</h2>

        <ul className={styles.ul}>
          <li>
            A Ph.D. in macroalgal biology or biotechnology, ideally on red
            seaweed growth and secondary metabolites formation
          </li>
          <li>
            Working knowledge in marine biology and ecology, such as effects of
            biotic and abiotic factors on seaweed, interactions with other
            species and parasites
          </li>
          <li>
            Experience in photobioreactor design and large-scale cultivation
            systems for macroalgae
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
          <li>
            A successful track record of closing or manipulating the life cycle
            of red macroalgae and/or genetic engineering, vector design, and
            genetic tractability of a range of different organisms
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
