import { graphql, useStaticQuery } from "gatsby";

export default function PersonalSummary(props) {
  const { edges: summary } = useStaticQuery(
    graphql`
      query PersonalSummary {
        allMdx(
          filter: { frontmatter: { tag: { eq: "personal-summary" } } }
          sort: { fields: frontmatter___title, order: ASC }

        ) {
          edges {
            node {
              id
              excerpt
              body
              frontmatter {
                slug
                position
                image
                date
                title
                linkedin_login
                telegram_login
                mail
              }
            }
          }
        }
      }
    `
  ).allMdx;
  return props.showFunc(summary);;
}




