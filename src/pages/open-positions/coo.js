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
        <h1 className={styles.jobTitle}>Chief Operating Officer</h1>
        <h2 className={styles.jobSubTitle}>Stockholm, Sweden</h2>
        <h2 className={styles.secondaryTitle}>Background</h2>
        <p>
          Do you want to work on solving one of the world’s most important
          challenges together with a great team?
          <br />
          <br />
          Volta Greentech was founded with the mission to eliminate methane
          emissions from cows by 2050. We develop and produce methane-reducing
          feed additives based on algae, which when fed to cows drastically
          reduce their methane emissions. We are designing and scaling up our
          algae production systems after having succeeded with several
          commercial farm pilots showing consistent methane reductions of up to
          90% per day using our product.
          <br />
          <br />
          Join us as our Chief Operating Officer (COO) to lead our company
          growth. As the COO at Volta Greentech, you will play a critical role
          in driving our company's operational excellence, from sales and
          customer relations to strategic development. Your leadership in the
          day-to-day operations of commercialisation, customer relations,
          financing and financial management will be instrumental in building a
          great enduring company. If you're a results-driven operational leader
          who believes in the power of innovation, collaboration and working
          hands-on to drive positive change at a global scale, we'd love for you
          to join our team.
        </p>

        <h2 className={styles.secondaryTitle}>
          Key responsibilities include, but are not limited to:
        </h2>

        <ul className={styles.ul}>
          <li>Day-to-day operations to support company growth</li>
          <li>
            Build and maintain relationships with key customers, partners, and
            other stakeholders
          </li>
          <li>
            Financial management: Budgeting, forecasting, reporting, Pricing,
            Cost-Benefit evaluation (Including production OPEX/CAPEX)
          </li>
        </ul>

        <h2 className={styles.secondaryTitle}>We believe that you have:</h2>

        <ul className={styles.ul}>
          <li>
            Minimum 3 years of proven relevant experience as COO, CEO, CFO or
            similar roles, or experience in management consulting
          </li>
          <li>Excellent analytical skills and KPI-driven.</li>
          <li>
            Fundraising proficiency. Proven track record of leading significant
            fundraising initiatives, including but not limited to VC, PE, debt
            financing, and grant funding is very meritorious.
          </li>
          <li>
            A technical background and previous experience working in industrial
            companies with production sites is very meritorious.
          </li>
          <li>A can-do mentality, resilience, and a positive attitude.</li>
          <li>
            Outstanding leadership skills with strong decision-making ability
            and personal integrity.
          </li>
        </ul>

        <h2 className={styles.secondaryTitle}>What’s in it for you?</h2>

        <ul className={styles.ul}>
          <li>
            <strong>Purpose-driven mission:</strong> An opportunity to work in
            an innovative, potentially world-changing, start-up company.
          </li>
          <li>
            <strong>Competitive salary and company stocks:</strong> Reflecting
            our commitment to sharing our success and valuing your contribution
            to our growth journey.
          </li>
          <li>
            <strong>Immediate Impact:</strong> From the first day, you'll have
            meaningful responsibility, shaping our company's future and making a
            tangible difference.
          </li>
          <li>
            <strong>Collaborative Environment:</strong> Work in a close-knit and
            motivated team.
          </li>
        </ul>

        <p>
          The role is a full-time position based in our office in Stockholm,
          Sweden, and is an integral part of the management team, working
          closely with our CEO to build up the commercial team. Occasional work
          travel is required to our production sites, as well as to partners and
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
        </p>

        <p>We are looking forward to reading your application!</p>
      </div>
    </Layout>
  )
}
