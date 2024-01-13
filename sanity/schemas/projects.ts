export default {
  name: 'projects',
  type: 'document',
  title: 'Project',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title of your project or case',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug of your project',
      options: {
        source: 'title',
      },
    },
    {
      name: 'type',
      type: 'array',
      title: 'Type',
      of: [
        {
          type: 'string',
          options: {
            list: [
              { title: 'Case', value: 'case' },
              { title: 'Project', value: 'project' },
            ],
          },
        }
      ]
    },
    {
      name: 'titleImage',
      type: 'image',
      title: 'Title Image',
    },
    {
      name: 'smallDescription',
      type: 'text',
      title: 'Small Description',
    },
    {
      name: 'content',
      type: 'array',
      title: 'Content',
      of: [
        {
          type: 'block',
        },
      ],
    },
  ],
}