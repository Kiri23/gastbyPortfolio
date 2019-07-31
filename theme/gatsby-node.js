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

const FrontpageTemplate = path.resolve(
  `${__dirname}/src/templates/frontpage.js`
)
const BlogPostsTemplate = path.resolve(
  `${__dirname}/src/templates/blog-posts.js`
)
const BlogPostTemplate = path.resolve(`${__dirname}/src/templates/blog-post.js`)
const PortfolioTemplate = path.resolve(
  `${__dirname}/src/templates/portfolio.js`
)
const PortfolioItemTemplate = path.resolve(
  `${__dirname}/src/templates/portfolio-item.js`
)
const ReferencesTemplate = path.resolve(
  `${__dirname}/src/templates/references.js`
)
const ReferenceTemplate = path.resolve(
  `${__dirname}/src/templates/reference.js`
)
const ServicesTemplate = path.resolve(`${__dirname}/src/templates/services.js`)
const ServiceTemplate = path.resolve(`${__dirname}/src/templates/service.js`)

const basePaths = {}
const contentPaths = {}

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
        basePaths,
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
        basePaths,
      },
    })
  })

  // Create front page
  createPage({
    path: "/",
    component: FrontpageTemplate,
    context: {
      heading: "Home",
      showInNavigation: true,
      basePaths,
    },
  })

  // Create services index page
  createPage({
    path: basePaths.servicesBasePath,
    component: ServicesTemplate,
    context: {
      heading: "Services",
      showInNavigation: true,
      basePaths,
    },
  })

  // Create portfolio index page
  createPage({
    path: basePaths.portfolioBasePath,
    component: PortfolioTemplate,
    context: {
      heading: "Portfolio",
      showInNavigation: true,
      basePaths,
    },
  })

  // Create blog index page
  createPage({
    path: basePaths.blogBasePath,
    component: BlogPostsTemplate,
    context: {
      heading: "Blog",
      showInNavigation: true,
      basePaths,
    },
  })

  // Create references index page
  createPage({
    path: basePaths.referencesBasePath,
    component: ReferencesTemplate,
    context: {
      heading: "References",
      showInNavigation: false,
      basePaths,
    },
  })
}
