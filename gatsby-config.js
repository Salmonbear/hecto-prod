/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
{
  resolve: "@plasmicapp/loader-gatsby",
  options: {
    projects: [
      {
        id: "jLAmXkGdPPYDvKpL9j3cJd",
        token: "WK6ZEV5IpP0nIoxTSA2azBdEvuZUeeEnGssw79d8xJK9ysmRFM1bLkfJHNLvOlmjsmeYPjEJy40tELCXBAQ",
      },
    ], // An array of project ids.
    preview: false,
    defaultPlasmicPage: require.resolve("./src/templates/defaultPlasmicPage.jsx"),
  },
},
{
  resolve: "gatsby-plugin-react-helmet",
}
]
}
