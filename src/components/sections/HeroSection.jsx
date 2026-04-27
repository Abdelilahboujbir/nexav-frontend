import { Link } from 'react-router-dom'
import heroImage from '../../assets/hero-affichage.png'

export default function HeroSection() {
  return (
    <section className="hero-light">
      <div className="hero-content reveal">
        <h1>
          L’affichage dynamique
          <br />
          n’a jamais été aussi simple !
        </h1>

        <p>
          Tous les outils dont votre entreprise a besoin pour créer du contenu
          et gérer vos écrans à distance.
        </p>

        <div className="hero-actions">
          <Link to="/contact#demande-form" className="btn btn-primary btn-lg">
            Demander une démo
          </Link>
          <Link to="/produits" className="btn btn-secondary btn-lg">
            Découvrir les solutions
          </Link>
        </div>
      </div>

      <div className="hero-image-wrap reveal reveal-delay-2">
        <img src={heroImage} alt="Affichage dynamique Nexav" />
      </div>

      <style>{`
        .hero-light {
          min-height: 100vh;
          padding: calc(var(--nav-h) + 3.5rem) 5% 4rem;
          background: #f4f4f4;
          display: flex;
          flex-direction: column;
          align-items: center;
          overflow: hidden;
        }

        .hero-content {
          text-align: center;
          max-width: 1000px;
          margin: 0 auto 3.5rem;
        }

        .hero-content h1 {
          font-family: var(--font-head);
          font-size: clamp(2.3rem, 5.2vw, 4.6rem);
          font-weight: 800;
          line-height: 1.13;
          letter-spacing: -0.05em;
          color: var(--n-orange);
          margin-bottom: 1.3rem;
        }

        .hero-content p {
          font-size: clamp(1rem, 1.4vw, 1.25rem);
          color: #263241;
          line-height: 1.65;
          max-width: 860px;
          margin: 0 auto 2rem;
        }

        .hero-actions {
          display: flex;
          justify-content: center;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .hero-image-wrap {
          width: min(100%, 1120px);
          margin: 0 auto;
        }

        .hero-image-wrap img {
          width: 100%;
          height: auto;
          object-fit: contain;
        }

        @media (max-width: 768px) {
          .hero-light {
            min-height: auto;
            padding: calc(var(--nav-h) + 2.5rem) 1rem 3rem;
          }

          .hero-content {
            margin-bottom: 2rem;
          }

          .hero-actions {
            flex-direction: column;
          }
        }

        @media (max-width: 520px) {
          .hero-content h1 {
            font-size: 2.25rem;
          }
        }
      `}</style>
    </section>
  )
}