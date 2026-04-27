import { Link } from 'react-router-dom'

export default function Footer() {
  const year = new Date().getFullYear()

  const cols = [
    {
      title: 'Solutions',
      links: [
        { label: 'Tous les produits', to: '/produits' },
        { label: 'Audiovisuel', to: '/produits/type/audiovisuel' },
        { label: 'Écrans', to: '/produits/type/ecrans' },
        { label: 'Logiciels', to: '/produits/type/logiciels' },
      ],
    },
    {
      title: 'Secteurs',
      links: [
        { label: 'Éducation', to: '/contact?secteur=Éducation#demande-form' },
        { label: 'Entreprise', to: '/contact?secteur=Entreprise#demande-form' },
        { label: 'Restauration', to: '/contact?secteur=Restauration#demande-form' },
        { label: 'Points de vente', to: '/contact?secteur=Point de vente#demande-form' },
        { label: 'Santé', to: '/contact?secteur=Établissement de santé#demande-form' },
        { label: 'Administration', to: '/contact?secteur=Administration#demande-form' },
      ],
    },
    {
      title: 'Nexav',
      links: [
        { label: 'Accueil', to: '/' },
        { label: 'Nos produits', to: '/produits' },
        { label: 'Contact', to: '/contact#demande-form' },
        { label: 'Demander une démo', to: '/contact#demande-form' },
      ],
    },
  ]

  return (
    <footer className="footer-light">
      <div className="footer-container">
        <div className="footer-grid">
          <div>
            <Link to="/" className="footer-brand">
              <span className="footer-brand-icon">
                <ScreenIcon />
              </span>
              <span>
                <strong>NEXAV</strong>
                <small>DIGITAL SOLUTIONS</small>
              </span>
            </Link>

            <p className="footer-desc">
              Solutions d'affichage dynamique et digital pour les entreprises
              modernes. Pilotez vos écrans, amplifiez votre message.
            </p>

            <div className="footer-socials">
              {['Li', 'In', 'Fb'].map((s) => (
                <a key={s} href="#">
                  {s}
                </a>
              ))}
            </div>
          </div>

          {cols.map((col) => (
            <div key={col.title}>
              <h4>{col.title}</h4>

              <ul>
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link to={l.to}>{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer-cta">
          <div>
            <p>Un projet en tête ?</p>
            <span>Parlez-nous de votre besoin et recevez une réponse rapide.</span>
          </div>

          <Link to="/contact#demande-form" className="btn btn-primary btn-sm">
            Demander une démo
          </Link>
        </div>

        <div className="footer-bottom">
          <p>© {year} Nexav — Tous droits réservés. Casablanca, Maroc.</p>

          <div>
            {['Mentions légales', 'Politique de confidentialité', 'CGU'].map((t) => (
              <a key={t} href="#">
                {t}
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .footer-light {
          background: #ffffff;
          border-top: 1px solid rgba(17,17,17,0.08);
          padding: 4rem 5% 2rem;
        }

        .footer-container {
          max-width: 1280px;
          margin: 0 auto;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 3rem;
          margin-bottom: 3rem;
        }

        .footer-brand {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1rem;
          color: #111;
        }

        .footer-brand-icon {
          width: 36px;
          height: 36px;
          border-radius: 9px;
          background: var(--n-orange);
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .footer-brand span:last-child {
          display: flex;
          flex-direction: column;
          line-height: 1;
        }

        .footer-brand strong {
          font-family: var(--font-head);
          font-size: 1.15rem;
          font-weight: 800;
        }

        .footer-brand small {
          margin-top: 0.25rem;
          font-size: 0.58rem;
          font-weight: 800;
          color: var(--n-orange);
          letter-spacing: 0.05em;
        }

        .footer-desc {
          font-size: 0.9rem;
          color: var(--n-gray);
          line-height: 1.65;
          max-width: 330px;
        }

        .footer-socials {
          display: flex;
          gap: 0.6rem;
          margin-top: 1.5rem;
        }

        .footer-socials a {
          width: 34px;
          height: 34px;
          border-radius: 999px;
          background: #f4f4f4;
          border: 1px solid rgba(17,17,17,0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.72rem;
          font-weight: 800;
          color: #111;
          transition: var(--transition);
        }

        .footer-socials a:hover {
          background: var(--n-orange);
          color: #fff;
          border-color: var(--n-orange);
        }

        .footer-grid h4 {
          font-family: var(--font-head);
          font-size: 0.78rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: #111;
          margin-bottom: 1.2rem;
        }

        .footer-grid ul {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
        }

        .footer-grid li a {
          font-size: 0.9rem;
          color: var(--n-gray);
          transition: var(--transition);
        }

        .footer-grid li a:hover {
          color: var(--n-orange);
        }

        .footer-cta {
          margin-top: 2.5rem;
          padding: 1.35rem 1.2rem;
          background: #fff7f4;
          border: 1px solid rgba(255,75,43,0.16);
          border-radius: var(--radius-lg);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .footer-cta p {
          font-family: var(--font-head);
          font-weight: 800;
          color: #111;
          font-size: 1rem;
          margin-bottom: 0.25rem;
        }

        .footer-cta span {
          font-size: 0.88rem;
          color: var(--n-gray);
        }

        .footer-bottom {
          border-top: 1px solid rgba(17,17,17,0.08);
          padding-top: 1.5rem;
          margin-top: 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 0.75rem;
        }

        .footer-bottom p,
        .footer-bottom a {
          font-size: 0.78rem;
          color: #8a8a8a;
        }

        .footer-bottom div {
          display: flex;
          gap: 1.2rem;
          flex-wrap: wrap;
        }

        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
          }
        }

        @media (max-width: 600px) {
          .footer-grid {
            grid-template-columns: 1fr;
          }

          .footer-cta .btn {
            width: 100%;
          }
        }
      `}</style>
    </footer>
  )
}

function ScreenIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="5" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="2" />
      <path d="M8 21h8M12 17v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}