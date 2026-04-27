const STEPS = [
  {
    num: '01',
    key: 'create',
    title: 'Créer',
    desc: 'Concevez vos visuels ou importez vos propres contenus. Templates professionnels inclus.',
  },
  {
    num: '02',
    key: 'program',
    title: 'Programmer',
    desc: 'Définissez les horaires, les écrans cibles et les règles de diffusion.',
  },
  {
    num: '03',
    key: 'broadcast',
    title: 'Diffuser',
    desc: 'Vos écrans se mettent à jour automatiquement, en temps réel, même à distance.',
  },
]

export default function ProcessSection() {
  return (
    <section className="section process-light">
      <div className="process-header reveal">
        <div className="section-tag">Comment ça marche</div>
        <h2 className="section-title">
          Simple. Rapide. <span className="accent">Efficace.</span>
        </h2>
        <p className="section-sub">
          Gérez vos écrans en 3 étapes depuis votre navigateur.
        </p>
      </div>

      <div className="process-steps">
        <div className="process-line" />

        {STEPS.map((step, i) => (
          <div key={step.num} className={`reveal reveal-delay-${i + 1} process-step`}>
            <div className="process-circle">
              <span>{step.num}</span>
              <div className="process-icon">
                <StepIcon name={step.key} />
              </div>
            </div>

            <h3>{step.title}</h3>
            <p>{step.desc}</p>
          </div>
        ))}
      </div>

      <div className="howit-wrap">
        <div className="reveal howit-grid">
          <div>
            <div className="section-tag">Votre solution en ligne</div>
            <h3 className="howit-title">
              Gérez depuis votre navigateur,
              <br />
              diffusez partout
            </h3>
            <p className="howit-text">
              Créez vos playlists et gérez vos écrans depuis votre PC ou tablette.
              Votre contenu est automatiquement affiché sur les écrans concernés.
            </p>

            <div className="howit-list">
              {[
                'Interface web accessible partout',
                'Aucune installation logicielle',
                'Compatible tous navigateurs',
                'Mises à jour automatiques',
              ].map((item) => (
                <div key={item} className="howit-item">
                  <span>✓</span>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="howit-visual">
            <div className="howit-screen-icon">
              <BrowserIcon />
            </div>
            <div className="howit-screen-title">Interface Nexav</div>
            <div className="howit-screen-text">Accessible depuis tout navigateur</div>

            <div className="howit-flow">
              <MiniIcon type="laptop" />
              <Line />
              <MiniIcon type="screen" />
              <Line />
              <MiniIcon type="mobile" />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .process-light {
          background: #f5f5f5;
        }

        .process-header {
          text-align: center;
          max-width: 620px;
          margin: 0 auto 4.5rem;
        }

        .process-steps {
          max-width: 1000px;
          margin: 0 auto;
          position: relative;
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 2.5rem;
        }

        .process-line {
          position: absolute;
          top: 40px;
          left: calc(16.67% + 20px);
          right: calc(16.67% + 20px);
          height: 2px;
          background: linear-gradient(90deg, var(--n-orange), #111);
          opacity: 0.18;
          z-index: 0;
        }

        .process-step {
          text-align: center;
          position: relative;
          z-index: 1;
        }

        .process-circle {
          width: 82px;
          height: 82px;
          border-radius: 50%;
          margin: 0 auto 1.75rem;
          background: #fff;
          border: 2px solid rgba(255,75,43,0.22);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: var(--n-orange);
          box-shadow: 0 16px 35px rgba(17,17,17,0.08);
        }

        .process-circle span {
          font-family: var(--font-head);
          font-size: 1.35rem;
          font-weight: 800;
          line-height: 1;
        }

        .process-icon {
          margin-top: 0.2rem;
          color: #111;
        }

        .process-step h3 {
          font-family: var(--font-head);
          font-size: 1.22rem;
          font-weight: 800;
          color: #111;
          margin-bottom: 0.65rem;
        }

        .process-step p {
          font-size: 0.9rem;
          color: var(--n-gray);
          line-height: 1.65;
        }

        .howit-wrap {
          max-width: 1000px;
          margin: 5rem auto 0;
        }

        .howit-grid {
          background: #fff;
          border: 1px solid rgba(17,17,17,0.08);
          border-radius: 28px;
          padding: 2.5rem;
          display: grid;
          grid-template-columns: minmax(0,1fr) minmax(0,1fr);
          gap: 3rem;
          align-items: center;
          box-shadow: 0 20px 55px rgba(17,17,17,0.06);
        }

        .howit-title {
          font-family: var(--font-head);
          font-size: 1.55rem;
          font-weight: 800;
          line-height: 1.2;
          color: #111;
          margin-bottom: 1rem;
        }

        .howit-text {
          font-size: 0.92rem;
          color: var(--n-gray);
          line-height: 1.65;
          margin-bottom: 1.5rem;
        }

        .howit-list {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .howit-item {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          font-size: 0.9rem;
        }

        .howit-item span {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #fff3ef;
          border: 1px solid rgba(255,75,43,0.22);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.7rem;
          color: var(--n-orange);
          font-weight: 900;
          flex-shrink: 0;
        }

        .howit-item p {
          color: #263241;
          font-weight: 700;
        }

        .howit-visual {
          background: #f7f7f7;
          border: 1px solid rgba(17,17,17,0.08);
          border-radius: 22px;
          padding: 1.6rem;
          text-align: center;
          min-width: 0;
        }

        .howit-screen-icon {
          width: 60px;
          height: 60px;
          border-radius: 18px;
          margin: 0 auto 0.9rem;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--n-orange);
          color: #fff;
        }

        .howit-screen-title {
          font-family: var(--font-head);
          font-size: 1rem;
          font-weight: 800;
          color: #111;
          margin-bottom: 0.4rem;
        }

        .howit-screen-text {
          font-size: 0.82rem;
          color: var(--n-gray);
          font-weight: 700;
        }

        .howit-flow {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 0.5rem;
          margin-top: 1.2rem;
          flex-wrap: wrap;
        }

        .mini-icon {
          width: 34px;
          height: 34px;
          border-radius: 10px;
          background: #fff;
          border: 1px solid rgba(17,17,17,0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #111;
          flex-shrink: 0;
        }

        @media (max-width: 768px) {
          .process-steps {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .process-line {
            display: none;
          }

          .howit-grid {
            grid-template-columns: 1fr;
            padding: 1.4rem;
          }
        }
      `}</style>
    </section>
  )
}

function StepIcon({ name }) {
  const common = {
    width: 16,
    height: 16,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  }

  if (name === 'create') {
    return (
      <svg {...common}>
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5Z" />
      </svg>
    )
  }

  if (name === 'program') {
    return (
      <svg {...common}>
        <rect x="3" y="4" width="18" height="17" rx="2" />
        <path d="M8 2v4M16 2v4M3 9h18" />
      </svg>
    )
  }

  return (
    <svg {...common}>
      <path d="M4 12h16" />
      <path d="m14 6 6 6-6 6" />
      <path d="M4 6v12" />
    </svg>
  )
}

function BrowserIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 9h18" />
      <path d="M7 6.5h.01M10 6.5h.01" />
    </svg>
  )
}

function MiniIcon({ type }) {
  return (
    <div className="mini-icon">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        {type === 'mobile' ? (
          <>
            <rect x="8" y="2" width="8" height="20" rx="2" />
            <path d="M11 18h2" />
          </>
        ) : (
          <>
            <rect x="4" y="5" width="16" height="10" rx="1.5" />
            <path d="M8 20h8M12 15v5" />
          </>
        )}
      </svg>
    </div>
  )
}

function Line() {
  return (
    <svg width="34" height="2" viewBox="0 0 34 2">
      <line
        x1="0"
        y1="1"
        x2="34"
        y2="1"
        stroke="#ff4b2b"
        strokeWidth="2"
        strokeDasharray="4 2"
        opacity="0.55"
      />
    </svg>
  )
}