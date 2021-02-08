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
          Are you are an organized, ambitious problem-solver ready to do
          whatever needs to be done to make our company grow? Then you might be
          our new business developer. There are many ways for an algae-producing
          company to be profitable and in order to make sure we use our
          resources in the best possible way, we need someone with relevant
          experience within business development. In short, your role is to
          locate, develop, negotiate, and build up business relationships.
        </p>

        <p>
          You need to be comfortable with rapidly changing priorities and enjoy
          the dynamics in a start-up company. In our office in central
          Stockholm, we offer an engaging work environment with great
          colleagues, lots of freedom and flexible working hours. With the
          possibility of making an impact on the future of billions of people,
          we feel comfortable saying Volta Greentech is one of the most exciting
          start-ups in Stockholm.
        </p>

        <h2 className={styles.secondaryTitle}>Responsibilities</h2>
        <p>
          Volta is a new company, in a fast-changing environment. The company
          will evolve, and your role, responsibilities and deliverables will
          change with it.
        </p>
        <ul className={styles.ul}>
          <li>
            Locate potential business deals and discuss with potential partners;
            discovering and exploring opportunities.
          </li>
          <li>
            Identify trends by researching industry events, publications, and
            announcements.
          </li>
          <li>
            Analyze the possibilities for farmers to profit from Voltas product.
          </li>
          <li>
            Screen potential business deals by analyzing requirements,
            potential, and financials.
          </li>
          <li>Develop negotiating strategies and positions.</li>
        </ul>

        <h2 className={styles.secondaryTitle}>
          Desirable skills and qualifications
        </h2>
        <ul className={styles.ul}>
          <li>Relevant education and work experience.</li>
          <li>
            Entrepreneurial mindset and passionate about finding solutions to
            environmental problems.
          </li>
          <li>Purpose-driven and motivated by making a difference.</li>
          <li>Inventive and an “out-of-the-box” thinker.</li>
          <li>Market knowledge and presentation skills.</li>
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
