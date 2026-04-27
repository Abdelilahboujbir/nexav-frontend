const TEMOIGNAGES = [
  {
    initials: 'KA',
    name: 'Karim Alaoui',
    role: 'Directeur IT — Groupe GreenRetail',
    text: "Nexav nous a permis de déployer nos écrans rapidement. L'interface est intuitive et le support réactif.",
    stars: 5,
  },
  {
    initials: 'SM',
    name: 'Samira Meziane',
    role: 'Responsable Communication — Clinique Atlas',
    text: 'La gestion centralisée de nos écrans sur plusieurs sites est exactement ce dont nous avions besoin.',
    stars: 5,
  },
  {
    initials: 'YB',
    name: 'Youssef Benali',
    role: 'Gérant — Réseau Saveur & Co',
    text: 'Nos menus digitaux sont maintenant mis à jour instantanément. Le résultat est propre et professionnel.',
    stars: 5,
  },
]

const PARTNERS = ['TechnoGroup', 'MédiaMall', 'EduSmart', 'ClinicNet', 'RetailPro', 'AdminServices']

export default function TemoignagesSection() {
  return (
    <section className="section temoignages-light">
      <div className="temoignages-container">
        <div className="reveal temoignages-header">
          <div className="section-tag">Ils nous font confiance</div>
          <h2 className="section-title">
            Ce que disent <span className="accent">nos clients</span>
          </h2>
        </div>

        <div className="temoignages-grid">
          {TEMOIGNAGES.map((t, i) => (
            <div key={t.name} className={`reveal reveal-delay-${i + 1} temoignage-card`}>
              <div className="quote-mark">”</div>

              <div className="stars" aria-label={`${t.stars} étoiles`}>
                {Array(t.stars)
                  .fill(0)
                  .map((_, k) => (
                    <span key={k}>★</span>
                  ))}
              </div>

              <p className="temoignage-text">« {t.text} »</p>

              <div className="temoignage-author">
                <div className="author-avatar">{t.initials}</div>
                <div>
                  <div className="author-name">{t.name}</div>
                  <div className="author-role">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="reveal partners">
          <p>Ils nous font confiance</p>
          <div className="partners-list">
            {PARTNERS.map((p) => (
              <span key={p}>{p}</span>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .temoignages-light {
          background: #fff;
        }

        .temoignages-container {
          max-width: 1280px;
          margin: 0 auto;
        }

        .temoignages-header {
          text-align: center;
          margin-bottom: 3.5rem;
        }

        .temoignages-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 1.3rem;
        }

        .temoignage-card {
          background: #fff;
          border: 1px solid rgba(17,17,17,0.08);
          border-radius: var(--radius-lg);
          padding: 1.8rem;
          transition: var(--transition);
          position: relative;
          overflow: hidden;
          box-shadow: 0 10px 24px rgba(17,17,17,0.04);
        }

        .temoignage-card:hover {
          border-color: rgba(255,75,43,0.28);
          transform: translateY(-5px);
          box-shadow: 0 18px 42px rgba(17,17,17,0.08);
        }

        .quote-mark {
          position: absolute;
          top: 1rem;
          right: 1.4rem;
          font-family: Georgia, serif;
          font-size: 4.5rem;
          line-height: 1;
          color: rgba(255,75,43,0.12);
          font-weight: 700;
        }

        .stars {
          display: flex;
          gap: 0.2rem;
          margin-bottom: 1rem;
          position: relative;
          z-index: 1;
        }

        .stars span {
          color: var(--n-orange);
          font-size: 0.95rem;
        }

        .temoignage-text {
          font-size: 0.92rem;
          color: #374151;
          line-height: 1.7;
          font-style: italic;
          margin-bottom: 1.5rem;
          position: relative;
          z-index: 1;
        }

        .temoignage-author {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          min-width: 0;
          position: relative;
          z-index: 1;
        }

        .author-avatar {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: var(--n-orange);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-head);
          font-size: 0.85rem;
          font-weight: 800;
          color: #fff;
          flex-shrink: 0;
          box-shadow: 0 10px 20px rgba(255,75,43,0.2);
        }

        .author-name {
          font-size: 0.95rem;
          font-weight: 800;
          color: #111;
        }

        .author-role {
          font-size: 0.78rem;
          color: var(--n-gray);
          margin-top: 0.15rem;
          line-height: 1.4;
        }

        .partners {
          margin-top: 4rem;
          padding-top: 3rem;
          border-top: 1px solid rgba(17,17,17,0.08);
        }

        .partners p {
          text-align: center;
          font-size: 0.75rem;
          color: var(--n-gray);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-weight: 800;
          margin-bottom: 1.25rem;
        }

        .partners-list {
          display: flex;
          justify-content: center;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .partners-list span {
          font-family: var(--font-head);
          font-size: 0.82rem;
          font-weight: 800;
          color: #111;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          background: #f5f5f5;
          border: 1px solid rgba(17,17,17,0.08);
          border-radius: 999px;
          padding: 0.55rem 1rem;
        }

        @media (max-width: 900px) {
          .temoignages-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 520px) {
          .temoignage-card {
            padding: 1.25rem;
          }

          .partners-list {
            gap: 0.7rem;
          }

          .partners-list span {
            font-size: 0.75rem;
          }
        }
      `}</style>
    </section>
  )
}