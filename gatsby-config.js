module.exports = {
  siteMetadata: {
    title: 'Happy Birthday',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-styled-components`,
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
