import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || '/api',
  headers: {
    'Content-Type': 'application/json',
    'Accept':       'application/json',
  },
  withCredentials: false,
})

// Attach token to every request
api.interceptors.request.use(config => {
  const token = localStorage.getItem('nexav_token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

// Global response error handler
api.interceptors.response.use(
  res => res,
  err => {
    if (err.response?.status === 401) {
      localStorage.removeItem('nexav_token')
      // Redirect to login if in admin area
      if (window.location.pathname.startsWith('/admin') && window.location.pathname !== '/admin/login') {
        window.location.href = '/admin/login'
      }
    }
    return Promise.reject(err)
  }
)

export default api
