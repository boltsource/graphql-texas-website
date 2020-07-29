# 🤠 GraphQL Texas website

Welcome _GraphQLers_! This is the source code for the
[GraphQL Texas](https://graphql-texas.org) website. Below you will find the
instructions to get the site up and running on your local machine.

## Tech stack

- [Next.js](https://nextjs.org)
- [GraphCMS](https://graphcms.org)
- [TailwindCSS](https://tailwindcss.com)
- [Vercel](https://vercel.com)

## Development workflow

### Clone this repo

```bash
gh repo clone graphql-texas/website
```

### Install dependencies

```bash
yarn install
```

### Setup environment variables

- If you are part of the Vercel project, run `vc env pull .env.local`
- If you are not part of the Vercel project, run `cp .env.example .env.local`
  and modify the contents

### Start the dev server

```bash
yarn dev
```

### Enabling preview mode

In order to preview unpublished content, type the Konami Code on any of the
screens:

<kbd>↑</kbd> <kbd>↑</kbd> <kbd>↓</kbd> <kbd>↓</kbd> <kbd>←</kbd> <kbd>→</kbd>
<kbd>←</kbd> <kbd>→</kbd> <kbd>B</kbd> <kbd>A</kbd>

And enter the value of the `PREVIEW_SECRET` environment variable.

### Running GraphQL codegen

Run `yarn generate` after changing the contents of `schema.graphql`.

---

We ♥️ contributions of any kind.
