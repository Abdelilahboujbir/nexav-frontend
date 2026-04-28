export const API_ORIGIN = import.meta.env.VITE_API_URL.replace('/api', '')

export function assetUrl(path) {
  if (!path) return ''
  if (path.startsWith('http')) return path
  return `${API_ORIGIN}/storage/${path}`
}