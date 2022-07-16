import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

import logo from "../images/logo.png"
import keywords from "../keywords.json"

const Seo = ({ summary, title, children }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            author
            siteUrl
          }
        }
      }
    `
  )

  return (
    <Helmet title={title} titleTemplate={`%s | ${site.siteMetadata.title}`}>
      <html lang="en" />
      <meta name="description" content={summary} />
      <meta name="og:title" content={title} />
      <meta name="og:site_name" content={title} />
      <meta name="og:author" content={site.siteMetadata.author} />
      <meta name="author" content={site.siteMetadata.author} />
      <meta name="og:description" content={summary} />
      <meta name="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={summary} />
      <meta name="og:image" content={logo} />
      <meta name="og:image:width" content="200" />
      <meta name="og:image:height" content="200" />
      <meta property="og:image:alt" content="icon" />
      <meta name="keywords" content={keywords.join(", ")} />
      {/*<meta name="article:tag" content={keywords.join(", ")} />*/}
      <script type="application/ld+json">
        {`{
          "@context": "http://schema.org",
          "@type": "WebPage",
          "name": "${site.siteMetadata.title}",
          "image": "${logo}",
          "abstract": "${summary}",
          "mainContentOfPage": "${summary}",
          "keywords": "${keywords.join(", ")}",
          "author": {
            "@type": "Organization",
            "name": "${site.siteMetadata.author}"
          },
          "url": "${site.siteMetadata.siteUrl}"
        }`}
      </script>
      {children}
    </Helmet>
  )
}

export default Seo
