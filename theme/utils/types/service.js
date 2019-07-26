const mdxResolverPassthrough = require("../mdxResolverPassthrough")

const createServiceType = schema => {
  return schema.buildObjectType({
    name: `Service`,
    fields: {
      id: { type: `ID!` },
      title: { type: `String!` },
      slug: { type: `String!` },
      illustration: { type: `File!` },
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

module.exports = createServiceType
