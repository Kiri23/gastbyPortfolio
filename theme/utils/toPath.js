const path = require("path")
const { urlResolve } = require("gatsby-core-utils")

const toPath = (basePath, node) => {
  const { dir } = path.parse(node.relativePath)
  const postPath = urlResolve(basePath, dir, node.name)
  return postPath
}

module.exports = toPath
