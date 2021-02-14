export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6028a83d18d0d27d9ec22d69',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-yh7hvzvs',
                  apiId: '71b5e047-46e7-4f53-94e1-8fd712e4eddb'
                },
                {
                  buildHookId: '6028a83d9b021b4af21e1df5',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-pbbkmnfw',
                  apiId: '468623ad-8fd4-4f06-8b80-68379701ded9'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/AquaSparkle/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-pbbkmnfw.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
