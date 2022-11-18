import {defineField, defineType} from 'sanity'

export default defineType({
  title: 'Call to action',
  name: 'cta',
  type: 'object',
  
  fields: [
    defineField({
      title: 'Title',
      name: 'title',
      type: 'string'
    }),
    defineField({
      title: 'Is External Link',
      name: 'isExternal',
      type: 'boolean'
    }),
    defineField({
      title: 'External link',
      name: 'externalLink',
      type: 'string',
      description: 'Example: https://www.sanity.io',
      hidden: ({ parent }) => !parent.isExternal
    }),
    defineField({
      title: 'Internal link',
      name: 'internalLink',
      type: 'string',
      description: 'Example: /about',
      hidden: ({ parent }) => parent.isExternal
    }),
    defineField({
      title: 'Kind',
      name: 'kind',
      type: 'string',
      options: {
        layout: 'radio',
        list: ['button', 'link']
      }
    }),
    defineField({
      name: "linkType",
      title: "Link Type",
      type: "string",
      options: {
        list: [
          { title: "Primary", value: "primary" },
          { title: "Secondary", value: "secondary" },
          { title: "Tertiary", value: "tertiary" },
        ],
      },
    })
  ],
  preview: {
    select: {
      title: 'title',
      link: 'link'
    },
    prepare ({title, link}) {
      return {
        title,
        link
      }
    }
  }
})
