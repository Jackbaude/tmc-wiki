import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"



const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <p
    style={{
      margin: `1000 auto`,
      maxWidth: 1000,
      padding: `0 1.0875rem 1.45rem`,
    }}>
    Welcome to the official Technical Minecraft Wiki.
    </p>

  </Layout>
)

export default IndexPage
