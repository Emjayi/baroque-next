import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
        }),
        defineField({
            name: 'architect',
            title: 'Architetct',
            type: 'reference',
            to: { type: 'architect' },
        }),
        defineField({
            title: "Status",
            name: "status",
            type: "array",
            of: [{ type: "string" }],
            options: {
                list: [
                    { title: "Completed", value: "Completed" },
                    { title: "In progress", value: "In progress" },
                    { title: "Concept", value: "Concept" }
                ],
                layout: "radio",
                direction: "horizontal"
            }
        }),
        defineField({
            title: "Type",
            name: "type",
            type: "string"
        }),
        defineField({
            name: 'gallery',
            type: 'array',
            of: [
                { type: 'image' }
            ],
            options: {
                layout: 'grid'
            }
        })
        ,
        defineField({
            name: 'date',
            title: 'Date',
            type: 'number',
        }),
        defineField({
            name: 'area',
            title: 'Built area',
            type: 'number',
        }),
        defineField({
            name: 'location',
            title: 'Location',
            type: 'string',
        }),
        defineField({
            name: 'client',
            title: 'Client',
            type: 'string',
        }),
        defineField({
            name: 'team',
            title: 'Team',
            type: 'array',
            of: [
                {
                    type: "object",
                    name: "inline",
                    fields: [
                        { type: "string", name: "title" },
                        { type: "array", name: "body", of: [{ type: "string" }] }
                    ]
                }
            ],

        }),
        defineField({
            name: 'mainImage',
            title: 'Main image',
            type: 'image',
            options: {
                hotspot: true,
            },
            fields: [
                {
                    name: 'alt',
                    type: 'string',
                    title: 'Alternative Text',
                }
            ]
        })
    ],

    preview: {
        select: {
            title: 'title',
            author: 'author.name',
            media: 'mainImage',
        },
        prepare(selection) {
            const { author } = selection
            return { ...selection, subtitle: author && `by ${author}` }
        },
    },
})
