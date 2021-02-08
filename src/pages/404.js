/* Importing essentials */
import React from "react"

/* Importing components */
import Grid from "../components/grid/Grid"

/* Importing styling */
import Layout from "../components/Layout"

/* Importing images */
import cow from "../../src/images/illustrations/cow_alt_2.png"

export default function Home() {
  return (
    <Layout>
      <div className="layoutContainer">
        <Grid
          positionLeft={true}
          image={cow}
          chapterTitle="Looks like something went wrong."
          text="Ooops! The page you are looking for does not seem to exist"
          link="Go back home"
          href="/"
        />
      </div>
    </Layout>
  )
}
