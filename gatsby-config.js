module.exports = {
  plugins: [
    `gatsby-theme-material-ui`,
    `gatsby-plugin-anchor-links`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}