/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV || "production"}`,
})


module.exports = {
  flags: {
    PARTIAL_HYDRATION: true
  },
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-manifest`,
      fallback: {
        "path": require.resolve("path-browserify"),
      },
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-source-storyblok',
      options: {
        //accessToken: process.env.GATSBY_PREVIEW_STORYBLOK,
        accessToken: 'W1vLyxT5rQ15jBpANjnv0gtt',
        version: process.env.NODE_ENV === 'production' ? 'published' : 'draft',
        localAssets: true, // Optional parameter to download the images to use with Gatsby Image Plugin
        // languages: ['de', 'at'] // Optional parameter. Omission will retrieve all languages by default.
      }
    }
  ],
}
