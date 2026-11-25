import { defineSiteConfig } from '@yx-elite/notestack';

// Your site's settings: the only code file you need to edit.
// Every option is explained in the Notestack docs:
// https://notestack.yxelite.dev/en/docs/configuration/
export default defineSiteConfig({
  // Shown in the header, the sidebar banner and the browser tab
  name: 'AWS SAA-C03 Handbook',
  author: 'Yi Xian',
  // One sentence about the notes (also the description search engines show)
  description: 'Study notes for the AWS Certified Solutions Architect – Associate (SAA-C03) exam, topic by topic.',
  // Your GitHub repo as "owner/name", for the GitHub links
  repo: 'yx-elite/aws-saa-c03-handbook',

  // The address the site will be served from, for link previews. Add it once you have one.
  // url: 'https://notes.example.com',

  // A colour for each mode: links, the active page, the glow and the banner follow it
  accent: { light: '#c45500', dark: '#ff9900' },

  // A small badge next to the name, e.g. a course code
  tag: 'SAA-C03',
});
