import type { ReactNode } from 'react';
import { NotesLayout } from '@yx-elite/notestack';
import { source } from '@/lib/source';
import site from '@/site.config';

// Shorter name in the docs sidebar so it fits on one line; the full name stays everywhere else
const docsSite = { ...site, name: 'SAA-C03 Handbook', tag: 'AWS' };

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <NotesLayout site={docsSite} tree={source.getPageTree()}>
      {children}
    </NotesLayout>
  );
}
