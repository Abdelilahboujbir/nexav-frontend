import { useState, useEffect } from 'react'
import AdminLayout from '../../components/admin/AdminLayout'
import {
  adminGetTypes,
  adminCreateType,
  adminUpdateType,
  adminDeleteType
} from '../../api/typesProduits'

const EMPTY_FORM = { nom: '', slug: '', description: '' }

function slugify(str) {
  return str.toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim().replace(/\s+/g, '-')
}

export default function TypesProduitsAdmin() {
  const [types, setTypes] = useState([])
  const [loading, setLoading] = useState(true)
  const [modal, setModal] = useState(null)
  const [editing, setEditing] = useState(null)
  const [form, setForm] = useState(EMPTY_FORM)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')
  const [deleteConfirm, setDeleteConfirm] = useState(null)

  const load = () => {
    setLoading(true)
    adminGetTypes()
      .then((r) => {
        const data = Array.isArray(r.data) ? r.data : r.data.types || []
        setTypes(data)
      })
      .catch(() => setError('Erreur de chargement'))
      .finally(() => setLoading(false))
  }

  useEffect(() => { load() }, [])

  const openCreate = () => {
    setForm(EMPTY_FORM)
    setEditing(null)
    setError('')
    setModal('create')
  }

  const openEdit = (type) => {
    setForm({
      nom: type.nom,
      slug: type.slug,
      description: type.description || ''
    })
    setEditing(type)
    setError('')
    setModal('edit')
  }

  const closeModal = () => {
    setModal(null)
    setError('')
  }

  const handleChange = e => {
    const { name, value } = e.target
    setForm(prev => ({
      ...prev,
      [name]: value,
      ...(name === 'nom' ? { slug: slugify(value) } : {}),
    }))
  }

  const handleSubmit = async e => {
    e.preventDefault()
    setSaving(true)
    setError('')
    try {
      if (modal === 'create') {
        await adminCreateType(form)
      } else {
        await adminUpdateType(editing.id, form)
      }
      closeModal()
      load()
    } catch (err) {
      setError(err.response?.data?.message || 'Une erreur est survenue.')
    } finally {
      setSaving(false)
    }
  }

  const handleDelete = async (id) => {
    try {
      await adminDeleteType(id)
      setDeleteConfirm(null)
      load()
    } catch (err) {
      setError(err.response?.data?.message || 'Impossible de supprimer ce type.')
      setDeleteConfirm(null)
    }
  }

  return (
    <AdminLayout title="Types de produits">

      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
        <div>
          <h2 style={{ fontSize: '1.1rem', fontWeight: 700 }}>Types de produits</h2>
          <p style={{ fontSize: '0.83rem', color: 'var(--n-gray)' }}>
            {types.length} type{types.length > 1 ? 's' : ''}
          </p>
        </div>

        <button onClick={openCreate} className="btn btn-primary btn-sm">
          + Nouveau type
        </button>
      </div>

      {error && !modal && <div className="error-message">{error}</div>}

      {/* Table */}
      {loading ? (
        <div className="loading-center"><div className="spinner" /></div>
      ) : types.length === 0 ? (
        <div className="empty-state">
          <h3>Aucun type</h3>
          <button onClick={openCreate} className="btn btn-primary btn-sm">
            Créer
          </button>
        </div>
      ) : (
        <table className="data-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nom</th>
              <th>Slug</th>
              <th>Description</th>
              <th style={{ textAlign: 'right' }}>Actions</th>
            </tr>
          </thead>

          <tbody>
            {types.map(t => (
              <tr key={t.id}>
                <td>#{t.id}</td>

                <td><strong>{t.nom}</strong></td>

                <td>
                  <code style={{
                    color: 'var(--n-orange)',
                    background: 'rgba(255,75,43,0.08)',
                    padding: '2px 6px',
                    borderRadius: 4
                  }}>
                    {t.slug}
                  </code>
                </td>

                <td style={{ color: 'var(--n-gray)' }}>
                  {t.description || '—'}
                </td>

                <td>
                  <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'flex-end' }}>

                    <button
                      onClick={() => openEdit(t)}
                      style={{
                        background: 'rgba(255,75,43,0.12)',
                        border: '1px solid rgba(255,75,43,0.25)',
                        color: 'var(--n-orange)',
                        padding: '5px 10px',
                        borderRadius: 6,
                        cursor: 'pointer'
                      }}
                    >
                      Modifier
                    </button>

                    <button
                      onClick={() => setDeleteConfirm(t)}
                      style={{
                        background: 'rgba(239,68,68,0.08)',
                        border: '1px solid rgba(239,68,68,0.2)',
                        color: '#F87171',
                        padding: '5px 10px',
                        borderRadius: 6,
                        cursor: 'pointer'
                      }}
                    >
                      Supprimer
                    </button>

                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* Modal */}
      {modal && (
        <div className="modal-overlay">
          <div className="modal">

            <h2>{modal === 'create' ? 'Créer' : 'Modifier'} un type</h2>

            {error && <div className="error-message">{error}</div>}

            <form onSubmit={handleSubmit}>

              <input
                name="nom"
                value={form.nom}
                onChange={handleChange}
                placeholder="Nom"
                className="form-input"
                required
              />

              <input
                name="slug"
                value={form.slug}
                onChange={handleChange}
                className="form-input"
                required
              />

              <textarea
                name="description"
                value={form.description}
                onChange={handleChange}
                className="form-textarea"
                placeholder="Description"
              />

              <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
                <button type="button" onClick={closeModal} className="btn btn-secondary btn-sm">
                  Annuler
                </button>

                <button type="submit" className="btn btn-primary btn-sm">
                  {saving ? '...' : 'Enregistrer'}
                </button>
              </div>

            </form>
          </div>
        </div>
      )}

      {/* Delete */}
      {deleteConfirm && (
        <div className="modal-overlay">
          <div className="modal">
            <p>Supprimer "{deleteConfirm.nom}" ?</p>

            <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
              <button onClick={() => setDeleteConfirm(null)}>Annuler</button>

              <button onClick={() => handleDelete(deleteConfirm.id)}>
                Supprimer
              </button>
            </div>
          </div>
        </div>
      )}

    </AdminLayout>
  )
}