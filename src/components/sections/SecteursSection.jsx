import { Link } from 'react-router-dom'

import educationImg from '../../assets/secteurs/education.jpg'
import entrepriseImg from '../../assets/secteurs/entreprise.jpg'
import pointVenteImg from '../../assets/secteurs/point-de-vente.jpg'
import restaurationImg from '../../assets/secteurs/restauration.jpg'
import administrationImg from '../../assets/secteurs/administration.jpg'
import santeImg from '../../assets/secteurs/sante.jpg'

const SECTEURS = [
  {
    key: 'education',
    value: 'Éducation',
    name: 'Éducation',
    desc: 'Tableaux interactifs, gestion des flux étudiants et communication campus unifiée.',
    image: educationImg,
  },
  {
    key: 'entreprise',
    value: 'Entreprise',
    name: 'Entreprise',
    desc: 'Communication interne, KPIs en temps réel et affichage pour vos équipes.',
    image: entrepriseImg,
  },
  {
    key: 'point-de-vente',
    value: 'Point de vente',
    name: 'Points de vente',
    desc: 'PLV digitale, promotions dynamiques, menu boards et bornes clients.',
    image: pointVenteImg,
  },
  {
    key: 'restauration',
    value: 'Restauration',
    name: 'Restauration',
    desc: 'Menus digitaux mis à jour en temps réel et gestion multi-sites centralisée.',
    image: restaurationImg,
  },
  {
    key: 'administration',
    value: 'Administration',
    name: 'Administration',
    desc: 'Orientation des usagers, information institutionnelle et signalétique intelligente.',
    image: administrationImg,
  },
  {
    key: 'etablissement-de-sante',
    value: 'Établissement de santé',
    name: 'Santé',
    desc: 'Information patients, diffusion en salle d’attente et signalétique hospitalière.',
    image: santeImg,
  },
]

export default function SecteursSection() {
  return (
    <section id="secteurs" className="section section--navy">
      <div className="reveal secteurs-header">
        <div className="section-tag">Secteurs d'activité</div>
        <h2 className="section-title">
          Une solution adaptée à
          <br />
          <span className="accent">chaque environnement</span>
        </h2>
        <p className="section-sub">
          De l'éducation à la restauration, Nexav s'intègre dans tous vos espaces
          avec des configurations sur mesure.
        </p>
      </div>

      <div className="secteurs-grid">
        {SECTEURS.map((s, i) => (
          <SecteurCard key={s.key} secteur={s} delay={i * 0.06} />
        ))}
      </div>

      <style>{`
        .secteurs-header {
          text-align: center;
          max-width: 620px;
          margin: 0 auto 4rem;
        }

        .secteurs-header .section-sub {
          max-width: 500px;
          margin: 0 auto;
        }

        .secteurs-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 1.25rem;
          max-width: 1280px;
          margin: 0 auto;
        }

        .secteur-card {
          position: relative;
          min-height: 300px;
          border-radius: var(--radius-lg);
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.08);
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 1.5rem;
          color: #fff;
          transition: all 0.35s ease;
          isolation: isolate;
        }

        .secteur-card:hover {
          transform: translateY(-5px);
          border-color: rgba(12,91,232,0.45);
          box-shadow: 0 20px 50px rgba(0,0,0,0.6);
        }

        .secteur-img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transform: scale(1.02);
          transition: transform 0.55s ease, filter 0.55s ease;
          filter: saturate(0.95) contrast(1.05) brightness(0.75);
          z-index: -3;
        }

        .secteur-card:hover .secteur-img {
          transform: scale(1.08);
          filter: saturate(1.05) contrast(1.1) brightness(0.82);
        }

        .secteur-overlay {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(180deg, rgba(5,10,20,0.08) 0%, rgba(5,10,20,0.45) 42%, rgba(5,10,20,0.94) 100%),
            linear-gradient(135deg, rgba(12,91,232,0.28), rgba(0,212,255,0.06));
          z-index: -2;
        }

        .secteur-pattern {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px);
          background-size: 24px 24px;
          opacity: 0.3;
          z-index: -1;
        }

        .secteur-icon {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.2);
          backdrop-filter: blur(10px);
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(255,255,255,0.92);
          margin-bottom: 0.9rem;
        }

        .secteur-title {
          font-family: var(--font-head);
          font-size: 1.12rem;
          font-weight: 700;
          margin-bottom: 0.4rem;
        }

        .secteur-desc {
          font-size: 0.84rem;
          color: rgba(255,255,255,0.7);
          line-height: 1.55;
          margin-bottom: 0.85rem;
        }

        .secteur-link {
          font-size: 0.8rem;
          color: var(--n-cyan);
          font-weight: 500;
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          opacity: 0;
          transform: translateY(6px);
          transition: all 0.25s ease;
        }

        .secteur-card:hover .secteur-link {
          opacity: 1;
          transform: translateY(0);
        }

        @media (max-width: 980px) {
          .secteurs-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 620px) {
          .secteurs-grid {
            grid-template-columns: 1fr;
          }

          .secteur-card {
            min-height: 260px;
            padding: 1.25rem;
          }

          .secteur-link {
            opacity: 1;
            transform: none;
          }
        }
      `}</style>
    </section>
  )
}

