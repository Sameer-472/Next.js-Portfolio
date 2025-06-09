# Project Title

A concise one‑sentence description of what your project does and who it’s for.

> **Built with**: [Next.js](https://nextjs.org/), [Tailwind CSS](https://tailwindcss.com/), and [shadcn/ui](https://ui.shadcn.com/)

![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)
![Next.js](https://img.shields.io/badge/Next.js-14-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-^3.4-lightblue)
![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-latest-orange)

---

## ✨ Features

* **Instant page loads** thanks to Next.js ‑ static generation & server‑side rendering out of the box.
* **Utility‑first styling** with Tailwind CSS for rapid UI development.
* **Beautiful, accessible components** powered by shadcn/ui.
* **SEO‑friendly** meta tags and Open Graph support.
* **Strict TypeScript setup** (optional) for type‑safe development.
* **ESLint & Prettier** for consistent code style.
* **Husky + lint‑staged** pre‑commit hooks to keep the main branch clean.

## 🏗️ Tech Stack

| Category   | Tooling                   |
| ---------- | ------------------------- |
| Framework  | Next.js 14 (App Router)   |
| Styling    | Tailwind CSS 3, shadcn/ui |
| Language   | JavaScript / TypeScript   |
| Linting    | ESLint, Prettier          |
| Versioning | Git + GitHub              |

## 📋 Prerequisites

* **Node.js ≥ 18** (recommend [v18 LTS](https://nodejs.org/))
* **pnpm ≥ 9** (or npm / yarn)

## 🚀 Getting Started

```bash
# 1. Clone the repository
$ git clone https://github.com/<your‑username>/<your‑repo>.git
$ cd <your‑repo>

# 2. Install dependencies
$ pnpm install   # or npm install / yarn install

# 3. Create environment variables
$ cp .env.example .env.local
# open .env.local and fill in required values

# 4. Run the development server
$ pnpm dev

# 5. Open http://localhost:3000 in your browser ✨
```

### Available Scripts

| Script        | Purpose                           |
| ------------- | --------------------------------- |
| `pnpm dev`    | Start Next.js in development mode |
| `pnpm build`  | Build the production app          |
| `pnpm start`  | Start the production server       |
| `pnpm lint`   | Run ESLint                        |
| `pnpm format` | Format code with Prettier         |

## 🗂️ Project Structure

```
├── app/                # The new App Router pages & layouts
│   └── ...(routes)
├── components/         # Reusable UI components (shadcn‑based)
├── lib/                # Helper functions & utilities
├── styles/             # Global styles (Tailwind base, etc.)
├── public/             # Static assets
├── .env.example        # Sample env vars
└── ...
```

## 🛠️ Configuration

* **Tailwind**: `/tailwind.config.ts` — customize your design system.
* **shadcn/ui**: Components generated under `/components/ui`.
* **ESLint & Prettier**: Opinionated defaults, tweak in `.eslintrc` & `.prettierrc`.


## 🤝 Contributing

1. **Fork** the repo & create your branch:

   ```bash
   git checkout -b feature/awesome‑feature
   ```
2. **Commit** your changes: `git commit -m "feat: add awesome feature"`
3. **Push** to the branch: `git push origin feature/awesome‑feature`
4. **Open a Pull Request** 🎉

Please follow the [Contributor Covenant](https://www.contributor-covenant.org/) code of conduct.

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgements

* [Next.js](https://nextjs.org/)
* [Tailwind CSS](https://tailwindcss.com/)
* [shadcn/ui](https://ui.shadcn.com/)
* [Vercel](https://vercel.com/) — easiest way to deploy Next.js

---

> Made with ❤️ & ☕️ by **Sameer Khan**
