module.exports = {
  siteMetadata: {
    title: 'Clark',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-manifest',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Birthday Button',
        start_url: '/',
        background: '#95d2f6',
        theme_color: '#95d2f6',
        display: 'standalone',
        icon: 'src/img/Icon.png',
      }
    }
  ],
}
