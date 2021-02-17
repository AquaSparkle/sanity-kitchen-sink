export default {
    name: 'location',
    type: 'document',
    title: 'Location',
    fields: [
      {
        name: 'site',
        type: 'reference',
        validation: Rule => Rule.required(),
        to: [
          {
            type: 'site'
          }
        ]
      },
      {
        name: 'title',
        type: 'string',
        title: 'Name'
      },
      {
        name: 'siteId',
        type: 'string',
        title: 'Site Id'
      }
    ]
    // ,
    // options: {
    //     i18n: true,
    //     base: 'en_US',
    //     languages: ['en_US', 'nl_NL'],
    //     css: (classNames) => `${classNames} custom-classname`,
    //     messages: {
    //       loading: 'Loading languages...',
    //       missingTranslations: 'Missing translations message...',
    //     },
    // },
  }