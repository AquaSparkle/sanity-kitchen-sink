import S from '@sanity/desk-tool/structure-builder'
import PreviewIFrame from '../../src/components/previewIFrame'

export default S.listItem()
    .title('Site Management')
    .schemaType('site')
    .child(
        S.documentList('site')
            .title('Sites')
            .menuItems(S.documentTypeList('site').getMenuItems())
            .filter('_type == "site"')
            .child(site => {
                console.log('site', site)
                return S.list()
                    .title('Site Items')
                    .items([
                        S.listItem()
                            .title('Locations')
                            .schemaType('location')
                            .child(
                                S.documentList('location')
                                    .title('Locations')
                                    .menuItems(S.documentTypeList('location').getMenuItems())
                                    .filter('_type == "location" && site._ref == $site')
                                    .params({ site: site })
                                    .child(locationId => {
                                        console.log('location', locationId, site)
                                        return S.document()
                                            .documentId(locationId)
                                            .schemaType('location')
                                            .views([S.view.form(), PreviewIFrame()])
                                    })
                            )
                    ])
            })


    )