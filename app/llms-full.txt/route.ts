import { llmsFullRoute } from '@yx-elite/notestack/routes';
import { source } from '@/lib/source';

export const revalidate = false;
export const GET = llmsFullRoute(source);
