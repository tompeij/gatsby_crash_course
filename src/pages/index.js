import React from "react"


import Layout from "../components/layout"

import SEO from "../components/seo"


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Welcome to my website.</h1>
        <p>This is a sample site for the Gatsby crash course.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
    </div>

  </Layout>
)

export default IndexPage
