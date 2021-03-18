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
        <h1 className={styles.jobTitle}>Macroalgae Physiologist</h1>
        <h2 className={styles.jobSubTitle}>Full time, Stockholm Sweden</h2>
        <h2 className={styles.secondaryTitle}>About the role</h2>
        <p>
          Volta Greentech is a rapidly growing biotech company that produces
          seaweed-based animal feed with anti-methanogenic properties. Founded
          in 2018, we are located in Sweden, with a lab in Stockholm and a
          land-based seaweed cultivation facility in Lysekil. Our mission is to
          fight climate change by curbing the massive methane emission by cattle
          by adding seaweed to their feed. We are now well on our way to become
          the largest producer of anti-methanogenic macroalgae in the world.
        </p>

        <p>
          Volta Greentech has an immediate opening for a researcher position to
          contribute to our R&D team. Land-based macroalgae cultivation permits
          control during growth conditions, which will generate better product
          yield and quality when manipulated correctly. This strategy will help
          us achieve our goal alongside strain development for increased biomass
          and product biosynthesis.
        </p>

        <h2 className={styles.secondaryTitle}>
          What we expect from the successful candidate:
        </h2>

        <ul className={styles.ul}>
          <li>
            Willingness to work in a dynamic start-up environment, being part of
            a fast-growing company
          </li>
          <li>
            Maintain and cultivate seaweeds: sample new strains, generate
            unialgal cultures, maintain and select these in both laboratory and
            production environments. Manipulate their Life cycle and generate
            gametophytes and tetrasporophytes
          </li>
          <li>
            Design and execute laboratory and hatchery/factory-scale experiments
            targeted towards productivity improvements on both growth rates and
            secondary metabolite accumulation
          </li>
          <li>
            Conduct advanced continuous physiological state- and nutrient uptake
            monitoring
          </li>
          <li>
            Provide input towards improving the 'cultivation recipe, which we
            will use in the large-scale production
          </li>
          <li>
            Write reports on research activities, literature findings, and
            statistical analysis, and present them in various settings
          </li>
          <li>
            Flexibility towards the relocation and working at two different
            sites in Sweden
          </li>
          <li>Contribution to the development of the production blueprint.</li>
        </ul>

        <h2 className={styles.secondaryTitle}>Required Qualifications</h2>
        <ul className={styles.ul}>
          <li>Relevant education and work experience.</li>
          <li>
            Relevant Ph.D. or master’s degree and three or more years of
            research and/or industry experience working with macroalgal
            cultures. Or relevant bachelor’s degree and five or more years of
            research and/or industry experience working with macroalgal cultures
          </li>
          <li>
            Extensive background knowledge and experience in phycology; in
            particular in the physiology and photophysiology of algae
          </li>
          <li>
            Know-how and experience in designing experiments, data analysis,
            background knowledge of relevant literature
          </li>
          <li>
            Managerial and organizational skills: direction - tasking of
            technical staff, good team- working spirit
          </li>
          <li>
            Good communication and media skills, ability to communicate at ease
            in English, constructively and convincingly in small and large group
            settings.
          </li>
          <li>Computer skills in Office Suite, Statistical Analysis Tools</li>
        </ul>

        <h2 className={styles.secondaryTitle}>Preferred Qualifications</h2>
        <ul className={styles.ul}>
          <li>
            A Ph.D. in algal physiology, ideally on red seaweeds, and on
            exploring their life cycles. Experience with working with land-based
            macroalgae cultivation systems and manipulating seaweed growing
            conditions, preferably also outside of academia
          </li>
          <li>
            Extensive knowledge in marine biology and a strong record in
            relevant areas
          </li>
          <li>
            Working knowledge of the metabolomics of photosynthetic organisms,
            ideally of halogenated analog metabolite secretion. An experimental
            record of primary carbon and nitrogen assimilation biochemical and
            metabolic pathways, ideally including the expression of
            metabolically active genes to modulate intracellular physiology
          </li>
          <li>
            A successful track record of closing or manipulating the life cycle
            of red macroalgae and/or genetic engineering, vector design, and
            genetic tractability of a range of different organisms
          </li>
          <li>
            The selected candidate will be appointed for a six-month probation
            period and be offered a long-term position if concluded with
            satisfaction
          </li>
        </ul>

        <h2 className={styles.secondaryTitle}>Benefits Summary</h2>
        <p>
          Benefits include a stock option plan, medical insurance, PTO and sick
          leave; paid holidays. Employees may be eligible for but are not
          guaranteed performance-, merit-, and achievement-based awards that
          include a monetary component. The candidate may be eligible for
          relocation expense reimbursement. The candidate may benefit from
          access and exchange programs at Marine Biology Research centers and
          macroalgae growing companies.
        </p>

        <h2 className={styles.secondaryTitle}>Submission Guidelines</h2>
        <p>
          Applicants must submit their application at{" "}
          <span>
            <a
              className={typography.link}
              href="mailto:careers@voltagreentech.com"
            >
              careers@voltagreentech.com
            </a>
          </span>
          . Please include a cover letter and resume and have Macroalgae
          Researcher in the title of the email.
        </p>
      </div>
    </Layout>
  )
}
