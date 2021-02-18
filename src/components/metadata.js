import React from "react"
import Helmet from "react-helmet"
import ogImage from "../images/solution.jpeg"

const Metadata = () => (
  <div>
    <Helmet>
      <title>Volta Greentech</title>
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Volta Greentech" />
      <meta
        property="og:description"
        content="On a mission to battle global warming by making cows fart and burp less methane gas, using seaweed."
      />
      <meta property="og:url" content="https://www.voltagreentech.com" />
    </Helmet>
  </div>
)

export default Metadata
