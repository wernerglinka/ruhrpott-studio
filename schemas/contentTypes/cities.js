import {defineType} from 'sanity'
import {FiGlobe} from "react-icons/fi";

export default defineType({
  name: 'cities',
  title: 'Cities',
  type: 'document',
  icon: FiGlobe,
  fields: [
    {
      name: 'discoverable',
      type: 'boolean',
      initialValue: true,
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    { 
      name: 'size',
      title: 'Size',
      type: 'number'
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      fields: [
        {
          title: 'Alternative Text',
          name: 'alt',
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
        }
      ]
    },
    {
      name: 'logo',
      title: 'City Logo',
      type: 'image',
      fields: [
        {
          title: 'Alternative Text',
          name: 'alt',
          type: 'string'
        }
      ]
    },
    {
      name: 'wappen',
      title: 'City Wappen',
      type: 'image',
      fields: [
        {
          title: 'Alternative Text',
          name: 'alt',
          type: 'string'
        }
      ]
    },
    {
      name: 'websiteLink',
      title: 'Website Link',
      type: 'link',
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image'
    }
  }
})
