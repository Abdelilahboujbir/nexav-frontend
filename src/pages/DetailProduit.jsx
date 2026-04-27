import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import Layout from '../components/layout/Layout'
import DemandeForm from '../components/ui/DemandeForm'
import { getProduit } from '../api/produits'

export default function DetailProduit() {
  const { id } = useParams()
  const [produit, setProduit] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [activeMedia, setActiveMedia] = useState(null)

  useEffect(() => {
    getProduit(id)
      .then((r) => {
        const data = r.data?.produit || r.data
        setProduit(data)

        const medias = data.media_produits || data.mediaProduits || []
        const firstImg = medias.find((m) => m.type_media === 'image')

        setActiveMedia(
          firstImg
            ? `/storage/${firstImg.chemin_media}`
            : data.image_principale
              ? `/storage/${data.image_principale}`
              : null
        )
      })
      .catch(() => setError('Produit introuvable.'))
      .finally(() => setLoading(false))
  }, [id])

  if (loading) {
    return (
      <Layout>
        <div className="loading-center" style={{ minHeight: '100vh' }}>
          <div className="spinner" />
          <p>Chargement du produit...</p>
        </div>
      </Layout>
    )
  }

  if (error || !produit) {
    return (
      <Layout>
        <div className="loading-center" style={{ minHeight: '100vh' }}>
          <div className="empty-state">
            <div className="empty-icon">!</div>
            <h3>{error || 'Produit introuvable'}</h3>
            <Link to="/produits" className="btn btn-secondary btn-sm" style={{ marginTop: '1.5rem' }}>
              Retour aux produits
            </Link>
          </div>
        </div>
      </Layout>
    )
  }

  const medias = produit.media_produits || produit.mediaProduits || []
  const images = medias.filter((m) => m.type_media === 'image')
  const videos = medias.filter((m) => m.type_media === 'video')

  return (
    <Layout>
      <div className="product-breadcrumb">
        <div className="product-breadcrumb-inner">
          <Link to="/">Accueil</Link>
          <span>›</span>
          <Link to="/produits">Produits</Link>
          {produit.type_produit && (
            <>
              <span>›</span>
              <Link to={`/produits/type/${produit.type_produit.slug}`}>
                {produit.type_produit.nom}
              </Link>
            </>
          )}
          <span>›</span>
          <strong>{produit.nom}</strong>
        </div>
      </div>

      <section className="section product-detail-light">
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div className="product-detail-grid">
            <div className="product-media">
              <div className="product-main-image">
                {activeMedia ? (
                  <img src={activeMedia} alt={produit.nom} />
                ) : (
                  <ScreenIcon />
                )}
              </div>

              {(produit.image_principale || images.length > 0) && (
                <div className="product-thumbs">
                  {produit.image_principale && (
                    <Thumb
                      src={`/storage/${produit.image_principale}`}
                      active={activeMedia === `/storage/${produit.image_principale}`}
                      onClick={() => setActiveMedia(`/storage/${produit.image_principale}`)}
                    />
                  )}

                  {images.map((m) => (
                    <Thumb
                      key={m.id}
                      src={`/storage/${m.chemin_media}`}
                      active={activeMedia === `/storage/${m.chemin_media}`}
                      onClick={() => setActiveMedia(`/storage/${m.chemin_media}`)}
                    />
                  ))}
                </div>
              )}

              {(produit.video_url || videos.length > 0) && (
                <div className="product-videos">
                  <div className="product-video-label">Vidéos</div>
                  {produit.video_url && <VideoPlayer url={produit.video_url} title={produit.nom} />}
                  {videos.map((v) => (
                    <VideoPlayer key={v.id} url={`/storage/${v.chemin_media}`} title={produit.nom} />
                  ))}
                </div>
              )}
            </div>

            <div className="product-info">
              {produit.type_produit && (
                <Link to={`/produits/type/${produit.type_produit.slug}`} className="badge badge-cyan">
                  {produit.type_produit.nom}
                </Link>
              )}

              <h1>{produit.nom}</h1>

              {produit.description_courte && (
                <p className="product-short">{produit.description_courte}</p>
              )}

              <div className="product-status">
                <span className={`badge ${produit.actif ? 'badge-green' : 'badge-gray'}`}>
                  {produit.actif ? 'Disponible' : 'Indisponible'}
                </span>
              </div>

              {produit.description_longue && (
                <div className="product-long">
                  <h3>Description détaillée</h3>
                  <div>{produit.description_longue}</div>
                </div>
              )}

              <div className="product-actions">
                <a href="#demande" className="btn btn-primary">
                  Demander une démonstration
                </a>
                <Link to="/contact#demande-form" className="btn btn-secondary">
                  Poser une question
                </Link>
              </div>
            </div>
          </div>

          <div id="demande" className="product-form-block">
            <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
              <div className="section-tag">Intéressé ?</div>
              <h2 className="section-title">Demander une démonstration</h2>
              <p className="section-sub" style={{ maxWidth: 480, margin: '0 auto' }}>
                Remplissez le formulaire et notre équipe vous contactera sous 24h.
              </p>
            </div>

            <DemandeForm produitId={produit.id} produitName={produit.nom} />
          </div>
        </div>
      </section>

      <style>{`
        .product-detail-light {
          background: #ffffff;
        }

        .product-breadcrumb {
          padding: calc(var(--nav-h) + 2rem) 5% 1.2rem;
          background: #fff;
          border-bottom: 1px solid rgba(17,17,17,0.06);
        }

        .product-breadcrumb-inner {
          max-width: 1280px;
          margin: 0 auto;
          display: flex;
          gap: 0.5rem;
          align-items: center;
          flex-wrap: wrap;
          font-size: 0.82rem;
          color: var(--n-gray);
        }

        .product-breadcrumb-inner a {
          color: var(--n-gray);
        }

        .product-breadcrumb-inner strong {
          color: #111;
        }

        .product-detail-grid {
          display: grid;
          grid-template-columns: minmax(0, 1.05fr) minmax(0, 0.95fr);
          gap: 5.5rem;
          margin-bottom: 6rem;
          align-items: start;
        }

        .product-media,
        .product-info {
          min-width: 0;
        }

        .product-main-image {
          height: 430px;
          border-radius: var(--radius-xl);
          overflow: hidden;
          background: #f4f4f4;
          border: 1px solid rgba(17,17,17,0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--n-orange);
          box-shadow: 0 18px 45px rgba(17,17,17,0.08);
        }

        .product-main-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .product-thumbs {
          display: flex;
          gap: 0.75rem;
          flex-wrap: wrap;
          margin-top: 1.2rem;
        }

        .product-videos {
          margin-top: 2.2rem;
        }

        .product-video-label {
          font-size: 0.78rem;
          color: var(--n-gray);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          font-weight: 800;
          margin-bottom: 0.8rem;
        }

        .product-info {
          padding-top: 1.2rem;
        }

        .product-info h1 {
          font-family: var(--font-head);
          font-size: clamp(2rem, 4vw, 3.2rem);
          line-height: 1.08;
          color: #111;
          margin: 1.4rem 0 1.4rem;
          font-weight: 900;
          letter-spacing: -0.04em;
        }

        .product-short {
          color: var(--n-gray);
          font-size: 1.08rem;
          line-height: 1.9;
          margin-bottom: 1.6rem;
        }

        .product-status {
          display: flex;
          gap: 0.6rem;
          margin-bottom: 2.4rem;
          flex-wrap: wrap;
        }

        .product-long {
          background: #fff;
          border: 1px solid rgba(17,17,17,0.08);
          border-radius: var(--radius-lg);
          padding: 1.5rem;
          margin-bottom: 2.4rem;
          box-shadow: 0 12px 30px rgba(17,17,17,0.05);
        }

        .product-long h3 {
          color: #111;
          font-family: var(--font-head);
          font-size: 1rem;
          font-weight: 800;
          margin-bottom: 0.9rem;
        }

        .product-long div {
          color: #444;
          line-height: 1.85;
          font-size: 0.95rem;
        }

        .product-actions {
          display: flex;
          gap: 0.9rem;
          flex-wrap: wrap;
          margin-top: 0.5rem;
        }

        .product-form-block {
          max-width: 760px;
          margin: 0 auto;
          scroll-margin-top: 100px;
        }

        .badge-cyan {
          background: #fff3ef;
          border: 1px solid rgba(255,75,43,0.2);
          color: var(--n-orange);
        }

        .badge-green {
          background: #ecfdf5;
          color: #059669;
        }

        .badge-gray {
          background: #f3f4f6;
          color: #6b7280;
        }

        @media (max-width: 900px) {
          .product-detail-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }

          .product-main-image {
            height: 330px;
          }

          .product-info {
            padding-top: 0;
          }
        }

        @media (max-width: 520px) {
          .product-main-image {
            height: 250px;
          }

          .product-actions {
            flex-direction: column;
          }

          .product-actions .btn {
            width: 100%;
          }
        }
      `}</style>
    </Layout>
  )
}

