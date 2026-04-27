import { Link } from 'react-router-dom'

export default function CtaSection() {
  return (
    <section className="section cta-orange">
      <div className="cta-bg-circle one" />
      <div className="cta-bg-circle two" />

      <div className="cta-box reveal">
        <div className="section-tag">Passez à l'action</div>

        <h2 className="section-title">
          Prêt à transformer votre
          <br />
          <span className="accent">communication digitale ?</span>
        </h2>

        <p className="section-sub">
          Demandez une démonstration et découvrez comment Nexav peut adapter
          l’affichage dynamique aux besoins de votre entreprise.
        </p>

        <div className="cta-actions">
          <Link to="/contact#demande-form" className="btn btn-primary btn-lg">
            Demander une démo
          </Link>

          <Link to="/contact#demande-form" className="btn btn-secondary btn-lg">
            Parler à un conseiller
          </Link>
        </div>

        <div className="cta-badges">
          {[
            { label: 'Réponse sous 24h' },
            { label: 'Conseil gratuit' },
            { label: 'Solution sur mesure' },
          ].map((b) => (
            <div key={b.label} className="cta-badge">
              <CheckIcon />
              <span>{b.label}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .cta-orange {
          position: relative;
          overflow: hidden;
          background: #fff7f4;
        }

        .cta-bg-circle {
          position: absolute;
          border-radius: 50%;
          background: rgba(255,75,43,0.12);
          pointer-events: none;
        }

        .cta-bg-circle.one {
          width: 420px;
          height: 420px;
          top: -180px;
          left: 8%;
        }

        .cta-bg-circle.two {
          width: 300px;
          height: 300px;
          bottom: -140px;
          right: 10%;
        }

        .cta-box {
          max-width: 860px;
          margin: 0 auto;
          text-align: center;
          background: #fff;
          border: 1px solid rgba(17,17,17,0.08);
          border-radius: 32px;
          padding: clamp(2rem, 5vw, 4rem);
          box-shadow: 0 22px 60px rgba(17,17,17,0.08);
          position: relative;
          z-index: 1;
        }

        .cta-box .section-sub {
          max-width: 560px;
          margin: 0 auto 2.3rem;
        }

        .cta-actions {
          display: flex;
          justify-content: center;
          gap: 1rem;
          flex-wrap: wrap;
          margin-bottom: 2rem;
        }

        .cta-badges {
          display: flex;
          justify-content: center;
          gap: 1.2rem;
          flex-wrap: wrap;
        }

        .cta-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          font-size: 0.86rem;
          font-weight: 700;
          color: #263241;
        }

        .cta-badge svg {
          color: var(--n-orange);
        }

        @media (max-width: 620px) {
          .cta-actions {
            flex-direction: column;
          }

          .cta-box {
            border-radius: 24px;
          }
        }
      `}</style>
    </section>
  )
}

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path
        d="M20 6 9 17l-5-5"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}