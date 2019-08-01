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
        siteTitle: "Renne Hirsimäki",
        siteDescription:
          "This is an example site of gatsby-theme-personal-site",
        siteUrl: "https://gatsby-theme-personal-site.netlify.com",
        // Set your page's content's base paths
        blogBasePath: "/blog", // default: /blog
        portfolioBasePath: "/portfolio", // default: /portfolio
        referencesBasePath: "/references", // default: /references
        servicesBasePath: "/services", // default: /services
      },
    },
  ],
}
