import { Link } from 'react-router-dom'
import { assetUrl } from '../../api/assets'

export default function ProduitCard({ produit }) {
  const imgSrc = produit.image_principale
  ? assetUrl(produit.image_principale)
  : null

  return (
    <Link
      to={`/produits/${produit.id}`}
      className="product-card"
    >
      <div className="product-card-image">
        {imgSrc ? (
          <div
            className="card-img-wrap"
            style={{ backgroundImage: `url(${imgSrc})` }}
          />
        ) : (
          <div className="product-card-placeholder">
            <ScreenIcon />
          </div>
        )}

        {(produit.type_produit || produit.typeProduit) && (
          <div className="product-card-badge">
            {(produit.type_produit || produit.typeProduit).nom}
          </div>
        )}
      </div>

      <div className="product-card-content">
        <h3>{produit.nom}</h3>

        {produit.description_courte && (
          <p>{produit.description_courte}</p>
        )}

        <div className="product-card-footer">
          <span>
            Voir les détails
            <ArrowIcon />
          </span>

          {produit.video_url && (
            <small>Vidéo dispo.</small>
          )}
        </div>
      </div>

      <style>{`
        .product-card {
          display: flex;
          flex-direction: column;
          background: #fff;
          border: 1px solid rgba(17,17,17,0.08);
          border-radius: var(--radius-lg);
          overflow: hidden;
          text-decoration: none;
          color: inherit;
          cursor: pointer;
          transition: 0.25s ease;
          box-shadow: 0 10px 26px rgba(17,17,17,0.05);
        }

        .product-card:hover {
          transform: translateY(-5px);
          border-color: rgba(255,75,43,0.25);
          box-shadow: 0 18px 42px rgba(17,17,17,0.1);
        }

        .product-card:hover .card-img-wrap {
          transform: scale(1.04);
        }

        .product-card-image {
          height: 170px;
          overflow: hidden;
          background: #f3f4f6;
          position: relative;
          flex-shrink: 0;
        }

        .card-img-wrap {
          width: 100%;
          height: 100%;
          background-size: cover;
          background-position: center;
          transition: transform 0.45s ease;
        }

        .product-card-placeholder {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--n-orange);
          background: #f6f6f6;
        }

        .product-card-badge {
          position: absolute;
          top: 0.75rem;
          left: 0.75rem;
          background: rgba(17,17,17,0.75);
          border-radius: 999px;
          padding: 0.25rem 0.7rem;
          font-size: 0.7rem;
          font-weight: 800;
          color: #fff;
          backdrop-filter: blur(8px);
        }

        .product-card-content {
          padding: 1.1rem 1.2rem 1.2rem;
          display: flex;
          flex-direction: column;
        }

        .product-card-content h3 {
          font-family: var(--font-head);
          font-size: 1rem;
          font-weight: 800;
          color: #111;
          line-height: 1.35;
          margin-bottom: 0.55rem;
        }

        .product-card-content p {
          font-size: 0.84rem;
          color: var(--n-gray);
          line-height: 1.55;
          margin-bottom: 1rem;
        }

        .product-card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.8rem;
          margin-top: 0.6rem;
          padding-top: 0.85rem;
          border-top: 1px solid rgba(17,17,17,0.07);
        }

        .product-card-footer span {
          font-size: 0.82rem;
          color: var(--n-orange);
          font-weight: 800;
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
        }

        .product-card-footer small {
          font-size: 0.72rem;
          color: var(--n-gray);
          white-space: nowrap;
        }
      `}</style>
    </Link>
  )
}

function ArrowIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <path
        d="M2 6h8M6 2l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ScreenIcon() {
  return (
    <svg width="38" height="38" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="5" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.7" />
      <path d="M8 21h8M12 17v4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  )
}