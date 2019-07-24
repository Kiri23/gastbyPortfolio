const mdxResolverPassthrough = require("../mdxResolverPassthrough")

const createReferenceType = schema => {
  return schema.buildObjectType({
    name: `Reference`,
    fields: {
      id: { type: `ID!` },
      name: { type: `String!` },
      slug: { type: `String!` },
      publishedDate: { type: `Date!`, extensions: { dateformat: {} } },
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

module.exports = createReferenceType
