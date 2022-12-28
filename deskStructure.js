export const ruhrpottStructure = (S) =>
  S.list()
    .title('Root')
    .items([
      S.listItem()
        .title('Settings')
        .child(
          S.list()
          .title('Setting Documents')
          .items([
            S.listItem()
              .title('Site Settings')
              .child(S.document().schemaType('siteSettings').documentId('siteSettings')),
            S.listItem()
              .title('Navigation')
              .child(S.document().schemaType('navigation').documentId('navigation')),
          ])
        ),
      S.divider(),
      S.listItem().title('All Authors').child(
        /* Create a list of all authors */
        S.documentList().title('All Authors').filter('_type == "authors"')
      ),
      S.listItem().title('All Ruhrpott Cities').child(
        /* Create a list of all posts */
        S.documentList().title('All Cities').filter('_type == "cities"')
      ),
      S.listItem().title('All Football Clubs').child(
        /* Create a list of all football clubs */
        S.documentList().title('All Authors').filter('_type == "footballClubs"')
      ),
      S.divider(),
  // Remove the all singletons from the main list
  ...S.documentTypeListItems().filter(
    (listItem) => !['siteSettings','navigation','authors','cities','footballClubs' ].includes(listItem.getId())
  ),
])

