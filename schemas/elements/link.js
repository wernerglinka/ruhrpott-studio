export default {
  type: 'object',
  name: 'link',
  title: 'URL',
  fields: [
    {
      name: 'linkLabel',
      type: 'string',
      title: 'Link Label',
    },

    {
      name: 'isExternal',
      title: 'Link is External',
      type: 'boolean'
    },
    {
      title: 'URL',
      name: 'href',
      type: 'url',
      validation: Rule => Rule.uri({
        scheme: ['http', 'https', 'mailto', 'tel']
      })
    }
  ]
}
