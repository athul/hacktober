import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
//import style from "../styles/blog.module.css"

export default ({data}) => {
    return(
        <Layout>
            <img src={"https://avatars1.githubusercontent.com/"+data.nodes.frontmatter.gh_uname+"?size=200"} alt={data.nodes.frontmatter.name}/>
            <h3>{data.node.frontmatter.name}</h3>
        </Layout>
    )
}

export const query = graphql`
query data {
    allMarkdownRemark {
      nodes {
        frontmatter {
          gh_uname
          name
        }
      }
    }
  }
`
