const fs = require("fs")
const mkdirp = require("mkdirp")
const path = require("path")

const { createBlogPostType, createPortfolioType } = require("./utils/types")
const { createBlogPostNode, createPortfolioNode } = require("./utils/nodes")

// Customizable theme options for site content base paths
let blogBasePath
let portfolioBasePath
let referencesBasePath
let servicesBasePath

// Customizable theme options for site content directories
let contentPath
let assetPath
let blogContentPath
let portfolioContentPath
let referencesContentPath
let servicesContentPath

const PageTemplate = require.resolve("./src/templates/page.js")
const BlogPostsTemplate = require.resolve("./src/templates/blog-posts.js")
const BlogPostTemplate = require.resolve("./src/templates/blog-post.js")

// Ensure that content directories exist
exports.onPreBootstrap = ({ reporter, store }, themeOptions) => {
  const { program } = store.getState()

  blogBasePath = themeOptions.blogBasePath || "/blog"
  portfolioBasePath = themeOptions.portfolioBasePath || "/portfolio"
  referencesBasePath = themeOptions.referencesBasePath || "/references"
  servicesBasePath = themeOptions.servicesBasePath || "/services"

  contentPath = themeOptions.contentPath || "content"
  assetPath = themeOptions.assetPath || "content/assets"
  blogContentPath = themeOptions.blocContentPath || "content/blog"
  portfolioContentPath =
    themeOptions.portfolioContentPath || "content/portfolio"
  referencesContentPath =
    themeOptions.referencesContentPath || "content/references"
  servicesContentPath = themeOptions.servicesContentPath || "content/services"

  const dirs = [
    path.join(program.directory, contentPath),
    path.join(program.directory, assetPath),
    path.join(program.directory, blogContentPath),
    path.join(program.directory, portfolioContentPath),
    path.join(program.directory, referencesContentPath),
    path.join(program.directory, servicesContentPath),
  ]

  dirs.forEach(dir => {
    reporter.info(`Initializing ${dir} directory`)
    if (!fs.existsSync(dir)) {
      mkdirp.sync(dir)
    }
  })
}

exports.sourceNodes = ({ actions, schema }) => {
  const { createTypes } = actions
  createTypes(createBlogPostType(schema), createPortfolioType(schema))
}

exports.onCreateNode = ({ node, actions, getNode, createNodeId }) => {
  const { createNode, createParentChildLink } = actions

  // Create nodes from Mdx files
  if (node.internal.type === `Mdx`) {
    const fileNode = getNode(node.parent)
    const source = fileNode.sourceInstanceName

    // Create blog post nodes
    if (source === blogContentPath) {
      createBlogPostNode(
        blogBasePath,
        node,
        fileNode,
        createNode,
        createNodeId,
        createParentChildLink
      )
    }

    // Create portfolio item nodes
    if (source === portfolioContentPath) {
      createPortfolioNode(
        portfolioBasePath,
        node,
        fileNode,
        createNode,
        createNodeId,
        createParentChildLink
      )
    }
  }
}

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const result = await graphql(`
    query {
      blogPosts: allBlogPost(sort: { fields: [date, title], order: DESC }) {
        edges {
          node {
            id
            slug
            title
            date(formatString: "DD MMM YYYY")
            excerpt(pruneLength: 100)
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panic(result.errors)
  }

  const { blogPosts } = result.data
  const posts = blogPosts.edges

  posts.forEach(({ node: post }, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1]
    const next = index === 0 ? null : posts[index - 1]
    const { slug } = post

    createPage({
      path: slug,
      component: BlogPostTemplate,
      context: {
        id: post.id,
        previous,
        next,
      },
    })
  })

  createPage({
    path: "/",
    component: PageTemplate,
    context: {
      heading: "Home",
      showInNavigation: true,
      content: `
        <p>
          Homepage gathers everything together
        </p>
      `,
    },
  })

  createPage({
    path: blogBasePath,
    component: BlogPostsTemplate,
    context: {
      heading: "Blog",
      showInNavigation: true,
      posts,
    },
  })

  createPage({
    path: portfolioBasePath,
    component: PageTemplate,
    context: {
      heading: "Portfolio",
      showInNavigation: true,
      content: `
        <p>
          Showcase of your stuff comes here
        </p>
      `,
    },
  })

  createPage({
    path: referencesBasePath,
    component: PageTemplate,
    context: {
      heading: "References",
      showInNavigation: true,
      content: `
        <p>
          Your cool references show up here
        </p>
      `,
    },
  })

  createPage({
    path: servicesBasePath,
    component: PageTemplate,
    context: {
      heading: "Services",
      showInNavigation: true,
      content: `
        <p>
          Show here what you can offer to customers
        </p>
      `,
    },
  })
}
