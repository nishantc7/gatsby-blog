import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

export default ({data}) => (
  <Layout>
    <SEO title="Home" />
    <div>
      <h1>Nishant's Blog</h1>
      <h4> { data.allMarkdownRemark.totalCount } </h4>
      {
        data.allMarkdownRemark.edges.map(({node})=> (
          <div key={node.id}> 
          <span> { node.frontmatter.title } - { node.frontmatter.date } </span>
          <p> {node.excerpt} </p>
          </div>
        ) )

      }
    </div>
  </Layout>
)


export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            author
            description
            title
          }
          excerpt
        }
      }
    }
  }

`