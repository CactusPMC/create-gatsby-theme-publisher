
module.exports = {
  siteMetadata: {
    title: 'Static Fuse',
    description: 'Headless WordPress with Gatsby FTW.',
    author: 'Scott and Justin',
    twitter: '@staticfuse',
    siteUrl: `https://staticfuse.com`,
  },
  plugins: [
    {
      resolve:`@staticfuse/gatsby-theme-publisher`,
      options: {
        starterPages: true, // add a customizable home, about, and contact page
        mailChimpEndpoint: 0, // https://www.gatsbyjs.org/packages/gatsby-plugin-mailchimp/#mailchimp-endpoint
        dynamicComments: 1, // enable comments
        gaTrackingId: 0, // google analytics tracking
        wordPressUrl: `https://cactusdx.wpengine.com`, // The url of your WordPress install
        blogURI: '/blog' // The page to display your posts
      },
    },
  ],
}
