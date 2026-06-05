# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Structure

The frontend lives in `client/`.

## Commands

All commands run from `client/`:

```bash
cd client
npm install       # install dependencies
npm run dev       # start dev server with HMR
npm run build     # production build
npm run lint      # run ESLint
npm run preview   # preview production build
```

## Stack

- React 19, Vite 8, plain JSX (no TypeScript in `client/`)
- ESLint with `eslint-plugin-react-hooks` and `eslint-plugin-react-refresh`
- No testing framework configured yet
- Entry point: `client/src/main.jsx` → `App.jsx`
