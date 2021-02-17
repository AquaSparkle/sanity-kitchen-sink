// Load variables from `.env` as soon as possible
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV || "development"}`
});

const path = require("path");
const clientConfig = require("./client-config");

const isProd = process.env.NODE_ENV === "production";

module.exports = {
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`)
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-source-sanity",
      options: {
        ...clientConfig.sanity,
        token: 'skvzf71UOhrWuZBU4piDSRLlPAeJvTiRL9WyHZalUKrBZxW9tcRDehG3hqYjERJDdjNbwt4qzaTv34tHRahk2sNNaAjsMt3qKPynlc0WX9dYifNwxDMEU7rJeGtWNLlkjEcrLmbBX0FxKk0wEVXqMNwFGe3LEJH3nVQfi9HEDlOjxQ8qFh9r',
        watchMode: true,
        overlayDrafts: true
      }
    }
  ]
};
