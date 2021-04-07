module.exports = {
  siteMetadata: {
    title: `Howard Kim`,
    description: `Howard's Portfolio Website \nUse desktop for the best experience`,
    author: `@_enome`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Howard Kim`,
        short_name: `Ho Kim`,
        start_url: `/`,
        background_color: `#f8f8f8`,
        theme_color: `#f8f8f8`,
        display: `minimal-ui`,
        icon: `src/images/Horizon_Icon_Square_White.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
