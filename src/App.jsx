// src/App.jsx
import { Routes, Route, Navigate } from 'react-router-dom'
import { useAuth } from './context/AuthContext'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Apresentacao from './pages/Apresentacao'
import Cadastro from './pages/Cadastro'
import LoadingScreen from './components/LoadingScreen'

function ProtectedRoute({ children }) {
  const { user, loading } = useAuth()
  if (loading) return <LoadingScreen />
  if (!user) return <Navigate to="/" replace />
  return children
}

export default function App() {
  const { loading } = useAuth()

  if (loading) return <LoadingScreen />

  return (
    <div className="app-wrapper">
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/apresentacao"
            element={
              <ProtectedRoute>
                <Apresentacao />
              </ProtectedRoute>
            }
          />
          <Route
            path="/cadastro"
            element={
              <ProtectedRoute>
                <Cadastro />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  )
}
