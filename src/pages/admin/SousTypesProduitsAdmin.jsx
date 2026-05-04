import { useState, useEffect } from 'react'
import AdminLayout from '../../components/admin/AdminLayout'
import { adminGetTypes } from '../../api/typesProduits'
import {
  adminGetSousTypes,
  adminCreateSousType,
  adminUpdateSousType,
  adminDeleteSousType,
} from '../../api/sousTypesProduits'
import { Plus, Pencil, Trash2, Layers, X, AlertTriangle } from 'lucide-react'

const EMPTY_FORM = {
  type_produit_id: '',
  nom: '',
  description: '',
}

export default function SousTypesProduitsAdmin() {
  const [types, setTypes] = useState([])
  const [sousTypes, setSousTypes] = useState([])
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
    Promise.all([adminGetTypes(), adminGetSousTypes()])
      .then(([tRes, stRes]) => {
        const typesData = Array.isArray(tRes.data) ? tRes.data : tRes.data.types || []
        const sousTypesData = Array.isArray(stRes.data)
          ? stRes.data
          : stRes.data.sous_types || stRes.data.sousTypes || []
        setTypes(typesData)
        setSousTypes(sousTypesData)
      })
      .catch(() => setError('Erreur de chargement'))
      .finally(() => setLoading(false))
  }

  useEffect(() => { load() }, [])

  const openCreate = () => {
    setForm({ ...EMPTY_FORM, type_produit_id: types[0]?.id || '' })
    setEditing(null)
    setError('')
    setModal('create')
  }

  const openEdit = (item) => {
    setForm({
      type_produit_id: item.type_produit_id || '',
      nom: item.nom || '',
      description: item.description || '',
    })
    setEditing(item)
    setError('')
    setModal('edit')
  }

  const closeModal = () => { setModal(null); setEditing(null); setError('') }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSaving(true)
    setError('')
    try {
      if (modal === 'create') await adminCreateSousType(form)
      else await adminUpdateSousType(editing.id, form)
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
      await adminDeleteSousType(id)
      setDeleteConfirm(null)
      load()
    } catch (err) {
      setError(err.response?.data?.message || 'Impossible de supprimer ce sous-type.')
      setDeleteConfirm(null)
    }
  }

  const getTypeName = (st) =>
    st.type_produit?.nom ||
    st.typeProduit?.nom ||
    types.find((t) => String(t.id) === String(st.type_produit_id))?.nom ||
    '—'

  return (
    <AdminLayout title="Sous-types de produits">

      {/* ── Page header ── */}
      <div className="stp-head">
        <div>
          <h2 className="stp-head-title">Sous-types de produits</h2>
          <p className="stp-head-sub">
            {sousTypes.length} sous-type{sousTypes.length > 1 ? 's' : ''} enregistré{sousTypes.length > 1 ? 's' : ''}
          </p>
        </div>
        <button onClick={openCreate} className="stp-btn-primary">
          <Plus size={15} />
          Nouveau sous-type
        </button>
      </div>

      {/* ── Global error ── */}
      {error && !modal && (
        <div className="stp-alert">
          <AlertTriangle size={15} />
          {error}
        </div>
      )}

      {/* ── States ── */}
      {loading ? (
        <div className="stp-loading"><div className="stp-spinner" /></div>
      ) : sousTypes.length === 0 ? (
        <div className="stp-empty">
          <Layers size={42} strokeWidth={1.2} />
          <h3>Aucun sous-type</h3>
          <p>Commencez par créer votre premier sous-type de produit.</p>
          <button onClick={openCreate} className="stp-btn-primary">
            <Plus size={15} /> Créer le premier sous-type
          </button>
        </div>
      ) : (
        <>
          {/* Desktop table */}
          <div className="stp-table-wrap stp-desktop-only">
            <table className="stp-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Sous-type</th>
                  <th>Type parent</th>
                  <th>Slug</th>
                  <th>Description</th>
                  <th style={{ textAlign: 'right' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {sousTypes.map((st) => (
                  <tr key={st.id}>
                    <td className="stp-muted">#{st.id}</td>
                    <td><strong className="stp-name">{st.nom}</strong></td>
                    <td>
                      <span className="stp-badge stp-badge-cyan">{getTypeName(st)}</span>
                    </td>
                    <td>
                      <code className="stp-code">{st.slug}</code>
                    </td>
                    <td className="stp-desc">
                      {st.description
                        ? st.description.length > 90
                          ? st.description.slice(0, 90) + '…'
                          : st.description
                        : '—'}
                    </td>
                    <td>
                      <div className="stp-row-actions">
                        <button onClick={() => openEdit(st)} className="stp-btn-action stp-btn-edit">
                          <Pencil size={13} /> Modifier
                        </button>
                        <button onClick={() => setDeleteConfirm(st)} className="stp-btn-action stp-btn-delete">
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
          <div className="stp-cards stp-mobile-only">
            {sousTypes.map((st) => (
              <div key={st.id} className="stp-card">
                <div className="stp-card-body">
                  <div className="stp-card-top">
                    <strong className="stp-name">{st.nom}</strong>
                    <span className="stp-badge stp-badge-cyan">{getTypeName(st)}</span>
                  </div>
                  {st.slug && (
                    <code className="stp-code stp-code-block">{st.slug}</code>
                  )}
                  {st.description && (
                    <p className="stp-card-desc">{st.description}</p>
                  )}
                </div>
                <div className="stp-card-footer">
                  <button onClick={() => openEdit(st)} className="stp-btn-action stp-btn-edit">
                    <Pencil size={13} /> Modifier
                  </button>
                  <button onClick={() => setDeleteConfirm(st)} className="stp-btn-action stp-btn-delete">
                    <Trash2 size={13} /> Supprimer
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {/* ── Create / Edit modal ── */}
      {modal && (
        <div
          className="stp-overlay"
          onClick={(e) => { if (e.target === e.currentTarget) closeModal() }}
        >
          <div className="stp-modal stp-modal-md">
            <div className="stp-modal-head">
              <h2 className="stp-modal-title">
                {modal === 'create' ? 'Nouveau sous-type' : 'Modifier le sous-type'}
              </h2>
              <button className="stp-modal-close" onClick={closeModal}>
                <X size={18} />
              </button>
            </div>

            {error && (
              <div className="stp-alert stp-alert-inline">
                <AlertTriangle size={14} /> {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="stp-modal-body">
              <div className="stp-form-group">
                <label className="stp-label">Type parent *</label>
                <select
                  name="type_produit_id"
                  value={form.type_produit_id}
                  onChange={handleChange}
                  className="stp-select"
                  required
                >
                  <option value="">Sélectionner un type</option>
                  {types.map((t) => (
                    <option key={t.id} value={t.id}>{t.nom}</option>
                  ))}
                </select>
              </div>

              <div className="stp-form-group">
                <label className="stp-label">Nom du sous-type *</label>
                <input
                  name="nom"
                  value={form.nom}
                  onChange={handleChange}
                  className="stp-input"
                  placeholder="Ex : Écrans interactifs"
                  required
                />
              </div>

              <div className="stp-form-group">
                <label className="stp-label">Description</label>
                <textarea
                  name="description"
                  value={form.description}
                  onChange={handleChange}
                  className="stp-textarea"
                  placeholder="Description courte du sous-type..."
                />
              </div>

              <div className="stp-modal-actions">
                <button type="button" onClick={closeModal} className="stp-btn-secondary">
                  Annuler
                </button>
                <button type="submit" disabled={saving} className="stp-btn-primary">
                  {saving ? 'Enregistrement...' : modal === 'create' ? 'Créer' : 'Mettre à jour'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ── Delete confirm ── */}
      {deleteConfirm && (
        <div className="stp-overlay">
          <div className="stp-modal stp-modal-sm">
            <div className="stp-modal-head">
              <h2 className="stp-modal-title">Supprimer le sous-type</h2>
              <button className="stp-modal-close" onClick={() => setDeleteConfirm(null)}>
                <X size={18} />
              </button>
            </div>
            <div className="stp-modal-body">
              <div className="stp-delete-warning">
                <AlertTriangle size={18} />
                <p>
                  Voulez-vous supprimer <strong>{deleteConfirm.nom}</strong> ?
                  Les produits associés garderont le type principal mais perdront ce sous-type.
                </p>
              </div>
              <div className="stp-modal-actions">
                <button onClick={() => setDeleteConfirm(null)} className="stp-btn-secondary">
                  Annuler
                </button>
                <button onClick={() => handleDelete(deleteConfirm.id)} className="stp-btn-danger">
                  <Trash2 size={14} /> Supprimer
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        /* ─────────────────────────────────────────
           PAGE HEADER
        ───────────────────────────────────────── */
        .stp-head {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
          gap: 1rem;
          flex-wrap: wrap;
        }
        .stp-head-title {
          font-family: var(--font-head, sans-serif);
          font-size: 1.1rem;
          font-weight: 800;
          color: #fff;
        }
        .stp-head-sub {
          font-size: 0.82rem;
          color: rgba(255,255,255,0.38);
          margin-top: 0.2rem;
        }

        /* ─────────────────────────────────────────
           ALERT
        ───────────────────────────────────────── */
        .stp-alert {
          display: flex;
          align-items: center;
          gap: 0.55rem;
          background: rgba(239,68,68,0.1);
          border: 1px solid rgba(239,68,68,0.25);
          color: #f87171;
          border-radius: 10px;
          padding: 0.75rem 1rem;
          font-size: 0.84rem;
          margin-bottom: 1.25rem;
        }
        .stp-alert-inline {
          margin: 0 1.5rem 0;
          border-radius: 8px;
        }

        /* ─────────────────────────────────────────
           LOADING / EMPTY
        ───────────────────────────────────────── */
        .stp-loading {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 5rem 2rem;
        }
        .stp-spinner {
          width: 32px;
          height: 32px;
          border: 3px solid rgba(255,255,255,0.1);
          border-top-color: #ff4b2b;
          border-radius: 50%;
          animation: stp-spin 0.75s linear infinite;
        }
        @keyframes stp-spin { to { transform: rotate(360deg); } }

        .stp-empty {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.75rem;
          padding: 4rem 2rem;
          color: rgba(255,255,255,0.25);
          text-align: center;
        }
        .stp-empty h3 {
          color: rgba(255,255,255,0.5);
          font-size: 1rem;
          font-weight: 700;
        }
        .stp-empty p {
          font-size: 0.84rem;
          color: rgba(255,255,255,0.3);
          max-width: 320px;
        }

        /* ─────────────────────────────────────────
           TABLE (desktop)
        ───────────────────────────────────────── */
        .stp-table-wrap {
          width: 100%;
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
          border-radius: 14px;
          border: 1px solid rgba(255,255,255,0.07);
          background: rgba(255,255,255,0.02);
        }
        .stp-table {
          width: 100%;
          min-width: 720px;
          border-collapse: collapse;
        }
        .stp-table th {
          padding: 0.75rem 1rem;
          font-size: 0.71rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.07em;
          color: rgba(255,255,255,0.35);
          text-align: left;
          border-bottom: 1px solid rgba(255,255,255,0.06);
          background: rgba(255,255,255,0.02);
          white-space: nowrap;
        }
        .stp-table td {
          padding: 0.85rem 1rem;
          vertical-align: middle;
          border-bottom: 1px solid rgba(255,255,255,0.04);
        }
        .stp-table tr:last-child td { border-bottom: none; }
        .stp-table tbody tr:hover td { background: rgba(255,255,255,0.02); }

        /* ─────────────────────────────────────────
           SHARED CELL STYLES
        ───────────────────────────────────────── */
        .stp-name { color: #fff; font-size: 0.875rem; word-break: break-word; }
        .stp-muted { color: rgba(255,255,255,0.35); font-size: 0.8rem; }
        .stp-desc {
          color: rgba(255,255,255,0.42);
          font-size: 0.835rem;
          max-width: 300px;
          line-height: 1.5;
        }
        .stp-code {
          font-family: monospace;
          font-size: 0.77rem;
          color: #ff4b2b;
          background: rgba(255,75,43,0.09);
          padding: 0.18rem 0.48rem;
          border-radius: 5px;
          word-break: break-all;
        }
        .stp-code-block { display: inline-block; margin-top: 0.35rem; }

        /* ─────────────────────────────────────────
           BADGE
        ───────────────────────────────────────── */
        .stp-badge {
          display: inline-flex;
          align-items: center;
          padding: 0.22rem 0.6rem;
          border-radius: 999px;
          font-size: 0.72rem;
          font-weight: 700;
        }
        .stp-badge-cyan {
          background: rgba(0,212,255,0.1);
          color: #00d4ff;
          border: 1px solid rgba(0,212,255,0.2);
        }

        /* ─────────────────────────────────────────
           ROW ACTIONS
        ───────────────────────────────────────── */
        .stp-row-actions {
          display: flex;
          gap: 0.4rem;
          justify-content: flex-end;
          align-items: center;
        }

        /* ─────────────────────────────────────────
           ACTION BUTTONS (shared)
        ───────────────────────────────────────── */
        .stp-btn-action {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          padding: 0.32rem 0.68rem;
          border-radius: 7px;
          font-size: 0.75rem;
          font-weight: 700;
          cursor: pointer;
          border: 1px solid transparent;
          font-family: var(--font-body, sans-serif);
          transition: all 0.15s;
          white-space: nowrap;
        }
        .stp-btn-edit {
          background: rgba(255,75,43,0.1);
          border-color: rgba(255,75,43,0.22);
          color: #ff4b2b;
        }
        .stp-btn-edit:hover { background: rgba(255,75,43,0.2); }
        .stp-btn-delete {
          background: rgba(239,68,68,0.07);
          border-color: rgba(239,68,68,0.18);
          color: #f87171;
        }
        .stp-btn-delete:hover { background: rgba(239,68,68,0.16); }

        /* ─────────────────────────────────────────
           MOBILE CARDS
        ───────────────────────────────────────── */
        .stp-cards {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .stp-card {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 14px;
          overflow: hidden;
        }
        .stp-card-body { padding: 1rem; }
        .stp-card-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 0.75rem;
          flex-wrap: wrap;
          margin-bottom: 0.25rem;
        }
        .stp-card-desc {
          font-size: 0.82rem;
          color: rgba(255,255,255,0.4);
          line-height: 1.5;
          margin-top: 0.5rem;
        }
        .stp-card-footer {
          display: flex;
          gap: 0.5rem;
          padding: 0.75rem 1rem;
          border-top: 1px solid rgba(255,255,255,0.05);
          background: rgba(255,255,255,0.02);
        }
        .stp-card-footer .stp-btn-action {
          flex: 1;
          justify-content: center;
        }

        /* ─────────────────────────────────────────
           PRIMARY / SECONDARY / DANGER BUTTONS
        ───────────────────────────────────────── */
        .stp-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.55rem 1.1rem;
          background: #ff4b2b;
          color: #fff;
          border: none;
          border-radius: 9px;
          font-weight: 700;
          font-size: 0.855rem;
          cursor: pointer;
          font-family: var(--font-body, sans-serif);
          transition: background 0.18s;
          white-space: nowrap;
        }
        .stp-btn-primary:hover { background: #e0401f; }
        .stp-btn-primary:disabled { opacity: 0.55; cursor: not-allowed; }

        .stp-btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.55rem 1.1rem;
          background: rgba(255,255,255,0.05);
          color: rgba(255,255,255,0.7);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 9px;
          font-weight: 700;
          font-size: 0.855rem;
          cursor: pointer;
          font-family: var(--font-body, sans-serif);
          transition: all 0.18s;
        }
        .stp-btn-secondary:hover { background: rgba(255,255,255,0.09); color: #fff; }

        .stp-btn-danger {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.55rem 1.1rem;
          background: rgba(239,68,68,0.15);
          color: #f87171;
          border: 1px solid rgba(239,68,68,0.3);
          border-radius: 9px;
          font-weight: 700;
          font-size: 0.855rem;
          cursor: pointer;
          font-family: var(--font-body, sans-serif);
          transition: all 0.18s;
        }
        .stp-btn-danger:hover { background: rgba(239,68,68,0.25); }

        /* ─────────────────────────────────────────
           MODAL
        ───────────────────────────────────────── */
        .stp-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.6);
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
          z-index: 500;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
        }
        .stp-modal {
          background: #0d1829;
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 16px;
          display: flex;
          flex-direction: column;
          max-height: 92vh;
          overflow: hidden;
          width: 100%;
        }
        .stp-modal-md { max-width: 540px; }
        .stp-modal-sm { max-width: 420px; }

        .stp-modal-head {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.25rem 1.5rem;
          border-bottom: 1px solid rgba(255,255,255,0.07);
          flex-shrink: 0;
        }
        .stp-modal-title {
          font-family: var(--font-head, sans-serif);
          font-size: 1rem;
          font-weight: 800;
          color: #fff;
        }
        .stp-modal-close {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          color: rgba(255,255,255,0.6);
          border-radius: 8px;
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.15s;
          flex-shrink: 0;
        }
        .stp-modal-close:hover { background: rgba(255,255,255,0.09); color: #fff; }

        .stp-modal-body {
          padding: 1.5rem;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .stp-modal-actions {
          display: flex;
          gap: 0.75rem;
          justify-content: flex-end;
          flex-wrap: wrap;
          padding-top: 0.25rem;
        }

        /* ─────────────────────────────────────────
           FORM ELEMENTS
        ───────────────────────────────────────── */
        .stp-form-group {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }
        .stp-label {
          font-size: 0.77rem;
          font-weight: 700;
          color: rgba(255,255,255,0.5);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .stp-input,
        .stp-select,
        .stp-textarea {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 9px;
          color: #fff;
          padding: 0.6rem 0.85rem;
          font-size: 0.875rem;
          font-family: var(--font-body, sans-serif);
          width: 100%;
          transition: border-color 0.18s;
        }
        .stp-input:focus,
        .stp-select:focus,
        .stp-textarea:focus {
          outline: none;
          border-color: rgba(255,75,43,0.5);
        }
        .stp-input::placeholder,
        .stp-textarea::placeholder { color: rgba(255,255,255,0.22); }
        .stp-select option { background: #0d1829; }
        .stp-textarea {
          min-height: 90px;
          resize: vertical;
          line-height: 1.55;
        }

        /* ─────────────────────────────────────────
           DELETE WARNING
        ───────────────────────────────────────── */
        .stp-delete-warning {
          display: flex;
          gap: 0.75rem;
          align-items: flex-start;
          padding: 1rem;
          background: rgba(239,68,68,0.07);
          border: 1px solid rgba(239,68,68,0.18);
          border-radius: 10px;
          color: rgba(255,255,255,0.7);
          font-size: 0.875rem;
          line-height: 1.55;
        }
        .stp-delete-warning svg { color: #f87171; flex-shrink: 0; margin-top: 2px; }
        .stp-delete-warning strong { color: #fff; }

        /* ─────────────────────────────────────────
           RESPONSIVE VISIBILITY
        ───────────────────────────────────────── */
        .stp-desktop-only { display: block; }
        .stp-mobile-only  { display: none;  }

        /* ─────────────────────────────────────────
           BREAKPOINTS
        ───────────────────────────────────────── */
        @media (max-width: 768px) {
          .stp-desktop-only { display: none; }
          .stp-mobile-only  { display: flex; }

          .stp-head {
            flex-direction: column;
            align-items: stretch;
          }
          .stp-head > button {
            width: 100%;
            justify-content: center;
          }
        }

        @media (max-width: 600px) {
          .stp-modal-body   { padding: 1.1rem; }
          .stp-modal-head   { padding: 1rem 1.1rem; }

          .stp-modal-actions {
            flex-direction: column-reverse;
          }
          .stp-modal-actions > * {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </AdminLayout>
  )
}