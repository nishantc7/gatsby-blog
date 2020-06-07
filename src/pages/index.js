import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import styled from 'styled-components'

const BlogLink = styled(Link)`
text-decoration: none;
`

const BlogTitle = styled.h3`
margin:bottom:20px;
color:blue;
`



export default ({data}) => (
  <Layout>
    <SEO title="Home" />
    <div>
      <h1>Nishant's Blog</h1>
      <h4> { data.allMarkdownRemark.totalCount } blog yet. </h4>
      {
        data.allMarkdownRemark.edges.map(({node})=> (
          <div key={node.id}> 
          <BlogLink to={ node.fields.slug }>
          <BlogTitle> { node.frontmatter.title } - { node.frontmatter.date } </BlogTitle>
          </BlogLink>
          <p> {node.excerpt} </p>
          </div>
        ) )

      }
    </div>
  </Layout>
)


export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            date
            author
            description
            title
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }

`