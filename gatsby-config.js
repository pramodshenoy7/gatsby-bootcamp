module.exports = {
    siteMetadata: {
        title: 'Gatsby Bootcamp!',
        author: 'Pramod Shenoy'
    },
    plugins: [
        {
            resolve: 'gatsby-source-contentful',
            options: {
                spaceId: process.env.CF_SPACE_ID,
                accessToken: process.env.CF_ACCESS_TOKEN,
                forceFullSync: true
            }
        },
        `gatsby-plugin-image`,
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-sass`,
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'src',
                path: `${__dirname}/src/`
            }
        },
        'gatsby-plugin-sharp',
        {
            resolve: "gatsby-transformer-remark",
            options: {
                plugins: [
                    'gatsby-remark-relative-images',
                    {
                        resolve: 'gatsby-remark-images',
                        options: {
                            maxwidth: 750,
                            linkImagesToOriginal: false
                        }
                    }   
                ]
            }
        }
    ]
}