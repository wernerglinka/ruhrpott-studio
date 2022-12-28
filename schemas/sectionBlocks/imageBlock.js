import {defineType} from 'sanity'

export default defineType({
  name: 'imageBlock',
  title: 'Image Block',
  type: 'image',
  fields: [
    { name: 'alt', 
      type: 'string', 
      title: 'Alt Text' 
    },
    {
      title: 'Image ID',
      name: 'imageId',
      type: 'string'
    },
    {
      title: 'Caption',
      name: 'caption',
      type: 'string'
    },
    {
      name: 'credits',
      type: 'string',
      title: 'Credits',
    },
  ],
})