/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    {
      resolve: "gatsby-theme-personal-site",
      options: {
        // Set your page's content's base paths
        blogBasePath: "/blog", // default: /blog
        portfolioBasePath: "/portfolio", // default: /portfolio
        referencesBasePath: "/references", // default: /references
        servicesBasePath: "/services", // default: /services

        // Set where your content comes from
        // contentPath is the parent directory
        contentPath: "content", // default: content
        assetPath: "assets", // default: assets
        blogContentPath: "blog", // default: blog
        portfolioContentPath: "portfolio", // default: portfolio
        referencesContentPath: "references", // default: references
        servicesContentPath: "services", // default: services
      },
    },
  ],
}
