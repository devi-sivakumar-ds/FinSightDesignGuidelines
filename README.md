# FinSight Design Guidelines

Static single-page site for the FinSight design guidelines.

## Local development

```bash
npm install
npm run dev
```

## Static build

```bash
npm run build
```

The static export is written to `out/`.

## GitHub Pages

For a project page hosted at `https://USERNAME.github.io/REPO_NAME/`, build with:

```bash
NEXT_PUBLIC_BASE_PATH=/REPO_NAME npm run build
```

For a custom domain or user/organization page at the domain root, run:

```bash
npm run build
```

Website copy lives in `src/content/websiteContent.ts`.
