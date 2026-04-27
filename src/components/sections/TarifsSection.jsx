import { Link } from 'react-router-dom'

const PLANS = [
  {
    name: 'Starter',
    price: 99,
    unit: 'MAD',
    per: '/ écran / mois',
    features: [
      'Applications prêtes à l\'emploi',
      'Bibliothèque de modèles',
      'Planification de base',
      'Support par e-mail',
      '1 utilisateur',
    ],
    cta: 'Commencer →',
    featured: false,
  },
  {
    name: 'Essentiel',
    price: 149,
    unit: 'MAD',
    per: '/ écran / mois',
    features: [
      'Tout le plan Starter',
      'Zones d\'écrans multiples',
      'Gestion des utilisateurs',
      'Éditeur de contenu intégré',
      'Support prioritaire',
    ],
    cta: 'Commencer →',
    featured: true,
  },
  {
    name: 'Business',
    price: 229,
    unit: 'MAD',
    per: '/ écran / mois',
    features: [
      'Tout le plan Essentiel',
      'Supervision avancée',
      'Intégrations externes',
      'Gestionnaire de compte dédié',
      'Rapports personnalisés',
    ],
    cta: 'Commencer →',
    featured: false,
  },
  {
    name: 'Entreprise',
    price: null,
    unit: null,
    per: '/ écran / mois',
    features: [
      'Tout le plan Business',
      'Développement sur mesure',
      'Déploiement assisté',
      'SLA garanti',
      'Support 24/7',
    ],
    cta: 'Nous contacter →',
    featured: false,
  },
]

export default function TarifsSection() {
  return (
    <section id="tarifs" className="section section--navy">
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="section-tag">Tarification</div>
          <h2 className="section-title">
            Des plans pour <span className="accent">tous les besoins</span>
          </h2>
          <p className="section-sub" style={{ maxWidth: 460, margin: '0 auto' }}>
            Facturation par écran. Commencez dès aujourd'hui, évoluez à votre rythme.
          </p>
        </div>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '1.1rem',
        }}>
          {PLANS.map((plan, i) => (
            <div
              key={plan.name}
              className={`reveal reveal-delay-${i + 1}`}
              style={{
                background: plan.featured ? 'rgba(12,91,232,0.09)' : 'rgba(255,255,255,0.03)',
                border: `1px solid ${plan.featured ? 'rgba(12,91,232,0.45)' : 'rgba(255,255,255,0.08)'}`,
                borderRadius: 'var(--radius-lg)',
                padding: '2rem 1.5rem',
                textAlign: 'center',
                position: 'relative', overflow: 'hidden',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-5px)'
                if (!plan.featured) e.currentTarget.style.borderColor = 'rgba(12,91,232,0.3)'
                e.currentTarget.style.boxShadow = '0 20px 50px rgba(0,0,0,0.5)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)'
                if (!plan.featured) e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              {/* Featured badge */}
              {plan.featured && (
                <div style={{
                  position: 'absolute', top: -1, left: '50%',
                  transform: 'translateX(-50%)',
                  background: 'linear-gradient(90deg, var(--n-blue), var(--n-cyan))',
                  color: '#fff', fontSize: '0.67rem', fontWeight: 700,
                  padding: '0.28rem 0.9rem', borderRadius: '0 0 8px 8px',
                  letterSpacing: '0.07em', textTransform: 'uppercase', whiteSpace: 'nowrap',
                }}>
                  ⭐ Plus populaire
                </div>
              )}

              <div style={{
                fontFamily: 'var(--font-head)', fontSize: '0.8rem', fontWeight: 700,
                textTransform: 'uppercase', letterSpacing: '0.1em',
                color: 'var(--n-gray)', marginBottom: '1.2rem',
                marginTop: plan.featured ? '0.8rem' : 0,
              }}>
                {plan.name}
              </div>

              {/* Price */}
              {plan.price ? (
                <div style={{ marginBottom: '0.3rem' }}>
                  <span style={{ fontFamily: 'var(--font-head)', fontSize: '0.9rem', color: 'var(--n-cyan)', verticalAlign: 'top', marginTop: '0.5rem', display: 'inline-block' }}>
                    {plan.unit}
                  </span>
                  <span style={{ fontFamily: 'var(--font-head)', fontSize: '2.5rem', fontWeight: 800, color: '#fff' }}>
                    {plan.price}
                  </span>
                </div>
              ) : (
                <div style={{ fontFamily: 'var(--font-head)', fontSize: '1.7rem', fontWeight: 800, color: '#fff', marginBottom: '0.3rem', lineHeight: 1.2 }}>
                  Sur<br />Devis
                </div>
              )}
              <div style={{ fontSize: '0.78rem', color: 'var(--n-gray)', marginBottom: '1.4rem' }}>
                {plan.per}
              </div>

              {/* Divider */}
              <div style={{ height: 1, background: 'rgba(255,255,255,0.07)', marginBottom: '1.3rem' }} />

              {/* Features */}
              <ul style={{ listStyle: 'none', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '0.55rem', marginBottom: '1.8rem' }}>
                {plan.features.map(f => (
                  <li key={f} style={{ fontSize: '0.83rem', color: 'rgba(255,255,255,0.7)', display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                    <span style={{ color: 'var(--n-cyan)', fontWeight: 700, flexShrink: 0, marginTop: '0.05rem' }}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>

              <Link
                to="/contact"
                style={{
                  display: 'block', width: '100%', padding: '0.72rem',
                  borderRadius: 'var(--radius-sm)',
                  fontFamily: 'var(--font-body)', fontSize: '0.88rem', fontWeight: 500,
                  textAlign: 'center', transition: 'all 0.25s',
                  background: plan.featured ? 'var(--n-blue)' : 'transparent',
                  border: plan.featured ? 'none' : '1px solid rgba(255,255,255,0.15)',
                  color: '#fff',
                  cursor: 'pointer',
                }}
                onMouseEnter={e => {
                  if (plan.featured) { e.currentTarget.style.background = 'var(--n-blue-h)'; e.currentTarget.style.boxShadow = 'var(--shadow-blue)' }
                  else { e.currentTarget.style.background = 'rgba(255,255,255,0.07)' }
                }}
                onMouseLeave={e => {
                  if (plan.featured) { e.currentTarget.style.background = 'var(--n-blue)'; e.currentTarget.style.boxShadow = 'none' }
                  else { e.currentTarget.style.background = 'transparent' }
                }}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>

        {/* Footnote */}
        <p className="reveal" style={{ textAlign: 'center', marginTop: '2rem', fontSize: '0.82rem', color: 'rgba(255,255,255,0.35)' }}>
          Tous les plans incluent 14 jours d'essai gratuit. Aucune carte bancaire requise.
        </p>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .tarifs-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 600px) {
          .tarifs-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
