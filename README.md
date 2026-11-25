# AWS Certified Solutions Architect – Associate (SAA-C03) Handbook

![AWS](https://img.shields.io/badge/AWS-Solutions_Architect_Associate-FF9900?logo=amazonwebservices&logoColor=white) ![Exam](https://img.shields.io/badge/Exam-SAA--C03-232F3E?logo=amazonwebservices&logoColor=white) ![Notestack](https://img.shields.io/badge/Built_with-Notestack-111111?logo=readthedocs&logoColor=white) ![Next.js](https://img.shields.io/badge/Next.js-16-000000?logo=nextdotjs&logoColor=white)

Study notes for the **AWS Certified Solutions Architect – Associate (SAA-C03)** exam, built as a static notes site with [Notestack](https://github.com/yx-elite/notestack).

> [!NOTE]
> Original notes, checked against the AWS documentation. Free for anyone preparing for the exam. Third-party course materials belong to their authors and are not stored in this repo.

[Layout](#repository-layout) · [Run locally](#run-locally) · [Write a note](#write-a-note) · [License](#license)

## Repository layout

Notes are MDX files in `content/docs/`. The rest is a thin shell that loads the Notestack theme.

```text
aws-saa-c03-handbook/
├── README.md            ← you are here
├── LICENSE
├── site.config.ts       ← site name, description, accent colour, repo link
├── content/
│   ├── docs/            ← the notes (.mdx), one folder per topic
│   │   ├── index.mdx    ← home page of the notes
│   │   └── meta.json    ← sidebar order
│   └── glossary.json    ← glossary terms
├── app/                 ← theme loaders; app/docs/layout.tsx sets the shorter sidebar name
├── lib/                 ← theme loaders
└── package.json
```

## Run locally

Needs **Node.js 22 or newer**.

```bash
npm install
```

```bash
npm run dev
```

The site opens at http://localhost:3000 (or the next free port). Build the static site into `out/` with:

```bash
npm run build
```

## Write a note

- **Notes** go in `content/docs/`, one folder per topic, each with a `meta.json` that sets the page order in the sidebar.
- **Glossary terms** go in `content/glossary.json`, shared images in `public/`.
- **Components, images and writing style** are documented in the [Notestack docs](https://notestack.yxelite.dev).

## License

[MIT License](LICENSE): free to reuse the notes with credit. Third-party materials are not included and belong to their authors. AWS and the AWS logo are trademarks of Amazon.com, Inc. or its affiliates; this is an unofficial study resource.
