import {FiMenu} from "react-icons/fi";
import {defineType} from 'sanity'

export default defineType({
  name: 'navigation',
  type: 'document',
  title: 'Navigation',
  icon: FiMenu,
  fields: [
    {
      name: 'discoverable',
      type: 'boolean',
      initialValue: true,
    },
    {
      type: 'string',
      name: 'name',
      title: 'Name',
    },
    {
      type: 'string',
      name: 'title',
      title: 'Title',
    },
    {
      type: 'array',
      name: 'sections',
      title: 'Sections',
      of: [{ type: 'navigation.section' }],
    },
  ],
});