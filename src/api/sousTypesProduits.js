import api from './axios'

export const getSousTypesByType = (slug) =>
  api.get(`/types-produits/${slug}/sous-types`)

export const adminGetSousTypes = () =>
  api.get('/admin/sous-types-produits')

export const adminGetSousType = (id) =>
  api.get(`/admin/sous-types-produits/${id}`)

export const adminCreateSousType = (data) =>
  api.post('/admin/sous-types-produits', data)

export const adminUpdateSousType = (id, data) =>
  api.put(`/admin/sous-types-produits/${id}`, data)

export const adminDeleteSousType = (id) =>
  api.delete(`/admin/sous-types-produits/${id}`)


export const getSousTypesProduits = () =>
  api.get('/sous-types-produits')