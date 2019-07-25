const crypto = require("crypto")
const toPath = require("../toPath")

const createServiceNode = (
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
  }

  createNode({
    ...fieldData,
    // Required fields
    id: createNodeId(`${node.id} >>> Service`),
    parent: node.id,
    children: [],
    internal: {
      type: `Service`,
      contentDigest: crypto
        .createHash("md5")
        .update(JSON.stringify(fieldData))
        .digest("hex"),
      content: JSON.stringify(fieldData),
      description: `Service item`,
    },
  })
}

module.exports = createServiceNode
