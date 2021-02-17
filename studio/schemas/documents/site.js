export default {
  name: 'site',
  type: 'document',
  title: 'Site',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Name'
    },
    {
      name: 'locations',
      type: 'array',
      of: [{ type: 'location' }],
      title: 'Location'
    }
  ]
}