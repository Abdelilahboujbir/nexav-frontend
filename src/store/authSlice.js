import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { login as apiLogin, me as apiMe, logout as apiLogout } from '../api/auth'

// ── Thunks ─────────────────────────────────────────────────────────────────

export const loginAdmin = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const res = await apiLogin(credentials)
      const token = res.data.token
      localStorage.setItem('nexav_token', token)
      return { user: res.data.user, token }
    } catch (err) {
      return rejectWithValue(
        err.response?.data?.message || 'Identifiants incorrects. Vérifiez votre e-mail et mot de passe.'
      )
    }
  }
)

export const fetchMe = createAsyncThunk(
  'auth/me',
  async (_, { rejectWithValue }) => {
    try {
      const res = await apiMe()
      return res.data
    } catch {
      localStorage.removeItem('nexav_token')
      return rejectWithValue(null)
    }
  }
)

export const logoutAdmin = createAsyncThunk(
  'auth/logout',
  async () => {
    try { await apiLogout() } catch {}
    localStorage.removeItem('nexav_token')
  }
)

// ── Slice ───────────────────────────────────────────────────────────────────

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user:      null,
    token:     localStorage.getItem('nexav_token') || null,
    loading:   false,
    error:     null,
    hydrated:  false,
  },
  reducers: {
    clearError: state => { state.error = null },
  },
  extraReducers: builder => {
    builder
      // Login
      .addCase(loginAdmin.pending, state => {
        state.loading = true
        state.error   = null
      })
      .addCase(loginAdmin.fulfilled, (state, action) => {
        state.loading = false
        state.user    = action.payload.user
        state.token   = action.payload.token
        state.error   = null
      })
      .addCase(loginAdmin.rejected, (state, action) => {
        state.loading = false
        state.error   = action.payload
      })
      // Fetch me
      .addCase(fetchMe.pending, state => {
        state.hydrated = false
      })
      .addCase(fetchMe.fulfilled, (state, action) => {
        state.user     = action.payload
        state.hydrated = true
      })
      .addCase(fetchMe.rejected, state => {
        state.user     = null
        state.token    = null
        state.hydrated = true
      })
      // Logout
      .addCase(logoutAdmin.fulfilled, state => {
        state.user  = null
        state.token = null
      })
  },
})

export const { clearError } = authSlice.actions
export default authSlice.reducer
