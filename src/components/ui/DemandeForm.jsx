import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { getProduits } from '../../api/produits'
import { postDemande } from '../../api/demandes'

const SECTEURS = [
  'Entreprise',
  'Éducation',
  'Établissement de santé',
  'Restauration',
  'Point de vente',
  'Administration',
  'Autre',
]

const NB_ECRANS = ['1-9', '10-19', '20-49', '50-100', '100+']

export default function DemandeForm({ produitId = null, onSuccess }) {
  const [searchParams] = useSearchParams()
  const [produits, setProduits] = useState([])
  const [form, setForm] = useState({
    nom: '',
    email: '',
    telephone: '',
    raison_sociale: '',
    secteur: '',
    nombre_ecrans: '',
    question: '',
    produit_id: produitId || '',
  })

  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    if (!produitId) {
      getProduits()
        .then((r) => {
          const data = Array.isArray(r.data) ? r.data : r.data?.produits || []
          setProduits(data)
        })
        .catch(() => {})
    }
  }, [produitId])

  useEffect(() => {
    const secteurFromUrl = searchParams.get('secteur')
    if (!secteurFromUrl) return

    const normalized = decodeURIComponent(secteurFromUrl).trim().toLowerCase()

    const map = {
      entreprise: 'Entreprise',
      education: 'Éducation',
      'éducation': 'Éducation',
      'etablissement-de-sante': 'Établissement de santé',
      'établissement-de-santé': 'Établissement de santé',
      sante: 'Établissement de santé',
      santé: 'Établissement de santé',
      restauration: 'Restauration',
      'point-de-vente': 'Point de vente',
      'points-de-vente': 'Point de vente',
      administration: 'Administration',
      autre: 'Autre',
    }

    const mapped = map[normalized] || secteurFromUrl
    setForm((prev) => ({ ...prev, secteur: mapped }))
  }, [searchParams])

  useEffect(() => {
    if (produitId) {
      setForm((prev) => ({ ...prev, produit_id: produitId }))
    }
  }, [produitId])

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const payload = { ...form, produit_id: form.produit_id || produitId || '' }

      if (!payload.produit_id) delete payload.produit_id

      await postDemande(payload)

      setSuccess(true)
      onSuccess?.()

      setForm({
        nom: '',
        email: '',
        telephone: '',
        raison_sociale: '',
        secteur: form.secteur || '',
        nombre_ecrans: '',
        question: '',
        produit_id: produitId || '',
      })
    } catch (err) {
      setError(
        err.response?.data?.message ||
          'Une erreur est survenue. Veuillez réessayer.'
      )
    } finally {
      setLoading(false)
    }
  }

  if (success) {
    return (
      <div id="demande-form" className="demande-form-card success-card">
        <div className="success-icon">
          <CheckIcon />
        </div>

        <h3>Demande envoyée</h3>
        <p>
          Notre équipe vous contactera sous 24h pour discuter de votre projet.
        </p>

        <button
          onClick={() => setSuccess(false)}
          className="btn btn-secondary btn-sm"
          style={{ marginTop: '1.5rem' }}
        >
          Nouvelle demande
        </button>

        <FormStyle />
      </div>
    )
  }

  return (
    <div id="demande-form" className="demande-form-card">
      <h3>Demander une démonstration</h3>
      <p className="form-intro">
        Remplissez ce formulaire et nous vous recontactons sous 24h.
      </p>

      {error && <div className="error-message" style={{ marginBottom: '1rem' }}>{error}</div>}

      <form onSubmit={handleSubmit}>
        <div className="form-grid-2">
          <div className="form-group">
            <label className="form-label">Nom complet *</label>
            <input
              name="nom"
              value={form.nom}
              onChange={handleChange}
              placeholder="Prénom et nom"
              className="form-input"
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">E-mail *</label>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="votre@email.com"
              className="form-input"
              required
            />
          </div>
        </div>

        <div className="form-grid-2">
          <div className="form-group">
            <label className="form-label">Téléphone</label>
            <input
              name="telephone"
              type="tel"
              value={form.telephone}
              onChange={handleChange}
              placeholder="+212 6 XX XX XX XX"
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Raison sociale</label>
            <input
              name="raison_sociale"
              value={form.raison_sociale}
              onChange={handleChange}
              placeholder="Votre entreprise"
              className="form-input"
            />
          </div>
        </div>

        <div className="form-grid-2">
          <div className="form-group">
            <label className="form-label">Secteur d'activité *</label>
            <select
              name="secteur"
              value={form.secteur}
              onChange={handleChange}
              className="form-select"
              required
            >
              <option value="">Sélectionner</option>
              {SECTEURS.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">Nombre d'écrans *</label>
            <select
              name="nombre_ecrans"
              value={form.nombre_ecrans}
              onChange={handleChange}
              className="form-select"
              required
            >
              <option value="">Sélectionner</option>
              {NB_ECRANS.map((n) => (
                <option key={n} value={n}>{n}</option>
              ))}
            </select>
          </div>
        </div>

        {!produitId && produits.length > 0 && (
          <div className="form-group" style={{ marginBottom: '0.9rem' }}>
            <label className="form-label">Produit concerné</label>
            <select
              name="produit_id"
              value={form.produit_id}
              onChange={handleChange}
              className="form-select"
            >
              <option value="">Aucun produit spécifique</option>
              {produits.map((p) => (
                <option key={p.id} value={p.id}>{p.nom}</option>
              ))}
            </select>
          </div>
        )}

        <div className="form-group" style={{ marginBottom: '1.5rem' }}>
          <label className="form-label">Votre projet / question *</label>
          <textarea
            name="question"
            value={form.question}
            onChange={handleChange}
            placeholder="Décrivez votre besoin en quelques lignes."
            className="form-textarea"
            required
          />
        </div>

        <button type="submit" disabled={loading} className="btn btn-primary btn-full">
          {loading ? 'Envoi en cours...' : 'Envoyer la demande'}
        </button>
      </form>

      <FormStyle />
    </div>
  )
}

