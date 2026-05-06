/**
 * URL absolue pour les fichiers dans `public/` (respecte `base` Vite en prod).
 * @param {string} path - ex. "img/logo.png" ou "/img/logo.png"
 */
export function usePublicUrl(path) {
  const trimmed = path.replace(/^\/+/, '')
  const optimizedPath =
    trimmed.startsWith('img/') && /\.(jpe?g|png)$/i.test(trimmed)
      ? trimmed.replace(/\.(jpe?g|png)$/i, '.webp')
      : trimmed
  const base = import.meta.env.BASE_URL || '/'
  const prefix = base.endsWith('/') ? base : `${base}/`
  const full = `${prefix}${optimizedPath}`
  return encodeURI(full)
}
