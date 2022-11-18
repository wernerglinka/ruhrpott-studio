import {defineType, defineField, defineArrayMember} from 'sanity'

// section schema
// constists of sections fields and an array of blocks that can be added to the section
// section fields are groupped in a collapsable fieldset and individual groups may be 
// enabled/disabled

export default defineType({
  name: 'section',
  title: 'Section',
  type: 'object',
  fields: [
    defineField({
      name: "sectionType",
      title: "Section Type",
      type: "string",
      description: 'This is used to select the proper section styles',
      options: {
        list: [
          { title: "Media", value: "media" },
          { title: "Text", value: "text" },
        ],
      },
      
    }),
    defineField({
      title: 'Disabled',
      name: 'disabled',
      type: 'boolean',
      
    }),
    defineField({
      title: 'Container ID',
      name: 'containerId',
      type: 'string',
      
    }),
    defineField({
      title: 'Container Class',
      name: 'containerClass',
      type: 'string',
      
    }),
    defineField({
      title: 'In Container',
      name: 'inContainer',
      type: 'boolean',
      
    }),
    defineField({ 
      title: 'Add Spacing',
      name: 'addSpacing',
      type: 'boolean',
      
    }),
    defineField({
      title: 'Margin',
      name: 'margin',
      type: 'object',
      fields: [
        defineField({
          title: 'Top',
          name: 'top',
          type: 'boolean'
        }),
        defineField({
          title: 'Bottom',
          name: 'bottom',
          type: 'boolean'
        })
      ],
      hidden: ({ parent }) => !parent?.addSpacing,
      
    }),
    defineField({
      title: 'Padding',
      name: 'padding',
      type: 'object',
      fields: [
        defineField({
          title: 'Top',
          name: 'top',
          type: 'boolean'
        }),
        defineField({
          title: 'Bottom',
          name: 'bottom',
          type: 'boolean'
        })
      ],
      hidden: ({ parent }) => !parent?.addSpacing,
      
    }),
    defineField({
      title: 'Has Background',
      name: 'hasBackground',
      type: 'boolean',
      
    }),
    defineField({
      title: 'Background',
      name: 'background',
      type: 'object',
      fields: [
        defineField({
          title: 'Color',
          name: 'color',
          type: 'string'
        }),
        defineField({
          title: 'Image',
          name: 'image',
          type: 'image'
        }),
        defineField({
          title: 'Is Dark',
          name: 'isDark',
          type: 'boolean'
        })
      ],
      hidden: ({ parent }) => !parent.hasBackground,
      
    }),
    defineField({
      name: "htmlTag",
      title: "HTML Tag",
      type: "string",
      description: 'Select Section, Article or Aside',
      options: {
        list: [
          { title: "Section", value: "section" },
          { title: "Article", value: "article" },
          { title: "Aside", value: "aside" },
        ],
      },
    }),
    defineField({
      name: 'sectionBlocks',
      type: 'array',
      title: 'Sections Blocks',
      description: 'Add, edit, and reorder section blocks',
      of: [
        defineArrayMember({ type: 'textBlock' }),
        defineArrayMember({ type: 'imageBlock' }),
      ]
    }),
  ],
  preview: {
    select: {
      title: 'sectionType',
    },
    prepare(selection) {
      console.log(selection);
      const { title } = selection;
      return {
        title: title,
      };
    },
  }
})


