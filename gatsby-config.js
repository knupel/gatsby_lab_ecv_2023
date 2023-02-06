/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Gatsby Lab ECV 2023`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown pages`,
        path: `${__dirname}/media/markdown_pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/media/images`,
      },
    },
    // Markdonw part
    {
      resolve : `gatsby-transformer-remark`,
      options : {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options : {
              maxWidth: 800,
            }
          }
        ]
      }
    }
  ]
}
