import api from './axios'

// Public
export const getProduits  = ()   => api.get('/produits')
export const getProduit   = (id) => api.get(`/produits/${id}`)

// Admin
export const adminGetProduits   = ()           => api.get('/admin/produits')
export const adminGetProduit    = (id)         => api.get(`/admin/produits/${id}`)
export const adminCreateProduit = (data)       => api.post('/admin/produits', data, {
  headers: { 'Content-Type': 'multipart/form-data' },
})
export const adminUpdateProduit = (id, data)   => api.post(`/admin/produits/${id}`, data, {
  // Use POST with _method=PUT for multipart
  headers: { 'Content-Type': 'multipart/form-data' },
})
export const adminDeleteProduit = (id)         => api.delete(`/admin/produits/${id}`)

// Medias
export const adminGetMedias   = (produitId)         => api.get(`/admin/produits/${produitId}/medias`)
export const adminAddMedia    = (produitId, data)    => api.post(`/admin/produits/${produitId}/medias`, data, {
  headers: { 'Content-Type': 'multipart/form-data' },
})
export const adminDeleteMedia = (id)                 => api.delete(`/admin/medias/${id}`)
