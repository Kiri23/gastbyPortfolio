const fs = require("fs")
const mkdirp = require("mkdirp")
const path = require("path")

const {
  createBlogPostType,
  createPortfolioType,
  createReferenceType,
  createServiceType,
} = require("./utils/types")

const createMdxNode = require("./utils/createMdxNode")

// // Customizable theme options for site content base paths
// let blogBasePath
// let portfolioBasePath
// let referencesBasePath
// let servicesBasePath

const basePaths = {}

// // Customizable theme options for site content directories
// let contentPath
// let assetPath
// let blogContentPath
// let portfolioContentPath
// let referencesContentPath
// let servicesContentPath

const contentPaths = {}

const PageTemplate = require.resolve("./src/templates/page.js")
const BlogPostsTemplate = require.resolve("./src/templates/blog-posts.js")
const BlogPostTemplate = require.resolve("./src/templates/blog-post.js")
const PortfolioTemplate = require.resolve("./src/templates/portfolio.js")
const PortfolioItemTemplate = require.resolve(
  "./src/templates/portfolio-item.js"
)
const ReferencesTemplate = require.resolve("./src/templates/references.js")
const ReferenceTemplate = require.resolve("./src/templates/reference.js")
const ServicesTemplate = require.resolve("./src/templates/services.js")
const ServiceTemplate = require.resolve("./src/templates/service.js")

// Ensure that content directories exist
exports.onPreBootstrap = ({ reporter, store }, themeOptions) => {
  const { program } = store.getState()

  basePaths.blogBasePath = themeOptions.blogBasePath || "/blog"
  basePaths.portfolioBasePath = themeOptions.portfolioBasePath || "/portfolio"
  basePaths.referencesBasePath =
    themeOptions.referencesBasePath || "/references"
  basePaths.servicesBasePath = themeOptions.servicesBasePath || "/services"

  contentPaths.contentPath = themeOptions.contentPath || "content"
  contentPaths.assetPath = themeOptions.assetPath || "content/assets"
  contentPaths.blogContentPath = themeOptions.blocContentPath || "content/blog"
  contentPaths.portfolioContentPath =
    themeOptions.portfolioContentPath || "content/portfolio"
  contentPaths.referencesContentPath =
    themeOptions.referencesContentPath || "content/references"
  contentPaths.servicesContentPath =
    themeOptions.servicesContentPath || "content/services"

  const dirs = [
    path.join(program.directory, contentPaths.contentPath),
    path.join(program.directory, contentPaths.assetPath),
    path.join(program.directory, contentPaths.blogContentPath),
    path.join(program.directory, contentPaths.portfolioContentPath),
    path.join(program.directory, contentPaths.referencesContentPath),
    path.join(program.directory, contentPaths.servicesContentPath),
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
  createTypes([
    createBlogPostType(schema),
    createPortfolioType(schema),
    createReferenceType(schema),
    createServiceType(schema),
  ])
}

exports.onCreateNode = helpers => {
  const { node } = helpers
  // Create nodes from Mdx files
  if (node.internal.type === `Mdx`) {
    createMdxNode(helpers, contentPaths, basePaths)
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
          }
          previous {
            id
            slug
            title
          }
          next {
            id
            slug
            title
          }
        }
      }
      portfolioItems: allPortfolioItem(
        sort: { fields: [publishedDate, title], order: DESC }
      ) {
        edges {
          node {
            id
            slug
          }
          previous {
            id
            slug
            title
          }
          next {
            id
            slug
            title
          }
        }
      }
      references: allReference(
        sort: { fields: [publishedDate, name], order: DESC }
      ) {
        edges {
          node {
            id
            slug
          }
          previous {
            id
            slug
            name
          }
          next {
            id
            slug
            name
          }
        }
      }
      services: allService {
        edges {
          node {
            id
            slug
          }
          previous {
            id
            slug
            title
          }
          next {
            id
            slug
            title
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panic(result.errors)
  }

  const { blogPosts, portfolioItems, references, services } = result.data

  // Create pages for each post
  blogPosts.edges.forEach(({ node: post, previous, next }) => {
    const { id, slug } = post

    createPage({
      path: slug,
      component: BlogPostTemplate,
      context: {
        id,
        previous,
        next,
      },
    })
  })

  // Create pages for each portfolio item
  portfolioItems.edges.forEach(({ node: item, previous, next }) => {
    const { id, slug } = item

    createPage({
      path: slug,
      component: PortfolioItemTemplate,
      context: {
        id,
        previous,
        next,
      },
    })
  })

  // Create pages for each reference
  references.edges.forEach(({ node: reference, previous, next }) => {
    const { id, slug } = reference

    createPage({
      path: slug,
      component: ReferenceTemplate,
      context: {
        id,
        previous,
        next,
      },
    })
  })

  // Create pages for each service
  services.edges.forEach(({ node: service, previous, next }) => {
    const { id, slug } = service

    createPage({
      path: slug,
      component: ServiceTemplate,
      context: {
        id,
        previous,
        next,
      },
    })
  })

  // Create front page
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

  // Create blog index page
  createPage({
    path: basePaths.blogBasePath,
    component: BlogPostsTemplate,
    context: {
      heading: "Blog",
      showInNavigation: true,
    },
  })

  // Create portfolio index page
  createPage({
    path: basePaths.portfolioBasePath,
    component: PortfolioTemplate,
    context: {
      heading: "Portfolio",
      showInNavigation: true,
    },
  })

  // Create references index page
  createPage({
    path: basePaths.referencesBasePath,
    component: ReferencesTemplate,
    context: {
      heading: "References",
      showInNavigation: true,
    },
  })

  // Create services index page
  createPage({
    path: basePaths.servicesBasePath,
    component: ServicesTemplate,
    context: {
      heading: "Services",
      showInNavigation: true,
    },
  })
}