function SecteurCard({ secteur, delay }) {
  return (
    <Link
      to={`/contact?secteur=${encodeURIComponent(secteur.value)}#demande-form`}
      className="reveal secteur-card"
      style={{ transitionDelay: `${delay}s` }}
    >
      <img src={secteur.image} alt={secteur.name} className="secteur-img" />
      <div className="secteur-overlay" />
      <div className="secteur-pattern" />

      <div style={{ position: 'relative', zIndex: 1 }}>
        <div className="secteur-icon">
          <SecteurIcon name={secteur.key} />
        </div>

        <h3 className="secteur-title">{secteur.name}</h3>
        <p className="secteur-desc">{secteur.desc}</p>

        <span className="secteur-link">
          Demander une étude
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path
              d="M2 6h8M6 2l4 4-4 4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>
    </Link>
  )
}

function SecteurIcon({ name }) {
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
    case 'education':
      return (
        <svg {...common}>
          <path d="M3 8l9-5 9 5-9 5-9-5Z" />
          <path d="M7 10.5v4.5c0 1.5 2.2 3 5 3s5-1.5 5-3v-4.5" />
        </svg>
      )
    case 'entreprise':
      return (
        <svg {...common}>
          <path d="M4 21V7a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v14" />
          <path d="M14 10h5a1 1 0 0 1 1 1v10" />
          <path d="M8 10h2M8 14h2M8 18h2M16 14h1M16 18h1" />
        </svg>
      )
    case 'point-de-vente':
      return (
        <svg {...common}>
          <path d="M4 7h16" />
          <path d="M6 7l1-3h10l1 3" />
          <path d="M6 10v8a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-8" />
          <path d="M9 14h6" />
        </svg>
      )
    case 'restauration':
      return (
        <svg {...common}>
          <path d="M6 3v8" />
          <path d="M10 3v8" />
          <path d="M6 7h4" />
          <path d="M15 3c2 2 2 5 0 7v11" />
        </svg>
      )
    case 'administration':
      return (
        <svg {...common}>
          <path d="M3 10h18" />
          <path d="M5 10v8M10 10v8M14 10v8M19 10v8" />
          <path d="M2 21h20" />
          <path d="M12 3l9 5H3l9-5Z" />
        </svg>
      )
    default:
      return (
        <svg {...common}>
          <path d="M4 19V6a2 2 0 0 1 2-2h9l5 5v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z" />
          <path d="M15 4v5h5" />
          <path d="M8 13h8M8 17h6" />
        </svg>
      )
  }
}