const crypto = require("crypto")
const toPath = require("../toPath")

const createBlogPostNode = (
  basePath,
  node,
  fileNode,
  createNode,
  createNodeId,
  createParentChildLink
) => {
  const slug = toPath(basePath, fileNode)
  const fieldData = {
    title: node.frontmatter.title,
    slug,
    date: node.frontmatter.date,
  }

  createNode({
    ...fieldData,
    // Required fields
    id: createNodeId(`${node.id} >>> BlogPost`),
    parent: node.id,
    children: [],
    internal: {
      type: `BlogPost`,
      contentDigest: crypto
        .createHash("md5")
        .update(JSON.stringify(fieldData))
        .digest("hex"),
      content: JSON.stringify(fieldData),
      desciption: `Blog Posts`,
    },
  })
  createParentChildLink({ parent: fileNode, child: node })
}

module.exports = createBlogPostNode
