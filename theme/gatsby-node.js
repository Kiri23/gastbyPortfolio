const fs = require("fs")
const mkdirp = require("mkdirp")
const path = require("path")

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

// Ensure that content directories exist
exports.onPreBootstrap = ({ reporter, store }, themeOptions) => {
  const { program } = store.getState()

  blogBasePath = themeOptions.blogBasePath || "/blog"
  portfolioBasePath = themeOptions.portfolioBasePath || "/portfolio"
  referencesBasePath = themeOptions.referencesBasePath || "/references"
  servicesBasePath = themeOptions.servicesBasePath || "/services"

  contentPath = themeOptions.contentPath || "content"
  assetPath = themeOptions.assetPath || "assets"
  blogContentPath = themeOptions.blocContentPath || "blog"
  portfolioContentPath = themeOptions.portfolioContentPath || "portfolio"
  referencesContentPath = themeOptions.referencesContentPath || "references"
  servicesContentPath = themeOptions.servicesContentPath || "services"

  const dirs = [
    path.join(program.directory, contentPath),
    path.join(program.directory, contentPath, assetPath),
    path.join(program.directory, contentPath, blogContentPath),
    path.join(program.directory, contentPath, portfolioContentPath),
    path.join(program.directory, contentPath, referencesContentPath),
    path.join(program.directory, contentPath, servicesContentPath),
  ]

  dirs.forEach(dir => {
    reporter.info(`Initializing ${dir} directory`)
    if (!fs.existsSync(dir)) {
      mkdirp.sync(dir)
    }
  })
}

exports.createPages = ({ actions, reporter }) => {
  const { createPage } = actions

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
    component: PageTemplate,
    context: {
      heading: "Blog",
      showInNavigation: true,
      content: `
        <p>
          Your blog posts come here
        </p>
      `,
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
