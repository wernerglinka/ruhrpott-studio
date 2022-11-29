export default {
  name: 'navigation.link',
  type: 'object',
  title: 'Link',
  preview: {
    select: {
      title: 'title',
      targetTitle: 'target.title',
    },
    prepare: ({ title, targetTitle }) => ({
      title: title || targetTitle,
    }),
  },
  fields: [
    {
      type: 'reference',
      name: 'target',
      title: 'Target article',
      to: [{ type: 'page' }],
      description: 'No target article turns the item into a subheading.',
      // _weak: true // enable if you don't want reference integrity checks  
    },
    {
      type: 'string',
      name: 'title',
      title: 'Title',
      description: 'Override title from the target article.',
    },
    {
      type: 'string',
      name: 'linkClass',
      title: 'Link Class',
    },
    {
      type: 'array',
      name: 'children',
      title: 'Children',
      of: [{ type: 'navigation.link' }],
    },
  ],
}