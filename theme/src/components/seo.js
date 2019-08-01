import React from "react"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"

const SEO = ({ postMeta = {}, frontmatter = {}, postImage, isBlogPost }) => {
  const {
    site: { siteMetadata: seo },
    footerYaml: social,
  } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
          siteUrl
        }
      }
      footerYaml {
        facebook
        twitter
      }
    }
  `)

  const title = postMeta.title ? `${postMeta.title} | ${seo.title}` : seo.title
  const description = postMeta.description || seo.description
  const image = postImage ? `${seo.siteUrl}${postImage}` : seo.image
  const url = postMeta.slug ? `${seo.siteUrl}/${postMeta.slug}/` : seo.siteUrl
  const datePublished = isBlogPost ? postMeta.datePublished : false

  return (
    <React.Fragment>
      <Helmet>
        {/* General tags */}
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="image" content={image} />
        <link rel="canonical" href={url} />

        {/* OpenGraph tags */}
        <meta property="og:url" content={url} />
        {isBlogPost ? <meta property="og:type" content="article" /> : null}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="fb:app_id" content={social.facebook} />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content={social.twitter} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
      </Helmet>
    </React.Fragment>
  )
}

export default SEO

SEO.propTypes = {
  isBlogPost: PropTypes.bool,
  postData: PropTypes.shape({
    childMarkdownRemark: PropTypes.shape({
      frontmatter: PropTypes.any,
      excerpt: PropTypes.any,
    }),
  }),
  postImage: PropTypes.string,
}

SEO.defaultProps = {
  isBlogPost: false,
  postData: { childMarkdownRemark: {} },
  postImage: null,
}
