# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Tailwind CSS

This project is configured to use Tailwind CSS v4 with the official Vite plugin.

What’s set up:

- `@tailwindcss/vite` is added in `vite.config.js` so Tailwind works without extra PostCSS config
- Tailwind is imported at the top of `src/index.css` so utilities are available everywhere

How to use:

1. Use Tailwind utility classes directly in your JSX/HTML, e.g.:

	```jsx
	<h1 className="text-3xl font-bold text-sky-600">Hello Tailwind</h1>
	```

2. Write any custom CSS in `src/index.css` (below the `@import "tailwindcss";`). For example:

	```css
	/* src/index.css */
	.btn-primary {
	  background: #0ea5e9; /* custom color */
	  color: white;
	  border-radius: 0.5rem;
	  padding: 0.5rem 1rem;
	}
	```

	Then use it together with Tailwind utilities:

	```jsx
	<button className="btn-primary shadow hover:opacity-90">Save</button>
	```

Run locally:

```powershell
npm run dev
```

