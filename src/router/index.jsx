import { createBrowserRouter } from 'react-router-dom'

// Public pages
import Home from '../pages/Home'
import Produits from '../pages/Produits'
import ProduitsParType from '../pages/ProduitsParType'
import DetailProduit from '../pages/DetailProduit'
import Contact from '../pages/Contact'
import Secteurs from '../pages/Secteurs'

// Admin pages
import LoginAdmin from '../pages/admin/LoginAdmin'
import DashboardAdmin from '../pages/admin/DashboardAdmin'
import TypesProduitsAdmin from '../pages/admin/TypesProduitsAdmin'
import ProduitsAdmin from '../pages/admin/ProduitsAdmin'
import MediasAdmin from '../pages/admin/MediasAdmin'
import DemandesAdmin from '../pages/admin/DemandesAdmin'

// Auth guard
import ProtectedRoute from '../components/ProtectedRoute'


import SousTypesProduitsAdmin from '../pages/admin/SousTypesProduitsAdmin'

export const router = createBrowserRouter([
  // ── Public routes ─────────────────────────────────────
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/produits',
    element: <Produits />,
  },
  {
    path: '/produits/type/:slug',
    element: <ProduitsParType />,
  },
  {
    path: '/admin/sous-types-produits',
    element: (
    
        <SousTypesProduitsAdmin />
      
    ),
  },
  {
    path: '/produits/:id',
    element: <DetailProduit />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
  {
    path: '/secteurs',
    element: <Secteurs />,
  },

  // ── Admin login (public) ───────────────────────────────
  {
    path: '/admin/login',
    element: <LoginAdmin />,
  },

  // ── Admin protected routes ─────────────────────────────
  {
    path: '/admin',
    element: <ProtectedRoute />,
    children: [
      {
        path: 'dashboard',
        element: <DashboardAdmin />,
      },
      {
        path: 'types-produits',
        element: <TypesProduitsAdmin />,
      },
      {
        path: 'produits',
        element: <ProduitsAdmin />,
      },
      {
        path: 'produits/:id/medias',
        element: <MediasAdmin />,
      },
      {
        path: 'demandes',
        element: <DemandesAdmin />,
      },
    ],
  },

  // ── 404 fallback ───────────────────────────────────────
  {
    path: '*',
    element: <NotFound />,
  },
])

function NotFound() {
  return (
    <div style={{
      minHeight: '100vh', background: 'var(--n-dark)',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      textAlign: 'center', padding: '2rem',
    }}>
      <div style={{ fontFamily: 'var(--font-head)', fontSize: '6rem', fontWeight: 800, color: 'rgba(12,91,232,0.3)', lineHeight: 1 }}>
        404
      </div>
      <h1 style={{ fontFamily: 'var(--font-head)', fontSize: '1.8rem', fontWeight: 700, margin: '1rem 0 0.6rem' }}>
        Page introuvable
      </h1>
      <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.5)', marginBottom: '2rem' }}>
        La page que vous recherchez n'existe pas ou a été déplacée.
      </p>
      <a href="/" className="btn btn-primary">
        ← Retour à l'accueil
      </a>
    </div>
  )
}
