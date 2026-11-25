import type { ReactNode } from 'react';
import { NotesHomeLayout } from '@yx-elite/notestack';
import { source } from '@/lib/source';
import site from '@/site.config';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <NotesHomeLayout site={site} tree={source.getPageTree()}>
      {children}
    </NotesHomeLayout>
  );
}
