const { isFuture } = require("date-fns");
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

exports.createSchemaCustomization = ({ actions, schema }) => {
  actions.createTypes([
    schema.buildObjectType({
      name: "SanityPost",
      interfaces: ["Node"],
      fields: {
        isPublished: {
          type: "Boolean!",
          resolve: (source) => new Date(source.publishedAt) <= new Date(),
        },
      },
    }),
  ]);
};

async function createLandingPages(pathPrefix = "/", graphql, actions, reporter) {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allSanityRoute(filter: { slug: { current: { ne: null } }, page: { id: { ne: null } } }) {
        edges {
          node {
            id
            slug {
              current
            }
          }
        }
      }
    }
  `);

  if (result.errors) throw result.errors;

  const routeEdges = (result.data.allSanityRoute || {}).edges || [];
  routeEdges.forEach((edge) => {
    const { id, slug = {} } = edge.node;
    const path = [pathPrefix, slug.current, "/"].join("");
    reporter.info(`Creating landing page: ${path}`);
    createPage({
      path,
      component: require.resolve("./src/templates/page.js"),
      context: { id },
    });
  });
}

const siteId = 'hw-in';

async function createCustomRoutes(pathPrefix = "/", graphql, actions, reporter) {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allSanityLocation(filter: { siteId : { eq: "${siteId}"}, pages: {elemMatch: {pageType: {eq: "home"}, id: {ne: "null"}}}  } ) {
          nodes {
            id
            title
            siteId
            pages {
              title
              pageType
              _rawContent
            }
          }
      }
    }
  `);

  if (result.errors) throw result.errors;

  const routeNodes = (result.data.allSanityLocation || {}).nodes || [];
  routeNodes.forEach((node) => {
    const { pages } = node;
    pages.forEach(page => {
      const { _rawContent, pageType } = page;
      if (pageType === 'home') {
        _rawContent.forEach(content => {
          const {_type } = content;
          if (_type === 'topBanner') {
            const { items } = content;
            items && items.forEach(item => {
              const {route} = item;
              const {  slug: { current } } = route;

              const path = [pathPrefix, current, "/"].join("");
              createPage({
                path,
                component: require.resolve("./src/templates/home.js"),
                context: { route },
              });
            })
          }
        })
      }
    })

  });
}

async function createBlogPostPages(pathPrefix = "/blog", graphql, actions, reporter) {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allSanityPost(filter: { slug: { current: { ne: null } }, isPublished: { eq: true } }) {
        edges {
          node {
            id
            publishedAt
            slug {
              current
            }
          }
        }
      }
    }
  `);

  if (result.errors) throw result.errors;

  const postEdges = (result.data.allSanityPost || {}).edges || [];
  postEdges
    .filter((edge) => !isFuture(edge.node.publishedAt))
    .forEach((edge) => {
      const { id, slug = {} } = edge.node;
      const path = `${pathPrefix}/${slug.current}/`;
      reporter.info(`Creating blog post page: ${path}`);
      createPage({
        path,
        component: require.resolve("./src/templates/blog-post.js"),
        context: { id },
      });
    });
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  await createLandingPages("/", graphql, actions, reporter);
  await createCustomRoutes("/test", graphql, actions, reporter);
  await createBlogPostPages("/blog", graphql, actions, reporter);
};
