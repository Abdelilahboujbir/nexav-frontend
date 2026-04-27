const FEATURES = [
  {
    key: 'remote',
    title: 'Gestion à distance',
    desc: "Pilotez tous vos écrans depuis n'importe quel navigateur, où que vous soyez.",
  },
  {
    key: 'realtime',
    title: 'Mises à jour en temps réel',
    desc: 'Modifiez et diffusez vos contenus instantanément sans interruption.',
  },
  {
    key: 'schedule',
    title: 'Planification intelligente',
    desc: 'Programmez vos diffusions selon les jours, horaires et emplacements.',
  },
  {
    key: 'ready',
    title: 'Solution clé en main',
    desc: 'Installation rapide, interface simple et accompagnement adapté à votre besoin.',
  },
]

export default function SolutionSection() {
  return (
    <section className="section solution-light">
      <div className="solution-container">
        <div className="solution-grid">
          <div className="reveal">
            <div className="section-tag">La solution Nexav</div>
            <h2 className="section-title">
              Une plateforme centralisée,
              <br />
              un <span className="accent">contrôle total</span>
            </h2>
            <p className="section-sub solution-sub">
              Gérez votre parc d’écrans depuis un tableau de bord unique,
              accessible depuis n’importe quel appareil.
            </p>

            <div className="solution-features">
              {FEATURES.map((f) => (
                <div className="solution-feature" key={f.title}>
                  <div className="solution-icon">
                    <FeatureIcon name={f.key} />
                  </div>
                  <div>
                    <h4>{f.title}</h4>
                    <p>{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal reveal-delay-2 solution-panel-wrap">
            <div className="solution-panel">
              <div className="solution-panel-head">
                <div>
                  <span>Tableau de bord</span>
                  <strong>Gestion des diffusions</strong>
                </div>
                <button>Nouvelle diffusion</button>
              </div>

              <div className="solution-screens">
                {[
                  { name: 'Hall principal', on: true, pct: 92 },
                  { name: 'Vitrine nord', on: true, pct: 78 },
                  { name: 'Restaurant', on: true, pct: 61 },
                  { name: 'Salle conf.', on: false, pct: 0 },
                ].map((sc) => (
                  <div key={sc.name} className="solution-screen-card">
                    <div className="solution-screen-head">
                      <span>{sc.name}</span>
                      <span className={sc.on ? 'status-dot on' : 'status-dot'} />
                    </div>

                    <div className="progress-line">
                      <div style={{ width: `${sc.pct}%` }} />
                    </div>

                    <div className="solution-screen-status">
                      {sc.on ? `${sc.pct}% actif` : 'Hors ligne'}
                    </div>
                  </div>
                ))}
              </div>

              <div className="solution-broadcast">
                <div>
                  <span>Prochaine diffusion</span>
                  <strong>Campagne entreprise — 14h30</strong>
                </div>
                <p>dans 2h15</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .solution-light {
          background: #fff;
        }

        .solution-container {
          max-width: 1280px;
          margin: 0 auto;
        }

        .solution-grid {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
          gap: 5rem;
          align-items: center;
        }

        .solution-sub {
          margin-bottom: 2.5rem;
        }

        .solution-features {
          display: flex;
          flex-direction: column;
          gap: 0.9rem;
        }

        .solution-feature {
          display: flex;
          gap: 1rem;
          align-items: flex-start;
          padding: 1rem 1.2rem;
          background: #fff;
          border: 1px solid rgba(17,17,17,0.08);
          border-radius: var(--radius-md);
          transition: var(--transition);
          box-shadow: 0 10px 25px rgba(17,17,17,0.04);
        }

        .solution-feature:hover {
          transform: translateY(-3px);
          border-color: rgba(255,75,43,0.28);
          box-shadow: 0 16px 35px rgba(17,17,17,0.08);
        }

        .solution-icon {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: #fff3ef;
          border: 1px solid rgba(255,75,43,0.18);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--n-orange);
          flex-shrink: 0;
        }

        .solution-feature h4 {
          font-family: var(--font-head);
          font-size: 0.96rem;
          font-weight: 800;
          color: #111;
          margin-bottom: 0.25rem;
        }

        .solution-feature p {
          font-size: 0.86rem;
          color: var(--n-gray);
          line-height: 1.6;
        }

        .solution-panel-wrap {
          position: relative;
          min-width: 0;
        }

        .solution-panel-wrap::before {
          content: "";
          position: absolute;
          inset: -12%;
          background: radial-gradient(circle, rgba(255,75,43,0.16), transparent 62%);
          pointer-events: none;
        }

        .solution-panel {
          background: #fff;
          border: 1px solid rgba(17,17,17,0.1);
          border-radius: 26px;
          padding: 1.7rem;
          position: relative;
          overflow: hidden;
          box-shadow: 0 24px 70px rgba(17,17,17,0.12);
        }

        .solution-panel::before {
          content: "";
          position: absolute;
          top: 0;
          left: 12%;
          right: 12%;
          height: 4px;
          border-radius: 0 0 8px 8px;
          background: var(--n-orange);
        }

        .solution-panel-head {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
          flex-wrap: wrap;
        }

        .solution-panel-head span {
          display: block;
          color: var(--n-gray);
          font-size: 0.72rem;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          font-weight: 800;
          margin-bottom: 0.25rem;
        }

        .solution-panel-head strong {
          font-family: var(--font-head);
          color: #111;
          font-size: 1rem;
        }

        .solution-panel-head button {
          background: var(--n-orange);
          border: none;
          color: #fff;
          border-radius: 999px;
          padding: 0.45rem 0.9rem;
          font-size: 0.75rem;
          font-weight: 800;
        }

        .solution-screens {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 0.75rem;
          margin-bottom: 0.85rem;
        }

        .solution-screen-card {
          background: #f7f7f7;
          border: 1px solid rgba(17,17,17,0.08);
          border-radius: 14px;
          padding: 0.95rem;
          min-width: 0;
        }

        .solution-screen-head {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.55rem;
          font-size: 0.8rem;
          font-weight: 800;
          color: #111;
        }

        .status-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #9ca3af;
          flex-shrink: 0;
        }

        .status-dot.on {
          background: var(--n-orange);
          box-shadow: 0 0 0 4px rgba(255,75,43,0.12);
        }

        .progress-line {
          height: 5px;
          background: #e7e7e7;
          border-radius: 99px;
          overflow: hidden;
        }

        .progress-line > div {
          height: 100%;
          background: var(--n-orange);
          border-radius: 99px;
        }

        .solution-screen-status {
          font-size: 0.72rem;
          color: var(--n-gray);
          margin-top: 0.4rem;
          font-weight: 700;
        }

        .solution-broadcast {
          background: #fff7f4;
          border: 1px solid rgba(255,75,43,0.16);
          border-radius: 16px;
          padding: 0.9rem 1rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1rem;
        }

        .solution-broadcast span {
          display: block;
          font-size: 0.68rem;
          color: var(--n-gray);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          font-weight: 800;
          margin-bottom: 0.25rem;
        }

        .solution-broadcast strong {
          color: #111;
          font-size: 0.9rem;
        }

        .solution-broadcast p {
          color: var(--n-orange);
          font-weight: 800;
          font-size: 0.82rem;
          white-space: nowrap;
        }

        @media (max-width: 900px) {
          .solution-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
        }

        @media (max-width: 560px) {
          .solution-panel {
            padding: 1rem;
          }

          .solution-screens {
            grid-template-columns: 1fr;
          }

          .solution-broadcast {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>
    </section>
  )
}

function FeatureIcon({ name }) {
  const common = {
    width: 19,
    height: 19,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  }

  if (name === 'remote') {
    return (
      <svg {...common}>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c3 3.2 3 14.8 0 18M12 3c-3 3.2-3 14.8 0 18" />
      </svg>
    )
  }

  if (name === 'realtime') {
    return (
      <svg {...common}>
        <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" />
      </svg>
    )
  }

  if (name === 'schedule') {
    return (
      <svg {...common}>
        <rect x="3" y="4" width="18" height="17" rx="2" />
        <path d="M8 2v4M16 2v4M3 9h18" />
      </svg>
    )
  }

  return (
    <svg {...common}>
      <path d="M12 3 4 7v6c0 5 3.5 7.5 8 8 4.5-.5 8-3 8-8V7l-8-4Z" />
      <path d="m9 12 2 2 4-5" />
    </svg>
  )
}