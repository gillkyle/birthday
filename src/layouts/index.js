import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import Stripes from '../img/rotating-stripes.jpg'
import Header from '../components/header'
import './index.css'

const Page = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #95d2f6;
  background-image: radial-gradient(
      circle 500px at 50% 50%,
      rgba(244, 255, 141, 0.5) 0%,
      rgba(253, 255, 255, 0.5) 90%
    ),
    url(${Stripes});
  background-size: cover;
  background-position: center;
`

const Layout = ({ children, data }) => (
  <Page>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    >
      <link
        href="https://fonts.googleapis.com/css?family=Luckiest+Guy"
        rel="stylesheet"
      />
    </Helmet>
    {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
  </Page>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
