import { useState, useRef } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logoutAdmin } from '../../store/authSlice'

const solutionsLinks = [
  {
    label: 'Tous les produits',
    to: '/produits',
    dividerAfter: true,
    children: [],
  },
  {
    label: 'Affichage dynamique',
    to: '/produits/type/ecrans',
    children: [
      { label: 'Écrans interactifs', to: '/produits/type/ecrans' },
      { label: 'Totems interactifs', to: '/produits/type/ecrans' },
      { label: 'Écran géant LED', to: '/produits/type/ecrans' },
      { label: 'Mur d’image', to: '/produits/type/ecrans' },
      { label: 'Support moniteurs', to: '/produits/type/ecrans' },
    ],
  },
  {
    label: 'Audiovisuel',
    to: '/produits/type/audiovisuel',
    children: [],
  },
  {
    label: 'Logiciels',
    to: '/produits/type/logiciels',
    children: [],
  },
  {
    label: 'Tablettes interactives',
    to: '/produits/type/tablettes',
    children: [],
  },
]

const navLinks = [
  { label: 'Accueil', to: '/' },
  { label: "Secteurs d'activités", to: '/secteurs' },
  { label: 'Contact', to: '/contact#demande-form' },
]

// ─── SubMenu with stable hover ────────────────────────────────────────────────
// Each dd-group manages its own open state via enter/leave + a close-delay timer.
// A transparent ::before pseudo-element on .nb-sub-menu bridges the 8px gap so
// the cursor never leaves a "hot" area when moving from the parent to the submenu.

function DdGroup({ item, onClose }) {
  const [subOpen, setSubOpen] = useState(false)
  const closeTimer = useRef(null)

  const openSub = () => {
    clearTimeout(closeTimer.current)
    setSubOpen(true)
  }

  const schedulClose = () => {
    closeTimer.current = setTimeout(() => setSubOpen(false), 200)
  }

  if (item.children.length === 0) {
    return (
      <div className="nb-dd-group">
        <Link
          to={item.to}
          className="nb-dd-item"
          onClick={onClose}
        >
          <span>{item.label}</span>
        </Link>
        {item.dividerAfter && <div className="nb-dd-divider" />}
      </div>
    )
  }

  return (
    <div
      className="nb-dd-group"
      onMouseEnter={openSub}
      onMouseLeave={schedulClose}
    >
      <Link
        to={item.to}
        className="nb-dd-item"
        onClick={onClose}
      >
        <span>{item.label}</span>
        <span className="nb-dd-arrow">›</span>
      </Link>

      {/* Sub-menu: also keeps itself open on hover */}
      <div
        className={`nb-sub-menu${subOpen ? ' sub-open' : ''}`}
        onMouseEnter={openSub}
        onMouseLeave={schedulClose}
      >
        {item.children.map((child) => (
          <Link
            key={child.label}
            to={child.to}
            className="nb-sub-item"
            onClick={onClose}
          >
            {child.label}
          </Link>
        ))}
      </div>

      {item.dividerAfter && <div className="nb-dd-divider" />}
    </div>
  )
}

