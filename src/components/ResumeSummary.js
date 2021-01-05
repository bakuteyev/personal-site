import { graphql, useStaticQuery } from "gatsby";

export default function ResumeExperienceContent() {
  const { edges: posts } = useStaticQuery(
    graphql`
      query ResumeSummary {
        allMdx(filter: { frontmatter: { tag: { eq: "resume-summary" } } }) {
          edges {
            node {
              id
              excerpt
              body
              frontmatter {
                slug
              }
            }
          }
        }
      }
    `
  ).allMdx;
  return posts;
}
