import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import AdminLayout from '../../components/admin/AdminLayout'
import { adminGetProduits } from '../../api/produits'
import { adminGetTypes } from '../../api/typesProduits'
import { adminGetDemandes } from '../../api/demandes'

export default function DashboardAdmin() {
  const [stats, setStats] = useState({ produits: 0, types: 0, demandes: 0, nouvellesDemandes: 0 })
  const [demandes, setDemandes] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    Promise.all([
      adminGetProduits(),
      adminGetTypes(),
      adminGetDemandes(),
    ])
      .then(([pRes, tRes, dRes]) => {
        const produitsData = Array.isArray(pRes.data) ? pRes.data : pRes.data.produits || []
        const typesData = Array.isArray(tRes.data) ? tRes.data : tRes.data.types || []
        const demandesData = Array.isArray(dRes.data) ? dRes.data : dRes.data.demandes || []

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
      .catch(console.error)
      .finally(() => setLoading(false))
  }, [])

  const STAT_CARDS = [
    { label: 'Produits actifs', value: stats.produits, icon: '🖥️', color: 'var(--n-blue)', to: '/admin/produits' },
    { label: 'Types de produits', value: stats.types, icon: '🗂️', color: '#5B9DFF', to: '/admin/types-produits' },
    { label: 'Total demandes', value: stats.demandes, icon: '📬', color: 'var(--n-cyan)', to: '/admin/demandes' },
    { label: 'Nouvelles dem.', value: stats.nouvellesDemandes, icon: '🔔', color: '#FFB800', to: '/admin/demandes' },
  ]

  const QUICK_ACTIONS = [
    { label: 'Ajouter un produit', to: '/admin/produits?action=new', icon: '➕' },
    { label: 'Ajouter un type', to: '/admin/types-produits?action=new', icon: '📁' },
    { label: 'Voir les demandes', to: '/admin/demandes', icon: '📬' },
    { label: 'Consulter le site public', to: '/', icon: '🌐', external: true },
  ]

  return (
    <AdminLayout title="Tableau de bord">
      {/* Welcome */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(12,91,232,0.12), rgba(0,212,255,0.06))',
        border: '1px solid rgba(12,91,232,0.2)',
        borderRadius: 'var(--radius-lg)',
        padding: '1.5rem 2rem',
        marginBottom: '2rem',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', top: 0, left: '10%', right: '10%', height: 1, background: 'linear-gradient(90deg,transparent,var(--n-blue),transparent)' }} />
        <h2 style={{ fontFamily: 'var(--font-head)', fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.3rem' }}>
          Bienvenue sur Nexav Admin 👋
        </h2>
        <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)' }}>
          Gérez vos produits, types et demandes depuis ce panneau de contrôle.
        </p>
      </div>

      {/* Stats grid */}
      {loading ? (
        <div className="loading-center"><div className="spinner" /></div>
      ) : (
        <>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem', marginBottom: '2rem' }}>
            {STAT_CARDS.map(s => (
              <Link
                key={s.label}
                to={s.to}
                style={{
                  display: 'block', textDecoration: 'none', color: 'inherit',
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '1.4rem',
                  transition: 'all 0.25s',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(12,91,232,0.3)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'; e.currentTarget.style.transform = 'translateY(0)' }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                  <div style={{ fontSize: '0.72rem', color: 'var(--n-gray)', textTransform: 'uppercase', letterSpacing: '0.07em' }}>{s.label}</div>
                  <span style={{ fontSize: '1.2rem' }}>{s.icon}</span>
                </div>
                <div style={{ fontFamily: 'var(--font-head)', fontSize: '2rem', fontWeight: 800, color: s.color }}>
                  {s.value}
                </div>
              </Link>
            ))}
          </div>

          {/* Grid: recent demandes + quick actions */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 280px', gap: '1.5rem' }}>

            {/* Recent demandes */}
            <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid var(--n-border)', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
              <div style={{ padding: '1.2rem 1.5rem', borderBottom: '1px solid var(--n-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h3 style={{ fontFamily: 'var(--font-head)', fontSize: '0.95rem', fontWeight: 700 }}>Dernières demandes</h3>
                <Link to="/admin/demandes" style={{ fontSize: '0.78rem', color: 'var(--n-cyan)', textDecoration: 'none' }}>Voir tout →</Link>
              </div>
              {demandes.length === 0 ? (
                <div className="empty-state" style={{ padding: '2rem' }}>
                  <div className="empty-icon">📬</div>
                  <h3>Aucune demande</h3>
                </div>
              ) : (
                <table className="data-table">
                  <thead>
                    <tr>
                      <th>Nom</th>
                      <th>Société</th>
                      <th>Secteur</th>
                      <th>Statut</th>
                    </tr>
                  </thead>
                  <tbody>
                    {demandes.map(d => (
                      <tr key={d.id}>
                        <td>
                          <div style={{ fontWeight: 500 }}>{d.nom}</div>
                          <div style={{ fontSize: '0.75rem', color: 'var(--n-gray)' }}>{d.email}</div>
                        </td>
                        <td style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.65)' }}>{d.raison_sociale || '—'}</td>
                        <td style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.65)' }}>{d.secteur || '—'}</td>
                        <td><StatutBadge statut={d.statut} /></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>

            {/* Quick actions */}
            <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid var(--n-border)', borderRadius: 'var(--radius-lg)', padding: '1.2rem' }}>
              <h3 style={{ fontFamily: 'var(--font-head)', fontSize: '0.95rem', fontWeight: 700, marginBottom: '1rem', padding: '0 0.3rem' }}>
                Actions rapides
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {QUICK_ACTIONS.map(a => (
                  <Link
                    key={a.label}
                    to={a.to}
                    target={a.external ? '_blank' : undefined}
                    style={{
                      display: 'flex', alignItems: 'center', gap: '0.6rem',
                      padding: '0.7rem 0.85rem',
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(255,255,255,0.06)',
                      borderRadius: 'var(--radius-sm)',
                      fontSize: '0.85rem', color: 'rgba(255,255,255,0.75)',
                      textDecoration: 'none', transition: 'all 0.2s',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.background = 'rgba(12,91,232,0.1)'; e.currentTarget.style.borderColor = 'rgba(12,91,232,0.25)'; e.currentTarget.style.color = '#fff' }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.03)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; e.currentTarget.style.color = 'rgba(255,255,255,0.75)' }}
                  >
                    <span>{a.icon}</span>
                    {a.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
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
