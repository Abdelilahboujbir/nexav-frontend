const FONCTIONS = [
  {
    key: 'multi',
    title: 'Multi-écrans',
    desc: "Gérez des dizaines d'écrans simultanément, groupés par site, étage ou catégorie personnalisée.",
  },
  {
    key: 'planification',
    title: 'Planification avancée',
    desc: 'Calendrier de diffusion précis, règles conditionnelles, playlists intelligentes et récurrentes.',
  },
  {
    key: 'supervision',
    title: 'Supervision en direct',
    desc: "Visualisez l'état de chaque écran en temps réel avec des alertes automatiques et un suivi centralisé.",
  },
  {
    key: 'formats',
    title: 'Tous formats',
    desc: 'Écrans LED, LCD, tablettes, murs vidéo, bornes interactives : tous les formats sont pris en charge.',
  },
  {
    key: 'offline',
    title: 'Diffusion hors ligne',
    desc: "Les playlists continuent de s'afficher même en cas de perte temporaire de connexion internet.",
  },
  {
    key: 'editor',
    title: 'Éditeur intégré',
    desc: 'Créez des contenus professionnels grâce à une bibliothèque de widgets et de modèles prêts à l’emploi.',
  },
]

export default function FonctionnalitesSection() {
  return (
    <section className="section fonctions-light">
      <div className="fonctions-container">
        <div className="reveal fonctions-header">
          <div className="section-tag">Fonctionnalités</div>
          <h2 className="section-title">
            Tout ce dont vous avez besoin,
            <br />
            <span className="accent">inclus d'emblée</span>
          </h2>
        </div>

        <div className="fonctions-grid">
          {FONCTIONS.map((fn, i) => (
            <div key={fn.title} className={`reveal reveal-delay-${(i % 3) + 1} fonction-card`}>
              <div className="fonction-icon">
                <FeatureIcon name={fn.key} />
              </div>

              <h4>{fn.title}</h4>
              <p>{fn.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .fonctions-light {
          background: #fff;
        }

        .fonctions-container {
          max-width: 1280px;
          margin: 0 auto;
        }

        .fonctions-header {
          text-align: center;
          margin-bottom: 3.5rem;
        }

        .fonctions-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 1.15rem;
        }

        .fonction-card {
          background: #fff;
          border: 1px solid rgba(17,17,17,0.08);
          border-radius: var(--radius-lg);
          padding: 1.55rem;
          position: relative;
          overflow: hidden;
          transition: var(--transition);
          box-shadow: 0 10px 24px rgba(17,17,17,0.04);
        }

        .fonction-card::after {
          content: "";
          position: absolute;
          right: -40px;
          top: -40px;
          width: 110px;
          height: 110px;
          border-radius: 50%;
          background: rgba(255,75,43,0.08);
          transition: var(--transition);
        }

        .fonction-card:hover {
          transform: translateY(-5px);
          border-color: rgba(255,75,43,0.28);
          box-shadow: 0 18px 42px rgba(17,17,17,0.08);
        }

        .fonction-card:hover::after {
          transform: scale(1.25);
        }

        .fonction-icon {
          width: 50px;
          height: 50px;
          border-radius: 16px;
          background: #fff3ef;
          border: 1px solid rgba(255,75,43,0.18);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1rem;
          color: var(--n-orange);
          position: relative;
          z-index: 1;
        }

        .fonction-card h4 {
          font-family: var(--font-head);
          font-size: 1rem;
          font-weight: 800;
          color: #111;
          margin-bottom: 0.45rem;
          position: relative;
          z-index: 1;
        }

        .fonction-card p {
          font-size: 0.86rem;
          color: var(--n-gray);
          line-height: 1.65;
          position: relative;
          z-index: 1;
        }

        @media (max-width: 900px) {
          .fonctions-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 580px) {
          .fonctions-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  )
}

function FeatureIcon({ name }) {
  const common = {
    width: 20,
    height: 20,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  }

  switch (name) {
    case 'multi':
      return (
        <svg {...common}>
          <rect x="3" y="5" width="7" height="5" rx="1.2" />
          <rect x="14" y="5" width="7" height="5" rx="1.2" />
          <rect x="8.5" y="14" width="7" height="5" rx="1.2" />
        </svg>
      )
    case 'planification':
      return (
        <svg {...common}>
          <rect x="3" y="4" width="18" height="17" rx="2" />
          <path d="M8 2v4M16 2v4M3 9h18" />
        </svg>
      )
    case 'supervision':
      return (
        <svg {...common}>
          <path d="M3 12s3.5-6 9-6 9 6 9 6-3.5 6-9 6-9-6-9-6Z" />
          <circle cx="12" cy="12" r="2.5" />
        </svg>
      )
    case 'formats':
      return (
        <svg {...common}>
          <rect x="3" y="5" width="10" height="7" rx="1.5" />
          <rect x="16" y="4" width="5" height="9" rx="1.2" />
          <rect x="8" y="15" width="8" height="5" rx="1.2" />
        </svg>
      )
    case 'offline':
      return (
        <svg {...common}>
          <path d="M5 12a7 7 0 0 1 12.2-4.8" />
          <path d="M19 12a7 7 0 0 1-12.2 4.8" />
          <path d="M15 8h3V5" />
          <path d="M9 16H6v3" />
        </svg>
      )
    default:
      return (
        <svg {...common}>
          <path d="M12 3v18" />
          <path d="M3 12h18" />
          <path d="M7 7h10v10H7z" />
        </svg>
      )
  }
}