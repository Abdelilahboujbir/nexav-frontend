import { Link } from 'react-router-dom'
import Layout from '../components/layout/Layout'
import PageHeader from '../components/ui/PageHeader'

import educationImg from '../assets/secteurs/education.jpg'
import entrepriseImg from '../assets/secteurs/entreprise.jpg'
import pointVenteImg from '../assets/secteurs/point-de-vente.jpg'
import restaurationImg from '../assets/secteurs/restauration.jpg'
import administrationImg from '../assets/secteurs/administration.jpg'
import santeImg from '../assets/secteurs/sante.jpg'

const SECTEURS = [
  {
    value: 'Éducation',
    title: 'Éducation',
    image: educationImg,
    desc: 'Les écoles, universités et centres de formation ont besoin de communiquer rapidement avec les étudiants, visiteurs et équipes.',
    besoins: [
      'Afficher les annonces importantes',
      'Orienter les étudiants dans le campus',
      'Diffuser les emplois du temps',
      'Moderniser les salles avec des écrans interactifs',
    ],
  },
  {
    value: 'Entreprise',
    title: 'Entreprise',
    image: entrepriseImg,
    desc: 'Les entreprises utilisent l’affichage dynamique pour améliorer la communication interne et valoriser leurs informations en temps réel.',
    besoins: [
      'Afficher les KPIs et statistiques',
      'Partager les messages internes',
      'Accueillir les visiteurs',
      'Gérer plusieurs écrans depuis une seule interface',
    ],
  },
  {
    value: 'Point de vente',
    title: 'Points de vente',
    image: pointVenteImg,
    desc: 'Les magasins et showrooms ont besoin d’attirer l’attention, présenter leurs offres et améliorer l’expérience client.',
    besoins: [
      'Afficher les promotions',
      'Présenter les produits',
      'Attirer les clients vers une offre',
      'Créer une expérience moderne en boutique',
    ],
  },
  {
    value: 'Restauration',
    title: 'Restauration',
    image: restaurationImg,
    desc: 'Les restaurants, cafés et snacks peuvent remplacer les menus classiques par des menus digitaux simples à mettre à jour.',
    besoins: [
      'Afficher les menus digitaux',
      'Modifier les prix rapidement',
      'Présenter les offres du jour',
      'Rendre l’espace plus moderne',
    ],
  },
  {
    value: 'Administration',
    title: 'Administration',
    image: administrationImg,
    desc: 'Les administrations ont besoin d’orienter les visiteurs et de diffuser les informations officielles clairement.',
    besoins: [
      'Orienter les visiteurs',
      'Afficher les annonces officielles',
      'Réduire la confusion dans les espaces publics',
      'Améliorer la communication avec les usagers',
    ],
  },
  {
    value: 'Établissement de santé',
    title: 'Santé',
    image: santeImg,
    desc: 'Les cliniques, cabinets et centres médicaux peuvent informer les patients et améliorer l’attente grâce aux écrans.',
    besoins: [
      'Informer les patients',
      'Afficher les consignes importantes',
      'Organiser les files d’attente',
      'Diffuser du contenu en salle d’attente',
    ],
  },
]

export default function Secteurs() {
  return (
    <Layout>
      <PageHeader
        tag="Secteurs d’activités"
        title="Des solutions adaptées à chaque secteur"
        subtitle="Découvrez comment Nexav aide les entreprises, écoles, restaurants, administrations et établissements de santé à mieux communiquer avec leurs écrans."
      />

      <section className="section secteurs-page">
        <div className="secteurs-container">
          {SECTEURS.map((secteur, index) => (
            <div
              key={secteur.title}
              className={`secteur-row ${index % 2 !== 0 ? 'reverse' : ''}`}
            >
              <div className="secteur-image">
                <img src={secteur.image} alt={secteur.title} />
              </div>

              <div className="secteur-content">
                <div className="section-tag">{secteur.title}</div>
                <h2>{secteur.title}</h2>
                <p>{secteur.desc}</p>

                <div className="besoins-list">
                  {secteur.besoins.map((b) => (
                    <div key={b} className="besoin-item">
                      <span>✓</span>
                      {b}
                    </div>
                  ))}
                </div>

                <Link
                  to={`/contact?secteur=${encodeURIComponent(secteur.value)}#demande-form`}
                  className="btn btn-primary"
                >
                  Demander une solution
                </Link>
              </div>
            </div>
          ))}
        </div>

        <style>{`
          .secteurs-page {
            background: #fff;
          }

          .secteurs-container {
            max-width: 1280px;
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            gap: 5rem;
          }

          .secteur-row {
            display: grid;
            grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
            gap: 4rem;
            align-items: center;
          }

          .secteur-row.reverse .secteur-image {
            order: 2;
          }

          .secteur-row.reverse .secteur-content {
            order: 1;
          }

          .secteur-image {
            height: 360px;
            border-radius: 28px;
            overflow: hidden;
            box-shadow: 0 22px 60px rgba(17,17,17,0.12);
          }

          .secteur-image img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }

          .secteur-content h2 {
            font-family: var(--font-head);
            font-size: clamp(1.8rem, 3vw, 2.7rem);
            font-weight: 800;
            color: #111;
            margin-bottom: 1rem;
          }

          .secteur-content p {
            font-size: 1rem;
            color: var(--n-gray);
            line-height: 1.75;
            margin-bottom: 1.6rem;
          }

          .besoins-list {
            display: grid;
            gap: 0.75rem;
            margin-bottom: 2rem;
          }

          .besoin-item {
            display: flex;
            align-items: center;
            gap: 0.7rem;
            font-weight: 700;
            color: #263241;
          }

          .besoin-item span {
            width: 22px;
            height: 22px;
            border-radius: 50%;
            background: #fff3ef;
            color: var(--n-orange);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 0.75rem;
            flex-shrink: 0;
          }

          @media (max-width: 900px) {
            .secteur-row,
            .secteur-row.reverse {
              grid-template-columns: 1fr;
              gap: 2rem;
            }

            .secteur-row.reverse .secteur-image,
            .secteur-row.reverse .secteur-content {
              order: initial;
            }

            .secteur-image {
              height: 280px;
            }
          }

          @media (max-width: 520px) {
            .secteurs-container {
              gap: 3.5rem;
            }

            .secteur-image {
              height: 230px;
              border-radius: 20px;
            }
          }
        `}</style>
      </section>
    </Layout>
  )
}