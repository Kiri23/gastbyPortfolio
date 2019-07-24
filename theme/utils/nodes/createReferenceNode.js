const crypto = require("crypto")
const toPath = require("../toPath")

const createReferenceNode = (
  basePath,
  node,
  fileNode,
  createNode,
  createNodeId,
  createParentChildLink
) => {
  const slug = toPath(basePath, fileNode)
  const fieldData = {
    name: node.frontmatter.name,
    slug,
    publishedDate: node.frontmatter.publishedDate,
  }

  createNode({
    ...fieldData,
    // Required fields
    id: createNodeId(`${node.id} >>> Reference`),
    parent: node.id,
    children: [],
    internal: {
      type: `Reference`,
      contentDigest: crypto
        .createHash("md5")
        .update(JSON.stringify(fieldData))
        .digest("hex"),
      content: JSON.stringify(fieldData),
      desciption: `References`,
    },
  })
  createParentChildLink({ parent: fileNode, child: node })
}

module.exports = createReferenceNode
