import { graphql, useStaticQuery } from "gatsby";

export default function ResumeExperienceContent(props)  {
    const { edges: posts } = useStaticQuery(
      graphql`
          query ResumeExperience {
            
            allMdx(
              sort: {
                fields: frontmatter___date,
                order: DESC
              }, 
              filter: {frontmatter: {tag: {eq: "experience"}}}
            ){
                edges {
                  node {
                      id
                      excerpt
                      body
                      frontmatter {
                        title
                        slug
                        position
                        date
                        image
                        city
                      }
                  }
                }
            }
          }
    `
    ).allMdx
    return props.showFunc(posts)
  }
  