import { ogImageRoute } from '@yx-elite/notestack/routes';
import { source } from '@/lib/source';
import site from '@/site.config';

const og = ogImageRoute({ source, site });

export const revalidate = false;
export const GET = og.GET;
export const generateStaticParams = og.generateStaticParams;
