import { NavLink, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logoutAdmin } from '../../store/authSlice'

const NAV_ITEMS = [
  
  { label: 'Sous-types', icon: '🧩', to: '/admin/sous-types-produits' },
  { label: 'Tableau de bord', icon: '📊', to: '/admin/dashboard' },
  { label: 'Types de produits', icon: '🗂️', to: '/admin/types-produits' },
  { label: 'Produits', icon: '🖥️', to: '/admin/produits' },
  { label: 'Demandes', icon: '📬', to: '/admin/demandes' },
]

export default function AdminLayout({ children, title }) {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector((s) => s.auth)

  const handleLogout = async () => {
    await dispatch(logoutAdmin())
    navigate('/admin/login')
  }

  return (
    <div className="admin-layout">
      <aside className="admin-sidebar">
        <div className="admin-logo-box">
          <NavLink to="/" className="admin-logo">
            NEXAV
          </NavLink>
          <div className="admin-logo-sub">Administration</div>
        </div>

        <nav className="admin-nav">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                isActive ? 'admin-nav-link active' : 'admin-nav-link'
              }
            >
              <span>{item.icon}</span>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="admin-user-box">
          {user && (
            <div className="admin-user">
              <div className="admin-avatar">
                {user.name?.slice(0, 2).toUpperCase() || 'AD'}
              </div>
              <div>
                <div className="admin-user-name">{user.name || 'Admin'}</div>
                <div className="admin-user-email">{user.email}</div>
              </div>
            </div>
          )}

          <button onClick={handleLogout} className="admin-logout">
            <span>🚪</span>
            Déconnexion
          </button>
        </div>
      </aside>

      <div className="admin-main">
        <header className="admin-topbar">
          <h1>{title}</h1>

          <NavLink to="/" target="_blank" className="admin-site-link">
            🌐 Voir le site
          </NavLink>
        </header>

        <div className="admin-content">{children}</div>
      </div>

      <style>{`
        .admin-logo-box {
          padding: 1.5rem 1.4rem;
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }

        .admin-logo {
          font-family: var(--font-head);
          font-size: 1.4rem;
          font-weight: 900;
          color: #fff;
          text-decoration: none;
          letter-spacing: -0.04em;
        }

        .admin-logo-sub {
          font-size: 0.72rem;
          color: var(--n-orange);
          margin-top: 0.2rem;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          font-weight: 800;
        }

        .admin-nav {
          flex: 1;
          padding: 1rem 0.75rem;
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
        }

        .admin-nav-link {
          display: flex;
          align-items: center;
          gap: 0.7rem;
          padding: 0.72rem 0.9rem;
          border-radius: 10px;
          font-size: 0.9rem;
          font-weight: 700;
          color: rgba(255,255,255,0.58);
          text-decoration: none;
          transition: 0.2s;
        }

        .admin-nav-link:hover,
        .admin-nav-link.active {
          color: #fff;
          background: rgba(255,75,43,0.14);
          border: 1px solid rgba(255,75,43,0.22);
        }

        .admin-nav-link span {
          width: 22px;
          text-align: center;
        }

        .admin-user-box {
          padding: 1rem 0.75rem;
          border-top: 1px solid rgba(255,255,255,0.08);
        }

        .admin-user {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          padding: 0.65rem 0.8rem;
          background: rgba(255,255,255,0.04);
          border-radius: 12px;
          margin-bottom: 0.65rem;
        }

        .admin-avatar {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background: var(--n-orange);
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 900;
          flex-shrink: 0;
        }

        .admin-user-name {
          font-size: 0.84rem;
          font-weight: 800;
          color: #fff;
        }

        .admin-user-email {
          font-size: 0.72rem;
          color: var(--n-gray);
          max-width: 160px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .admin-logout {
          width: 100%;
          display: flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.7rem 0.85rem;
          background: transparent;
          border: 1px solid rgba(239,68,68,0.24);
          border-radius: 10px;
          color: #f87171;
          font-weight: 700;
          cursor: pointer;
        }

        .admin-logout:hover {
          background: rgba(239,68,68,0.08);
        }

        .admin-topbar h1 {
          font-family: var(--font-head);
          font-size: 1.15rem;
          font-weight: 800;
          color: #fff;
        }

        .admin-site-link {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.82rem;
          color: var(--n-gray);
          text-decoration: none;
          padding: 0.45rem 0.8rem;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 10px;
        }

        .admin-site-link:hover {
          color: #fff;
          border-color: rgba(255,75,43,0.28);
        }
      `}</style>
    </div>
  )
}