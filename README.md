# Portfólio — Abner Morales

Site de portfólio em React + Vite + TailwindCSS + Framer Motion.

## Rodar localmente

```bash
npm install
npm run dev
```

## Build de produção

```bash
npm run build
npm run preview
```

## Deploy no GitHub Pages

1. Crie um repositório no GitHub e conecte remoto:

```bash
git remote add origin https://github.com/<seu-usuario>/<seu-repo>.git
git branch -M main
git push -u origin main
```

2. Ajuste o `base` no `vite.config.js` para `/<seu-repo>/`.

3. Execute:

```bash
npm run deploy
```

4. No GitHub, ative **Settings → Pages → Source: gh-pages branch**.

URL final:

```text
https://<seu-usuario>.github.io/<seu-repo>/
```
