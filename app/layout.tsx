import { Geist, JetBrains_Mono } from 'next/font/google';
import type { ReactNode } from 'react';
import { NotesRoot, notesMetadata } from '@yx-elite/notestack';
import site from '@/site.config';
import './global.css';

// Geist for text, JetBrains Mono for code (the same as fumadocs.dev)
const sans = Geist({ subsets: ['latin'], variable: '--font-sans' });
const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' });

export const metadata = notesMetadata(site);

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <NotesRoot site={site} className={`${sans.variable} ${mono.variable}`}>
      {children}
    </NotesRoot>
  );
}
