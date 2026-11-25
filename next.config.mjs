import { createMDX } from 'fumadocs-mdx/next';
import { withNotestack } from '@yx-elite/notestack/next';

const withMDX = createMDX();

export default withMDX(withNotestack());
