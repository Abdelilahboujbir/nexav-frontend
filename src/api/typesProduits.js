import api from './axios'

// Public
export const getTypesProduits    = ()       => api.get('/types-produits')
export const getTypeProduit      = (id)     => api.get(`/types-produits/${id}`)
export const getProduitsByType   = (slug)   => api.get(`/types-produits/${slug}/produits`)

// Admin
export const adminGetTypes       = ()       => api.get('/admin/types-produits')
export const adminGetType        = (id)     => api.get(`/admin/types-produits/${id}`)
export const adminCreateType     = (data)   => api.post('/admin/types-produits', data)
export const adminUpdateType     = (id, data) => api.put(`/admin/types-produits/${id}`, data)
export const adminDeleteType     = (id)     => api.delete(`/admin/types-produits/${id}`)
