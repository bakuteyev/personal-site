import { graphql, useStaticQuery } from "gatsby";

export default function ProjectsContent(props) {
  
  const { edges: projects } = useStaticQuery(
    graphql`
      query ProjectsContent {
        allMdx(
          sort: { fields: frontmatter___date, order: DESC }
          filter: { frontmatter: { tag: { eq: "project" } } }
        ) {
          edges {
            node {
              id
              excerpt
              body
              frontmatter {
                title
                slug
                date
                image
              }
            }
          }
        }
      }
    `
  ).allMdx;
  return props.showFunc(projects);
}
