module.exports = {
    siteMetadata: {
        title: "My Site",
        mainMenu: [{
                title: "Startseite",
                link: "/",
            },
            {
                title: "Anwenden",
                link: "/about-us",
            },
            // {
            //   title: "Galleria",
            //   link: "/gallery",
            // },
            {
                title: "Blogs",
                link: "/blogs",
            },
            {
                title: "Kontakte",
                link: "/contact",
            },
        ],
    },
    plugins: [
        `gatsby-plugin-postcss`,
        {
            resolve: `gatsby-source-filesystem`,
            options: { name: `images`, path: `${__dirname}/src/images` },
        },
    ],
};