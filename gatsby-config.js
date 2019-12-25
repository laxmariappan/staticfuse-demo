module.exports = {
  siteMetadata: {
    title: 'WP Gatsby demo',
    description: 'Headless WordPress with Gatsby FTW.',
    author: 'Lax Mariappan',
    twitter: '@laxmariappan',
    siteUrl: `https://staticfuse.com`,
  },
  plugins: [
    {
      resolve: `@staticfuse/gatsby-theme-publisher`,
      options: {
        starterPages: true,
        mailChimpEndpoint: 0,
        dynamicComments: 1,
        gaTrackingId: 0,
        wordPressUrl: `https://dev.eternusglobal.com/cars4sale`,
        blogURI: '/blog'
      },
    },
  ],
}