import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import AdminLayout from '../../components/admin/AdminLayout'
import {
  adminGetProduits,
  adminCreateProduit,
  adminUpdateProduit,
  adminDeleteProduit,
} from '../../api/produits'
import { adminGetTypes } from '../../api/typesProduits'
import { adminGetSousTypes } from '../../api/sousTypesProduits'

const EMPTY_FORM = {
  nom: '',
  slug: '',
  type_produit_id: '',
  sous_type_produit_id: '',
  description_courte: '',
  description_longue: '',
  video_url: '',
  actif: true,
  image_principale: null,
}

function slugify(str) {
  return str
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
}

export default function ProduitsAdmin() {
  const [produits, setProduits] = useState([])
  const [types, setTypes] = useState([])
  const [sousTypes, setSousTypes] = useState([])

  const [loading, setLoading] = useState(true)
  const [modal, setModal] = useState(null)
  const [editing, setEditing] = useState(null)
  const [form, setForm] = useState(EMPTY_FORM)

  const [imageFile, setImageFile] = useState(null)
  const [imagePreview, setImagePreview] = useState(null)

  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')
  const [deleteConfirm, setDeleteConfirm] = useState(null)

  const [filterType, setFilterType] = useState('all')
  const [search, setSearch] = useState('')

  const load = () => {
    setLoading(true)
    setError('')

    Promise.all([
      adminGetProduits(),
      adminGetTypes(),
      adminGetSousTypes(),
    ])
      .then(([pRes, tRes, stRes]) => {
        setProduits(
          Array.isArray(pRes.data) ? pRes.data : pRes.data.produits || []
        )

        setTypes(
          Array.isArray(tRes.data) ? tRes.data : tRes.data.types || []
        )

        setSousTypes(
          Array.isArray(stRes.data)
            ? stRes.data
            : stRes.data.sous_types || stRes.data.sousTypes || []
        )
      })
      .catch(() => setError('Erreur de chargement'))
      .finally(() => setLoading(false))
  }

  useEffect(() => {
    load()
  }, [])

  const openCreate = () => {
    setForm({
      ...EMPTY_FORM,
      type_produit_id: types[0]?.id || '',
      sous_type_produit_id: '',
    })
    setEditing(null)
    setImageFile(null)
    setImagePreview(null)
    setError('')
    setModal('create')
  }

  const openEdit = (p) => {
    setForm({
      nom: p.nom || '',
      slug: p.slug || '',
      type_produit_id: p.type_produit_id || '',
      sous_type_produit_id: p.sous_type_produit_id || '',
      description_courte: p.description_courte || '',
      description_longue: p.description_longue || '',
      video_url: p.video_url || '',
      actif: Boolean(p.actif),
      image_principale: null,
    })

    setEditing(p)
    setImageFile(null)
    setImagePreview(p.image_principale ? `/storage/${p.image_principale}` : null)
    setError('')
    setModal('edit')
  }

  const closeModal = () => {
    setModal(null)
    setError('')
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target

    setForm((prev) => {
      const next = {
        ...prev,
        [name]: type === 'checkbox' ? checked : value,
        ...(name === 'nom' && !editing ? { slug: slugify(value) } : {}),
      }

      if (name === 'type_produit_id') {
        next.sous_type_produit_id = ''
      }

      return next
    })
  }

  const handleImage = (e) => {
    const file = e.target.files[0]
    if (!file) return

    setImageFile(file)
    setImagePreview(URL.createObjectURL(file))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSaving(true)
    setError('')

    try {
      const fd = new FormData()

      Object.entries(form).forEach(([k, v]) => {
        if (k === 'image_principale') return

        if (k === 'sous_type_produit_id' && !v) {
          fd.append(k, '')
          return
        }

        if (v !== null && v !== undefined) {
          fd.append(k, typeof v === 'boolean' ? (v ? '1' : '0') : v)
        }
      })

      if (imageFile) {
        fd.append('image_principale', imageFile)
      }

      if (modal === 'edit') {
        fd.append('_method', 'PUT')
        await adminUpdateProduit(editing.id, fd)
      } else {
        await adminCreateProduit(fd)
      }

      closeModal()
      load()
    } catch (err) {
      const msgs = err.response?.data?.errors
      if (msgs) setError(Object.values(msgs).flat().join(' | '))
      else setError(err.response?.data?.message || 'Une erreur est survenue.')
    } finally {
      setSaving(false)
    }
  }

  const handleDelete = async (id) => {
    try {
      await adminDeleteProduit(id)
      setDeleteConfirm(null)
      load()
    } catch (err) {
      setError(err.response?.data?.message || 'Impossible de supprimer.')
      setDeleteConfirm(null)
    }
  }

  const safeProduits = Array.isArray(produits) ? produits : []

  const filtered = safeProduits.filter((p) => {
    const matchType = filterType === 'all' || String(p.type_produit_id) === String(filterType)
    const matchSearch = !search || p.nom?.toLowerCase().includes(search.toLowerCase())
    return matchType && matchSearch
  })

  const safeSousTypes = Array.isArray(sousTypes) ? sousTypes : []

  const filteredSousTypes = safeSousTypes.filter((st) => {
    const parentId =
      st?.type_produit_id ??
      st?.typeProduit?.id ??
      st?.type_produit?.id ??
      null

    return String(parentId) === String(form?.type_produit_id)
  })

  return (
    <AdminLayout title="Produits">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem', flexWrap: 'wrap', gap: '0.75rem' }}>
        <div>
          <h2 style={{ fontFamily: 'var(--font-head)', fontSize: '1.1rem', fontWeight: 700 }}>
            Produits
          </h2>
          <p style={{ fontSize: '0.83rem', color: 'var(--n-gray)', marginTop: '0.2rem' }}>
            {filtered.length} produit{filtered.length > 1 ? 's' : ''}
          </p>
        </div>

        <button onClick={openCreate} className="btn btn-primary btn-sm">
          + Nouveau produit
        </button>
      </div>

      <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1.25rem', flexWrap: 'wrap', alignItems: 'center' }}>
        <div style={{ position: 'relative', flex: 1, minWidth: 200 }}>
          <input
            type="text"
            placeholder="Rechercher..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="form-input"
            style={{ paddingLeft: '2.2rem' }}
          />
          <span style={{ position: 'absolute', left: '0.7rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--n-gray)', fontSize: '0.85rem' }}>
            🔍
          </span>
        </div>

        <select
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
          className="form-select"
          style={{ width: 'auto', minWidth: 180 }}
        >
          <option value="all">Tous les types</option>
          {types.map((t) => (
            <option key={t.id} value={t.id}>
              {t.nom}
            </option>
          ))}
        </select>
      </div>

      {error && !modal && (
        <div className="error-message" style={{ marginBottom: '1rem' }}>
          {error}
        </div>
      )}

      {loading ? (
        <div className="loading-center">
          <div className="spinner" />
        </div>
      ) : filtered.length === 0 ? (
        <div className="empty-state">
          <div className="empty-icon">🖥️</div>
          <h3>Aucun produit trouvé</h3>
          <button onClick={openCreate} className="btn btn-primary btn-sm" style={{ marginTop: '1rem' }}>
            Créer un produit
          </button>
        </div>
      ) : (
        <div className="data-table-wrap">
          <table className="data-table">
            <thead>
              <tr>
                <th style={{ width: 60 }}>Image</th>
                <th>Nom</th>
                <th>Type</th>
                <th>Sous-type</th>
                <th>Statut</th>
                <th style={{ textAlign: 'right' }}>Actions</th>
              </tr>
            </thead>

            <tbody>
              {filtered.map((p) => (
                <tr key={p.id}>
                  <td>
                    <div
                      style={{
                        width: 48,
                        height: 36,
                        borderRadius: 6,
                        overflow: 'hidden',
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(255,255,255,0.08)',
                        backgroundImage: p.image_principale ? `url(/storage/${p.image_principale})` : 'none',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1rem',
                      }}
                    >
                      {!p.image_principale && '🖥️'}
                    </div>
                  </td>

                  <td>
                    <div style={{ fontWeight: 600 }}>{p.nom}</div>
                    <div style={{ fontSize: '0.73rem', color: 'var(--n-gray)' }}>
                      {p.slug}
                    </div>
                  </td>

                  <td>
                    {p.type_produit || p.typeProduit ? (
                      <span className="badge badge-blue">
                        {(p.type_produit || p.typeProduit).nom}
                      </span>
                    ) : (
                      <span style={{ color: 'var(--n-gray)', fontSize: '0.83rem' }}>—</span>
                    )}
                  </td>

                  <td>
                    {p.sous_type_produit || p.sousTypeProduit ? (
                      <span className="badge badge-gray">
                        {(p.sous_type_produit || p.sousTypeProduit).nom}
                      </span>
                    ) : (
                      <span style={{ color: 'var(--n-gray)', fontSize: '0.83rem' }}>—</span>
                    )}
                  </td>

                  <td>
                    <span className={`badge ${p.actif ? 'badge-green' : 'badge-gray'}`}>
                      {p.actif ? '● Actif' : '● Inactif'}
                    </span>
                  </td>

                  <td>
                    <div style={{ display: 'flex', gap: '0.4rem', justifyContent: 'flex-end', flexWrap: 'wrap' }}>
                      <Link
                        to={`/admin/produits/${p.id}/medias`}
                        style={{
                          padding: '0.3rem 0.7rem',
                          fontSize: '0.75rem',
                          borderRadius: 6,
                          background: 'rgba(255,75,43,0.1)',
                          border: '1px solid rgba(255,75,43,0.25)',
                          color: 'var(--n-orange)',
                          textDecoration: 'none',
                        }}
                      >
                        Médias
                      </Link>

                      <button
                        onClick={() => openEdit(p)}
                        style={{
                          padding: '0.3rem 0.7rem',
                          fontSize: '0.75rem',
                          borderRadius: 6,
                          background: 'rgba(255,75,43,0.1)',
                          border: '1px solid rgba(255,75,43,0.25)',
                          color: 'var(--n-orange)',
                          cursor: 'pointer',
                          fontFamily: 'var(--font-body)',
                        }}
                      >
                        Modifier
                      </button>

                      <button
                        onClick={() => setDeleteConfirm(p)}
                        style={{
                          padding: '0.3rem 0.7rem',
                          fontSize: '0.75rem',
                          borderRadius: 6,
                          background: 'rgba(239,68,68,0.07)',
                          border: '1px solid rgba(239,68,68,0.18)',
                          color: '#F87171',
                          cursor: 'pointer',
                          fontFamily: 'var(--font-body)',
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
        </div>
      )}

      {modal && (
        <div className="modal-overlay" onClick={(e) => { if (e.target === e.currentTarget) closeModal() }}>
          <div className="modal" style={{ maxWidth: 640 }}>
            <div className="modal-header">
              <h2 className="modal-title">
                {modal === 'create' ? 'Nouveau produit' : 'Modifier le produit'}
              </h2>
              <button className="modal-close" onClick={closeModal}>✕</button>
            </div>

            {error && (
              <div className="error-message" style={{ marginBottom: '1rem' }}>
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.9rem', marginBottom: '0.9rem' }}>
                <div className="form-group">
                  <label className="form-label">Nom *</label>
                  <input
                    name="nom"
                    value={form.nom}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Nom du produit"
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Slug *</label>
                  <input
                    name="slug"
                    value={form.slug}
                    onChange={handleChange}
                    className="form-input"
                    required
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.9rem', marginBottom: '0.9rem' }}>
                <div className="form-group">
                  <label className="form-label">Type de produit *</label>
                  <select
                    name="type_produit_id"
                    value={form.type_produit_id}
                    onChange={handleChange}
                    className="form-select"
                    required
                  >
                    <option value="">Sélectionner...</option>
                    {types.map((t) => (
                      <option key={t.id} value={t.id}>
                        {t.nom}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Sous-type</label>
                  <select
                    name="sous_type_produit_id"
                    value={form.sous_type_produit_id}
                    onChange={handleChange}
                    className="form-select"
                    disabled={!form.type_produit_id || filteredSousTypes.length === 0}
                  >
                    <option value="">
                      {filteredSousTypes.length === 0
                        ? 'Aucun sous-type pour ce type'
                        : 'Aucun sous-type'}
                    </option>

                    {filteredSousTypes.map((st) => (
                      <option key={st.id} value={st.id}>
                        {st.nom}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div style={{ marginBottom: '0.9rem' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', cursor: 'pointer', fontSize: '0.87rem' }}>
                  <input
                    type="checkbox"
                    name="actif"
                    checked={form.actif}
                    onChange={handleChange}
                    style={{ width: 16, height: 16, accentColor: 'var(--n-orange)' }}
                  />
                  Produit actif
                </label>
              </div>

              <div className="form-group" style={{ marginBottom: '0.9rem' }}>
                <label className="form-label">Description courte</label>
                <input
                  name="description_courte"
                  value={form.description_courte}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Résumé en une phrase..."
                />
              </div>

              <div className="form-group" style={{ marginBottom: '0.9rem' }}>
                <label className="form-label">Description longue</label>
                <textarea
                  name="description_longue"
                  value={form.description_longue}
                  onChange={handleChange}
                  className="form-textarea"
                  placeholder="Description détaillée..."
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.9rem', marginBottom: '1.25rem' }}>
                <div className="form-group">
                  <label className="form-label">URL vidéo</label>
                  <input
                    name="video_url"
                    value={form.video_url}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="https://youtu.be/..."
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Image principale</label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImage}
                    style={{ display: 'none' }}
                    id="img-upload"
                  />

                  <label
                    htmlFor="img-upload"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      padding: '0.6rem 0.9rem',
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      borderRadius: 'var(--radius-sm)',
                      cursor: 'pointer',
                      fontSize: '0.85rem',
                      color: 'rgba(255,255,255,0.6)',
                    }}
                  >
                    <span>📁</span>
                    {imageFile ? imageFile.name : 'Choisir une image...'}
                  </label>

                  {imagePreview && (
                    <div style={{ marginTop: '0.5rem', width: 80, height: 56, borderRadius: 6, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                      <img src={imagePreview} alt="Aperçu" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                  )}
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'flex-end' }}>
                <button type="button" onClick={closeModal} className="btn btn-secondary btn-sm">
                  Annuler
                </button>

                <button type="submit" disabled={saving} className="btn btn-primary btn-sm">
                  {saving ? 'Enregistrement...' : modal === 'create' ? 'Créer le produit' : 'Mettre à jour'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {deleteConfirm && (
        <div className="modal-overlay">
          <div className="modal" style={{ maxWidth: 400 }}>
            <div className="modal-header">
              <h2 className="modal-title">Supprimer le produit</h2>
              <button className="modal-close" onClick={() => setDeleteConfirm(null)}>✕</button>
            </div>

            <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.65)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
              Voulez-vous supprimer <strong style={{ color: '#fff' }}>"{deleteConfirm.nom}"</strong> ?
            </p>

            <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'flex-end' }}>
              <button onClick={() => setDeleteConfirm(null)} className="btn btn-secondary btn-sm">
                Annuler
              </button>

              <button
                onClick={() => handleDelete(deleteConfirm.id)}
                style={{
                  padding: '0.5rem 1.1rem',
                  borderRadius: 6,
                  background: 'rgba(239,68,68,0.15)',
                  border: '1px solid rgba(239,68,68,0.35)',
                  color: '#F87171',
                  cursor: 'pointer',
                  fontSize: '0.83rem',
                  fontFamily: 'var(--font-body)',
                }}
              >
                Supprimer définitivement
              </button>
            </div>
          </div>
        </div>
      )}
    </AdminLayout>
  )
}