import React from "react"
import Helmet from "react-helmet"

const Metadata = () => (
  <div>
    <Helmet>
      <title>Volta Greentech</title>
      <meta
        property="og:image"
        content={`www.voltagreentech.com/solution.jpeg`}
      />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image:width" content="400" />
      <meta property="og:image:height" content="300" />
      <meta property="og:image:alt" content="Volta Greentech" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Volta Greentech" />
      <meta
        property="og:description"
        content="On a mission to battle global warming by making cows fart and burp less methane gas, using feed additives."
      />
      <meta property="og:url" content="https://www.voltagreentech.com" />
    </Helmet>
  </div>
)

export default Metadata
