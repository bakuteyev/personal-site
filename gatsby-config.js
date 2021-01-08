const URL = 'https://bakuteev.website.yandexcloud.net';

module.exports = {
  siteMetadata: {
    title: `Anton Bakuteev Blog`,
    description: 'This is Anton Bakuteev personal website, blog and resume',
    titleTemplate: "%s | bakuteev.website.yandexcloud.net",
    yandex_verification: "c74e2b351515419a",
    google_site_verification: "LSwzbuihfnoaEBhhRlPf7pDs2My_pCeHCUffeI69Wdk",
    siteUrl: URL,
    image:"/images/I.jpg",
    url: URL
  },
  plugins: [
    `gatsby-plugin-mdx`,
    "gatsby-theme-material-ui",
    `gatsby-remark-images`,
    "gatsby-plugin-sharp",
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

    {
      resolve: `gatsby-plugin-yandex-metrika`,
      options: {
        // The ID of yandex metrika.
        trackingId: 70978429,
        // Enabled a webvisor. The default value is `false`.
        webvisor: true,
        // Enables tracking a hash in URL. The default value is `false`.
        trackHash: true,
        // Defines where to place the tracking script - `false` means before body (slower loading, more hits)
        // and `true` means after the body (faster loading, less hits). The default value is `false`.
        afterBody: true,
        // Use `defer` attribute of metrika script. If set to `false` - script will be loaded with `async` attribute.
        // Async enables earlier loading of the metrika but it can negatively affect page loading speed. The default value is `false`.
        defer: false,
      },
    },

    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "G-5M2FC7NVJL",
      },
    },

    `gatsby-plugin-react-helmet`,

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/content/markdown`,
      },
    },

    `gatsby-transformer-remark`,

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: `${__dirname}/static/images/favicon.svg`
      },
    },

    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        exclude: ['/resume/*', '/example'],
      },
    },

    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: URL,
        sitemap: `${URL}/sitemap.xml`,
        policy: [{ userAgent: '*', allow: '/'}]
      }
    },

    `gatsby-plugin-preact`,
    {
      resolve: 'gatsby-plugin-zopfli',
      options: {
        extensions: ['css', 'html', 'js', 'svg']
      }
    }
    // {
    //   resolve: 'gatsby-plugin-webpack-bundle-analyzer',
    //   options: {
    //     analyzerPort: 3000,
    //     production: true,
    //   },
    // },

  ],
};
