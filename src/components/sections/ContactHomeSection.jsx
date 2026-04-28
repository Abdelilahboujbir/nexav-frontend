import DemandeForm from '../ui/DemandeForm'

export default function ContactHomeSection() {
  return (
    <section className="section contact-home-light">
      <div className="contact-container">
        <div className="contact-grid">
          <div className="reveal">
            <div className="section-tag">Contact</div>
            <h2 className="section-title">
              Parlons de
              <br />
              <span className="accent">votre projet</span>
            </h2>

            <p className="section-sub contact-sub">
              Décrivez-nous vos besoins et un expert Nexav vous recontacte sous 24h
              pour construire votre solution sur mesure.
            </p>

            <div className="contact-list">
              {[
                { icon: 'pin', label: 'Adresse', value: 'Casablanca, Maroc' },
                { icon: 'mail', label: 'E-mail', value: 'contact@nexav.ma' },
                { icon: 'phone', label: 'Téléphone', value: '+212 645 56 33 87' },
              ].map((d) => (
                <div key={d.label} className="contact-item">
                  <div className="contact-icon">
                    <InfoIcon name={d.icon} />
                  </div>
                  <div>
                    <div className="contact-label">{d.label}</div>
                    <div className="contact-value">{d.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="contact-badges">
              {[
                { icon: 'time', text: 'Réponse sous 24h garantie' },
                { icon: 'target', text: 'Conseils personnalisés gratuits' },
                { icon: 'lock', text: 'Données confidentielles' },
              ].map((b) => (
                <div key={b.text} className="contact-badge">
                  <InfoIcon name={b.icon} small />
                  <span>{b.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal reveal-delay-2 contact-form-box">
            <DemandeForm />
          </div>
        </div>
      </div>

      <style>{`
        .contact-home-light {
          background: #f5f5f5;
          position: relative;
          overflow: hidden;
        }

        .contact-container {
          max-width: 1280px;
          margin: 0 auto;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(0, 1.35fr);
          gap: 5rem;
          align-items: start;
        }

        .contact-sub {
          margin-bottom: 2.5rem;
        }

        .contact-list {
          display: flex;
          flex-direction: column;
          gap: 1.3rem;
        }

        .contact-item {
          display: flex;
          gap: 0.9rem;
          align-items: flex-start;
        }

        .contact-icon {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          background: #fff;
          border: 1px solid rgba(255,75,43,0.18);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--n-orange);
          flex-shrink: 0;
          box-shadow: 0 10px 25px rgba(17,17,17,0.05);
        }

        .contact-label {
          font-size: 0.72rem;
          color: var(--n-gray);
          text-transform: uppercase;
          letter-spacing: 0.07em;
          margin-bottom: 0.2rem;
          font-weight: 800;
        }

        .contact-value {
          font-size: 0.95rem;
          color: #111;
          overflow-wrap: anywhere;
          font-weight: 700;
        }

        .contact-badges {
          margin-top: 2rem;
          padding: 1.25rem;
          background: #fff;
          border: 1px solid rgba(17,17,17,0.08);
          border-radius: var(--radius-md);
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          box-shadow: 0 14px 35px rgba(17,17,17,0.05);
        }

        .contact-badge {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-size: 0.88rem;
          color: #263241;
          font-weight: 700;
        }

        .contact-badge svg {
          color: var(--n-orange);
          flex-shrink: 0;
        }

        .contact-form-box > div {
          background: #fff !important;
          border-color: rgba(17,17,17,0.1) !important;
          box-shadow: 0 22px 60px rgba(17,17,17,0.08);
        }

        @media (max-width: 980px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
        }

        @media (max-width: 520px) {
          .contact-badges {
            padding: 1rem;
          }

          .contact-icon {
            width: 38px;
            height: 38px;
          }
        }
      `}</style>
    </section>
  )
}

function InfoIcon({ name, small = false }) {
  const size = small ? 16 : 19

  const common = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  }

  if (name === 'pin') {
    return (
      <svg {...common}>
        <path d="M12 21s7-5.2 7-12a7 7 0 1 0-14 0c0 6.8 7 12 7 12Z" />
        <circle cx="12" cy="9" r="2.3" />
      </svg>
    )
  }

  if (name === 'mail') {
    return (
      <svg {...common}>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m4 7 8 6 8-6" />
      </svg>
    )
  }

  if (name === 'phone') {
    return (
      <svg {...common}>
        <path d="M22 16.9v2.3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 3.8 2 2 0 0 1 4.1 1.6h2.3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.6a2 2 0 0 1-.5 2.1l-1 1a16 16 0 0 0 6 6l1-1a2 2 0 0 1 2.1-.5c.8.3 1.7.6 2.6.7a2 2 0 0 1 1.7 2Z" />
      </svg>
    )
  }

  if (name === 'time') {
    return (
      <svg {...common}>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </svg>
    )
  }

  if (name === 'target') {
    return (
      <svg {...common}>
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="12" cy="12" r="1.5" />
      </svg>
    )
  }

  return (
    <svg {...common}>
      <rect x="5" y="11" width="14" height="10" rx="2" />
      <path d="M8 11V8a4 4 0 0 1 8 0v3" />
    </svg>
  )
}