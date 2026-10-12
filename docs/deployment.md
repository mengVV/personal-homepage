# Deployment and maintenance

The canonical website is [Meng Wu’s homepage](https://mengvv.github.io/personal-homepage/), built from the `main` branch of [mengVV/personal-homepage](https://github.com/mengVV/personal-homepage).

## Updating the website

Edit the matching files in `content/` (English) and `content_zh/` (Chinese), then commit to `main`. The **Deploy homepage to GitHub Pages** workflow builds and publishes the site automatically. Check [Actions](https://github.com/mengVV/personal-homepage/actions/workflows/deploy.yml) for a successful run before checking your changes online. No generated files need to be committed.

Profile, navigation, social links, and the avatar are in `config.toml`; the introduction is in `bio.md`; publications are in `publications.bib`; projects are in `research.toml`; CV and contact text are in their Markdown files. Images belong in `public/images/` or `public/papers/`. See the [README](../README.md) for field details.

## Hosting configuration

The repository is public. In **Settings → Pages → Build and deployment**, the source is **GitHub Actions**. `.github/workflows/deploy.yml` runs on pushes to `main` and supports a manual **Run workflow**. Pull requests run a separate build check without deploying.

The deployment workflow installs the locked dependencies using Node.js 22, builds the static `out/` directory, and deploys the Pages artifact. It sets `NEXT_PUBLIC_BASE_PATH` from the Pages configuration so navigation, images, scripts, and favicons use the project path correctly. Keep this setting when changing deployment configuration. A failed build does not replace the last successfully deployed site.

## Local preview

Use Node.js 22 or later:

```sh
npm ci
npm run dev
```

A normal `npm run build` exports a website for a root URL. To build for the current GitHub Pages project URL:

```sh
NEXT_PUBLIC_BASE_PATH=/personal-homepage npm run build
```

When previewing that export, serve `out/` at `/personal-homepage/`, matching the public URL. The path is fixed at build time.

## Deployment troubleshooting

Open the failed run under **Actions** and read the failed step. Content syntax errors must be fixed before a new version can publish. To retry a successful commit, use **Run workflow** on `main`. Keep Pages set to **GitHub Actions** and keep the repository public for its current hosting setup.
