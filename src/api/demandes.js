import api from './axios'

// Public
export const postDemande = (data) => api.post('/demandes', data)

// Admin
export const adminGetDemandes   = ()              => api.get('/admin/demandes')
export const adminGetDemande    = (id)            => api.get(`/admin/demandes/${id}`)
export const adminUpdateStatut  = (id, statut)    => api.put(`/admin/demandes/${id}/statut`, { statut })
export const adminDeleteDemande = (id)            => api.delete(`/admin/demandes/${id}`)
