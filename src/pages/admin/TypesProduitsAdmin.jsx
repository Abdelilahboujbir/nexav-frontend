import { useState, useEffect } from 'react'
import AdminLayout from '../../components/admin/AdminLayout'
import {
  adminGetTypes,
  adminCreateType,
  adminUpdateType,
  adminDeleteType,
} from '../../api/typesProduits'
import { Plus, Pencil, Trash2, FolderOpen, X, AlertTriangle } from 'lucide-react'

const EMPTY_FORM = { nom: '', slug: '', description: '' }

function slugify(str) {
  return str
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
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
    setError('')
    adminGetTypes()
      .then((r) => {
        const data = Array.isArray(r.data) ? r.data : (r.data?.types || [])
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
    setForm({ nom: type.nom || '', slug: type.slug || '', description: type.description || '' })
    setEditing(type)
    setError('')
    setModal('edit')
  }

  const closeModal = () => { setModal(null); setEditing(null); setError('') }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value, ...(name === 'nom' ? { slug: slugify(value) } : {}) }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSaving(true)
    setError('')
    try {
      if (modal === 'create') await adminCreateType(form)
      else await adminUpdateType(editing.id, form)
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
      <div className="ph">
        <div>
          <h2 className="ph-title">Types de produits</h2>
          <p className="ph-sub">{types.length} type{types.length > 1 ? 's' : ''} enregistré{types.length > 1 ? 's' : ''}</p>
        </div>
        <button onClick={openCreate} className="btn-primary">
          <Plus size={15} /> Nouveau type
        </button>
      </div>

      {error && !modal && <div className="alert-error">{error}</div>}

      {loading ? (
        <div className="loading-center"><div className="spinner" /></div>
      ) : types.length === 0 ? (
        <div className="empty-state">
          <FolderOpen size={40} strokeWidth={1.2} />
          <h3>Aucun type</h3>
          <button onClick={openCreate} className="btn-primary" style={{ marginTop: '1rem' }}>Créer le premier type</button>
        </div>
      ) : (
        <>
          {/* Desktop table */}
          <div className="table-wrap desktop-table">
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
                {types.map((t) => (
                  <tr key={t.id}>
                    <td className="muted">#{t.id}</td>
                    <td><strong className="item-name">{t.nom}</strong></td>
                    <td><code className="code-tag">{t.slug}</code></td>
                    <td className="desc-cell">{t.description ? (t.description.length > 100 ? t.description.slice(0, 100) + '…' : t.description) : '—'}</td>
                    <td>
                      <div className="row-actions">
                        <button onClick={() => openEdit(t)} className="action-btn action-edit">
                          <Pencil size={13} /> Modifier
                        </button>
                        <button onClick={() => setDeleteConfirm(t)} className="action-btn action-delete">
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
            {types.map((t) => (
              <div key={t.id} className="item-card">
                <div className="item-card-body">
                  <div className="item-card-row">
                    <strong className="item-name">{t.nom}</strong>
                    <code className="code-tag">{t.slug}</code>
                  </div>
                  {t.description && <p className="item-desc">{t.description}</p>}
                </div>
                <div className="item-card-actions">
                  <button onClick={() => openEdit(t)} className="action-btn action-edit">
                    <Pencil size={13} /> Modifier
                  </button>
                  <button onClick={() => setDeleteConfirm(t)} className="action-btn action-delete">
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
          <div className="modal modal-md">
            <div className="modal-head">
              <h2 className="modal-title">{modal === 'create' ? 'Nouveau type' : 'Modifier le type'}</h2>
              <button className="modal-close" onClick={closeModal}><X size={18} /></button>
            </div>
            {error && <div className="alert-error modal-alert">{error}</div>}
            <form onSubmit={handleSubmit} className="modal-body">
              <div className="form-group">
                <label className="form-label">Nom *</label>
                <input name="nom" value={form.nom} onChange={handleChange} placeholder="Ex : Écrans" className="form-input" required />
              </div>
              <div className="form-group">
                <label className="form-label">Slug *</label>
                <input name="slug" value={form.slug} onChange={handleChange} placeholder="ecrans" className="form-input" required />
              </div>
              <div className="form-group">
                <label className="form-label">Description</label>
                <textarea name="description" value={form.description} onChange={handleChange} className="form-textarea" placeholder="Description du type..." />
              </div>
              <div className="modal-actions">
                <button type="button" onClick={closeModal} className="btn-secondary">Annuler</button>
                <button type="submit" disabled={saving} className="btn-primary">
                  {saving ? 'Enregistrement...' : modal === 'create' ? 'Créer' : 'Mettre à jour'}
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
              <h2 className="modal-title">Supprimer le type</h2>
              <button className="modal-close" onClick={() => setDeleteConfirm(null)}><X size={18} /></button>
            </div>
            <div className="modal-body">
              <div className="delete-warning">
                <AlertTriangle size={18} />
                <p>Voulez-vous supprimer <strong>{deleteConfirm.nom}</strong> ? Cette action peut affecter les produits associés.</p>
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
        .ph { display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.25rem; gap: 1rem; flex-wrap: wrap; }
        .ph-title { font-family: var(--font-head, sans-serif); font-size: 1.1rem; font-weight: 800; color: #fff; }
        .ph-sub { font-size: 0.82rem; color: rgba(255,255,255,0.38); margin-top: 0.2rem; }

        .alert-error { background: rgba(239,68,68,0.1); border: 1px solid rgba(239,68,68,0.25); color: #f87171; border-radius: 10px; padding: 0.75rem 1rem; font-size: 0.85rem; margin-bottom: 1rem; }
        .modal-alert { margin: 0 1.5rem; }

        .empty-state { display: flex; flex-direction: column; align-items: center; gap: 0.75rem; padding: 4rem 2rem; color: rgba(255,255,255,0.25); text-align: center; }
        .empty-state h3 { color: rgba(255,255,255,0.45); font-size: 1rem; font-weight: 600; }

        .table-wrap { width: 100%; overflow-x: auto; border-radius: 14px; border: 1px solid rgba(255,255,255,0.07); background: rgba(255,255,255,0.02); }
        .data-table { width: 100%; min-width: 620px; border-collapse: collapse; }
        .data-table th { padding: 0.75rem 1rem; font-size: 0.72rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.07em; color: rgba(255,255,255,0.35); text-align: left; border-bottom: 1px solid rgba(255,255,255,0.06); background: rgba(255,255,255,0.02); }
        .data-table td { padding: 0.85rem 1rem; vertical-align: middle; border-bottom: 1px solid rgba(255,255,255,0.04); }
        .data-table tr:last-child td { border-bottom: none; }
        .data-table tr:hover td { background: rgba(255,255,255,0.02); }

        .item-name { color: #fff; font-size: 0.875rem; }
        .muted { color: rgba(255,255,255,0.38); font-size: 0.8rem; }
        .desc-cell { color: rgba(255,255,255,0.45); font-size: 0.835rem; max-width: 360px; line-height: 1.5; }
        .code-tag { font-size: 0.77rem; color: #ff4b2b; background: rgba(255,75,43,0.09); padding: 0.18rem 0.48rem; border-radius: 5px; word-break: break-all; font-family: monospace; }

        .row-actions { display: flex; gap: 0.4rem; justify-content: flex-end; align-items: center; }
        .action-btn { display: inline-flex; align-items: center; gap: 0.35rem; padding: 0.32rem 0.65rem; border-radius: 7px; font-size: 0.75rem; font-weight: 700; cursor: pointer; border: 1px solid transparent; font-family: var(--font-body, sans-serif); transition: all 0.15s; }
        .action-edit { background: rgba(255,75,43,0.1); border-color: rgba(255,75,43,0.22); color: #ff4b2b; }
        .action-edit:hover { background: rgba(255,75,43,0.2); }
        .action-delete { background: rgba(239,68,68,0.07); border-color: rgba(239,68,68,0.18); color: #f87171; }
        .action-delete:hover { background: rgba(239,68,68,0.16); }

        /* Mobile cards */
        .mobile-cards { display: none; flex-direction: column; gap: 0.75rem; }
        .item-card { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); border-radius: 14px; overflow: hidden; }
        .item-card-body { padding: 1rem; }
        .item-card-row { display: flex; justify-content: space-between; align-items: center; gap: 0.75rem; margin-bottom: 0.4rem; flex-wrap: wrap; }
        .item-desc { font-size: 0.82rem; color: rgba(255,255,255,0.4); line-height: 1.5; margin-top: 0.35rem; }
        .item-card-actions { display: flex; gap: 0.5rem; padding: 0.75rem 1rem; border-top: 1px solid rgba(255,255,255,0.05); background: rgba(255,255,255,0.02); }
        .item-card-actions .action-btn { flex: 1; justify-content: center; }

        /* Buttons */
        .btn-primary { display: inline-flex; align-items: center; gap: 0.4rem; padding: 0.55rem 1.1rem; background: #ff4b2b; color: #fff; border: none; border-radius: 9px; font-weight: 700; font-size: 0.855rem; cursor: pointer; font-family: var(--font-body, sans-serif); transition: background 0.18s; white-space: nowrap; }
        .btn-primary:hover { background: #e0401f; }
        .btn-secondary { display: inline-flex; align-items: center; gap: 0.4rem; padding: 0.55rem 1.1rem; background: rgba(255,255,255,0.05); color: rgba(255,255,255,0.7); border: 1px solid rgba(255,255,255,0.1); border-radius: 9px; font-weight: 700; font-size: 0.855rem; cursor: pointer; font-family: var(--font-body, sans-serif); transition: all 0.18s; }
        .btn-secondary:hover { background: rgba(255,255,255,0.09); color: #fff; }
        .btn-danger { display: inline-flex; align-items: center; gap: 0.4rem; padding: 0.55rem 1.1rem; background: rgba(239,68,68,0.15); color: #f87171; border: 1px solid rgba(239,68,68,0.3); border-radius: 9px; font-weight: 700; font-size: 0.855rem; cursor: pointer; font-family: var(--font-body, sans-serif); transition: all 0.18s; }
        .btn-danger:hover { background: rgba(239,68,68,0.25); }

        /* Modal */
        .modal-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.6); backdrop-filter: blur(4px); z-index: 500; display: flex; align-items: center; justify-content: center; padding: 1rem; }
        .modal { background: #0d1829; border: 1px solid rgba(255,255,255,0.1); border-radius: 16px; display: flex; flex-direction: column; max-height: 92vh; overflow: hidden; }
        .modal-md { width: min(540px, 100%); }
        .modal-sm { width: min(420px, 100%); }
        .modal-head { display: flex; justify-content: space-between; align-items: center; padding: 1.25rem 1.5rem; border-bottom: 1px solid rgba(255,255,255,0.07); flex-shrink: 0; }
        .modal-title { font-family: var(--font-head, sans-serif); font-size: 1rem; font-weight: 800; color: #fff; }
        .modal-close { background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); color: rgba(255,255,255,0.6); border-radius: 8px; width: 32px; height: 32px; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: all 0.15s; }
        .modal-close:hover { background: rgba(255,255,255,0.09); color: #fff; }
        .modal-body { padding: 1.5rem; overflow-y: auto; display: flex; flex-direction: column; gap: 1rem; }
        .modal-actions { display: flex; gap: 0.75rem; justify-content: flex-end; flex-wrap: wrap; padding-top: 0.25rem; }

        /* Form */

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.form-label {
  font-size: 0.78rem;
  font-weight: 700;
  color: rgba(255,255,255,0.55);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.form-input,
.form-select,
.form-textarea {
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 9px;
  color: #ffffff;
  padding: 0.6rem 0.85rem;
  font-size: 16px !important; /* stop mobile zoom */
  line-height: 1.4;
  font-family: var(--font-body, sans-serif);
  width: 100%;
  transition: border-color 0.18s, background 0.18s;
  appearance: none;
  -webkit-appearance: none;
}

.form-input::placeholder,
.form-textarea::placeholder {
  color: rgba(255,255,255,0.35);
}

.form-input:focus,
.form-select:focus,
.form-textarea:focus {
  outline: none;
  border-color: rgba(255,75,43,0.45);
  background: rgba(255,255,255,0.06);
  color: #ffffff;
}

.form-select option {
  background: #0d1829;
  color: #ffffff;
}

.form-textarea {
  min-height: 90px;
  resize: vertical;
}

/* Fix autofill */
.form-input:-webkit-autofill,
.form-input:-webkit-autofill:hover,
.form-input:-webkit-autofill:focus,
.form-select:-webkit-autofill,
.form-textarea:-webkit-autofill {
  -webkit-text-fill-color: #ffffff !important;
  -webkit-box-shadow: 0 0 0 1000px #0d1829 inset !important;
  box-shadow: 0 0 0 1000px #0d1829 inset !important;
}

        /* Delete warning */
        .delete-warning { display: flex; gap: 0.75rem; align-items: flex-start; padding: 1rem; background: rgba(239,68,68,0.07); border: 1px solid rgba(239,68,68,0.18); border-radius: 10px; color: rgba(255,255,255,0.7); font-size: 0.875rem; line-height: 1.55; }
        .delete-warning svg { color: #f87171; flex-shrink: 0; margin-top: 2px; }
        .delete-warning strong { color: #fff; }

        /* Spinner */
        .loading-center { display: flex; align-items: center; justify-content: center; padding: 4rem; }
        .spinner { width: 32px; height: 32px; border: 3px solid rgba(255,255,255,0.1); border-top-color: #ff4b2b; border-radius: 50%; animation: spin 0.75s linear infinite; }
        @keyframes spin { to { transform: rotate(360deg); } }

        /* Responsive */
        @media (max-width: 720px) {
          .desktop-table { display: none; }
          .mobile-cards { display: flex; }
          .ph { flex-direction: column; align-items: stretch; }
          .ph > button { width: 100%; justify-content: center; }
          .modal-actions { flex-direction: column-reverse; }
          .modal-actions > * { width: 100%; justify-content: center; }
        }
      `}</style>
    </AdminLayout>
  )
}