function Thumb({ src, active, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        width: 78,
        height: 58,
        borderRadius: 10,
        overflow: 'hidden',
        border: `2px solid ${active ? 'var(--n-orange)' : 'rgba(17,17,17,0.12)'}`,
        cursor: 'pointer',
        flexShrink: 0,
        transition: 'border-color 0.2s',
        backgroundImage: `url(${src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: '#f4f4f4',
      }}
      aria-label="Changer l'image du produit"
    />
  )
}

function VideoPlayer({ url, title }) {
  const isYT = url.includes('youtube.com') || url.includes('youtu.be')
  const ytId = isYT ? url.match(/(?:v=|youtu\.be\/)([^&?/]+)/)?.[1] || '' : ''

  return (
    <div className="video-frame">
      {isYT ? (
        <iframe
          src={`https://www.youtube.com/embed/${ytId}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <video src={url} controls />
      )}

      <style>{`
        .video-frame {
          border-radius: 14px;
          overflow: hidden;
          background: #000;
          margin-bottom: 0.8rem;
          aspect-ratio: 16 / 9;
          position: relative;
          border: 1px solid rgba(17,17,17,0.08);
        }

        .video-frame iframe,
        .video-frame video {
          width: 100%;
          height: 100%;
          border: none;
          object-fit: contain;
        }
      `}</style>
    </div>
  )
}

function ScreenIcon() {
  return (
    <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="5" width="18" height="12" rx="2" />
      <path d="M8 21h8M12 17v4" />
    </svg>
  )
}