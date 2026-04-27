import { useState } from 'react'
import Layout from '../components/layout/Layout'
import PageHeader from '../components/ui/PageHeader'
import DemandeForm from '../components/ui/DemandeForm'

const INFOS = [
  { icon: 'adresse', label: 'Adresse', value: 'Casablanca, Maroc' },
  { icon: 'email', label: 'E-mail', value: 'contact@nexav.ma' },
  { icon: 'phone', label: 'Téléphone', value: '+212 645 56 33 87' },
  { icon: 'time', label: 'Horaires', value: 'Lun – Ven : 9h – 18h' },
]

const FAQS = [
  {
    q: 'Combien de temps prend l’installation ?',
    a: 'La mise en ligne d’un écran prend généralement moins de 3 minutes.',
  },
  {
    q: 'Peut-on gérer plusieurs sites ?',
    a: 'Oui, vous pouvez gérer tous vos écrans depuis une seule interface.',
  },
  {
    q: 'Fonctionne sans internet ?',
    a: 'Oui, les contenus restent affichés même hors connexion.',
  },
  {
    q: 'Proposez-vous un essai ?',
    a: 'Oui, un essai gratuit est disponible sans engagement.',
  },
]

export default function Contact() {
  return (
    <Layout>
      <PageHeader
        tag="Contact"
        title="Parlons de votre projet"
        subtitle="Notre équipe est disponible pour répondre à toutes vos questions."
      />

      <section className="section contact-light">
        <div className="contact-container">
          <div className="contact-grid">
            <div>
              <h2 className="contact-title">Nous contacter</h2>
              <p className="contact-text">
                Une question ? Un projet ? Notre équipe vous répond sous 24h.
              </p>

              <div className="contact-list">
                {INFOS.map((info) => (
                  <div key={info.label} className="contact-item">
                    <div className="contact-icon">
                      <InfoIcon name={info.icon} />
                    </div>

                    <div>
                      <div className="contact-label">{info.label}</div>
                      <div className="contact-value">{info.value}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="contact-faq">
                <h3>Questions fréquentes</h3>

                {FAQS.map((faq, i) => (
                  <FaqItem key={i} faq={faq} />
                ))}
              </div>
            </div>

            <div className="contact-form">
              <DemandeForm />
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .contact-light {
          background: #ffffff;
        }

        .contact-container {
          max-width: 1280px;
          margin: 0 auto;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.4fr;
          gap: 4rem;
          align-items: start;
        }

        .contact-title {
          font-family: var(--font-head);
          font-size: 1.5rem;
          font-weight: 800;
          color: #111;
          margin-bottom: 0.6rem;
        }

        .contact-text {
          color: var(--n-gray);
          margin-bottom: 2rem;
          line-height: 1.65;
        }

        .contact-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .contact-item {
          display: flex;
          gap: 0.85rem;
          align-items: center;
        }

        .contact-icon {
          width: 44px;
          height: 44px;
          min-width: 44px;
          border-radius: 50%;
          background: #fff3ef;
          border: 1px solid rgba(255,75,43,0.22);
          color: var(--n-orange);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 20px rgba(255,75,43,0.08);
        }

        .contact-icon svg {
          display: block;
        }

        .contact-label {
          font-size: 0.72rem;
          color: var(--n-gray);
          text-transform: uppercase;
          letter-spacing: 0.06em;
          font-weight: 800;
          margin-bottom: 0.15rem;
        }

        .contact-value {
          font-weight: 800;
          color: #111;
        }

        .contact-faq h3 {
          margin-bottom: 1rem;
          font-weight: 800;
          color: #111;
          font-family: var(--font-head);
        }

        .contact-form > div {
          background: #fff !important;
          border: 1px solid rgba(17,17,17,0.08) !important;
          box-shadow: 0 20px 50px rgba(17,17,17,0.08);
        }

        @media (max-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </Layout>
  )
}

function FaqItem({ faq }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="faq-item">
      <button onClick={() => setOpen(!open)} className="faq-btn">
        {faq.q}
        <span>{open ? '−' : '+'}</span>
      </button>

      {open && <p className="faq-content">{faq.a}</p>}

      <style>{`
        .faq-item {
          border: 1px solid rgba(17,17,17,0.08);
          border-radius: 12px;
          margin-bottom: 0.65rem;
          overflow: hidden;
          background: #fff;
        }

        .faq-btn {
          width: 100%;
          padding: 0.95rem 1rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: #fff;
          border: none;
          font-weight: 800;
          color: #111;
          cursor: pointer;
          text-align: left;
        }

        .faq-btn span {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: #fff3ef;
          color: var(--n-orange);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-left: 0.8rem;
        }

        .faq-content {
          padding: 0 1rem 1rem;
          font-size: 0.88rem;
          color: var(--n-gray);
          line-height: 1.65;
        }
      `}</style>
    </div>
  )
}

function InfoIcon({ name }) {
  const common = {
    width: 19,
    height: 19,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  }

  if (name === 'adresse') {
    return (
      <svg {...common}>
        <path d="M12 21s7-5.2 7-12a7 7 0 1 0-14 0c0 6.8 7 12 7 12Z" />
        <circle cx="12" cy="9" r="2.3" />
      </svg>
    )
  }

  if (name === 'email') {
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
        <path d="M22 16.9v2.3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 3.8 2 2 0 0 1 4.1 1.6h2.3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.6a2 2 0 0 1-.5 2.1l-1 1a16 16 0 0 0 6 6l1-1a2 2 0 0 1 2.1-.5c.8.3 1.7.6 2.6.7a2 2 0 0 1 1.7 2Z" />
      </svg>
    )
  }

  return (
    <svg {...common}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  )
}