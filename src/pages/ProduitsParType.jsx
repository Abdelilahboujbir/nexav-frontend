import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import Layout from '../components/layout/Layout'
import PageHeader from '../components/ui/PageHeader'
import ProduitCard from '../components/ui/ProduitCard'
import { getProduits } from '../api/produits'
import { getTypesProduits } from '../api/typesProduits'
import { getSousTypesProduits } from '../api/sousTypesProduits'

export default function ProduitsParType() {
  const { slug } = useParams()

  const [type, setType] = useState(null)
  const [produits, setProduits] = useState([])
  const [allTypes, setAllTypes] = useState([])
  const [sousTypes, setSousTypes] = useState([])
  const [activeSousType, setActiveSousType] = useState('all')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    setLoading(true)
    setError('')
    setActiveSousType('all')

    Promise.all([getProduits(), getTypesProduits(), getSousTypesProduits()])
      .then(([pRes, tRes, stRes]) => {
        const typesData = Array.isArray(tRes.data) ? tRes.data : tRes.data.types || []
        const produitsData = Array.isArray(pRes.data) ? pRes.data : pRes.data.produits || []
        const sousTypesData = Array.isArray(stRes.data) ? stRes.data : stRes.data.sous_types || []

        const foundType = typesData.find((t) => t.slug === slug)

        setAllTypes(typesData)
        setType(foundType || null)
        setSousTypes(sousTypesData)

        if (!foundType) {
          setProduits([])
          return
        }

        const filtered = produitsData.filter((p) => {
          const sameTypeId = String(p.type_produit_id) === String(foundType.id)
          const sameTypeSlug = p.type_produit?.slug === slug || p.typeProduit?.slug === slug
          return (sameTypeId || sameTypeSlug) && p.actif !== false
        })

        setProduits(filtered)
      })
      .catch(() => setError('Impossible de charger cette catégorie.'))
      .finally(() => setLoading(false))
  }, [slug])

  const sousTypesOfType = sousTypes.filter((st) => {
    const parentId = st.type_produit_id || st.typeProduit?.id || st.type_produit?.id
    return type && String(parentId) === String(type.id)
  })

  const filteredProduits = produits.filter((p) => {
    if (activeSousType === 'all') return true
    return String(p.sous_type_produit_id) === String(activeSousType)
  })

  return (
    <Layout>
      <PageHeader
        tag="Catégorie"
        title={type ? type.nom : 'Solutions'}
        subtitle={type?.description || 'Découvrez nos produits par catégorie.'}
      >
        <Link to="/produits" style={{ color: 'var(--n-orange)', fontWeight: 800 }}>
          ← Retour au catalogue
        </Link>
      </PageHeader>

      {allTypes.length > 0 && (
        <div className="type-filter-bar">
          <div className="type-filter-inner">
            <span>Catégories :</span>

            {allTypes.map((t) => (
              <Link
                key={t.id}
                to={`/produits/type/${t.slug}`}
                className={t.slug === slug ? 'type-filter active' : 'type-filter'}
              >
                {t.nom}
              </Link>
            ))}
          </div>

          {sousTypesOfType.length > 0 && (
            <div className="subtype-filter-inner">
              <span>Sous-types :</span>

              <button
                onClick={() => setActiveSousType('all')}
                className={activeSousType === 'all' ? 'type-filter active small' : 'type-filter small'}
              >
                Tous
              </button>

              {sousTypesOfType.map((st) => (
                <button
                  key={st.id}
                  onClick={() => setActiveSousType(st.id)}
                  className={String(activeSousType) === String(st.id) ? 'type-filter active small' : 'type-filter small'}
                >
                  {st.nom}
                </button>
              ))}
            </div>
          )}
        </div>
      )}

      <section className="section produits-type-section">
        <div className="produits-type-container">
          {loading && (
            <div className="loading-center">
              <div className="spinner" />
              <p>Chargement...</p>
            </div>
          )}

          {error && (
            <div className="error-message" style={{ maxWidth: 420, margin: '0 auto' }}>
              {error}
            </div>
          )}

          {!loading && !error && filteredProduits.length === 0 && (
            <div className="empty-state">
              <h3>Aucun produit dans cette catégorie</h3>
              <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>
                Essayez un autre sous-type.
              </p>
              <Link to="/produits" className="btn btn-secondary btn-sm" style={{ marginTop: '1.5rem' }}>
                Voir tous les produits
              </Link>
            </div>
          )}

          {!loading && !error && filteredProduits.length > 0 && (
            <>
              <p className="products-count">
                {filteredProduits.length} produit{filteredProduits.length > 1 ? 's' : ''} disponible{filteredProduits.length > 1 ? 's' : ''}
              </p>

              <div className="products-grid">
                {filteredProduits.map((p) => (
                  <ProduitCard key={p.id} produit={p} />
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      <style>{`
        .type-filter-bar {
          background: #fff;
          padding: 1.4rem 5%;
          border-bottom: 1px solid rgba(17,17,17,0.08);
          position: sticky;
          top: var(--nav-h);
          z-index: 30;
        }

        .type-filter-inner,
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

        .type-filter-inner span,
        .subtype-filter-inner span {
          font-size: 0.78rem;
          color: var(--n-gray);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          font-weight: 800;
          margin-right: 0.5rem;
        }

        .type-filter {
          padding: 0.45rem 1rem;
          border-radius: 999px;
          font-size: 0.84rem;
          font-weight: 800;
          border: 1px solid rgba(17,17,17,0.1);
          background: #fff;
          color: #263241;
          transition: var(--transition);
          text-decoration: none;
          cursor: pointer;
          font-family: var(--font-body);
        }

        .type-filter.small {
          padding: 0.35rem 0.8rem;
          font-size: 0.78rem;
        }

        .type-filter:hover,
        .type-filter.active {
          background: var(--n-orange);
          border-color: var(--n-orange);
          color: #fff;
        }

        .produits-type-section {
          background: #fff;
        }

        .produits-type-container {
          max-width: 1280px;
          margin: 0 auto;
        }

        .products-count {
          font-size: 0.9rem;
          color: var(--n-gray);
          margin-bottom: 2rem;
          font-weight: 700;
        }

        .products-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
          gap: 1.35rem;
        }
      `}</style>
    </Layout>
  )
}