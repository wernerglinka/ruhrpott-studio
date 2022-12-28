import {defineConfig} from 'sanity';
import {deskTool} from 'sanity/desk';
import { ruhrpottStructure } from './deskStructure';
import {schemaTypes} from './schemas';
import {codeInput} from '@sanity/code-input';
import { dashboardTool } from "@sanity/dashboard";
import { netlifyWidget } from "sanity-plugin-dashboard-widget-netlify";

const singleEdits = [
  { type: 'siteSettings' },
  { type: 'navigations' },
] 

export default defineConfig({
  name: 'default',
  title: 'ruhrpott-studio',
  projectId: '349a1vg2',
  dataset: 'production',
  plugins: [
    deskTool({
      structure: ruhrpottStructure,
    }),
    codeInput(),
    dashboardTool({
      widgets: [
        netlifyWidget({
            title: 'Sanity Netlify deploys',
            sites: [
              {
                title: 'Sanity Studio',
                apiId: '7899622d-3925-4716-824d-6ae101ed21d8',
                buildHookId: '63ab3fbf3258e44bbb4acba1',
                name: 'ruhrpott-sanity-studio',
              },
              {
                title: 'Website',
                apiId: '7899622d-3925-4716-824d-6ae101ed21d8',
                buildHookId: '63ab3fbf3258e44bbb4acba1',
                name: 'ruhrpott-sanity-website',
                url: 'https://ruhrpott.netlify.app/',
              }
            ]
        })
      ]
    })
  ],
  schema: {
    types: schemaTypes,
  },
});
