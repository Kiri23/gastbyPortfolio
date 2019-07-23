module.exports = options => ({
  siteMetadata: {
    title: "Gatsby Theme Jam Submission for personal site",
  },
  plugins: [
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
    "gatsby-plugin-theme-ui",
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
})
