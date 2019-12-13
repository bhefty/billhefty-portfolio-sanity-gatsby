export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
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
                  buildHookId: '5df2de3255e696cba223ee6e',
                  title: 'Sanity Studio',
                  name: 'billhefty-portfolio-sanity-gatsby-studio',
                  apiId: 'f070cab7-092a-422b-8681-dfa65cc92155'
                },
                {
                  buildHookId: '5df2de336c71bdca73868900',
                  title: 'Blog Website',
                  name: 'billhefty-portfolio-sanity-gatsby',
                  apiId: 'cf0c1d55-0e66-4541-a356-bd057bbccd0e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/bhefty/billhefty-portfolio-sanity-gatsby',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://billhefty-portfolio-sanity-gatsby.netlify.com', category: 'apps'}
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
