module.exports = {
  siteMetadata: {
    title: `Troop 7 of Coral Gables`,
    description: `Since 1922, more than three thousand boys have benefited from the timeless lessons that only scouting can offer, and a number of our adult volunteers have accomplished more than 30 years of service with the troop. The troop is sponsored by the Kiwanis Club of Coral Gables. Our scout cabin, originally constructed in 1926, is located at 1107 South Greenway on the Granada Golf Course in Coral Gables, Florida.`,
    author: `@1shooperman`,
  },
  pathPrefix: `/Troop7`,
  plugins: [
    `gatsby-plugin-react-helmet`,
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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `troop-7-coral-gables`,
        short_name: `troop7`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/fleur-de-lis.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
