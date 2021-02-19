export default {
  type: 'document',
  name: 'page',
  title: 'Page',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'navMenu',
      type: 'reference',
      title: 'Navigation menu',
      // weak: true, // Uncomment if you want to be able to delete navigation even though pages refer to it
      to: [{ type: 'navigationMenu' }],
      description: 'Which nav menu should be shown, if any',
    },
    {
      title: 'Page Type',
      name: 'pageType',
      type: 'string',
      options: {
        list: [
          {title: 'Home', value: 'home'},
          {title: 'Product Listing', value: 'plp'},
          {title: 'Product Details', value: 'pdp'},
          {title: 'Privacy Policy', value: 'policy'}
        ]
      }
    },
    {
      name: 'content',
      type: 'array',
      title: 'Page sections',
      description: 'Add, edit, and reorder sections',
      of: [
        { type: 'pricing' },
        { type: 'uiComponentRef' },
        { type: 'hero' },
        { type: 'infoRows' },
        { type: 'ctaColumns' },
        { type: 'ctaPlug' },
        { type: 'mozcomBanner' },
        { type: 'history' },
        { type: 'topBanner' }

      ],
    },
  ],
}