// ─── Navbar ───────────────────────────────────────────────────────────────────

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [solOpen, setSolOpen] = useState(false)
  const solCloseTimer = useRef(null)
  const { token } = useSelector((s) => s.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogout = async () => {
    await dispatch(logoutAdmin())
    navigate('/')
  }

  const closeAll = () => {
    setSolOpen(false)
    setMenuOpen(false)
  }

  // Keep the main Solutions dropdown open while the mouse is anywhere inside it
  const openSol = () => {
    clearTimeout(solCloseTimer.current)
    setSolOpen(true)
  }

  const schedulCloseSol = () => {
    solCloseTimer.current = setTimeout(() => setSolOpen(false), 200)
  }

  return (
    <>
      <nav className="nb-root">
        {/* ── Brand ── */}
        <Link to="/" className="nb-brand">
          <div className="nb-brand-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <rect x="3" y="5" width="11" height="14" rx="2" stroke="currentColor" strokeWidth="2" />
              <path d="M17 7h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2" stroke="currentColor" strokeWidth="2" />
              <path d="M7 9h3M7 13h3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
          <div className="nb-brand-text">
            <strong>NEXAV</strong>
            <small>Digital Solutions</small>
          </div>
        </Link>

        {/* ── Desktop links ── */}
        <ul className="nb-links">
          {/* Solutions dropdown */}
          <li
            className="nb-sol-wrap"
            onMouseEnter={openSol}
            onMouseLeave={schedulCloseSol}
          >
            <button
              className={`nb-sol-btn${solOpen ? ' open' : ''}`}
              onClick={() => setSolOpen((v) => !v)}
            >
              Solutions
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
              </svg>
            </button>

            {solOpen && (
              <div
                className="nb-dropdown open"
                onMouseEnter={openSol}
                onMouseLeave={schedulCloseSol}
              >
                {solutionsLinks.map((item) => (
                  <DdGroup key={item.label} item={item} onClose={closeAll} />
                ))}
              </div>
            )}
          </li>

          {navLinks.map((l) => (
            <li key={l.label}>
              <NavLink
                to={l.to}
                className={({ isActive }) => `nb-link${isActive ? ' active' : ''}`}
              >
                {l.label}
              </NavLink>
            </li>
          ))}

          {token && (
            <li>
              <Link to="/admin/dashboard" className="nb-link">
                Admin
              </Link>
            </li>
          )}
        </ul>

        {/* ── Actions ── */}
        <div className="nb-actions">
          {token ? (
            <button onClick={handleLogout} className="nb-btn-secondary">
              Déconnexion
            </button>
          ) : (
            <Link to="/contact#demande-form" className="nb-btn-demo">
              Demander une démo
            </Link>
          )}

          <button
            className="nb-hamburger"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* ── Mobile menu ── */}
      {menuOpen && (
        <div className="nb-mobile-overlay" onClick={() => setMenuOpen(false)}>
          <div className="nb-mobile" onClick={(e) => e.stopPropagation()}>
            <Link to="/produits" className="nb-m-link" onClick={() => setMenuOpen(false)}>
              Solutions
            </Link>

            {navLinks.map((l) => (
              <Link key={l.label} to={l.to} className="nb-m-link" onClick={() => setMenuOpen(false)}>
                {l.label}
              </Link>
            ))}

            {token && (
              <Link to="/admin/dashboard" className="nb-m-link" onClick={() => setMenuOpen(false)}>
                Admin
              </Link>
            )}

            <div className="nb-m-divider" />

            {token ? (
              <button className="nb-m-demo" onClick={() => { setMenuOpen(false); handleLogout() }}>
                Déconnexion
              </button>
            ) : (
              <Link to="/contact#demande-form" className="nb-m-demo" onClick={() => setMenuOpen(false)}>
                Demander une démo
              </Link>
            )}
          </div>
        </div>
      )}

      <style>{`
        /* ─── Sub-menu hover bridge fix ──────────────────────────────────────────
           The submenu is positioned 8px to the right of the parent item.
           A transparent ::before pseudo-element covers that gap so the cursor
           never leaves a "hot zone" while travelling from the item to the submenu.
           Visibility is controlled by the .sub-open class (React state) instead of
           pure CSS :hover so the 200ms JS timer governs close timing.
        ─────────────────────────────────────────────────────────────────────── */

        .nb-dd-group {
          position: relative;
        }

        .nb-dd-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .nb-dd-arrow {
          color: #9ca3af;
          font-size: 1.1rem;
        }

        /* Sub-menu panel — hidden by default */
        .nb-sub-menu {
          position: absolute;
          top: 0;
          left: calc(100% + 8px);
          min-width: 220px;
          background: #fff;
          border: 1px solid rgba(17,17,17,0.1);
          border-radius: 14px;
          padding: 6px;
          box-shadow: 0 16px 40px rgba(17,17,17,0.1);
          opacity: 0;
          pointer-events: none;
          transform: translateX(-6px);
          transition: opacity 0.18s ease, transform 0.18s ease;
          /* Extend the hit-box leftward to bridge the 8px gap */
          /* This transparent pseudo-element fills the space between parent and submenu */
        }

        /* Transparent bridge: extends the interactive area leftward by 12px
           so the cursor stays "inside" an element while crossing the gap */
        .nb-sub-menu::before {
          content: '';
          position: absolute;
          top: 0;
          left: -12px;       /* covers the 8px gap + 4px safety margin */
          width: 12px;
          height: 100%;
        }

        /* Open state driven by React (.sub-open class) */
        .nb-sub-menu.sub-open {
          opacity: 1;
          pointer-events: auto;
          transform: translateX(0);
        }

        .nb-sub-item {
          display: block;
          padding: 9px 12px;
          border-radius: 8px;
          font-size: 0.84rem;
          font-weight: 700;
          color: #374151;
          text-decoration: none;
          white-space: nowrap;
        }

        .nb-sub-item:hover {
          background: #fff2ee;
          color: #E8490F;
        }

        /* ─── Navbar root ─────────────────────────────────────────────────────── */

        .nb-root {
          width: 100%;
          max-width: 100vw;
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 100;
          height: var(--nav-h, 64px);
          padding: 0 5%;
          background: #ffffff;
          border-bottom: 1px solid #eeeeee;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
        }

        /* ── Brand ── */
        .nb-brand {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          flex-shrink: 0;
        }
        .nb-brand-icon {
          width: 36px; height: 36px;
          background: #E8490F;
          border-radius: 8px;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
          color: #fff;
        }
        .nb-brand-text {
          display: flex; flex-direction: column;
          line-height: 1;
          color: #111;
        }
        .nb-brand-text strong {
          font-size: 1.1rem;
          font-weight: 800;
          letter-spacing: -0.04em;
        }
        .nb-brand-text small {
          margin-top: 3px;
          font-size: 0.53rem;
          font-weight: 800;
          letter-spacing: 0.07em;
          color: #E8490F;
          text-transform: uppercase;
        }

        /* ── Desktop nav ── */
        .nb-links {
          display: flex;
          align-items: center;
          gap: 2px;
          list-style: none;
          flex: 1;
          justify-content: center;
        }
        .nb-link {
          font-size: 0.875rem;
          font-weight: 700;
          color: #374151;
          text-decoration: none;
          padding: 6px 12px;
          border-radius: 8px;
          transition: color 0.15s, background 0.15s;
          white-space: nowrap;
        }
        .nb-link:hover,
        .nb-link.active {
          color: #E8490F;
          background: #fff2ee;
        }

        /* ── Solutions dropdown ── */
        .nb-sol-wrap {
          position: relative;
        }
        .nb-sol-btn {
          display: flex; align-items: center; gap: 5px;
          font-size: 0.875rem; font-weight: 700;
          color: #374151;
          background: none; border: none;
          padding: 6px 12px; border-radius: 8px;
          cursor: pointer;
          transition: color 0.15s, background 0.15s;
        }
        .nb-sol-btn svg {
          transition: transform 0.2s;
        }
        .nb-sol-btn.open svg {
          transform: rotate(180deg);
        }
        .nb-sol-btn:hover,
        .nb-sol-btn.open {
          color: #E8490F;
          background: #fff2ee;
        }
        .nb-dropdown {
          position: absolute;
          top: calc(100% + 12px);
          left: 50%;
          transform: translateX(-50%);
          min-width: 230px;
          background: #fff;
          border: 1px solid rgba(17,17,17,0.1);
          border-radius: 16px;
          padding: 6px;
          box-shadow: 0 16px 40px rgba(17,17,17,0.1);
          z-index: 200;
        }
        /* Transparent bridge above the dropdown covering the 12px gap to nb-sol-btn */
        .nb-dropdown::before {
          content: '';
          position: absolute;
          top: -14px;
          left: 0;
          right: 0;
          height: 14px;
        }
        .nb-dd-item {
          display: flex; align-items: center; gap: 10px;
          padding: 8px 10px;
          border-radius: 8px;
          text-decoration: none;
          color: #111827;
          font-size: 0.85rem; font-weight: 700;
          transition: background 0.12s;
        }
        .nb-dd-item:hover {
          background: #fff2ee;
          color: #E8490F;
        }
        .nb-dd-icon {
          width: 28px; height: 28px;
          border-radius: 6px;
          background: #f5f5f5;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
          color: #E8490F;
        }
        .nb-dd-divider {
          height: 1px;
          background: #f0f0f0;
          margin: 5px 6px;
        }

        /* ── Actions ── */
        .nb-actions {
          display: flex; align-items: center; gap: 8px;
          flex-shrink: 0;
        }
        .nb-btn-demo {
          background: #E8490F;
          color: #fff;
          border: none;
          border-radius: 8px;
          padding: 8px 16px;
          font-size: 0.84rem; font-weight: 700;
          cursor: pointer;
          text-decoration: none;
          white-space: nowrap;
          transition: background 0.15s, transform 0.1s;
          display: inline-block;
        }
        .nb-btn-demo:hover { background: #CC3D09; }
        .nb-btn-demo:active { transform: scale(0.98); }
        .nb-btn-secondary {
          background: none;
          color: #374151;
          border: 1px solid #e5e7eb;
          border-radius: 8px;
          padding: 7px 14px;
          font-size: 0.84rem; font-weight: 700;
          cursor: pointer;
          transition: border-color 0.15s, color 0.15s;
        }
        .nb-btn-secondary:hover { border-color: #E8490F; color: #E8490F; }

        /* ── Hamburger ── */
        .nb-hamburger {
          display: none;
          width: 40px; height: 40px;
          border-radius: 10px;
          border: 1px solid #e5e7eb;
          background: #fff;
          align-items: center; justify-content: center;
          flex-direction: column;
          gap: 5px;
          cursor: pointer;
        }
        .nb-hamburger span {
          width: 16px; height: 1.5px;
          background: #111;
          border-radius: 2px;
          display: block;
        }

        /* ── Mobile menu ── */
        .nb-mobile-overlay {
          position: fixed;
          inset: var(--nav-h, 64px) 0 0;
          z-index: 99;
          background: rgba(0,0,0,0.25);
          animation: fadeOverlay 0.18s ease forwards;
        }
        .nb-mobile {
          background: #fff;
          padding: 14px 5% 22px;
          display: flex;
          flex-direction: column;
          gap: 2px;
          box-shadow: 0 18px 40px rgba(0,0,0,0.12);
          animation: slideMenu 0.22s ease forwards;
        }
        .nb-m-link {
          display: block;
          padding: 11px 12px;
          border-radius: 8px;
          font-size: 0.95rem; font-weight: 700;
          color: #111;
          text-decoration: none;
          transition: background 0.12s;
        }
        .nb-m-link:hover { background: #fff2ee; color: #E8490F; }
        .nb-m-divider {
          height: 1px;
          background: #f0f0f0;
          margin: 6px 0;
        }
        .nb-m-demo {
          display: block;
          width: 100%;
          margin-top: 4px;
          background: #E8490F;
          color: #fff;
          border: none;
          border-radius: 8px;
          padding: 12px 16px;
          font-size: 0.9rem; font-weight: 700;
          text-align: center;
          text-decoration: none;
          cursor: pointer;
        }
        .nb-m-link,
        .nb-m-demo,
        .nb-m-divider {
          opacity: 0;
          transform: translateY(8px);
          animation: itemIn 0.22s ease forwards;
        }
        .nb-m-link:nth-child(1) { animation-delay: 0.03s; }
        .nb-m-link:nth-child(2) { animation-delay: 0.06s; }
        .nb-m-link:nth-child(3) { animation-delay: 0.09s; }
        .nb-m-link:nth-child(4) { animation-delay: 0.12s; }
        .nb-m-link:nth-child(5) { animation-delay: 0.15s; }
        .nb-m-divider { animation-delay: 0.16s; }
        .nb-m-demo    { animation-delay: 0.18s; }

        @keyframes fadeOverlay {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes slideMenu {
          from { opacity: 0; transform: translateY(-12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes itemIn {
          to { opacity: 1; transform: translateY(0); }
        }

        /* ── Responsive ── */
        @media (max-width: 1120px) {
          .nb-root { padding: 0 5%; }
        }
        @media (max-width: 820px) {
          .nb-links { display: none; }
          .nb-btn-demo,
          .nb-btn-secondary { display: none; }
          .nb-hamburger { display: flex; }
        }
      `}</style>
    </>
  )
}