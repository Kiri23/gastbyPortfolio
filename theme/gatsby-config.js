module.exports = options => ({
  siteMetadata: {
    title: options.siteTitle || "Test",
    description: options.siteDescription || "Testi",
    siteUrl: options.siteUrl || "Testiää",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-theme-ui`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // should this be configurable by the end-user?
              maxWidth: 1380,
              linkImagesToOriginal: false,
            },
          },
          { resolve: `gatsby-remark-copy-linked-files` },
          { resolve: `gatsby-remark-smartypants` },
        ],
        remarkPlugins: [require(`remark-slug`)],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: options.generalContentPath || "content/general",
        name: options.generalContentPath || "content/general",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: options.assetPath || "content/assets",
        name: options.assetPath || "content/assets",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: options.blogContentPath || "content/blog",
        name: options.blogContentPath || "content/blog",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: options.portfolioContentPath || "content/portfolio",
        name: options.portFolioContentPath || "content/portfolio",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: options.referencesContentPath || "content/references",
        name: options.referencesContentPath || "content/references",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: options.servicesContentPath || "content/services",
        name: options.servicesContentPath || "content/services",
      },
    },
    `gatsby-transformer-yaml`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
})
