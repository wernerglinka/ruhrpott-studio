import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { ruhrpottStructure } from './deskStructure';
import { schemaTypes } from './schemas';
import { codeInput } from '@sanity/code-input';
import { dashboardTool } from "@sanity/dashboard";
import { netlifyWidget } from "sanity-plugin-dashboard-widget-netlify";
import {Card, Text} from '@sanity/ui';
import { useLayoutEffect } from 'react';
import { FiHome } from 'react-icons/fi';

const returnHomeTool = () => {
  return {
    title: 'Return Home',
    name: 'home', // localhost:3333/my-custom-tool
    icon: FiHome,
    component: (props) => {
      useLayoutEffect(() => {
        window.location.href = 'https://ruhrpott.netlify.app';
      }, [])
      return (
      <Card padding={4}>
        <Text>Returning Home</Text>
      </Card>
    )},
  }
}

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
                title: 'Website',
                apiId: '7899622d-3925-4716-824d-6ae101ed21d8',
                buildHookId: '63ab3fbf3258e44bbb4acba1',
                name: 'ruhrpott-sanity-website',
                url: 'https://ruhrpott.netlify.app/',
              }
            ]
        })
      ]
    }),

  ],
  tools: [returnHomeTool()],
  schema: {
    types: schemaTypes,
  },
});
