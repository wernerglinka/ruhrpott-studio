import {FiSettings, FiMenu, FiUsers, FiGlobe, FiDribbble, FiTool} from "react-icons/fi";

export const ruhrpottStructure = (S) =>
  S.list()
    .title('Root')
    .items([
      // Add the settings documents first
      S.listItem()
        .title('Settings')
        .icon(FiTool)
        .child(
          S.list()
          .title('Setting Documents')
          .items([
            S.listItem()
              .title('Site Settings')
              .icon(FiSettings)
              .child(S.document().schemaType('siteSettings').documentId('siteSettings')),
            S.listItem()
              .title('Navigation')
              .icon(FiMenu)
              .child(S.document().schemaType('navigation').documentId('navigation')),
          ])
        ),
      S.divider(),
      // add the data content types second
      S.listItem().title('Authors').icon(FiUsers).child(
        // Create a list of all authors
        S.documentList().title('All Authors').filter('_type == "authors"')
      ),
      S.listItem().title('Ruhrpott Cities').icon(FiGlobe).child(
        // Create a list of all posts
        S.documentList().title('All Ruhrpott Cities').filter('_type == "cities"')
      ),
      S.listItem().title('Football Clubs').icon(FiDribbble).child(
        // Create a list of all football clubs
        S.documentList().title('All Football Clubs').filter('_type == "footballClubs"')
      ),
      S.divider(),
      // Remove the all singletons and previous defined list items from the main list
      // at this point only blog posts and pages remain to be listed
      ...S.documentTypeListItems().filter(
        (listItem) => !['siteSettings','navigation','authors','cities','footballClubs' ].includes(listItem.getId())
      ),
    ]);

