
import {defineConfig} from 'sanity';
import {structureTool} from 'sanity/structure';
import {visionTool} from '@sanity/vision';
import {schemaTypes} from './sanity/schemas';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'missing-project-id';
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';

export default defineConfig({
  name: 'm-haniffa-portfolio',
  title: 'M. Haniffa Portfolio',
  basePath: '/studio',
  projectId,
  dataset,
  plugins: [structureTool(), visionTool()],
  schema: {types: schemaTypes}
});
