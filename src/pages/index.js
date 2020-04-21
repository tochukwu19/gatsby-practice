import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { graphql } from 'gatsby'


const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people This is the Sup!</h1>
      <Image />
      <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
             <Link
              to={node.fields.slug}>
              <h3>
              {node.frontmatter.title}{" "}
              <span>
                — {node.frontmatter.date}
              </span>
            </h3>
            <p>{node.excerpt}</p>
            </Link> 
          </div>
        ))}
      <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage;



// export const query = graphql`
//   query {
//     site {
//       siteMetadata {
//         title
//         author
//       }
//     }
//   }
// `

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
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