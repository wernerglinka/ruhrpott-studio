import {defineType} from 'sanity'

export default defineType({
  name: 'videoBlock',
  title: 'Video Block',
  type: 'object',
  fields: [
    {
      name: "videoSorce",
      title: "Video Source",
      type: "string",
      description: 'Select a Video Source',
      options: {
        list: [
          { title: "YouTube", value: "youtube" },
        ],
      },
    },
    {
      name: 'videoID',
      type: 'string',
      title: 'Video ID',
    },
    {
      name: 'videoThumbnail',
      title: 'Video Thumbnail',
      type: 'imageBlock',
    },
  ],
})