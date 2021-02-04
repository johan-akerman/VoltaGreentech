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
        <h1 className={styles.jobTitle}>Algae Cultivation Technician</h1>
        <h2 className={styles.jobSubTitle}>Part time, Lysekil Sweden</h2>
        <h2 className={styles.secondaryTitle}>About the role</h2>
        <p>
          We are focused on the cultivation of macroalgae (seaweed) at our pilot
          factory in Lysekil. The red macroalgae Asparagopsis sp. has been
          proven to reduce methane emissions when fed to ruminant animals thus
          helping in the fight against global warming. As we refine our
          culturing model, the algae will be used to supplement cattle feed to
          reduce methane emissions associated with beef and dairy products,
          essentially creating a new supplement called Volta Seafeed.This is a
          great opportunity to get hands-on experience within the start-up
          environment of a company positioned into an emerging field within
          aquaculture and working in a commercial pilot plant.
        </p>

        <p>
          You should have a good understanding of water flow and be able to
          conceptualize production systems. Plumbing, Building and Mechanical
          Experience would be an asset as would a background in Aquaculture.
          Biology highschool grades or possibly a bachelor level
          biology/chemistry background would be beneficial to the role.
          Experience working with pumps and mechanical equipment and interest in
          aquaculture is a plus.
        </p>

        <p>
          Most of the work will be centered around day to day tasks which
          include assisting Volta Greentech’s CTO and production team with basic
          maintenance of cultures, washing and cleaning of tanks, taking water
          analysis data and mixing solutions/growth media in addition to
          building and plumbing of the production system.
        </p>

        <p>
          There is a great opportunity for anyone who’s passionate about
          aquaculture and production systems to learn about the aquaculture of
          the species that we’re growing, use of instruments and testing of
          water chemistry. Building aquaculture cultivation systems at
          pilot-scale, plumbing, the factors involved in growing macroalgae and
          working in a fast-paced start-up environment. You should also be open
          minded and communicative, detail oriented and resilient to possibly
          repetitive tasks. Good at record keeping, organised and with an
          observant attitude.
        </p>

        <h2 className={styles.secondaryTitle}>Responsibilities</h2>

        <ul className={styles.ul}>
          <li>Seaweed culture monitoring and management</li>
          <li>Production equipment maintenance and monitoring</li>
          <li>Problem solving</li>
          <li>
            Note-taking and data logging of culture status (visual and
            technically)
          </li>
          <li>Water Quality measurement and recording</li>
          <li>Assist with construction of cultivation systems</li>
          <li>Learn best practice seaweed cultivation</li>
        </ul>

        <h2 className={styles.secondaryTitle}>Important information</h2>
        <p>
          Initially part time 50% with possibility of becoming full-time
          employment in the future. Location: Lysekil, Sweden
        </p>

        <p>
          Applications are to be reviewed immediately with starting date
          negotiable. Please send your cover letter and resume to{" "}
          <span>
            <a
              className={typography.link}
              href="mailto:fredrik@voltagreentech.com"
            >
              ian@voltagreentech.com
            </a>
          </span>
          and include your CV and a cover letter.
        </p>
      </div>
    </Layout>
  )
}
