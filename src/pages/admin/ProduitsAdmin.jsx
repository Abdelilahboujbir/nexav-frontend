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
import { assetUrl } from '../../api/assets'
import {
  Search,
  Plus,
  Pencil,
  Trash2,
  Image as ImageIcon,
  Film,
  X,
  Monitor,
  Upload,
  AlertTriangle,
} from 'lucide-react'

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
    Promise.all([adminGetProduits(), adminGetTypes(), adminGetSousTypes()])
      .then(([pRes, tRes, stRes]) => {
        setProduits(Array.isArray(pRes.data) ? pRes.data : (pRes.data?.produits || []))
        setTypes(Array.isArray(tRes.data) ? tRes.data : (tRes.data?.types || []))
        setSousTypes(
          Array.isArray(stRes.data)
            ? stRes.data
            : (stRes.data?.sous_types || stRes.data?.sousTypes || [])
        )
      })
      .catch(() => setError('Erreur de chargement'))
      .finally(() => setLoading(false))
  }

  useEffect(() => { load() }, [])

  const openCreate = () => {
    setForm({ ...EMPTY_FORM, type_produit_id: types[0]?.id || '', sous_type_produit_id: '' })
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
    setImagePreview(p.image_principale ? assetUrl(p.image_principale) : null)
    setError('')
    setModal('edit')
  }

  const closeModal = () => { setModal(null); setError('') }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm((prev) => {
      const next = {
        ...prev,
        [name]: type === 'checkbox' ? checked : value,
        ...(name === 'nom' && !editing ? { slug: slugify(value) } : {}),
      }
      if (name === 'type_produit_id') next.sous_type_produit_id = ''
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
        if (k === 'sous_type_produit_id' && !v) { fd.append(k, ''); return }
        if (v !== null && v !== undefined) {
          fd.append(k, typeof v === 'boolean' ? (v ? '1' : '0') : v)
        }
      })
      if (imageFile) fd.append('image_principale', imageFile)
      if (modal === 'edit') { fd.append('_method', 'PUT'); await adminUpdateProduit(editing.id, fd) }
      else await adminCreateProduit(fd)
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
    const parentId = st?.type_produit_id ?? st?.typeProduit?.id ?? st?.type_produit?.id ?? null
    return String(parentId) === String(form?.type_produit_id)
  })

  return (
    <AdminLayout title="Produits">
      <div className="ph">
        <div>
          <h2 className="ph-title">Produits</h2>
          <p className="ph-sub">{filtered.length} produit{filtered.length > 1 ? 's' : ''}</p>
        </div>
        <button onClick={openCreate} className="btn-primary">
          <Plus size={15} /> Nouveau produit
        </button>
      </div>

      <div className="filters-bar">
        <div className="search-wrap">
          <Search size={14} className="search-icon" />
          <input
            type="text"
            placeholder="Rechercher..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="form-input search-input"
          />
        </div>
        <select value={filterType} onChange={(e) => setFilterType(e.target.value)} className="form-select filter-select">
          <option value="all">Tous les types</option>
          {types.map((t) => <option key={t.id} value={t.id}>{t.nom}</option>)}
        </select>
      </div>

      {error && !modal && <div className="alert-error">{error}</div>}

      {loading ? (
        <div className="loading-center"><div className="spinner" /></div>
      ) : filtered.length === 0 ? (
        <div className="empty-state">
          <Monitor size={40} strokeWidth={1.2} />
          <h3>Aucun produit trouvé</h3>
          <button onClick={openCreate} className="btn-primary" style={{ marginTop: '1rem' }}>Créer un produit</button>
        </div>
      ) : (
        <>
          {/* Desktop table */}
          <div className="table-wrap desktop-table">
            <table className="data-table">
              <thead>
                <tr>
                  <th style={{ width: 56 }}>Image</th>
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
                      <div className="prod-img" style={{ backgroundImage: p.image_principale ? `url(${assetUrl(p.image_principale)})` : 'none' }}>
                        {!p.image_principale && <ImageIcon size={16} />}
                      </div>
                    </td>
                    <td>
                      <div className="prod-name">{p.nom}</div>
                      <div className="prod-slug">{p.slug}</div>
                    </td>
                    <td>
                      {(p.type_produit || p.typeProduit)
                        ? <span className="badge badge-blue">{(p.type_produit || p.typeProduit).nom}</span>
                        : <span className="muted">—</span>}
                    </td>
                    <td>
                      {(p.sous_type_produit || p.sousTypeProduit)
                        ? <span className="badge badge-gray">{(p.sous_type_produit || p.sousTypeProduit).nom}</span>
                        : <span className="muted">—</span>}
                    </td>
                    <td>
                      <span className={`badge ${p.actif ? 'badge-green' : 'badge-gray'}`}>
                        {p.actif ? 'Actif' : 'Inactif'}
                      </span>
                    </td>
                    <td>
                      <div className="row-actions">
                        <Link to={`/admin/produits/${p.id}/medias`} className="action-btn action-media">
                          <Film size={13} /> Médias
                        </Link>
                        <button onClick={() => openEdit(p)} className="action-btn action-edit">
                          <Pencil size={13} /> Modifier
                        </button>
                        <button onClick={() => setDeleteConfirm(p)} className="action-btn action-delete">
                          <Trash2 size={13} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="mobile-cards">
            {filtered.map((p) => (
              <div key={p.id} className="prod-card">
                <div className="prod-card-top">
                  <div className="prod-img prod-img--lg" style={{ backgroundImage: p.image_principale ? `url(${assetUrl(p.image_principale)})` : 'none' }}>
                    {!p.image_principale && <ImageIcon size={20} />}
                  </div>
                  <div className="prod-card-info">
                    <div className="prod-name">{p.nom}</div>
                    <div className="prod-slug">{p.slug}</div>
                    <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginTop: '0.4rem' }}>
                      <span className={`badge ${p.actif ? 'badge-green' : 'badge-gray'}`}>{p.actif ? 'Actif' : 'Inactif'}</span>
                      {(p.type_produit || p.typeProduit) && <span className="badge badge-blue">{(p.type_produit || p.typeProduit).nom}</span>}
                    </div>
                  </div>
                </div>
                <div className="prod-card-actions">
                  <Link to={`/admin/produits/${p.id}/medias`} className="action-btn action-media">
                    <Film size={13} /> Médias
                  </Link>
                  <button onClick={() => openEdit(p)} className="action-btn action-edit">
                    <Pencil size={13} /> Modifier
                  </button>
                  <button onClick={() => setDeleteConfirm(p)} className="action-btn action-delete">
                    <Trash2 size={13} /> Supprimer
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {/* Create / Edit modal */}
      {modal && (
        <div className="modal-overlay" onClick={(e) => { if (e.target === e.currentTarget) closeModal() }}>
          <div className="modal modal-lg">
            <div className="modal-head">
              <h2 className="modal-title">{modal === 'create' ? 'Nouveau produit' : 'Modifier le produit'}</h2>
              <button className="modal-close" onClick={closeModal}><X size={18} /></button>
            </div>
            {error && <div className="alert-error modal-alert">{error}</div>}
            <form onSubmit={handleSubmit} className="modal-body">
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Nom *</label>
                  <input name="nom" value={form.nom} onChange={handleChange} className="form-input" placeholder="Nom du produit" required />
                </div>
                <div className="form-group">
                  <label className="form-label">Slug *</label>
                  <input name="slug" value={form.slug} onChange={handleChange} className="form-input" required />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Type de produit *</label>
                  <select name="type_produit_id" value={form.type_produit_id} onChange={handleChange} className="form-select" required>
                    <option value="">Sélectionner...</option>
                    {types.map((t) => <option key={t.id} value={t.id}>{t.nom}</option>)}
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Sous-type</label>
                  <select name="sous_type_produit_id" value={form.sous_type_produit_id} onChange={handleChange} className="form-select" disabled={!form.type_produit_id || filteredSousTypes.length === 0}>
                    <option value="">{filteredSousTypes.length === 0 ? 'Aucun sous-type pour ce type' : 'Aucun sous-type'}</option>
                    {filteredSousTypes.map((st) => <option key={st.id} value={st.id}>{st.nom}</option>)}
                  </select>
                </div>
              </div>
              <label className="checkbox-label">
                <input type="checkbox" name="actif" checked={form.actif} onChange={handleChange} />
                Produit actif
              </label>
              <div className="form-group">
                <label className="form-label">Description courte</label>
                <input name="description_courte" value={form.description_courte} onChange={handleChange} className="form-input" placeholder="Résumé en une phrase..." />
              </div>
              <div className="form-group">
                <label className="form-label">Description longue</label>
                <textarea name="description_longue" value={form.description_longue} onChange={handleChange} className="form-textarea" placeholder="Description détaillée..." />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">URL vidéo</label>
                  <input name="video_url" value={form.video_url} onChange={handleChange} className="form-input" placeholder="https://youtu.be/..." />
                </div>
                <div className="form-group">
                  <label className="form-label">Image principale</label>
                  <input type="file" accept="image/*" onChange={handleImage} style={{ display: 'none' }} id="img-upload" />
                  <label htmlFor="img-upload" className="file-zone">
                    <Upload size={14} />
                    <span>{imageFile ? imageFile.name : 'Choisir une image...'}</span>
                  </label>
                  {imagePreview && (
                    <div className="img-preview">
                      <img src={imagePreview} alt="Aperçu" />
                    </div>
                  )}
                </div>
              </div>
              <div className="modal-actions">
                <button type="button" onClick={closeModal} className="btn-secondary">Annuler</button>
                <button type="submit" disabled={saving} className="btn-primary">
                  {saving ? 'Enregistrement...' : modal === 'create' ? 'Créer le produit' : 'Mettre à jour'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Delete confirm */}
      {deleteConfirm && (
        <div className="modal-overlay">
          <div className="modal modal-sm">
            <div className="modal-head">
              <h2 className="modal-title">Supprimer le produit</h2>
              <button className="modal-close" onClick={() => setDeleteConfirm(null)}><X size={18} /></button>
            </div>
            <div className="modal-body">
              <div className="delete-warning">
                <AlertTriangle size={18} />
                <p>Voulez-vous supprimer <strong>"{deleteConfirm.nom}"</strong> ? Cette action est irréversible.</p>
              </div>
              <div className="modal-actions">
                <button onClick={() => setDeleteConfirm(null)} className="btn-secondary">Annuler</button>
                <button onClick={() => handleDelete(deleteConfirm.id)} className="btn-danger">Supprimer</button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        /* ── Page header ── */
        .ph { display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.25rem; gap: 1rem; flex-wrap: wrap; }
        .ph-title { font-family: var(--font-head, sans-serif); font-size: 1.1rem; font-weight: 800; color: #fff; }
        .ph-sub { font-size: 0.82rem; color: rgba(255,255,255,0.38); margin-top: 0.2rem; }

        /* ── Filters ── */
        .filters-bar { display: flex; gap: 0.75rem; margin-bottom: 1.25rem; flex-wrap: wrap; }
        .search-wrap { position: relative; flex: 1; min-width: 200px; }
        .search-icon { position: absolute; left: 0.75rem; top: 50%; transform: translateY(-50%); color: rgba(255,255,255,0.35); pointer-events: none; }
        .search-input { padding-left: 2.25rem !important; }
        .filter-select { width: auto; min-width: 180px; }

        /* ── Alert ── */
        .alert-error { background: rgba(239,68,68,0.1); border: 1px solid rgba(239,68,68,0.25); color: #f87171; border-radius: 10px; padding: 0.75rem 1rem; font-size: 0.85rem; margin-bottom: 1rem; }
        .modal-alert { margin: 0 1.5rem 0; }

        /* ── Empty ── */
        .empty-state { display: flex; flex-direction: column; align-items: center; gap: 0.75rem; padding: 4rem 2rem; color: rgba(255,255,255,0.25); text-align: center; }
        .empty-state h3 { color: rgba(255,255,255,0.45); font-size: 1rem; font-weight: 600; }

        /* ── Table ── */
        .table-wrap { width: 100%; overflow-x: auto; border-radius: 14px; border: 1px solid rgba(255,255,255,0.07); background: rgba(255,255,255,0.02); }
        .data-table { width: 100%; min-width: 700px; border-collapse: collapse; }
        .data-table th { padding: 0.75rem 1rem; font-size: 0.72rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.07em; color: rgba(255,255,255,0.35); text-align: left; border-bottom: 1px solid rgba(255,255,255,0.06); background: rgba(255,255,255,0.02); }
        .data-table td { padding: 0.85rem 1rem; vertical-align: middle; border-bottom: 1px solid rgba(255,255,255,0.04); }
        .data-table tr:last-child td { border-bottom: none; }
        .data-table tr:hover td { background: rgba(255,255,255,0.02); }

        .prod-img { width: 44px; height: 34px; border-radius: 7px; background: rgba(255,255,255,0.04) no-repeat center/cover; border: 1px solid rgba(255,255,255,0.08); display: flex; align-items: center; justify-content: center; color: rgba(255,255,255,0.25); flex-shrink: 0; }
        .prod-img--lg { width: 60px; height: 46px; border-radius: 9px; }
        .prod-name { font-weight: 600; color: #fff; font-size: 0.875rem; }
        .prod-slug { font-size: 0.72rem; color: rgba(255,255,255,0.35); }
        .muted { color: rgba(255,255,255,0.3); font-size: 0.82rem; }

        /* ── Badges ── */
        .badge { display: inline-flex; align-items: center; padding: 0.22rem 0.6rem; border-radius: 999px; font-size: 0.72rem; font-weight: 700; }
        .badge-cyan { background: rgba(0,212,255,0.1); color: #00d4ff; border: 1px solid rgba(0,212,255,0.2); }
        .badge-amber { background: rgba(251,191,36,0.1); color: #fbbf24; border: 1px solid rgba(251,191,36,0.2); }
        .badge-green { background: rgba(52,211,153,0.1); color: #34d399; border: 1px solid rgba(52,211,153,0.2); }
        .badge-gray { background: rgba(255,255,255,0.06); color: rgba(255,255,255,0.45); border: 1px solid rgba(255,255,255,0.1); }
        .badge-blue { background: rgba(77,159,255,0.1); color: #4d9fff; border: 1px solid rgba(77,159,255,0.2); }

        /* ── Row actions ── */
        .row-actions { display: flex; gap: 0.4rem; justify-content: flex-end; align-items: center; }
        .action-btn { display: inline-flex; align-items: center; gap: 0.35rem; padding: 0.32rem 0.65rem; border-radius: 7px; font-size: 0.75rem; font-weight: 700; cursor: pointer; border: 1px solid transparent; text-decoration: none; font-family: var(--font-body, sans-serif); transition: all 0.15s; }
        .action-edit { background: rgba(255,75,43,0.1); border-color: rgba(255,75,43,0.22); color: #ff4b2b; }
        .action-edit:hover { background: rgba(255,75,43,0.2); }
        .action-media { background: rgba(77,159,255,0.1); border-color: rgba(77,159,255,0.22); color: #4d9fff; }
        .action-media:hover { background: rgba(77,159,255,0.2); }
        .action-delete { background: rgba(239,68,68,0.07); border-color: rgba(239,68,68,0.18); color: #f87171; }
        .action-delete:hover { background: rgba(239,68,68,0.16); }

        /* ── Mobile cards ── */
        .mobile-cards { display: none; flex-direction: column; gap: 0.75rem; }
        .prod-card { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); border-radius: 14px; overflow: hidden; }
        .prod-card-top { display: flex; gap: 0.85rem; padding: 1rem; align-items: flex-start; }
        .prod-card-info { flex: 1; min-width: 0; }
        .prod-card-actions { display: flex; gap: 0.5rem; padding: 0.75rem 1rem; border-top: 1px solid rgba(255,255,255,0.05); background: rgba(255,255,255,0.02); flex-wrap: wrap; }
        .prod-card-actions .action-btn { flex: 1; justify-content: center; min-width: 80px; }

        /* ── Buttons ── */
        .btn-primary { display: inline-flex; align-items: center; gap: 0.4rem; padding: 0.55rem 1.1rem; background: #ff4b2b; color: #fff; border: none; border-radius: 9px; font-weight: 700; font-size: 0.855rem; cursor: pointer; font-family: var(--font-body, sans-serif); transition: background 0.18s; white-space: nowrap; }
        .btn-primary:hover { background: #e0401f; }
        .btn-secondary { display: inline-flex; align-items: center; gap: 0.4rem; padding: 0.55rem 1.1rem; background: rgba(255,255,255,0.05); color: rgba(255,255,255,0.7); border: 1px solid rgba(255,255,255,0.1); border-radius: 9px; font-weight: 700; font-size: 0.855rem; cursor: pointer; font-family: var(--font-body, sans-serif); transition: all 0.18s; }
        .btn-secondary:hover { background: rgba(255,255,255,0.09); color: #fff; }
        .btn-danger { display: inline-flex; align-items: center; gap: 0.4rem; padding: 0.55rem 1.1rem; background: rgba(239,68,68,0.15); color: #f87171; border: 1px solid rgba(239,68,68,0.3); border-radius: 9px; font-weight: 700; font-size: 0.855rem; cursor: pointer; font-family: var(--font-body, sans-serif); transition: all 0.18s; }
        .btn-danger:hover { background: rgba(239,68,68,0.25); }

        /* ── Modal ── */
        .modal-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.6); backdrop-filter: blur(4px); z-index: 500; display: flex; align-items: center; justify-content: center; padding: 1rem; }
        .modal { background: #0d1829; border: 1px solid rgba(255,255,255,0.1); border-radius: 16px; display: flex; flex-direction: column; max-height: 92vh; overflow: hidden; }
        .modal-lg { width: min(640px, 100%); }
        .modal-sm { width: min(420px, 100%); }
        .modal-head { display: flex; justify-content: space-between; align-items: center; padding: 1.25rem 1.5rem; border-bottom: 1px solid rgba(255,255,255,0.07); flex-shrink: 0; }
        .modal-title { font-family: var(--font-head, sans-serif); font-size: 1rem; font-weight: 800; color: #fff; }
        .modal-close { background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); color: rgba(255,255,255,0.6); border-radius: 8px; width: 32px; height: 32px; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: all 0.15s; }
        .modal-close:hover { background: rgba(255,255,255,0.09); color: #fff; }
        .modal-body { padding: 1.5rem; overflow-y: auto; display: flex; flex-direction: column; gap: 1rem; }
        .modal-actions { display: flex; gap: 0.75rem; justify-content: flex-end; flex-wrap: wrap; padding-top: 0.5rem; }

        /* ── Form elements ── */
        .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
        .form-group { display: flex; flex-direction: column; gap: 0.4rem; }
        .form-label { font-size: 0.78rem; font-weight: 700; color: rgba(255,255,255,0.55); text-transform: uppercase; letter-spacing: 0.05em; }
        .form-input, .form-select, .form-textarea { background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.1); border-radius: 9px; color: #fff; padding: 0.6rem 0.85rem; font-size: 0.875rem; font-family: var(--font-body, sans-serif); width: 100%; transition: border-color 0.18s; }
        .form-input:focus, .form-select:focus, .form-textarea:focus { outline: none; border-color: rgba(255,75,43,0.45); }
        .form-select option { background: #0d1829; }
        .form-textarea { min-height: 90px; resize: vertical; }
        .checkbox-label { display: flex; align-items: center; gap: 0.55rem; font-size: 0.875rem; color: rgba(255,255,255,0.65); cursor: pointer; }
        .checkbox-label input { width: 15px; height: 15px; accent-color: #ff4b2b; }
        .file-zone { display: flex; align-items: center; gap: 0.55rem; padding: 0.6rem 0.85rem; background: rgba(255,255,255,0.04); border: 1px dashed rgba(255,255,255,0.15); border-radius: 9px; cursor: pointer; font-size: 0.845rem; color: rgba(255,255,255,0.45); transition: all 0.18s; }
        .file-zone:hover { border-color: rgba(255,75,43,0.4); color: rgba(255,255,255,0.7); }
        .img-preview { margin-top: 0.5rem; width: 80px; height: 58px; border-radius: 8px; overflow: hidden; border: 1px solid rgba(255,255,255,0.1); }
        .img-preview img { width: 100%; height: 100%; object-fit: cover; }

        /* ── Delete warning ── */
        .delete-warning { display: flex; gap: 0.75rem; align-items: flex-start; padding: 1rem; background: rgba(239,68,68,0.07); border: 1px solid rgba(239,68,68,0.18); border-radius: 10px; color: rgba(255,255,255,0.7); font-size: 0.875rem; line-height: 1.55; }
        .delete-warning svg { color: #f87171; flex-shrink: 0; margin-top: 2px; }
        .delete-warning strong { color: #fff; }

        /* ── Spinner ── */
        .loading-center { display: flex; align-items: center; justify-content: center; padding: 4rem; }
        .spinner { width: 32px; height: 32px; border: 3px solid rgba(255,255,255,0.1); border-top-color: #ff4b2b; border-radius: 50%; animation: spin 0.75s linear infinite; }
        @keyframes spin { to { transform: rotate(360deg); } }

        /* ── Responsive ── */
        @media (max-width: 860px) {
          .desktop-table { display: none; }
          .mobile-cards { display: flex; }
        }

        @media (max-width: 600px) {
          .form-row { grid-template-columns: 1fr; }
          .ph { flex-direction: column; align-items: stretch; }
          .ph > button { width: 100%; justify-content: center; }
          .filters-bar { flex-direction: column; }
          .search-wrap, .filter-select { width: 100%; min-width: 0; }
          .modal-actions { flex-direction: column-reverse; }
          .modal-actions > * { width: 100%; justify-content: center; }
        }
      `}</style>
    </AdminLayout>
  )
}