/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  pathPrefix: "/VoltaGreentech",
  siteMetadata: {
    title: "Volta Greentech",
    titleTemplate: "Volta Greentech",
    description:
      "On a mission to battle global warming by making cows fart and burp less methane gas, using seaweed.",
    url: "https://www.voltagreentech.com",
    image: "/solution.jpeg",
  },

  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
  ],
}
