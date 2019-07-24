const crypto = require("crypto")
const toPath = require("../toPath")

const createPortfolioNode = (
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
    publishedDate: node.frontmatter.publishedDate,
  }

  createNode({
    ...fieldData,
    // Required fields
    id: createNodeId(`${node.id} >>> PortfolioItem`),
    parent: node.id,
    children: [],
    internal: {
      type: `PortfolioItem`,
      contentDigest: crypto
        .createHash("md5")
        .update(JSON.stringify(fieldData))
        .digest("hex"),
      content: JSON.stringify(fieldData),
      desciption: `Portfolio items`,
    },
  })
  createParentChildLink({ parent: fileNode, child: node })
}

module.exports = createPortfolioNode
