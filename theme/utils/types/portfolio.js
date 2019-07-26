const mdxResolverPassthrough = require("../mdxResolverPassthrough")

const createPortfolioType = schema => {
  return schema.buildObjectType({
    name: `PortfolioItem`,
    fields: {
      id: { type: `ID!` },
      title: { type: `String!` },
      slug: { type: `String!` },
      publishedDate: { type: `Date!`, extensions: { dateformat: {} } },
      screenshot: { type: `File!` },
      excerpt: {
        type: `String!`,
        args: {
          pruneLength: {
            type: `Int`,
            defaultValue: 140,
          },
        },
        resolve: mdxResolverPassthrough(`excerpt`),
      },
      body: {
        type: `String!`,
        resolve: mdxResolverPassthrough(`body`),
      },
    },
    interfaces: [`Node`],
  })
}

module.exports = createPortfolioType
