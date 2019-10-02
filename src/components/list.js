import React from "react"
import {useStaticQuery, graphql, Link} from "gatsby"
import Img from "gatsby-image"
import style from "../styles/bloglist.module.css"

const Item = ({data}) => {
    return(
        data.allMarkdownRemark.edges.map(profile => {
        <div>
        <Img src={"https://avatars1.githubusercontent.com/"+gh_uname+"?size=200"} alt={name}/>
        <h3>{data.node.frontmatter.name}</h3>
        </div>
        }
    )
})

export default() => {
    const query = useStaticQuery(graphql `
    query MyQuery {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                name
                gh_uname
              }
            }
          }
        }
      }
      
    `);

    const blogItems = [];

    query.allMarkdownRemark.edges.forEach(function(item,index){
        blogItems.push(
            <Item title={item.node.frontmatter.name} gh={}/>
        )
    })

    return (
        <React.Fragment>
            {blogItems}
        </React.Fragment>
    )
}
