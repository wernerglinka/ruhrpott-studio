import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {schemaTypes} from './schemas'

const singleEdits = [
  { type: 'siteSettings' },
  { type: 'navigations' },
] 

export default defineConfig({
  name: 'default',
  title: 'ruhrpott-studio',
  projectId: '349a1vg2',
  dataset: 'production',
  plugins: [deskTool()],
  schema: {
    types: schemaTypes,
  },
  document: {
    newDocumentOptions: (prev, context) =>
      prev.filter(document => !singleEdits.includes(document.templateId)),
    actions: (prev, { schemaType }) => {
      if (singleEdits.includes(schemaType)) {
        return prev.filter(prevAction => prevAction.action == 'publish');
      }
      return prev;
    },
  },
});
