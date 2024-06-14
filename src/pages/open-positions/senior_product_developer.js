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
        <h1 className={styles.jobTitle}>Senior Product Developer</h1>
        <h2 className={styles.jobSubTitle}>Göteborg or Stockholm, Sweden</h2>
        <h2 className={styles.secondaryTitle}>Background</h2>
        <p>
          Do you want to work on solving one of the world’s most important
          challenges together with a great team?
          <br />
          <br />
          Volta Greentech was founded with the mission to eliminate methane
          emissions from cows by 2050. We develop and produce methane-reducing
          feed additives, which when fed to cows drastically reduce their
          methane emissions.
          <br />
          <br />
          Join us as a Senior Product Developer to innovate and enhance our
          groundbreaking products. As a Product Developer at Volta Greentech,
          you will play a critical role in advancing our feed additives,
          ensuring their efficiency, quality, and safety in addition to ensuring
          regulatory success. Your expertise in product development and
          attention to detail in ensuring regulatory compliance will be key to
          our success. If you're passionate about biotechnology, committed to
          sustainability, and eager to make a global impact, we'd love for you
          to join our team.
        </p>

        <h2 className={styles.secondaryTitle}>
          Key responsibilities include but not limited to:
        </h2>

        <ul className={styles.ul}>
          <li>Improving product efficiency, quality, and safety</li>
          <li>Develop novel additive and feed formulations</li>
          <li>
            Becoming a subject matter expert on EFSA regulations for approval of
            novel feed additives
          </li>
          <li>Setting production and product requirements</li>
          <li>
            Conducting R&D to enhance our production processes and ensure
            compliance with product and production requirements
          </li>
          <li>
            Managing exploratory and regulatory research projects and studies
          </li>
        </ul>

        <h2 className={styles.secondaryTitle}>We believe that you have:</h2>

        <ul className={styles.ul}>
          <li>
            Experience in developing feed, food or pharmaceutical products and
            the associated regulatory pathways is highly desirable.
          </li>
          <li>
            A minimum of a master's or civil engineering degree in
            biotechnology, chemistry or biology{" "}
          </li>
          <li>
            Knowledge and experience within chemistry, preferably organic
            chemistry
          </li>
          <li>Experience in managing research projects </li>
          <li>
            4+ years of work experience in feed, food or pharmaceutical
            development
          </li>
          <li>
            Experience in statistics and development of scientific documentation
            (reviews, protocols, reports){" "}
          </li>
          <li>
            Experience or knowledge within veterinary medicine and/or
            pharmacokinetics is highly desirable.
          </li>
        </ul>

        <h2 className={styles.secondaryTitle}>What’s in it for you?</h2>
        <ul className={styles.ul}>
          <li>
            Purpose-driven mission: An opportunity to work in an innovative,
            potentially world-changing start-up company.
          </li>
          <li>
            Competitive salary and company stocks: Reflecting our commitment to
            sharing our success and valuing your contribution to our growth
            journey.
          </li>
          <li>
            Immediate Impact: From the first day, you'll have meaningful
            responsibility, shaping our company's future and making a tangible
            difference.
          </li>
          <li>
            Collaborative Environment: Work in a close-knit and motivated team.
          </li>
        </ul>

        <p>
          The role is a full-time position based in our office in Stockholm or
          Göteborg, Sweden, and is an integral part of the Product team,
          reporting to our Chief Product Officer. Up to 30% work travel is
          required to our R&D and production sites, as well as to partners and
          customers within the EU.
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
          <br />
          <br />
          We are looking forward to reading your application!
        </p>
      </div>
    </Layout>
  )
}
