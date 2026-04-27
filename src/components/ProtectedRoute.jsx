import { useEffect } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { fetchMe } from '../store/authSlice'

export default function ProtectedRoute() {
  const { token, hydrated } = useSelector(s => s.auth)
  const dispatch = useDispatch()

  useEffect(() => {
    if (token && !hydrated) {
      dispatch(fetchMe())
    }
  }, [token, hydrated, dispatch])

  if (!token) {
    return <Navigate to="/admin/login" replace />
  }

  // Show loading while verifying token
  if (!hydrated) {
    return (
      <div className="loading-center" style={{ minHeight: '100vh' }}>
        <div className="spinner" />
        <p>Vérification de l'accès...</p>
      </div>
    )
  }

  return <Outlet />
}
