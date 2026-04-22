// src/components/Navbar.jsx
import { Link, useLocation } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import styles from './Navbar.module.css'

export default function Navbar() {
  const { user, logout } = useAuth()
  const location = useLocation()

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/apresentacao', label: 'Apresentação' },
    { to: '/cadastro', label: 'Cadastro' },
  ]

  return (
    <nav className={styles.navbar}>
      <div className={styles.inner}>
        <Link to="/" className={styles.logo}>
          <span className={styles.logoSymbol}>⬡</span>
          <span className={styles.logoText}>EC<span className={styles.logoDot}>.</span>dev</span>
        </Link>

        <div className={styles.links}>
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`${styles.link} ${location.pathname === link.to ? styles.active : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className={styles.userArea}>
          {user ? (
            <>
              <div className={styles.userInfo}>
                {user.photo ? (
                  <img src={user.photo} alt={user.name} className={styles.avatar} referrerPolicy="no-referrer" />
                ) : (
                  <div className={styles.avatarFallback}>
                    {user.name?.[0] ?? 'U'}
                  </div>
                )}
                <span className={styles.userName}>{user.name?.split(' ')[0]}</span>
              </div>
              <button onClick={logout} className={`btn btn-danger ${styles.logoutBtn}`}>
                Sair
              </button>
            </>
          ) : (
            <span className={styles.guestLabel}>Faça login para continuar</span>
          )}
        </div>
      </div>
    </nav>
  )
}
