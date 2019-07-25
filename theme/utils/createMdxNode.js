const crypto = require("crypto")
const toPath = require("./toPath")

const createMdxNode = (helpers, contentPaths, basePaths) => {
  const { node, actions, getNode, createNodeId } = helpers
  const { createNode, createParentChildLink } = actions
  const {
    blogContentPath,
    portfolioContentPath,
    referencesContentPath,
    servicesContentPath,
  } = contentPaths
  const {
    blogBasePath,
    portfolioBasePath,
    referencesBasePath,
    servicesBasePath,
  } = basePaths

  const fileNode = getNode(node.parent)
  const source = fileNode.sourceInstanceName

  const createAndLinkNode = (type, fieldData) => {
    createNode({
      ...fieldData,
      // Required fields
      id: createNodeId(`${node.id} >>> ${type}`),
      parent: node.id,
      children: [],
      internal: {
        type,
        contentDigest: crypto
          .createHash("md5")
          .update(JSON.stringify(fieldData))
          .digest("hex"),
        content: JSON.stringify(fieldData),
        description: type,
      },
    })
    createParentChildLink({ parent: fileNode, child: node })
  }

  // Create blog post nodes
  if (source === blogContentPath) {
    const slug = toPath(blogBasePath, fileNode)
    const fieldData = {
      title: node.frontmatter.title,
      slug,
      date: node.frontmatter.date,
      cover: node.frontmatter.cover,
    }
    createAndLinkNode("BlogPost", fieldData)
  }

  // Create portfolio item nodes
  if (source === portfolioContentPath) {
    const slug = toPath(portfolioBasePath, fileNode)
    const fieldData = {
      title: node.frontmatter.title,
      slug,
      publishedDate: node.frontmatter.publishedDate,
    }
    createAndLinkNode("PortfolioItem", fieldData)
  }

  // Create reference item nodes
  if (source === referencesContentPath) {
    const slug = toPath(referencesBasePath, fileNode)
    const fieldData = {
      name: node.frontmatter.name,
      slug,
      publishedDate: node.frontmatter.publishedDate,
    }
    createAndLinkNode("Reference", fieldData)
  }

  // Create service nodes
  if (source === servicesContentPath) {
    const slug = toPath(servicesBasePath, fileNode)
    const fieldData = {
      title: node.frontmatter.title,
      slug,
      illustration: node.frontmatter.illustration,
    }
    createAndLinkNode("Service", fieldData)
  }
}

module.exports = createMdxNode
