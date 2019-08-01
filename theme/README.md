[![npm version](https://badge.fury.io/js/%40rennehir%2Fgatsby-theme-personal-site.svg)](https://badge.fury.io/js/%40rennehir%2Fgatsby-theme-personal-site)
[![Netlify Status](https://api.netlify.com/api/v1/badges/9053b2e7-233d-48cf-8eb3-f282cf9d1b98/deploy-status)](https://app.netlify.com/sites/gatsby-theme-personal-site/deploys)

# Gatsby Theme for your personal site

This is a Gatsby theme that I built to participate in [Gatsby Theme Jam](https://themejam.gatsbyjs.org).

See the [live demo](https://gatsby-theme-personal-site.netlify.com)

## Installation

To use this theme in your Gatsby sites, follow these instructions:

### Install the theme

```sh
npm install --save @rennehir/gatsby-theme-personal-site
```

### Add the theme to your `gatsby-config.js`:

```js
module.exports = {
  plugins: ["@rennehir/gatsby-theme-personal-site"],
}
```

### Add content to the `/content` directory

### Start your site

```sh
gatsby develop
```

## Adding content to your site

This theme follows a content directory structure like this:

```sh
content
  +- assets
  +- blog
  +- general
      +- footer
          +- index.yml
      +- hero
          +- index.yml
  +- portfolio
  +- references
  +- services
```

Add all your assets to the `assets` directory and you can reference them from other documents.

The `general` directory holds information that is used for example in hero or footer

### `content/general/hero/index.yml`

```yaml
greeting: "Hello, I am"
name: "Name"
subtitle: "– a web developer"
image: "../../assets/{your-image}.svg"
imageAltText: "Web Developer"
```

### `content/general/footer/index.yml`

Add urls to your social media profiles

```yaml
facebook: ""
github: ""
linkedin: ""
twitter: ""
```

### `content/blog/{post}.mdx`

Put `.mdx` files in this directory to turn them into blog posts. Use these fields in the frontmatter:

```yaml
---
title: Hello World
date: 2019-07-23
cover: "../assets/{your-image}.jpg"
---

```

### `content/portfolio/{item}.mdx`

Put `.mdx` files in this directory to turn them into your portfolio items. Use these fields in the frontmatter:

```yaml
---
title: "title"
publishedDate: 2019-02-12
screenshot: "../assets/{your-image}.png"
---

```

### `content/references/{ref}.mdx`

Put `.mdx` files in this directory to turn them into references. Use these fields in the frontmatter:

```yaml
---
name: Company or person name
publishedDate: 2019-06-15
image: "../assets/{your-image}.png"
---

```

### `content/services/{service}.mdx`

Put `.mdx` files in this directory to turn them into services. Use these fields in the frontmatter:

```yaml
---
title: Application Development
illustration: "../assets/undraw_Mobile_application_mr4r.svg"
---

```
