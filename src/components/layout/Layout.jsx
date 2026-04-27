import Navbar from './Navbar'
import Footer from './Footer'
import { useEffect } from 'react'
import { useLocation, Link } from 'react-router-dom'

export default function Layout({ children }) {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = document.querySelectorAll('.reveal')
    elements.forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [pathname])

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#fff' }}>
      <Navbar />
      <main style={{ flex: 1 }}>
        {children}
      </main>
      <Footer />

      <Link to="/contact#demande-form" className="floating-demo-btn">
        Demander une démo
      </Link>
    </div>
  )
}