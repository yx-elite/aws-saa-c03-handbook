import { searchRoute } from '@yx-elite/notestack/routes';
import { source } from '@/lib/source';

export const revalidate = false;
export const GET = searchRoute(source);
