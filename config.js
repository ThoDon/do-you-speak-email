const config = {
  gatsby: {
    pathPrefix: '/',
    siteUrl: 'https://dreamy-stonebraker-149823.netlify.com/',
    gaTrackingId: 'G-98R3Y5H3M1',
    trailingSlash: false,
  },
  header: {
    logo: './home.svg',
    logoLink: 'https://www.doyouspeak.email/',
    title: '',
    githubUrl: '',
    helpUrl: '',
    tweetText: '',
    // social: `<li>
    //     <a href="https://twitter.com/hasurahq" target="_blank" rel="noopener">
    //       <div class="twitterBtn">
    //         <img src='https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/twitter-brands-block.svg' alt={'Discord'}/>
    //       </div>
    //     </a>
    //   </li>
    // 	<li>
    //     <a href="https://discordapp.com/invite/hasura" target="_blank" rel="noopener">
    //       <div class="discordBtn">
    //         <img src='https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/discord-brands-block.svg' alt={'Discord'}/>
    //       </div>
    //     </a>
    //   </li>`,
    links: [{ text: '', link: '' }],
    search: {
      enabled: false,
      indexName: '',
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY,
    },
  },
  sidebar: {
    forcedNavOrder: [
      '/introduction', // add trailing slash if enabled above
      '/structure',
      // '/codeblock',
    ],
    collapsedNav: [
      // '/codeblock', // add trailing slash if enabled above
    ],
    links: [{ text: 'Hasura', link: 'https://hasura.io' }],
    frontline: false,
    ignoreIndex: true,
    title:
      // "<a href='https://hasura.io/learn/'>graphql </a><div class='greenCircle'></div><a href='https://hasura.io/learn/graphql/react/introduction/'>react</a>",
      '',
  },
  siteMetadata: {
    title: 'Gatsby Gitbook Boilerplate | Hasura',
    description: 'Documentation built with mdx. Powering hasura.io/learn ',
    ogImage: null,
    docsLocation: 'https://github.com/ThoDon/do-you-speak-email/tree/master/content',
    favicon: '/logo.svg',
  },
  pwa: {
    enabled: false, // disabling this will also remove the existing service worker.
    manifest: {
      name: 'Gatsby Gitbook Starter',
      short_name: 'GitbookStarter',
      start_url: '/',
      background_color: '#6b37bf',
      theme_color: '#6b37bf',
      display: 'standalone',
      crossOrigin: 'use-credentials',
      icons: [
        {
          src: 'src/pwa-512.png',
          sizes: `512x512`,
          type: `image/png`,
        },
      ],
    },
  },
};

module.exports = config;
