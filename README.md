# Mariage — Evariste & Thérèse (Couple Kalengayi)

Site vitrine pour le mariage **Evariste Kalengayi** et **Thérèse Ndaya** : textes, photos, galerie, dates, famille et contacts.

Projet **IM Digital Labs — Mariages** (dossier local `kalenga et ndathe`).

## Technique

- **Vue 3** + **Vue Router** (hash)
- **Vite 8**
- **Tailwind CSS 4** (`src/assets/styles/main.css`, thème clair / sombre)
- **Swiper** (hero), **GLightbox** (galerie), **@vueuse/motion** (animations légères)

## Commandes

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # sortie dans dist/
npm run preview  # test du build local
```

Node **≥ 20** (voir `package.json`).

## Où modifier le site

| Élément | Fichier |
|--------|---------|
| Textes, noms, dates, navigation, footer, musique | `src/content/siteContent.js` |
| Couleurs / thème global | `src/assets/styles/main.css` |
| Thème clair-sombre (stockage) | `src/theme/initTheme.js` |

## Médias

- **Images** : `public/img/` (ex. `placeholder.svg`, `logo.png` — chemins utilisés dans `siteContent.js` sans le préfixe `public/`)
- **Audio** (musique de fond) : `public/audio/` — chemin dans `siteContent.music.src`
- **Favicon** : `public/img/favicon.ico` (référencé dans `index.html`)

## Déploiement

Le fichier `vercel.json` configure une app **Vite** (build → `dist/`, réécriture SPA). Adapter si vous hébergez ailleurs.

---

*Contenu du couple et métadonnées : uniquement dans `siteContent.js` et `index.html` (titre par défaut du navigateur).*
