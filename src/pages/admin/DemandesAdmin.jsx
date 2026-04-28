import { useState, useEffect } from 'react'
import AdminLayout from '../../components/admin/AdminLayout'
import { adminGetDemandes, adminUpdateStatut, adminDeleteDemande } from '../../api/demandes'
import { Search, Trash2, Eye, X, AlertTriangle, MessageSquare } from 'lucide-react'

const STATUTS = [
  { value: 'nouveau', label: 'Nouveau', cls: 'badge-cyan' },
  { value: 'en_attente', label: 'En attente', cls: 'badge-amber' },
  { value: 'traite', label: 'Traité', cls: 'badge-green' },
  { value: 'archive', label: 'Archivé', cls: 'badge-gray' },
]

function StatutBadge({ statut }) {
  const s = STATUTS.find((x) => x.value === statut) || { label: statut, cls: 'badge-gray' }
  return <span className={`badge ${s.cls}`}>{s.label}</span>
}

export default function DemandesAdmin() {
  const [demandes, setDemandes] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [detail, setDetail] = useState(null)
  const [filterStatut, setFilterStatut] = useState('all')
  const [search, setSearch] = useState('')
  const [deleteConfirm, setDeleteConfirm] = useState(null)
  const [updatingId, setUpdatingId] = useState(null)

  const load = () => {
    setLoading(true)
    adminGetDemandes()
      .then((r) => {
        const data = Array.isArray(r.data) ? r.data : (r.data?.demandes || [])
        setDemandes(data)
      })
      .catch(() => setError('Erreur de chargement'))
      .finally(() => setLoading(false))
  }

  useEffect(() => { load() }, [])

  const filtered = demandes.filter((d) => {
    const matchStatut = filterStatut === 'all' || d.statut === filterStatut
    const q = search.toLowerCase()
    const matchSearch = !q ||
      d.nom?.toLowerCase().includes(q) ||
      d.email?.toLowerCase().includes(q) ||
      d.raison_sociale?.toLowerCase().includes(q) ||
      d.secteur?.toLowerCase().includes(q)
    return matchStatut && matchSearch
  })

  const handleStatut = async (id, statut) => {
    setUpdatingId(id)
    try {
      await adminUpdateStatut(id, statut)
      setDemandes((prev) => prev.map((d) => (d.id === id ? { ...d, statut } : d)))
      if (detail?.id === id) setDetail((prev) => ({ ...prev, statut }))
    } catch {
      setError('Erreur lors de la mise à jour du statut.')
    } finally {
      setUpdatingId(null)
    }
  }

  const handleDelete = async (id) => {
    try {
      await adminDeleteDemande(id)
      setDeleteConfirm(null)
      setDetail(null)
      load()
    } catch {
      setError('Impossible de supprimer cette demande.')
    }
  }

  const counts = STATUTS.reduce((acc, s) => {
    acc[s.value] = demandes.filter((d) => d.statut === s.value).length
    return acc
  }, {})

  return (
    <AdminLayout title="Demandes">
      <div className="ph">
        <div>
          <h2 className="ph-title">Demandes clients</h2>
          <p className="ph-sub">{filtered.length} demande{filtered.length > 1 ? 's' : ''} affichée{filtered.length > 1 ? 's' : ''}</p>
        </div>
      </div>

      {/* Statut chips */}
      <div className="chips-bar">
        <StatChip label="Tout" count={demandes.length} active={filterStatut === 'all'} onClick={() => setFilterStatut('all')} />
        {STATUTS.map((s) => (
          <StatChip key={s.value} label={s.label} count={counts[s.value] || 0} active={filterStatut === s.value} onClick={() => setFilterStatut(s.value)} />
        ))}
      </div>

      {/* Search */}
      <div className="search-wrap">
        <Search size={14} className="search-icon" />
        <input type="text" placeholder="Rechercher par nom, email, société..." value={search} onChange={(e) => setSearch(e.target.value)} className="form-input search-input" />
      </div>

      {error && <div className="alert-error">{error}</div>}

      {loading ? (
        <div className="loading-center"><div className="spinner" /></div>
      ) : filtered.length === 0 ? (
        <div className="empty-state">
          <MessageSquare size={40} strokeWidth={1.2} />
          <h3>Aucune demande trouvée</h3>
        </div>
      ) : (
        <>
          {/* Desktop table */}
          <div className="table-wrap desktop-table">
            <table className="data-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Contact</th>
                  <th>Société</th>
                  <th>Secteur</th>
                  <th>Écrans</th>
                  <th>Produit</th>
                  <th>Statut</th>
                  <th style={{ textAlign: 'right' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((d) => (
                  <tr key={d.id}>
                    <td className="muted">#{d.id}</td>
                    <td>
                      <div className="contact-name">{d.nom}</div>
                      <div className="muted">{d.email}</div>
                      {d.telephone && <div className="muted">{d.telephone}</div>}
                    </td>
                    <td className="muted">{d.raison_sociale || '—'}</td>
                    <td className="muted">{d.secteur || '—'}</td>
                    <td className="muted">{d.nombre_ecrans || '—'}</td>
                    <td className="muted">{d.produit ? d.produit.nom : '—'}</td>
                    <td><StatutBadge statut={d.statut} /></td>
                    <td>
                      <div className="row-actions">
                        <button onClick={() => setDetail(d)} className="action-btn action-view">
                          <Eye size={13} /> Détails
                        </button>
                        <button onClick={() => setDeleteConfirm(d)} className="action-btn action-delete">
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
            {filtered.map((d) => (
              <div key={d.id} className="dem-card">
                <div className="dem-card-head">
                  <div>
                    <div className="contact-name">{d.nom}</div>
                    <div className="muted">{d.email}</div>
                  </div>
                  <StatutBadge statut={d.statut} />
                </div>
                {(d.raison_sociale || d.secteur) && (
                  <div className="dem-card-meta">
                    {d.raison_sociale && <span>{d.raison_sociale}</span>}
                    {d.secteur && <span>{d.secteur}</span>}
                  </div>
                )}
                <div className="dem-card-actions">
                  <button onClick={() => setDetail(d)} className="action-btn action-view">
                    <Eye size={13} /> Détails
                  </button>
                  <button onClick={() => setDeleteConfirm(d)} className="action-btn action-delete">
                    <Trash2 size={13} /> Supprimer
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {/* Detail modal */}
      {detail && (
        <div className="modal-overlay" onClick={(e) => { if (e.target === e.currentTarget) setDetail(null) }}>
          <div className="modal modal-lg">
            <div className="modal-head">
              <h2 className="modal-title">Demande #{detail.id}</h2>
              <button className="modal-close" onClick={() => setDetail(null)}><X size={18} /></button>
            </div>
            <div className="modal-body">
              {/* Status switcher */}
              <div className="status-switcher">
                <span className="status-label">Statut :</span>
                {STATUTS.map((s) => (
                  <button
                    key={s.value}
                    onClick={() => handleStatut(detail.id, s.value)}
                    disabled={updatingId === detail.id}
                    className={`status-pill${detail.statut === s.value ? ' status-pill--active' : ''}`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>

              {/* Detail grid */}
              <div className="detail-grid">
                {[
                  { label: 'Nom', value: detail.nom },
                  { label: 'E-mail', value: detail.email },
                  { label: 'Téléphone', value: detail.telephone || '—' },
                  { label: 'Raison sociale', value: detail.raison_sociale || '—' },
                  { label: 'Secteur', value: detail.secteur || '—' },
                  { label: "Nombre d'écrans", value: detail.nombre_ecrans || '—' },
                  { label: 'Produit concerné', value: detail.produit?.nom || '—' },
                  { label: 'Statut actuel', value: STATUTS.find((s) => s.value === detail.statut)?.label || detail.statut },
                ].map((f) => (
                  <div key={f.label} className="detail-cell">
                    <div className="detail-cell-label">{f.label}</div>
                    <div className="detail-cell-value">{f.value}</div>
                  </div>
                ))}
              </div>

              {detail.question && (
                <div className="message-box">
                  <div className="detail-cell-label">Message</div>
                  <p className="message-text">{detail.question}</p>
                </div>
              )}

              <div className="modal-actions">
                <button onClick={() => setDeleteConfirm(detail)} className="btn-danger">
                  <Trash2 size={14} /> Supprimer
                </button>
                <button onClick={() => setDetail(null)} className="btn-secondary">Fermer</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Delete confirm */}
      {deleteConfirm && (
        <div className="modal-overlay">
          <div className="modal modal-sm">
            <div className="modal-head">
              <h2 className="modal-title">Supprimer la demande</h2>
              <button className="modal-close" onClick={() => setDeleteConfirm(null)}><X size={18} /></button>
            </div>
            <div className="modal-body">
              <div className="delete-warning">
                <AlertTriangle size={18} />
                <p>Supprimer la demande de <strong>{deleteConfirm.nom}</strong> ? Cette action est irréversible.</p>
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

        .chips-bar { display: flex; gap: 0.6rem; flex-wrap: wrap; margin-bottom: 1.25rem; }

        .search-wrap { position: relative; max-width: 420px; margin-bottom: 1.25rem; }
        .search-icon { position: absolute; left: 0.75rem; top: 50%; transform: translateY(-50%); color: rgba(255,255,255,0.35); pointer-events: none; }
        .search-input { padding-left: 2.25rem !important; }

        .alert-error { background: rgba(239,68,68,0.1); border: 1px solid rgba(239,68,68,0.25); color: #f87171; border-radius: 10px; padding: 0.75rem 1rem; font-size: 0.85rem; margin-bottom: 1rem; }

        .empty-state { display: flex; flex-direction: column; align-items: center; gap: 0.75rem; padding: 4rem 2rem; color: rgba(255,255,255,0.25); text-align: center; }
        .empty-state h3 { color: rgba(255,255,255,0.45); font-size: 1rem; font-weight: 600; }

        .table-wrap { width: 100%; overflow-x: auto; border-radius: 14px; border: 1px solid rgba(255,255,255,0.07); background: rgba(255,255,255,0.02); }
        .data-table { width: 100%; min-width: 860px; border-collapse: collapse; }
        .data-table th { padding: 0.75rem 1rem; font-size: 0.72rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.07em; color: rgba(255,255,255,0.35); text-align: left; border-bottom: 1px solid rgba(255,255,255,0.06); background: rgba(255,255,255,0.02); }
        .data-table td { padding: 0.85rem 1rem; vertical-align: middle; border-bottom: 1px solid rgba(255,255,255,0.04); }
        .data-table tr:last-child td { border-bottom: none; }
        .data-table tr:hover td { background: rgba(255,255,255,0.02); }

        .contact-name { font-weight: 600; color: #fff; font-size: 0.875rem; }
        .muted { color: rgba(255,255,255,0.38); font-size: 0.8rem; }

        .badge { display: inline-flex; align-items: center; padding: 0.22rem 0.6rem; border-radius: 999px; font-size: 0.72rem; font-weight: 700; }
        .badge-cyan { background: rgba(0,212,255,0.1); color: #00d4ff; border: 1px solid rgba(0,212,255,0.2); }
        .badge-amber { background: rgba(251,191,36,0.1); color: #fbbf24; border: 1px solid rgba(251,191,36,0.2); }
        .badge-green { background: rgba(52,211,153,0.1); color: #34d399; border: 1px solid rgba(52,211,153,0.2); }
        .badge-gray { background: rgba(255,255,255,0.06); color: rgba(255,255,255,0.45); border: 1px solid rgba(255,255,255,0.1); }

        .row-actions { display: flex; gap: 0.4rem; justify-content: flex-end; align-items: center; }
        .action-btn { display: inline-flex; align-items: center; gap: 0.35rem; padding: 0.32rem 0.65rem; border-radius: 7px; font-size: 0.75rem; font-weight: 700; cursor: pointer; border: 1px solid transparent; font-family: var(--font-body, sans-serif); transition: all 0.15s; }
        .action-view { background: rgba(255,75,43,0.1); border-color: rgba(255,75,43,0.22); color: #ff4b2b; }
        .action-view:hover { background: rgba(255,75,43,0.2); }
        .action-delete { background: rgba(239,68,68,0.07); border-color: rgba(239,68,68,0.18); color: #f87171; }
        .action-delete:hover { background: rgba(239,68,68,0.16); }

        /* Mobile cards */
        .mobile-cards { display: none; flex-direction: column; gap: 0.75rem; }
        .dem-card { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); border-radius: 14px; overflow: hidden; }
        .dem-card-head { display: flex; justify-content: space-between; align-items: flex-start; gap: 0.75rem; padding: 1rem; }
        .dem-card-meta { display: flex; gap: 0.5rem; flex-wrap: wrap; padding: 0 1rem 0.75rem; }
        .dem-card-meta span { font-size: 0.78rem; color: rgba(255,255,255,0.38); }
        .dem-card-actions { display: flex; gap: 0.5rem; padding: 0.75rem 1rem; border-top: 1px solid rgba(255,255,255,0.05); background: rgba(255,255,255,0.02); }
        .dem-card-actions .action-btn { flex: 1; justify-content: center; }

        /* Buttons */
        .btn-primary { display: inline-flex; align-items: center; gap: 0.4rem; padding: 0.55rem 1.1rem; background: #ff4b2b; color: #fff; border: none; border-radius: 9px; font-weight: 700; font-size: 0.855rem; cursor: pointer; font-family: var(--font-body, sans-serif); transition: background 0.18s; }
        .btn-primary:hover { background: #e0401f; }
        .btn-secondary { display: inline-flex; align-items: center; gap: 0.4rem; padding: 0.55rem 1.1rem; background: rgba(255,255,255,0.05); color: rgba(255,255,255,0.7); border: 1px solid rgba(255,255,255,0.1); border-radius: 9px; font-weight: 700; font-size: 0.855rem; cursor: pointer; font-family: var(--font-body, sans-serif); transition: all 0.18s; }
        .btn-secondary:hover { background: rgba(255,255,255,0.09); color: #fff; }
        .btn-danger { display: inline-flex; align-items: center; gap: 0.4rem; padding: 0.55rem 1.1rem; background: rgba(239,68,68,0.15); color: #f87171; border: 1px solid rgba(239,68,68,0.3); border-radius: 9px; font-weight: 700; font-size: 0.855rem; cursor: pointer; font-family: var(--font-body, sans-serif); transition: all 0.18s; }
        .btn-danger:hover { background: rgba(239,68,68,0.25); }

        /* Modal */
        .modal-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.6); backdrop-filter: blur(4px); z-index: 500; display: flex; align-items: center; justify-content: center; padding: 1rem; }
        .modal { background: #0d1829; border: 1px solid rgba(255,255,255,0.1); border-radius: 16px; display: flex; flex-direction: column; max-height: 92vh; overflow: hidden; }
        .modal-lg { width: min(640px, 100%); }
        .modal-sm { width: min(420px, 100%); }
        .modal-head { display: flex; justify-content: space-between; align-items: center; padding: 1.25rem 1.5rem; border-bottom: 1px solid rgba(255,255,255,0.07); flex-shrink: 0; }
        .modal-title { font-family: var(--font-head, sans-serif); font-size: 1rem; font-weight: 800; color: #fff; }
        .modal-close { background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); color: rgba(255,255,255,0.6); border-radius: 8px; width: 32px; height: 32px; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: all 0.15s; }
        .modal-close:hover { background: rgba(255,255,255,0.09); color: #fff; }
        .modal-body { padding: 1.5rem; overflow-y: auto; display: flex; flex-direction: column; gap: 1rem; }
        .modal-actions { display: flex; gap: 0.75rem; justify-content: flex-end; flex-wrap: wrap; padding-top: 0.25rem; }

        /* Status switcher */
        .status-switcher { display: flex; align-items: center; gap: 0.5rem; flex-wrap: wrap; padding: 0.9rem 1rem; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.06); border-radius: 12px; }
        .status-label { font-size: 0.78rem; color: rgba(255,255,255,0.4); font-weight: 700; }
        .status-pill { padding: 0.32rem 0.75rem; border-radius: 999px; font-size: 0.76rem; font-weight: 700; cursor: pointer; font-family: var(--font-body, sans-serif); background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); color: rgba(255,255,255,0.5); transition: all 0.18s; }
        .status-pill:hover { color: #fff; background: rgba(255,255,255,0.07); }
        .status-pill--active { background: rgba(255,75,43,0.18); border-color: rgba(255,75,43,0.35); color: #fff; }
        .status-pill:disabled { opacity: 0.6; cursor: wait; }

        /* Detail grid */
        .detail-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 0.65rem; }
        .detail-cell { padding: 0.75rem 0.9rem; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.05); border-radius: 10px; }
        .detail-cell-label { font-size: 0.66rem; color: rgba(255,255,255,0.35); text-transform: uppercase; letter-spacing: 0.08em; font-weight: 800; margin-bottom: 0.25rem; }
        .detail-cell-value { font-size: 0.875rem; color: #fff; word-break: break-word; }
        .message-box { padding: 0.9rem 1rem; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.05); border-radius: 10px; }
        .message-text { font-size: 0.875rem; color: rgba(255,255,255,0.7); line-height: 1.65; margin-top: 0.35rem; word-break: break-word; }

        /* Delete warning */
        .delete-warning { display: flex; gap: 0.75rem; align-items: flex-start; padding: 1rem; background: rgba(239,68,68,0.07); border: 1px solid rgba(239,68,68,0.18); border-radius: 10px; color: rgba(255,255,255,0.7); font-size: 0.875rem; line-height: 1.55; }
        .delete-warning svg { color: #f87171; flex-shrink: 0; margin-top: 2px; }
        .delete-warning strong { color: #fff; }

        /* Form */
.form-input {
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 9px;
  color: #ffffff;
  padding: 0.6rem 0.85rem;
  font-size: 16px; /* important: prevents mobile zoom */
  line-height: 1.4;
  font-family: var(--font-body, sans-serif);
  width: 100%;
  transition: border-color 0.18s, background 0.18s;
  appearance: none;
  -webkit-appearance: none;
}

.form-input::placeholder {
  color: rgba(255,255,255,0.35);
}

.form-input:focus {
  outline: none;
  border-color: rgba(255,75,43,0.45);
  background: rgba(255,255,255,0.06);
  color: #ffffff;
}

/* Fix iOS autofill white background */
.form-input:-webkit-autofill,
.form-input:-webkit-autofill:hover,
.form-input:-webkit-autofill:focus,
.form-input:-webkit-autofill:active {
  -webkit-text-fill-color: #ffffff !important;
  box-shadow: 0 0 0 1000px rgba(13,24,41,1) inset !important;
  -webkit-box-shadow: 0 0 0 1000px rgba(13,24,41,1) inset !important;
  transition: background-color 9999s ease-in-out 0s;
}
        /* Spinner */
        .loading-center { display: flex; align-items: center; justify-content: center; padding: 4rem; }
        .spinner { width: 32px; height: 32px; border: 3px solid rgba(255,255,255,0.1); border-top-color: #ff4b2b; border-radius: 50%; animation: spin 0.75s linear infinite; }
        @keyframes spin { to { transform: rotate(360deg); } }

        /* Responsive */
        @media (max-width: 860px) {
          .desktop-table { display: none; }
          .mobile-cards { display: flex; }
          .search-wrap { max-width: none; width: 100%; }
        }
        @media (max-width: 600px) {
          .detail-grid { grid-template-columns: 1fr; }
          .modal-actions { flex-direction: column-reverse; }
          .modal-actions > * { width: 100%; justify-content: center; }
        }
          
      `}</style>
    </AdminLayout>
  )
}

function StatChip({ label, count, active, onClick }) {
  return (
    <button onClick={onClick} className={`stat-chip${active ? ' stat-chip--active' : ''}`}>
      {label}
      <span className="chip-count">{count}</span>
      <style>{`
        .stat-chip { display: inline-flex; align-items: center; gap: 0.45rem; padding: 0.42rem 0.9rem; border-radius: 999px; font-size: 0.8rem; font-weight: 700; border: 1px solid rgba(255,255,255,0.1); background: transparent; color: rgba(255,255,255,0.5); cursor: pointer; font-family: var(--font-body, sans-serif); transition: all 0.18s; }
        .stat-chip:hover, .stat-chip--active { background: rgba(255,75,43,0.12); border-color: rgba(255,75,43,0.3); color: #fff; }
        .chip-count { background: rgba(255,255,255,0.08); border-radius: 999px; padding: 0.05rem 0.45rem; font-size: 0.7rem; font-weight: 900; }
        .stat-chip--active .chip-count { background: rgba(255,75,43,0.25); }
      `}</style>
    </button>
  )
}