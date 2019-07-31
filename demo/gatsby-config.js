/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    {
      resolve: "@rennehir/gatsby-theme-personal-site",
      options: {
        // Set your page's content's base paths
        blogBasePath: "/blog", // default: /blog
        portfolioBasePath: "/portfolio", // default: /portfolio
        referencesBasePath: "/references", // default: /references
        servicesBasePath: "/services", // default: /services
      },
    },
  ],
}
