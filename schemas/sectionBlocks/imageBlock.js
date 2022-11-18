import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'imageBlock',
  title: 'Image Block',
  type: 'image',
  fields: [
    defineField({ name: 'alt', 
      type: 'string', 
      title: 'Alt Text' 
    }),
    defineField({
      title: 'Caption',
      name: 'caption',
      type: 'string'
    }),
    defineField({
      name: 'credits',
      type: 'string',
      title: 'Credits',
    }),
  ],
})