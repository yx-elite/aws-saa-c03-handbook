import { NotesHome } from '@yx-elite/notestack';
import { source } from '@/lib/source';
import site from '@/site.config';

export default function HomePage() {
  return <NotesHome site={site} source={source} />;
}
