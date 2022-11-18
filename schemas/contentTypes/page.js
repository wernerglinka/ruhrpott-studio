import {defineField, defineType} from 'sanity'

import {FiFile} from "react-icons/fi";


export default defineType({
  name: 'page',
  title: 'Page',
  icon: FiFile,
  type: 'document',
  fieldsets: [
    { 
      name: 'metadata', 
      title: 'Page Meta Data',
      options: {
        collapsible: true,
        collapsed: true
      }
    },
  ],
  fields: [
    defineField({
      name: 'discoverable',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'isPage',
      type: 'boolean',
      description: 'set to FALSE for metadata',
      initialValue: true,
    }),
    defineField({
      name: 'title',
      type: 'string',
      title: 'Page Title',
      fieldset: 'metadata',
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'Page Description',
      fieldset: 'metadata',
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Page Image',
      description: 'This image will be used when sharing the page on social media',
      fieldset: 'metadata',
    }),
    defineField({
      name: 'canonicalUrl',
      type: 'url',
      title: 'Canonical URL',
      description: 'The canonical URL of the page',
      fieldset: 'metadata',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      }
    }),
    defineField({
      name: 'sections',
      type: 'array',
      title: 'Page Sections',
      description: 'Add, edit, and reorder sections',
      of: [
        { type: 'section' },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare(selection) {
      const { title } = selection;
      return {
        title: title,
      };
    },
  }
});
