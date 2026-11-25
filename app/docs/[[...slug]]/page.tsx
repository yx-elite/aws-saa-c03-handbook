import { createNotesPage } from '@yx-elite/notestack/routes';
import { source } from '@/lib/source';
import site from '@/site.config';

const docs = createNotesPage({ source, site });

export default docs.Page;
export const generateStaticParams = docs.generateStaticParams;
export const generateMetadata = docs.generateMetadata;
