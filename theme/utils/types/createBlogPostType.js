const mdxResolverPassthrough = require("../mdxResolverPassthrough")

const createBlogPostType = schema => {
  return schema.buildObjectType({
    name: `BlogPost`,
    fields: {
      id: { type: `ID!` },
      title: { type: `String!` },
      slug: { type: `String!` },
      date: { type: `Date!`, extensions: { dateformat: {} } },
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

module.exports = createBlogPostType
