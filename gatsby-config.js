module.exports = {
  siteMetadata: require("./metadata"),
  plugins: [
    'gatsby-plugin-preact',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    { resolve: 'gatsby-plugin-robots-txt',
      options: {
        policy: [{userAgent: '*', allow: '/'}]
      }
    },
    
    { resolve: 'gatsby-plugin-sass', options: { useResolveUrlLoader: true } },
    { resolve: 'gatsby-plugin-manifest', options: require("./manifest.js") },
    { resolve: 'gatsby-plugin-canonical-urls', options: { siteUrl: require("./metadata").siteUrl } },
    { resolve: 'gatsby-plugin-nprogress', options: { color: '#8FBCBB' } },
    { resolve: 'gatsby-plugin-offline', options: { appendScript: require.resolve("./src/sw.js") } },
  ],
};