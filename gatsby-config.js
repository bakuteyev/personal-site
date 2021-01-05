module.exports = {
  siteMetadata: {
    title: `Anton-Bakuteev-Site`,
  },
  plugins: [
    
    `gatsby-plugin-mdx`,
    'gatsby-theme-material-ui',
    `gatsby-remark-images`,
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1035,
              sizeByPixelDensity: true,
            },
          },
        ],
      },
    },

    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: `${__dirname}/content/posts/`,
      },
    },




    
  ]
};
