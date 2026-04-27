import { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { loginAdmin, clearError } from '../../store/authSlice'

export default function LoginAdmin() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { loading, error, token } = useSelector((s) => s.auth)

  const [form, setForm] = useState({ email: '', password: '' })
  const [showPwd, setShowPwd] = useState(false)

  useEffect(() => {
    if (token) navigate('/admin/dashboard', { replace: true })
    return () => dispatch(clearError())
  }, [token, navigate, dispatch])

  const handleChange = (e) => {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(loginAdmin(form))
  }

  return (
    <div className="admin-login-page">
      <div className="login-bg-circle one" />
      <div className="login-bg-circle two" />

      <div className="admin-login-wrap">
        <div className="login-logo-box">
          <Link to="/" className="login-logo">NEXAV</Link>
          <p>Accès administration</p>
        </div>

        <div className="login-card">
          <h2>Connexion</h2>
          <p>Entrez vos identifiants administrateur.</p>

          {error && (
            <div className="error-message" style={{ marginBottom: '1.25rem' }}>
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="form-group" style={{ marginBottom: '1rem' }}>
              <label className="form-label">Adresse e-mail</label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="admin@nexav.ma"
                className="form-input"
                required
              />
            </div>

            <div className="form-group" style={{ marginBottom: '1.75rem' }}>
              <label className="form-label">Mot de passe</label>

              <div style={{ position: 'relative' }}>
                <input
                  name="password"
                  type={showPwd ? 'text' : 'password'}
                  value={form.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="form-input"
                  style={{ paddingRight: '3rem' }}
                  required
                />

                <button
                  type="button"
                  onClick={() => setShowPwd(!showPwd)}
                  className="show-password-btn"
                >
                  {showPwd ? 'Masquer' : 'Voir'}
                </button>
              </div>
            </div>

            <button type="submit" disabled={loading} className="btn btn-primary btn-full">
              {loading ? 'Connexion...' : 'Se connecter'}
            </button>
          </form>
        </div>

        <Link to="/" className="back-site">
          ← Retour au site
        </Link>
      </div>

      <style>{`
        .admin-login-page {
          min-height: 100vh;
          background: #030810;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          position: relative;
          overflow: hidden;
        }

        .login-bg-circle {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          background: rgba(255,75,43,0.16);
          filter: blur(20px);
        }

        .login-bg-circle.one {
          width: 500px;
          height: 500px;
          top: -220px;
          left: 50%;
          transform: translateX(-50%);
        }

        .login-bg-circle.two {
          width: 320px;
          height: 320px;
          bottom: -150px;
          right: 8%;
        }

        .admin-login-wrap {
          width: 100%;
          max-width: 430px;
          position: relative;
          z-index: 1;
        }

        .login-logo-box {
          text-align: center;
          margin-bottom: 2rem;
        }

        .login-logo {
          font-family: var(--font-head);
          font-size: 2rem;
          font-weight: 900;
          color: #fff;
          text-decoration: none;
        }

        .login-logo-box p {
          font-size: 0.88rem;
          color: var(--n-orange);
          margin-top: 0.4rem;
          font-weight: 800;
        }

        .login-card {
          background: #06101E;
          border: 1px solid rgba(255,255,255,0.09);
          border-radius: var(--radius-xl);
          padding: 2.4rem;
          position: relative;
          overflow: hidden;
          box-shadow: 0 24px 70px rgba(0,0,0,0.35);
        }

        .login-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 15%;
          right: 15%;
          height: 4px;
          background: var(--n-orange);
          border-radius: 0 0 10px 10px;
        }

        .login-card h2 {
          font-family: var(--font-head);
          font-size: 1.35rem;
          font-weight: 800;
          color: #fff;
          margin-bottom: 0.45rem;
        }

        .login-card > p {
          color: rgba(255,255,255,0.48);
          margin-bottom: 2rem;
          font-size: 0.88rem;
        }

        .show-password-btn {
          position: absolute;
          right: 0.85rem;
          top: 50%;
          transform: translateY(-50%);
          background: none;
          border: none;
          color: var(--n-orange);
          font-weight: 800;
          font-size: 0.76rem;
          cursor: pointer;
        }

        .back-site {
          display: block;
          text-align: center;
          margin-top: 1.3rem;
          color: var(--n-gray);
          font-size: 0.86rem;
          text-decoration: none;
        }

        .back-site:hover {
          color: #fff;
        }
      `}</style>
    </div>
  )
}