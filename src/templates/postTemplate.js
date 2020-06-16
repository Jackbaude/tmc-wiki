import React from "react"
import {graphql} from "gatsby"
import Layout from "../components/layout";

export default function Template({
                                     data, // this prop will be injected by the GraphQL query below.
                                 }) {
    const {markdownRemark} = data // data.markdownRemark holds your post data
    const {frontmatter, html} = markdownRemark
    return (
        <Layout>
            <div className="post-container">
                <div className="blog-post">
                    <h1 className="post-title">{frontmatter.title}</h1>
                    <p className="post-date">{frontmatter.date}</p>
                    <hr className="dividing-line"/>
                    <div
                        className="blog-post-content"
                        dangerouslySetInnerHTML={{__html: html}}
                    />
                </div>
            </div>
        </Layout>
    )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        path
        title
      }
    }
  }
`
