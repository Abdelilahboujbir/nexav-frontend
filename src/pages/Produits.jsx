import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/layout/Layout'
import PageHeader from '../components/ui/PageHeader'
import ProduitCard from '../components/ui/ProduitCard'
import { getProduits } from '../api/produits'
import { getTypesProduits } from '../api/typesProduits'
import { getSousTypesProduits } from '../api/sousTypesProduits'
export default function Produits() {
  const [produits, setProduits] = useState([])
  const [types, setTypes] = useState([])
  const [sousTypes, setSousTypes] = useState([])

  const [activeType, setActiveType] = useState('all')
  const [activeSousType, setActiveSousType] = useState('all')
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
   Promise.all([getProduits(), getTypesProduits(), getSousTypesProduits()])
      .then(([pRes, tRes, stRes]) => {
        setProduits(Array.isArray(pRes.data) ? pRes.data : pRes.data.produits || [])
        setTypes(Array.isArray(tRes.data) ? tRes.data : tRes.data.types || [])
        setSousTypes(Array.isArray(stRes.data) ? stRes.data : stRes.data.sous_types || stRes.data.sousTypes || [])
      })
      .catch(() => setError('Impossible de charger les produits.'))
      .finally(() => setLoading(false))
  }, [])

  const safeProduits = Array.isArray(produits) ? produits : []
  const safeSousTypes = Array.isArray(sousTypes) ? sousTypes : []

  const sousTypesOfActiveType = safeSousTypes.filter((st) => {
    const parentId =
      st?.type_produit_id ??
      st?.typeProduit?.id ??
      st?.type_produit?.id

    return String(parentId) === String(activeType)
  })

  const handleTypeClick = (typeId) => {
    setActiveType(typeId)
    setActiveSousType('all')
  }

  const filtered = safeProduits.filter((p) => {
    const matchType =
      activeType === 'all' ||
      String(p.type_produit_id) === String(activeType)

    const matchSousType =
      activeSousType === 'all' ||
      String(p.sous_type_produit_id) === String(activeSousType)

    const matchSearch =
      !search ||
      p.nom?.toLowerCase().includes(search.toLowerCase()) ||
      p.description_courte?.toLowerCase().includes(search.toLowerCase())

    return matchType && matchSousType && matchSearch && p.actif !== false
  })

  return (
    <Layout>
      <PageHeader
        tag="Catalogue"
        title="Nos solutions digitales"
        subtitle="Découvrez l'ensemble de nos produits et solutions pour équiper et connecter vos espaces."
      >
        <div className="products-search">
          <span>
            <SearchIcon />
          </span>
          <input
            type="text"
            placeholder="Rechercher un produit..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="form-input"
          />
        </div>
      </PageHeader>

      <div className="products-filters">
        <div className="products-filters-inner">
          <FilterTab
            label="Tous"
            active={activeType === 'all'}
            onClick={() => handleTypeClick('all')}
          />

          {types.map((t) => (
            <FilterTab
              key={t.id}
              label={t.nom}
              active={String(activeType) === String(t.id)}
              onClick={() => handleTypeClick(t.id)}
            />
          ))}
        </div>

        {activeType !== 'all' && sousTypesOfActiveType.length > 0 && (
          <div className="subtype-filter-inner">
            <span className="subtype-label">Sous-types :</span>

            <FilterTab
              label="Tous"
              active={activeSousType === 'all'}
              onClick={() => setActiveSousType('all')}
              small
            />

            {sousTypesOfActiveType.map((st) => (
              <FilterTab
                key={st.id}
                label={st.nom}
                active={String(activeSousType) === String(st.id)}
                onClick={() => setActiveSousType(st.id)}
                small
              />
            ))}
          </div>
        )}
      </div>

      <section className="section products-section">
        <div className="products-container">
          {loading && (
            <div className="loading-center">
              <div className="spinner" />
              <p>Chargement des produits...</p>
            </div>
          )}

          {error && <div className="error-message products-error">{error}</div>}

          {!loading && !error && (
            <>
              <p className="products-count">
                {filtered.length} produit{filtered.length > 1 ? 's' : ''} trouvé{filtered.length > 1 ? 's' : ''}
                {search && (
                  <>
                    {' '}pour <strong>{search}</strong>
                  </>
                )}
              </p>

              {filtered.length === 0 ? (
                <div className="empty-state">
                  <div className="empty-icon">
                    <SearchIcon />
                  </div>
                  <h3>Aucun produit trouvé</h3>
                  <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>
                    Essayez de modifier vos filtres ou votre recherche.
                  </p>
                </div>
              ) : (
                <div className="products-grid">
                  {filtered.map((p) => (
                    <ProduitCard key={p.id} produit={p} />
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {!loading && types.length > 0 && (
        <section className="section products-types">
          <div className="products-container">
            <div className="reveal products-types-header">
              <div className="section-tag">Par catégorie</div>
              <h2 className="section-title">Parcourir par type de solution</h2>
            </div>

            <div className="types-grid">
              {types.map((t) => {
                const children = safeSousTypes.filter((st) => {
                  const parentId =
                    st?.type_produit_id ??
                    st?.typeProduit?.id ??
                    st?.type_produit?.id

                  return String(parentId) === String(t.id)
                })

                return (
                  <div key={t.id} className="type-card">
                    <Link to={`/produits/type/${t.slug}`} className="type-card-main">
                      <div>{t.nom}</div>
                      {t.description && <p>{t.description}</p>}
                      <span>
                        Voir les produits <ArrowIcon />
                      </span>
                    </Link>

                   
                    
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      )}

      <style>{`
        .products-search {
          position: relative;
          max-width: 460px;
          margin: 0 auto;
        }

        .products-search span {
          position: absolute;
          left: 1rem;
          top: 50%;
          transform: translateY(-50%);
          color: var(--n-gray);
          z-index: 1;
        }

        .products-search input {
          padding-left: 2.8rem;
          border-radius: 999px;
          background: #fff;
          box-shadow: 0 12px 30px rgba(17,17,17,0.06);
        }

        .products-filters {
          background: #fff;
          padding: 1.45rem 5%;
          border-bottom: 1px solid rgba(17,17,17,0.08);
          position: sticky;
          top: var(--nav-h);
          z-index: 30;
        }

        .products-filters-inner,
        .subtype-filter-inner {
          max-width: 1280px;
          margin: 0 auto;
          display: flex;
          gap: 0.6rem;
          flex-wrap: wrap;
          align-items: center;
        }

        .subtype-filter-inner {
          margin-top: 0.85rem;
          padding-top: 0.85rem;
          border-top: 1px solid rgba(17,17,17,0.07);
        }

        .subtype-label {
          font-size: 0.78rem;
          color: var(--n-gray);
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.07em;
          margin-right: 0.3rem;
        }

        .products-section {
          background: #fff;
        }

        .products-container {
          max-width: 1280px;
          margin: 0 auto;
        }

        .products-error {
          max-width: 420px;
          margin: 0 auto;
        }

        .products-count {
          font-size: 0.9rem;
          color: var(--n-gray);
          margin-bottom: 2rem;
          font-weight: 700;
        }

        .products-count strong {
          color: var(--n-orange);
        }

        .products-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
          gap: 1.35rem;
        }

        .products-types {
          background: #f5f5f5;
        }

        .products-types-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .types-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
          gap: 1rem;
        }

        .type-card {
          background: #fff;
          border: 1px solid rgba(17,17,17,0.08);
          border-radius: var(--radius-md);
          padding: 1.4rem 1.2rem;
          transition: var(--transition);
          box-shadow: 0 10px 24px rgba(17,17,17,0.04);
        }

        .type-card:hover {
          transform: translateY(-4px);
          border-color: rgba(255,75,43,0.28);
          box-shadow: 0 18px 42px rgba(17,17,17,0.08);
        }

        .type-card-main {
          display: block;
          text-decoration: none;
        }

        .type-card-main div {
          font-family: var(--font-head);
          font-size: 1rem;
          font-weight: 800;
          color: #111;
          margin-bottom: 0.45rem;
        }

        .type-card-main p {
          font-size: 0.84rem;
          color: var(--n-gray);
          line-height: 1.55;
        }

        .type-card-main span {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          margin-top: 0.9rem;
          font-size: 0.82rem;
          color: var(--n-orange);
          font-weight: 800;
        }

        .type-sub-list {
          margin-top: 1rem;
          padding-top: 0.9rem;
          border-top: 1px solid rgba(17,17,17,0.08);
          display: flex;
          flex-direction: column;
          gap: 0.45rem;
        }

        .type-sub-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.45rem 0.6rem;
          border-radius: 8px;
          font-size: 0.82rem;
          font-weight: 700;
          color: #374151;
          text-decoration: none;
          background: #fafafa;
          border: 1px solid rgba(17,17,17,0.06);
          transition: 0.2s;
        }

        .type-sub-link:hover {
          color: var(--n-orange);
          background: #fff2ee;
          border-color: rgba(255,75,43,0.18);
        }
      `}</style>
    </Layout>
  )
}

function FilterTab({ label, active, onClick, small = false }) {
  return (
    <button onClick={onClick} className={active ? 'filter-tab active' : 'filter-tab'}>
      {label}

      <style>{`
        .filter-tab {
          padding: ${small ? '0.38rem 0.8rem' : '0.5rem 1rem'};
          border-radius: 999px;
          font-size: ${small ? '0.78rem' : '0.86rem'};
          font-weight: 800;
          border: 1px solid rgba(17,17,17,0.1);
          background: #fff;
          color: #263241;
          cursor: pointer;
          transition: var(--transition);
          font-family: var(--font-body);
        }

        .filter-tab:hover,
        .filter-tab.active {
          border-color: var(--n-orange);
          background: var(--n-orange);
          color: #fff;
        }
      `}</style>
    </button>
  )
}

function SearchIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </svg>
  )
}

function ArrowIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 12 12" fill="none">
      <path
        d="M2 6h8M6 2l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}