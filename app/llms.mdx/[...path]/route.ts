import { llmsPageRoute } from '@yx-elite/notestack/routes';
import { source } from '@/lib/source';

const pages = llmsPageRoute(source);

export const revalidate = false;
// other paths are 404s, never cached responses
export const dynamicParams = false;
export const GET = pages.GET;
export const generateStaticParams = pages.generateStaticParams;