function FormStyle() {
  return (
    <style>{`
      .demande-form-card {
        background: #ffffff;
        border: 1px solid rgba(17,17,17,0.08);
        border-radius: var(--radius-xl);
        padding: clamp(1.2rem, 3vw, 2.5rem);
        position: relative;
        overflow: hidden;
        scroll-margin-top: 100px;
        box-shadow: 0 20px 50px rgba(17,17,17,0.08);
      }

      .demande-form-card::before {
        content: "";
        position: absolute;
        top: 0;
        left: 12%;
        right: 12%;
        height: 4px;
        background: var(--n-orange);
        border-radius: 0 0 10px 10px;
      }

      .demande-form-card h3 {
        font-family: var(--font-head);
        font-size: 1.2rem;
        font-weight: 800;
        color: #111;
        margin-bottom: 0.45rem;
      }

      .form-intro,
      .success-card p {
        font-size: 0.9rem;
        color: var(--n-gray);
        margin-bottom: 1.8rem;
        line-height: 1.6;
      }

      .demande-form-card .form-label {
        color: #333;
      }

      .demande-form-card .form-input,
      .demande-form-card .form-select,
      .demande-form-card .form-textarea {
        background: #ffffff;
        color: #111;
        border: 1px solid rgba(17,17,17,0.14);
      }

      .demande-form-card .form-input:focus,
      .demande-form-card .form-select:focus,
      .demande-form-card .form-textarea:focus {
        border-color: rgba(255,75,43,0.65);
        box-shadow: 0 0 0 3px rgba(255,75,43,0.12);
      }

      .success-card {
        text-align: center;
      }

      .success-icon {
        width: 64px;
        height: 64px;
        margin: 0 auto 1rem;
        border-radius: 50%;
        background: #fff3ef;
        border: 1px solid rgba(255,75,43,0.2);
        color: var(--n-orange);
        display: flex;
        align-items: center;
        justify-content: center;
      }
    `}</style>
  )
}

function CheckIcon() {
  return (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
      <path
        d="M20 6 9 17l-5-5"
        stroke="currentColor"
        strokeWidth="2.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}