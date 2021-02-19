export default {
    name: 'topBanner',
    title: 'Top Banner',
    type: 'document',
    fields: [
        {
            name: 'text',
            type: 'string',
            title: 'Text'
        },
        {
            name: 'items',
            type: 'array',
            of: [{ type: 'topBannerItem' }],
            title: 'Banner Items'
        },
    ]
}