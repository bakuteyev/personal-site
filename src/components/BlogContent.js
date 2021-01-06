import { graphql, useStaticQuery } from "gatsby";

export default function BlogContent(props) {
  
  const { edges: posts } = useStaticQuery(
    graphql`
      query BlogContent {
        allMdx(
          sort: { fields: frontmatter___date, order: DESC }
          filter: { frontmatter: { tag: { eq: "blog" } } }
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
  return props.showFunc(posts);
}
