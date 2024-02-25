import { type SchemaTypeDefinition } from 'sanity'

import blockContent from './schemaTypes/blockContent'
import category from './schemaTypes/category'
import post from './schemaTypes/post'
import architect from './schemaTypes/architect'
import project from './schemaTypes/project'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [project, post, architect, category, blockContent],
}
