import { useState, useEffect } from 'react'
import AdminLayout from '../../components/admin/AdminLayout'
import { adminGetTypes } from '../../api/typesProduits'
import {
    adminGetSousTypes,
    adminCreateSousType,
    adminUpdateSousType,
    adminDeleteSousType,
} from '../../api/sousTypesProduits'

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

    useEffect(() => {
        load()
    }, [])

    const openCreate = () => {
        setForm({
            ...EMPTY_FORM,
            type_produit_id: types[0]?.id || '',
        })
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

    const closeModal = () => {
        setModal(null)
        setEditing(null)
        setError('')
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setForm((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setSaving(true)
        setError('')

        try {
            if (modal === 'create') {
                await adminCreateSousType(form)
            } else {
                await adminUpdateSousType(editing.id, form)
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
            await adminDeleteSousType(id)
            setDeleteConfirm(null)
            load()
        } catch (err) {
            setError(err.response?.data?.message || 'Impossible de supprimer ce sous-type.')
            setDeleteConfirm(null)
        }
    }

    return (
        <AdminLayout title="Sous-types de produits">
            <div className="admin-page-head">
                <div>
                    <h2>Sous-types de produits</h2>
                    <p>
                        {sousTypes.length} sous-type{sousTypes.length > 1 ? 's' : ''} enregistré{sousTypes.length > 1 ? 's' : ''}
                    </p>
                </div>

                <button onClick={openCreate} className="btn btn-primary btn-sm">
                    + Nouveau sous-type
                </button>
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
            ) : sousTypes.length === 0 ? (
                <div className="empty-state">
                    <h3>Aucun sous-type</h3>
                    <button onClick={openCreate} className="btn btn-primary btn-sm" style={{ marginTop: '1rem' }}>
                        Créer le premier sous-type
                    </button>
                </div>
            ) : (
                <div className="data-table-wrap">
                    <table className="data-table">
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
                                    <td style={{ color: 'var(--n-gray)', fontSize: '0.8rem' }}>#{st.id}</td>

                                    <td>
                                        <strong style={{ color: '#fff' }}>{st.nom}</strong>
                                    </td>

                                    <td>
                                        <span className="badge badge-cyan">
                                            {st.type_produit?.nom || st.typeProduit?.nom || types.find(t => t.id === st.type_produit_id)?.nom || '—'}
                                        </span>
                                    </td>

                                    <td>
                                        <code className="admin-code">{st.slug}</code>
                                    </td>

                                    <td style={{ color: 'var(--n-gray)', fontSize: '0.84rem', maxWidth: 320 }}>
                                        {st.description
                                            ? st.description.length > 90
                                                ? st.description.slice(0, 90) + '…'
                                                : st.description
                                            : '—'}
                                    </td>

                                    <td>
                                        <div className="table-actions">
                                            <button onClick={() => openEdit(st)} className="action-btn edit">
                                                Modifier
                                            </button>

                                            <button onClick={() => setDeleteConfirm(st)} className="action-btn delete">
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
                    <div className="modal" style={{ maxWidth: 540 }}>
                        <div className="modal-header">
                            <h2 className="modal-title">
                                {modal === 'create' ? 'Nouveau sous-type' : 'Modifier le sous-type'}
                            </h2>
                            <button className="modal-close" onClick={closeModal}>✕</button>
                        </div>

                        {error && (
                            <div className="error-message" style={{ marginBottom: '1rem' }}>
                                {error}
                            </div>
                        )}

                        <form onSubmit={handleSubmit}>
                            <div className="form-group" style={{ marginBottom: '1rem' }}>
                                <label className="form-label">Type parent *</label>
                                <select
                                    name="type_produit_id"
                                    value={form.type_produit_id}
                                    onChange={handleChange}
                                    className="form-select"
                                    required
                                >
                                    <option value="">Sélectionner un type</option>
                                    {types.map((t) => (
                                        <option key={t.id} value={t.id}>
                                            {t.nom}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="form-group" style={{ marginBottom: '1rem' }}>
                                <label className="form-label">Nom du sous-type *</label>
                                <input
                                    name="nom"
                                    value={form.nom}
                                    onChange={handleChange}
                                    className="form-input"
                                    placeholder="Ex : Écrans interactifs"
                                    required
                                />
                            </div>

                            <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                                <label className="form-label">Description</label>
                                <textarea
                                    name="description"
                                    value={form.description}
                                    onChange={handleChange}
                                    className="form-textarea"
                                    placeholder="Description courte du sous-type..."
                                    style={{ minHeight: 90 }}
                                />
                            </div>

                            <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'flex-end', flexWrap: 'wrap' }}>
                                <button type="button" onClick={closeModal} className="btn btn-secondary btn-sm">
                                    Annuler
                                </button>

                                <button type="submit" disabled={saving} className="btn btn-primary btn-sm">
                                    {saving ? 'Enregistrement...' : modal === 'create' ? 'Créer' : 'Mettre à jour'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {deleteConfirm && (
                <div className="modal-overlay">
                    <div className="modal" style={{ maxWidth: 420 }}>
                        <div className="modal-header">
                            <h2 className="modal-title">Supprimer le sous-type</h2>
                            <button className="modal-close" onClick={() => setDeleteConfirm(null)}>✕</button>
                        </div>

                        <p className="delete-text">
                            Voulez-vous supprimer <strong>{deleteConfirm.nom}</strong> ?
                            Les produits associés garderont le type principal mais perdront ce sous-type.
                        </p>

                        <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'flex-end', flexWrap: 'wrap' }}>
                            <button onClick={() => setDeleteConfirm(null)} className="btn btn-secondary btn-sm">
                                Annuler
                            </button>

                            <button onClick={() => handleDelete(deleteConfirm.id)} className="delete-btn">
                                Supprimer
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <style>{`
        .admin-page-head {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .admin-page-head h2 {
          font-family: var(--font-head);
          font-size: 1.1rem;
          font-weight: 800;
          color: #fff;
        }

        .admin-page-head p {
          font-size: 0.84rem;
          color: var(--n-gray);
          margin-top: 0.2rem;
        }

        .admin-code {
          font-size: 0.78rem;
          color: var(--n-orange);
          background: rgba(255,75,43,0.08);
          padding: 0.18rem 0.45rem;
          border-radius: 5px;
        }

        .table-actions {
          display: flex;
          gap: 0.5rem;
          justify-content: flex-end;
          flex-wrap: wrap;
        }

        .action-btn {
          padding: 0.36rem 0.8rem;
          font-size: 0.78rem;
          border-radius: 7px;
          cursor: pointer;
          font-family: var(--font-body);
          font-weight: 700;
          transition: 0.2s;
        }

        .action-btn.edit {
          background: rgba(255,75,43,0.12);
          border: 1px solid rgba(255,75,43,0.25);
          color: var(--n-orange);
        }

        .action-btn.edit:hover {
          background: rgba(255,75,43,0.2);
        }

        .action-btn.delete,
        .delete-btn {
          background: rgba(239,68,68,0.1);
          border: 1px solid rgba(239,68,68,0.25);
          color: #f87171;
        }

        .action-btn.delete:hover,
        .delete-btn:hover {
          background: rgba(239,68,68,0.18);
        }

        .delete-text {
          font-size: 0.9rem;
          color: rgba(255,255,255,0.68);
          margin-bottom: 1.5rem;
          line-height: 1.6;
        }

        .delete-text strong {
          color: #fff;
        }

        .delete-btn {
          padding: 0.5rem 1rem;
          border-radius: 7px;
          cursor: pointer;
          font-size: 0.83rem;
          font-family: var(--font-body);
          font-weight: 800;
        }
      `}</style>
        </AdminLayout>
    )
}