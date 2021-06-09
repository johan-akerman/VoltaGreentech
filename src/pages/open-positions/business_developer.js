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
        <h1 className={styles.jobTitle}>Business developer</h1>
        <h2 className={styles.jobSubTitle}>Full time, Stockholm Sweden</h2>
        <h2 className={styles.secondaryTitle}>About the role</h2>
        <p>
          You? A fearless, dedicated Business Developer, ready to take on
          CO2-emitters acting as if Greta had never gone on strike. Us? We’re
          a-just-over-two-year-old company backed by experienced investors with
          a mission to fight global warming by removing farts and burps from
          cows.
        </p>

        <p>
          Over here, things are moving at a high pace. Getting closer to
          introducing our first climate-friendly products, we need to boost our
          team further. We are now looking for a Project Manager, supporting us
          with the critical launch of a potentially revolutionizing type of
          product in Sweden (and later, internationally). Specs below!
        </p>

        <h2 className={styles.secondaryTitle}>Start date & location</h2>
        <p>
          ASAP. The role is based out of our Stockholm HQ at Karolinska
          Institutet, with occasional trips to our production facility in
          Lysekil on the Swedish west coast.
        </p>

        <h2 className={styles.secondaryTitle}>
          THE WORK YOU’LL TAKE ON INCLUDES:
        </h2>
        <ul className={styles.ul}>
          <li>
            Defining and leading the launch of our new, environmentally
            groundbreaking product line in Swedish supermarkets
          </li>
          <li>
            Nurturing and initiating relationships with both new and existing
            clients
          </li>
          <li>
            Support in project financing, directing consultants as well as
            taking on writing yourself when necessary
          </li>
          <li>
            When required (and have no doubt, it will be!) - jumping into
            additional projects and roles supporting additional parts of the
            company
          </li>
        </ul>

        <h2 className={styles.secondaryTitle}>The skills you'll need</h2>
        <ul className={styles.ul}>
          <li>Excellent project management skills</li>
          <li>
            Love closing new clients, and do everything that it takes to make
            both Volta and our partners succeed
          </li>
          <li>
            A talent for communication, in writing and in person, in English and
            in Swedish
          </li>
          <li>
            Thus, also being a maven with presentations (we use Google Slides /
            Keynote)
          </li>
          <li>
            Be a team player, with strong self motivation, results-orientation
            and sense of purpose
          </li>
        </ul>

        <h2 className={styles.secondaryTitle}>YOUR (PRESUMED) BACKGROUND:</h2>
        <ul className={styles.ul}>
          <li>Relevant education and work experience</li>
          <li>Led and executed successful projects with many stakeholders</li>
          <li>
            A minimum 3 years of work experience in a fast-paced environment
          </li>
          <li>
            5+ years of experience, including leadership, from complex sales and
            project management, preferably from the food and/or agriculture
            industry
          </li>
        </ul>

        <h2 className={styles.secondaryTitle}>EXTRA CREDITS IF YOU:</h2>
        <ul className={styles.ul}>
          <li>Have experience of working with FMCG</li>
          <li>Have previously worked with OKR’s or similar</li>
        </ul>

        <h2 className={styles.secondaryTitle}>What you'll get</h2>
        <ul className={styles.ul}>
          <li>
            A chance to work on one of the world’s biggest, yet unresolved
            climate challenges
          </li>
          <li>
            A chance to be surrounded daily by a team of industry experts, as
            well as brand-name clients and partners
          </li>
          <li>A competitive salary package, with a stock option plan</li>
          <li>A yearly stipend for health and tech expenses</li>
        </ul>

        <h2 className={styles.secondaryTitle}>How to apply</h2>

        <p>
          Send us an email (careers@voltagreentech) with a personal cover letter
          (max 1 page) and a link to your recently updated LinkedIn profile.
        </p>
      </div>
    </Layout>
  )
}
