import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logoutAdmin } from '../../store/authSlice'
import {
  LayoutDashboard,
  Monitor,
  FolderOpen,
  Layers,
  MessageSquare,
  LogOut,
  Globe,
  Menu,
  X,
  ChevronRight,
} from 'lucide-react'

const NAV_ITEMS = [
  { label: 'Tableau de bord', icon: LayoutDashboard, to: '/admin/dashboard' },
  { label: 'Produits', icon: Monitor, to: '/admin/produits' },
  { label: 'Types de produits', icon: FolderOpen, to: '/admin/types-produits' },
  { label: 'Sous types', icon: Layers, to: '/admin/sous-types-produits' },
  { label: 'Demandes', icon: MessageSquare, to: '/admin/demandes' },
]

export default function AdminLayout({ children, title }) {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector((s) => s.auth)
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const handleLogout = async () => {
    await dispatch(logoutAdmin())
    navigate('/admin/login')
  }

  const closeSidebar = () => setSidebarOpen(false)

  return (
    <div className="al-root">
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div className="al-overlay" onClick={closeSidebar} />
      )}

      {/* Sidebar */}
      <aside className={`al-sidebar ${sidebarOpen ? 'al-sidebar--open' : ''}`}>
        <div className="al-logo-area">
          <NavLink to="/" className="al-logo">NEXAV</NavLink>
          <div className="al-logo-badge">Administration</div>
          <button className="al-close-btn" onClick={closeSidebar} aria-label="Fermer">
            <X size={18} />
          </button>
        </div>

        <nav className="al-nav">
          <div className="al-nav-label">Navigation</div>
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon
            return (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={closeSidebar}
                className={({ isActive }) =>
                  `al-nav-link${isActive ? ' al-nav-link--active' : ''}`
                }
              >
                <span className="al-nav-icon"><Icon size={17} /></span>
                <span className="al-nav-text">{item.label}</span>
                <ChevronRight size={13} className="al-nav-arrow" />
              </NavLink>
            )
          })}
        </nav>

        <div className="al-user-area">
          {user && (
            <div className="al-user-card">
              <div className="al-avatar">
                {user.name?.slice(0, 2).toUpperCase() || 'AD'}
              </div>
              <div className="al-user-info">
                <div className="al-user-name">{user.name || 'Admin'}</div>
                <div className="al-user-email">{user.email}</div>
              </div>
            </div>
          )}
          <button onClick={handleLogout} className="al-logout-btn">
            <LogOut size={15} />
            Déconnexion
          </button>
        </div>
      </aside>

      {/* Main area */}
      <div className="al-main">
        <header className="al-topbar">
          <div className="al-topbar-left">
            <button
              className="al-menu-btn"
              onClick={() => setSidebarOpen(true)}
              aria-label="Ouvrir le menu"
            >
              <Menu size={20} />
            </button>
            <h1 className="al-page-title">{title}</h1>
          </div>
          <NavLink to="/" target="_blank" className="al-site-link">
            <Globe size={14} />
            <span>Voir le site</span>
          </NavLink>
        </header>

        <main className="al-content">{children}</main>
      </div>

      <style>{`
        *, *::before, *::after { box-sizing: border-box; }

        .al-root {
          display: flex;
          min-height: 100vh;
          background: var(--n-bg, #080f1a);
        }

        /* ── Overlay ── */
        .al-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.55);
          z-index: 199;
          backdrop-filter: blur(2px);
        }

        /* ── Sidebar ── */
        .al-sidebar {
          width: 240px;
          flex-shrink: 0;
          background: rgba(255,255,255,0.025);
          border-right: 1px solid rgba(255,255,255,0.07);
          display: flex;
          flex-direction: column;
          position: sticky;
          top: 0;
          height: 100vh;
          overflow-y: auto;
          z-index: 200;
          transition: transform 0.28s cubic-bezier(.4,0,.2,1);
        }

        /* ── Logo ── */
        .al-logo-area {
          padding: 1.4rem 1.25rem 1.2rem;
          border-bottom: 1px solid rgba(255,255,255,0.06);
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 0.35rem;
          position: relative;
        }

        .al-logo {
          font-size: 1.35rem;
          font-weight: 900;
          color: #fff;
          text-decoration: none;
          letter-spacing: -0.04em;
          font-family: var(--font-head, sans-serif);
          line-height: 1;
          width: 100%;
        }

        .al-logo-badge {
          font-size: 0.65rem;
          color: #ff4b2b;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-weight: 800;
        }

        .al-close-btn {
          display: none;
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.1);
          color: rgba(255,255,255,0.7);
          border-radius: 8px;
          width: 32px;
          height: 32px;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }

        /* ── Nav ── */
        .al-nav {
          flex: 1;
          padding: 1.25rem 0.75rem;
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
        }

        .al-nav-label {
          font-size: 0.62rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: rgba(255,255,255,0.28);
          font-weight: 800;
          padding: 0 0.65rem;
          margin-bottom: 0.5rem;
        }

        .al-nav-link {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          padding: 0.65rem 0.75rem;
          border-radius: 10px;
          font-size: 0.865rem;
          font-weight: 600;
          color: rgba(255,255,255,0.5);
          text-decoration: none;
          transition: all 0.18s;
          border: 1px solid transparent;
          position: relative;
        }

        .al-nav-link:hover {
          color: rgba(255,255,255,0.9);
          background: rgba(255,255,255,0.05);
        }

        .al-nav-link--active {
          color: #fff;
          background: rgba(255,75,43,0.14);
          border-color: rgba(255,75,43,0.25);
        }

        .al-nav-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 20px;
          flex-shrink: 0;
        }

        .al-nav-text {
          flex: 1;
        }

        .al-nav-arrow {
          opacity: 0;
          color: rgba(255,75,43,0.7);
          transition: opacity 0.15s;
        }

        .al-nav-link--active .al-nav-arrow,
        .al-nav-link:hover .al-nav-arrow {
          opacity: 1;
        }

        /* ── User area ── */
        .al-user-area {
          padding: 0.85rem 0.75rem;
          border-top: 1px solid rgba(255,255,255,0.06);
        }

        .al-user-card {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.65rem 0.75rem;
          background: rgba(255,255,255,0.04);
          border-radius: 10px;
          margin-bottom: 0.6rem;
          min-width: 0;
        }

        .al-avatar {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: #ff4b2b;
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 900;
          font-size: 0.75rem;
          flex-shrink: 0;
        }

        .al-user-info {
          min-width: 0;
          flex: 1;
        }

        .al-user-name {
          font-size: 0.82rem;
          font-weight: 700;
          color: #fff;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .al-user-email {
          font-size: 0.7rem;
          color: rgba(255,255,255,0.38);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .al-logout-btn {
          width: 100%;
          display: flex;
          align-items: center;
          gap: 0.55rem;
          padding: 0.62rem 0.75rem;
          background: transparent;
          border: 1px solid rgba(239,68,68,0.22);
          border-radius: 9px;
          color: #f87171;
          font-weight: 700;
          font-size: 0.835rem;
          cursor: pointer;
          transition: all 0.18s;
          font-family: var(--font-body, sans-serif);
        }

        .al-logout-btn:hover {
          background: rgba(239,68,68,0.09);
          border-color: rgba(239,68,68,0.38);
        }

        /* ── Main ── */
        .al-main {
          flex: 1;
          min-width: 0;
          display: flex;
          flex-direction: column;
        }

        /* ── Topbar ── */
        .al-topbar {
          position: sticky;
          top: 0;
          z-index: 100;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          padding: 0 1.5rem;
          height: 60px;
          background: rgba(8,15,26,0.9);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }

        .al-topbar-left {
          display: flex;
          align-items: center;
          gap: 0.85rem;
          min-width: 0;
        }

        .al-menu-btn {
          display: none;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          color: rgba(255,255,255,0.75);
          border-radius: 9px;
          cursor: pointer;
          flex-shrink: 0;
          transition: all 0.18s;
        }

        .al-menu-btn:hover {
          background: rgba(255,255,255,0.09);
          color: #fff;
        }

        .al-page-title {
          font-family: var(--font-head, sans-serif);
          font-size: 1.05rem;
          font-weight: 800;
          color: #fff;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .al-site-link {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.8rem;
          color: rgba(255,255,255,0.45);
          text-decoration: none;
          padding: 0.4rem 0.75rem;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 8px;
          white-space: nowrap;
          transition: all 0.18s;
          flex-shrink: 0;
        }

        .al-site-link:hover {
          color: #fff;
          border-color: rgba(255,75,43,0.3);
          background: rgba(255,75,43,0.07);
        }

        .al-site-link span {
          display: none;
        }

        .al-content {
          flex: 1;
          padding: 1.75rem 1.5rem;
        }

        /* ── Responsive ── */
        @media (min-width: 769px) {
          .al-site-link span { display: inline; }
          .al-menu-btn { display: none !important; }
        }

        @media (max-width: 768px) {
          .al-sidebar {
            position: fixed;
            left: 0;
            top: 0;
            height: 100vh;
            transform: translateX(-100%);
            box-shadow: 4px 0 24px rgba(0,0,0,0.4);
          }

          .al-sidebar--open {
            transform: translateX(0);
          }

          .al-close-btn {
            display: flex;
          }

          .al-menu-btn {
            display: flex;
          }

          .al-content {
            padding: 1.25rem 1rem;
          }

          .al-topbar {
            padding: 0 1rem;
          }
        }

        @media (max-width: 480px) {
          .al-content {
            padding: 1rem 0.75rem;
          }
        }
          
      `}</style>
    </div>
  )
}