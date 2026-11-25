import { loader } from 'fumadocs-core/source';
import { defineDocs } from 'fumadocs-mdx/macro';
import { metaSchema, pageSchema } from 'fumadocs-core/source/schema';
import { notesLanguages } from '@yx-elite/notestack';
import { notesSourcePlugins } from '@yx-elite/notestack/source';
import site from '@/site.config';

const docs = defineDocs({
  dir: 'content/docs',
  docs: {
    schema: pageSchema,
    // Last-updated date from each file's latest git commit
    lastModified: true,
    // The Markdown that "Copy Markdown" and llms.txt serve
    postprocess: { includeProcessedMarkdown: true },
  },
  meta: { schema: metaSchema },
});

// Your notes in content/docs/. With `languages` in site.config.ts, one folder per language (content/docs/en/…).
export const source = loader({
  i18n: notesLanguages(site),
  baseUrl: '/docs',
  source: docs.toFumadocsSource(),
  plugins: notesSourcePlugins,
});
