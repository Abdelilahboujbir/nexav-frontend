import { useState, useEffect } from 'react'
import AdminLayout from '../../components/admin/AdminLayout'
import { adminGetDemandes, adminUpdateStatut, adminDeleteDemande } from '../../api/demandes'

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
        const data = Array.isArray(r.data) ? r.data : r.data.demandes || []
        setDemandes(data)
      })
      .catch(() => setError('Erreur de chargement'))
      .finally(() => setLoading(false))
  }

  useEffect(() => {
    load()
  }, [])

  const filtered = demandes.filter((d) => {
    const matchStatut = filterStatut === 'all' || d.statut === filterStatut
    const q = search.toLowerCase()

    const matchSearch =
      !q ||
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

      setDemandes((prev) =>
        prev.map((d) => (d.id === id ? { ...d, statut } : d))
      )

      if (detail?.id === id) {
        setDetail((prev) => ({ ...prev, statut }))
      }
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
      <div className="demandes-head">
        <div>
          <h2>Demandes clients</h2>
          <p>{filtered.length} demande{filtered.length > 1 ? 's' : ''} affichée{filtered.length > 1 ? 's' : ''}</p>
        </div>
      </div>

      <div className="stats-chips">
        <StatChip
          label="Total"
          count={demandes.length}
          active={filterStatut === 'all'}
          onClick={() => setFilterStatut('all')}
        />

        {STATUTS.map((s) => (
          <StatChip
            key={s.value}
            label={s.label}
            count={counts[s.value] || 0}
            active={filterStatut === s.value}
            onClick={() => setFilterStatut(s.value)}
          />
        ))}
      </div>

      <div className="search-box">
        <input
          type="text"
          placeholder="Rechercher par nom, email, société..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="form-input"
        />
        <span>⌕</span>
      </div>

      {error && <div className="error-message" style={{ marginBottom: '1rem' }}>{error}</div>}

      {loading ? (
        <div className="loading-center">
          <div className="spinner" />
        </div>
      ) : filtered.length === 0 ? (
        <div className="empty-state">
          <h3>Aucune demande trouvée</h3>
        </div>
      ) : (
        <div className="data-table-wrap">
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
                    <div className="strong">{d.nom}</div>
                    <div className="muted">{d.email}</div>
                    {d.telephone && <div className="muted">{d.telephone}</div>}
                  </td>

                  <td>{d.raison_sociale || '—'}</td>
                  <td>{d.secteur || '—'}</td>
                  <td>{d.nombre_ecrans || '—'}</td>
                  <td>{d.produit ? d.produit.nom : '—'}</td>

                  <td>
                    <StatutBadge statut={d.statut} />
                  </td>

                  <td>
                    <div className="table-actions">
                      <button onClick={() => setDetail(d)} className="action-btn view">
                        Détails
                      </button>

                      <button onClick={() => setDeleteConfirm(d)} className="action-btn delete">
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

      {detail && (
        <div className="modal-overlay" onClick={(e) => { if (e.target === e.currentTarget) setDetail(null) }}>
          <div className="modal" style={{ maxWidth: 620 }}>
            <div className="modal-header">
              <h2 className="modal-title">Demande #{detail.id}</h2>
              <button className="modal-close" onClick={() => setDetail(null)}>✕</button>
            </div>

            <div className="status-box">
              <span>Statut :</span>

              {STATUTS.map((s) => (
                <button
                  key={s.value}
                  onClick={() => handleStatut(detail.id, s.value)}
                  disabled={updatingId === detail.id}
                  className={detail.statut === s.value ? 'status-btn active' : 'status-btn'}
                >
                  {s.label}
                </button>
              ))}
            </div>

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
                <div key={f.label} className="detail-item">
                  <div>{f.label}</div>
                  <p>{f.value}</p>
                </div>
              ))}
            </div>

            {detail.question && (
              <div className="message-box">
                <div>Message</div>
                <p>{detail.question}</p>
              </div>
            )}

            <div className="modal-actions">
              <button onClick={() => setDeleteConfirm(detail)} className="action-btn delete">
                Supprimer
              </button>

              <button onClick={() => setDetail(null)} className="btn btn-secondary btn-sm">
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}

      {deleteConfirm && (
        <div className="modal-overlay">
          <div className="modal" style={{ maxWidth: 400 }}>
            <div className="modal-header">
              <h2 className="modal-title">Supprimer la demande</h2>
              <button className="modal-close" onClick={() => setDeleteConfirm(null)}>✕</button>
            </div>

            <p className="delete-text">
              Supprimer la demande de <strong>{deleteConfirm.nom}</strong> ? Cette action est irréversible.
            </p>

            <div className="modal-actions">
              <button onClick={() => setDeleteConfirm(null)} className="btn btn-secondary btn-sm">
                Annuler
              </button>

              <button onClick={() => handleDelete(deleteConfirm.id)} className="action-btn delete">
                Supprimer
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .demandes-head {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.3rem;
        }

        .demandes-head h2 {
          font-family: var(--font-head);
          font-size: 1.1rem;
          font-weight: 800;
          color: #fff;
        }

        .demandes-head p {
          font-size: 0.84rem;
          color: var(--n-gray);
          margin-top: 0.2rem;
        }

        .stats-chips {
          display: flex;
          gap: 0.75rem;
          margin-bottom: 1.5rem;
          flex-wrap: wrap;
        }

        .search-box {
          position: relative;
          max-width: 380px;
          margin-bottom: 1.25rem;
        }

        .search-box input {
          padding-left: 2.3rem;
        }

        .search-box span {
          position: absolute;
          left: 0.8rem;
          top: 50%;
          transform: translateY(-50%);
          color: var(--n-gray);
        }

        .strong {
          font-weight: 700;
          color: #fff;
        }

        .muted {
          color: var(--n-gray);
          font-size: 0.78rem;
        }

        .table-actions {
          display: flex;
          gap: 0.4rem;
          justify-content: flex-end;
          flex-wrap: wrap;
        }

        .action-btn {
          padding: 0.35rem 0.75rem;
          font-size: 0.76rem;
          border-radius: 7px;
          cursor: pointer;
          font-family: var(--font-body);
          font-weight: 700;
          transition: 0.2s;
        }

        .action-btn.view {
          background: rgba(255,75,43,0.12);
          border: 1px solid rgba(255,75,43,0.25);
          color: var(--n-orange);
        }

        .action-btn.view:hover {
          background: rgba(255,75,43,0.2);
        }

        .action-btn.delete {
          background: rgba(239,68,68,0.1);
          border: 1px solid rgba(239,68,68,0.25);
          color: #f87171;
        }

        .action-btn.delete:hover {
          background: rgba(239,68,68,0.18);
        }

        .status-box {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
          margin-bottom: 1.5rem;
          padding: 0.9rem;
          background: rgba(255,255,255,0.03);
          border-radius: var(--radius-md);
          border: 1px solid rgba(255,255,255,0.06);
        }

        .status-box > span {
          font-size: 0.78rem;
          color: var(--n-gray);
          margin-right: 0.25rem;
          align-self: center;
        }

        .status-btn {
          padding: 0.35rem 0.8rem;
          border-radius: 999px;
          font-size: 0.76rem;
          font-weight: 700;
          cursor: pointer;
          font-family: var(--font-body);
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          color: rgba(255,255,255,0.55);
        }

        .status-btn.active {
          background: rgba(255,75,43,0.18);
          border-color: rgba(255,75,43,0.38);
          color: #fff;
        }

        .detail-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.75rem;
          margin-bottom: 1.25rem;
        }

        .detail-item {
          padding: 0.75rem 0.9rem;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.05);
          border-radius: 10px;
        }

        .detail-item div,
        .message-box div {
          font-size: 0.68rem;
          color: var(--n-gray);
          text-transform: uppercase;
          letter-spacing: 0.07em;
          margin-bottom: 0.25rem;
          font-weight: 800;
        }

        .detail-item p {
          font-size: 0.88rem;
          color: #fff;
        }

        .message-box {
          padding: 0.9rem 1rem;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.05);
          border-radius: 10px;
          margin-bottom: 1.25rem;
        }

        .message-box p {
          font-size: 0.88rem;
          color: rgba(255,255,255,0.75);
          line-height: 1.65;
        }

        .modal-actions {
          display: flex;
          gap: 0.75rem;
          justify-content: flex-end;
          flex-wrap: wrap;
        }

        .delete-text {
          font-size: 0.9rem;
          color: rgba(255,255,255,0.65);
          margin-bottom: 1.5rem;
          line-height: 1.6;
        }

        .delete-text strong {
          color: #fff;
        }

        @media (max-width: 700px) {
          .detail-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </AdminLayout>
  )
}

function StatChip({ label, count, active, onClick }) {
  return (
    <button onClick={onClick} className={active ? 'stat-chip active' : 'stat-chip'}>
      {label}
      <span>{count}</span>

      <style>{`
        .stat-chip {
          display: flex;
          align-items: center;
          gap: 0.45rem;
          padding: 0.45rem 0.95rem;
          border-radius: 999px;
          font-size: 0.82rem;
          font-weight: 700;
          border: 1px solid rgba(255,255,255,0.1);
          background: transparent;
          color: rgba(255,255,255,0.58);
          cursor: pointer;
          font-family: var(--font-body);
          transition: 0.2s;
        }

        .stat-chip:hover,
        .stat-chip.active {
          background: rgba(255,75,43,0.14);
          border-color: rgba(255,75,43,0.35);
          color: #fff;
        }

        .stat-chip span {
          background: rgba(255,255,255,0.08);
          border-radius: 999px;
          padding: 0.05rem 0.45rem;
          font-size: 0.72rem;
          font-weight: 900;
        }

        .stat-chip.active span {
          background: rgba(255,75,43,0.28);
          color: #fff;
        }
      `}</style>
    </button>
  )
}