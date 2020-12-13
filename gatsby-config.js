module.exports = {
  siteMetadata: {
    title: 'Happy Birthday',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-gatsby-cloud`,
    {
      resolve: `gatsby-plugin-create-client-paths`,
      options: { prefixes: [`/*`] },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Luckiest Guy'],
        },
      },
    },
  ],
}
