import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import AdminLayout from '../../components/admin/AdminLayout'
import { adminGetProduits } from '../../api/produits'
import { adminGetTypes } from '../../api/typesProduits'
import { adminGetDemandes } from '../../api/demandes'
import {
  Monitor,
  FolderOpen,
  MessageSquare,
  Bell,
  PlusCircle,
  FilePlus,
  Globe,
  ArrowRight,
} from 'lucide-react'

export default function DashboardAdmin() {
  const [stats, setStats] = useState({ produits: 0, types: 0, demandes: 0, nouvellesDemandes: 0 })
  const [demandes, setDemandes] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    setLoading(true)
    Promise.all([
      adminGetProduits(),
      adminGetTypes(),
      adminGetDemandes(),
    ])
      .then(([pRes, tRes, dRes]) => {
        const produitsData = Array.isArray(pRes.data) ? pRes.data : (pRes.data?.produits || [])
        const typesData = Array.isArray(tRes.data) ? tRes.data : (tRes.data?.types || [])
        const demandesData = Array.isArray(dRes.data) ? dRes.data : (dRes.data?.demandes || [])

        setDemandes(demandesData.slice(0, 5))
        setStats({
          produits: produitsData.length,
          types: typesData.length,
          demandes: demandesData.length,
          nouvellesDemandes: demandesData.filter(
            (d) => d.statut === 'nouveau' || d.statut === 'en_attente'
          ).length,
        })
      })
      .catch(() => setError('Erreur lors du chargement des données.'))
      .finally(() => setLoading(false))
  }, [])

  const STAT_CARDS = [
    { label: 'Produits actifs', value: stats.produits, Icon: Monitor, color: '#4d9fff', bg: 'rgba(77,159,255,0.1)', border: 'rgba(77,159,255,0.2)', to: '/admin/produits' },
    { label: 'Types de produits', value: stats.types, Icon: FolderOpen, color: '#a78bfa', bg: 'rgba(167,139,250,0.1)', border: 'rgba(167,139,250,0.2)', to: '/admin/types-produits' },
    { label: 'Total demandes', value: stats.demandes, Icon: MessageSquare, color: '#34d399', bg: 'rgba(52,211,153,0.1)', border: 'rgba(52,211,153,0.2)', to: '/admin/demandes' },
    { label: 'Nouvelles dem.', value: stats.nouvellesDemandes, Icon: Bell, color: '#fbbf24', bg: 'rgba(251,191,36,0.1)', border: 'rgba(251,191,36,0.2)', to: '/admin/demandes' },
  ]

  const QUICK_ACTIONS = [
    { label: 'Ajouter un produit', to: '/admin/produits?action=new', Icon: PlusCircle },
    { label: 'Ajouter un type', to: '/admin/types-produits?action=new', Icon: FilePlus },
    { label: 'Voir les demandes', to: '/admin/demandes', Icon: MessageSquare },
    { label: 'Consulter le site public', to: '/', Icon: Globe, external: true },
  ]

  return (
    <AdminLayout title="Tableau de bord">
      {/* Welcome banner */}
      <div className="db-welcome">
        <div className="db-welcome-glow" />
        <h2 className="db-welcome-title">Bienvenue sur Nexav Admin</h2>
        <p className="db-welcome-sub">Gérez vos produits, types et demandes depuis ce panneau de contrôle.</p>
      </div>

      {error && (
        <div className="db-error">{error}</div>
      )}

      {loading ? (
        <div className="loading-center"><div className="spinner" /></div>
      ) : (
        <>
          {/* Stat cards */}
          <div className="db-stats-grid">
            {STAT_CARDS.map((s) => (
              <Link
                key={s.label}
                to={s.to}
                className="db-stat-card"
                style={{ '--card-color': s.color, '--card-bg': s.bg, '--card-border': s.border }}
              >
                <div className="db-stat-header">
                  <span className="db-stat-label">{s.label}</span>
                  <div className="db-stat-icon-wrap">
                    <s.Icon size={16} />
                  </div>
                </div>
                <div className="db-stat-value">{s.value}</div>
                <div className="db-stat-footer">
                  Voir tout <ArrowRight size={12} />
                </div>
              </Link>
            ))}
          </div>

          {/* Bottom grid */}
          <div className="db-bottom-grid">
            {/* Recent demandes */}
            <div className="db-card">
              <div className="db-card-head">
                <h3 className="db-card-title">Dernières demandes</h3>
                <Link to="/admin/demandes" className="db-card-link">Voir tout <ArrowRight size={12} /></Link>
              </div>

              {demandes.length === 0 ? (
                <div className="db-empty">
                  <MessageSquare size={28} strokeWidth={1.5} />
                  <span>Aucune demande</span>
                </div>
              ) : (
                <div className="db-demandes-list">
                  {demandes.map((d) => (
                    <div key={d.id} className="db-demande-row">
                      <div className="db-demande-avatar">
                        {(d.nom || 'U').slice(0, 1).toUpperCase()}
                      </div>
                      <div className="db-demande-info">
                        <div className="db-demande-name">{d.nom}</div>
                        <div className="db-demande-meta">{d.email}</div>
                      </div>
                      <div className="db-demande-right">
                        {d.raison_sociale && <div className="db-demande-meta">{d.raison_sociale}</div>}
                        <StatutBadge statut={d.statut} />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Quick actions */}
            <div className="db-card db-card--actions">
              <div className="db-card-head">
                <h3 className="db-card-title">Actions rapides</h3>
              </div>
              <div className="db-actions-list">
                {QUICK_ACTIONS.map((a) => (
                  <Link
                    key={a.label}
                    to={a.to}
                    target={a.external ? '_blank' : undefined}
                    className="db-action-btn"
                  >
                    <div className="db-action-icon"><a.Icon size={16} /></div>
                    <span>{a.label}</span>
                    <ArrowRight size={13} className="db-action-arrow" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </>
      )}

      <style>{`
        .db-welcome {
          position: relative;
          overflow: hidden;
          background: linear-gradient(135deg, rgba(12,91,232,0.1) 0%, rgba(0,212,255,0.05) 100%);
          border: 1px solid rgba(12,91,232,0.18);
          border-radius: 14px;
          padding: 1.5rem 1.75rem;
          margin-bottom: 1.75rem;
        }

        .db-welcome-glow {
          position: absolute;
          top: 0; left: 10%; right: 10%; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(77,159,255,0.6), transparent);
        }

        .db-welcome-title {
          font-family: var(--font-head, sans-serif);
          font-size: 1.15rem;
          font-weight: 800;
          color: #fff;
          margin-bottom: 0.35rem;
        }

        .db-welcome-sub {
          font-size: 0.84rem;
          color: rgba(255,255,255,0.45);
          line-height: 1.5;
        }

        .db-error {
          background: rgba(239,68,68,0.1);
          border: 1px solid rgba(239,68,68,0.25);
          border-radius: 10px;
          color: #f87171;
          padding: 0.85rem 1rem;
          font-size: 0.87rem;
          margin-bottom: 1.5rem;
        }

        /* Stats grid */
        .db-stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1rem;
          margin-bottom: 1.75rem;
        }

        .db-stat-card {
          display: block;
          text-decoration: none;
          color: inherit;
          background: rgba(255,255,255,0.03);
          border: 1px solid var(--card-border, rgba(255,255,255,0.08));
          border-radius: 14px;
          padding: 1.25rem 1.25rem 1rem;
          transition: all 0.22s;
          position: relative;
          overflow: hidden;
        }

        .db-stat-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: var(--card-bg, transparent);
          opacity: 0;
          transition: opacity 0.22s;
        }

        .db-stat-card:hover::before { opacity: 1; }
        .db-stat-card:hover { transform: translateY(-2px); border-color: var(--card-color); }

        .db-stat-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 0.85rem;
          position: relative;
        }

        .db-stat-label {
          font-size: 0.71rem;
          color: rgba(255,255,255,0.45);
          text-transform: uppercase;
          letter-spacing: 0.07em;
          font-weight: 700;
          line-height: 1.3;
        }

        .db-stat-icon-wrap {
          width: 30px;
          height: 30px;
          border-radius: 8px;
          background: var(--card-bg);
          border: 1px solid var(--card-border);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--card-color);
          flex-shrink: 0;
        }

        .db-stat-value {
          font-family: var(--font-head, sans-serif);
          font-size: 2rem;
          font-weight: 900;
          color: var(--card-color);
          line-height: 1;
          margin-bottom: 0.75rem;
          position: relative;
        }

        .db-stat-footer {
          display: flex;
          align-items: center;
          gap: 0.3rem;
          font-size: 0.72rem;
          color: rgba(255,255,255,0.3);
          position: relative;
        }

        /* Bottom grid */
        .db-bottom-grid {
          display: grid;
          grid-template-columns: 1fr 280px;
          gap: 1.25rem;
          align-items: start;
        }

        .db-card {
          background: rgba(255,255,255,0.025);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 14px;
          overflow: hidden;
        }

        .db-card-head {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 1.25rem;
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }

        .db-card-title {
          font-family: var(--font-head, sans-serif);
          font-size: 0.9rem;
          font-weight: 700;
          color: #fff;
        }

        .db-card-link {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          font-size: 0.77rem;
          color: rgba(0,212,255,0.8);
          text-decoration: none;
          transition: color 0.15s;
        }

        .db-card-link:hover { color: #00d4ff; }

        .db-empty {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.75rem;
          padding: 2.5rem;
          color: rgba(255,255,255,0.25);
          font-size: 0.85rem;
        }

        /* Demandes list */
        .db-demandes-list {
          display: flex;
          flex-direction: column;
        }

        .db-demande-row {
          display: flex;
          align-items: center;
          gap: 0.85rem;
          padding: 0.85rem 1.25rem;
          border-bottom: 1px solid rgba(255,255,255,0.04);
          transition: background 0.15s;
        }

        .db-demande-row:last-child { border-bottom: none; }
        .db-demande-row:hover { background: rgba(255,255,255,0.025); }

        .db-demande-avatar {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background: rgba(255,75,43,0.15);
          border: 1px solid rgba(255,75,43,0.25);
          color: #ff4b2b;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
          font-size: 0.8rem;
          flex-shrink: 0;
        }

        .db-demande-info {
          flex: 1;
          min-width: 0;
        }

        .db-demande-name {
          font-size: 0.865rem;
          font-weight: 600;
          color: #fff;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .db-demande-meta {
          font-size: 0.75rem;
          color: rgba(255,255,255,0.38);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .db-demande-right {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 0.25rem;
          flex-shrink: 0;
        }

        /* Quick actions */
        .db-card--actions { overflow: visible; }

        .db-actions-list {
          padding: 0.75rem;
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .db-action-btn {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          padding: 0.7rem 0.85rem;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 10px;
          font-size: 0.84rem;
          color: rgba(255,255,255,0.65);
          text-decoration: none;
          transition: all 0.18s;
        }

        .db-action-btn:hover {
          background: rgba(255,75,43,0.09);
          border-color: rgba(255,75,43,0.22);
          color: #fff;
        }

        .db-action-icon {
          width: 28px;
          height: 28px;
          border-radius: 7px;
          background: rgba(255,255,255,0.05);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          color: rgba(255,75,43,0.7);
        }

        .db-action-btn:hover .db-action-icon {
          background: rgba(255,75,43,0.12);
          color: #ff4b2b;
        }

        .db-action-btn span { flex: 1; }

        .db-action-arrow {
          color: rgba(255,255,255,0.2);
          transition: transform 0.15s;
        }

        .db-action-btn:hover .db-action-arrow {
          color: rgba(255,75,43,0.7);
          transform: translateX(2px);
        }

        /* Badge */
        .badge { display: inline-flex; align-items: center; padding: 0.2rem 0.55rem; border-radius: 999px; font-size: 0.72rem; font-weight: 700; }
        .badge-cyan { background: rgba(0,212,255,0.1); color: #00d4ff; border: 1px solid rgba(0,212,255,0.2); }
        .badge-amber { background: rgba(251,191,36,0.1); color: #fbbf24; border: 1px solid rgba(251,191,36,0.2); }
        .badge-green { background: rgba(52,211,153,0.1); color: #34d399; border: 1px solid rgba(52,211,153,0.2); }
        .badge-gray { background: rgba(255,255,255,0.06); color: rgba(255,255,255,0.45); border: 1px solid rgba(255,255,255,0.1); }
        .badge-blue { background: rgba(77,159,255,0.1); color: #4d9fff; border: 1px solid rgba(77,159,255,0.2); }

        /* Spinner */
        .loading-center { display: flex; align-items: center; justify-content: center; padding: 4rem; }
        .spinner { width: 32px; height: 32px; border: 3px solid rgba(255,255,255,0.1); border-top-color: #ff4b2b; border-radius: 50%; animation: spin 0.75s linear infinite; }
        @keyframes spin { to { transform: rotate(360deg); } }

        /* Responsive */
        @media (max-width: 1100px) {
          .db-stats-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 860px) {
          .db-bottom-grid { grid-template-columns: 1fr; }
        }

        @media (max-width: 540px) {
          .db-stats-grid { grid-template-columns: repeat(2, 1fr); gap: 0.75rem; }
          .db-stat-value { font-size: 1.65rem; }
          .db-welcome { padding: 1.1rem 1.1rem; }
          .db-demande-row { flex-wrap: wrap; }
          .db-demande-right { flex-direction: row; align-items: center; width: 100%; }
        }

        @media (max-width: 380px) {
          .db-stats-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </AdminLayout>
  )
}

export function StatutBadge({ statut }) {
  const map = {
    nouveau: { label: 'Nouveau', cls: 'badge-cyan' },
    en_attente: { label: 'En attente', cls: 'badge-amber' },
    traite: { label: 'Traité', cls: 'badge-green' },
    archive: { label: 'Archivé', cls: 'badge-gray' },
  }
  const s = map[statut] || { label: statut, cls: 'badge-gray' }
  return <span className={`badge ${s.cls}`}>{s.label}</span>
}