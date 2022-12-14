import {defineType} from 'sanity';

export default defineType({
  title: 'Blog Content Block',
  name: 'blogContentBlock',
  type: 'object',
  fields: [
    {
      title: 'Blog Content',
      name: 'blogContent',
      type: 'array',
      of: [
        {
          title: 'Block',
          type: 'block',
          // Styles let you set what your user can mark up blocks with. These
          // corrensponds with HTML tags, but you can set any title or value
          // you want and decide how you want to deal with it where you want to
          // use your content.
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'H1', value: 'h1'},
            {title: 'H2', value: 'h2'},
            {title: 'H3', value: 'h3'},
            {title: 'H4', value: 'h4'},
            {title: 'Quote', value: 'blockquote'}
          ],
          lists: [
            {title: 'Bullet', value: 'bullet'},
            {title: 'Numbered', value: 'number'},
          ],
          // Marks let you mark up inline text in the block editor.
          marks: {
            // Decorators usually describe a single property – e.g. a typographic
            // preference or highlighting by editors.
            decorators: [
              {title: 'Strong', value: 'strong'}, 
              {title: 'Emphasis', value: 'em'},
              {title: 'Code', value: 'code'},
            ],
            // Annotations can be any object structure – e.g. a link or a footnote.
            annotations: [
              {
                title: 'URL',
                name: 'link',
                type: 'object',
                fields: [
                  {
                    title: 'URL',
                    name: 'href',
                    type: 'url',
                    validation: Rule => Rule.uri({
                      allowRelative: true, // Allow relative links
                      relativeOnly: false, // Force only relative links
                      scheme: ['http', 'https', 'mailto', 'tel'],
                    })
                  },
                  {
                    name: 'isExternal',
                    title: 'Link is External',
                    type: 'boolean'
                  },
                ]
              }
            ]
          }
        },
        // You can add additional types here. Note that you can't use
        // primitive types such as 'string' and 'number' in the same array
        // as a block type.
        {
          type: 'image',
          fields: [
            {
              title: 'Alternative Text',
              name: 'alt',
              type: 'string'
            },
            {
              title: 'Image ID',
              name: 'imageId',
              type: 'string'
            }
          ]    
        },
        {
          type: 'code'
        }
      ]
    }
  ]
});
