// src/pages/Home.jsx
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { useEffect } from 'react'
import styles from './Home.module.css'

const GOOGLE_ICON = (
  <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
)

export default function Home() {
  const { user, loading, error, loginWithGoogle } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={`${styles.badge} animate-fade-up`}>
            <span>⬡</span> Desenvolvimento WEB · Front-end
          </div>

          <h1 className={`${styles.heroTitle} animate-fade-up delay-1`}>
            Aplicação Web<br />
            <span className={styles.highlight}>com React</span>
          </h1>

          <p className={`${styles.heroSub} animate-fade-up delay-2`}>
            Projeto acadêmico desenvolvido por <strong>Eduardo Caetano</strong> —
            autenticação real com conta Google, navegação entre telas e cadastro de usuários.
          </p>

          {!user ? (
            <div className={`animate-fade-up delay-3`}>
              <button
                className={`btn btn-google ${styles.googleBtn}`}
                onClick={loginWithGoogle}
                disabled={loading}
              >
                {loading ? (
                  <span className={styles.btnSpinner} />
                ) : (
                  GOOGLE_ICON
                )}
                {loading ? 'Entrando...' : 'Entrar com Google'}
              </button>
              {error && <p className={styles.errorMsg}>⚠ {error}</p>}
            </div>
          ) : (
            <div className={`${styles.welcomeBox} animate-fade-up delay-3`}>
              {user.photo && (
                <img
                  src={user.photo}
                  alt={user.name}
                  className={styles.welcomeAvatar}
                  referrerPolicy="no-referrer"
                />
              )}
              <div>
                <p className={styles.welcomeGreeting}>Olá, <strong>{user.name?.split(' ')[0]}</strong> 👋</p>
                <p className={styles.welcomeEmail}>{user.email}</p>
              </div>
            </div>
          )}
        </div>

        <div className={styles.heroDecor}>
          <div className={styles.orb1} />
          <div className={styles.orb2} />
          <div className={styles.gridLines} />
        </div>
      </section>

      {/* Nav cards */}
      {user && (
        <section className={`${styles.navCards} container animate-fade-up`}>
          <h2 className={styles.sectionTitle}>Explorar o sistema</h2>
          <div className={styles.cardGrid}>
            <button className={`glass-card ${styles.navCard}`} onClick={() => navigate('/apresentacao')}>
              <div className={styles.cardIcon}>👤</div>
              <h3>Apresentação</h3>
              <p>Conheça o desenvolvedor, habilidades e área de atuação.</p>
              <span className={styles.cardArrow}>→</span>
            </button>

            <button className={`glass-card ${styles.navCard}`} onClick={() => navigate('/cadastro')}>
              <div className={styles.cardIcon}>📋</div>
              <h3>Cadastro</h3>
              <p>Preencha seus dados, gere um JSON e visualize o resultado.</p>
              <span className={styles.cardArrow}>→</span>
            </button>
          </div>
        </section>
      )}

      {/* Features strip */}
      <section className={`${styles.features} container`}>
        <div className={styles.featureGrid}>
          {[
            { icon: '🔥', label: 'Firebase Auth', desc: 'Login real com Google' },
            { icon: '⚛️', label: 'React 18', desc: 'Componentes funcionais' },
            { icon: '🔀', label: 'React Router', desc: 'Navegação entre telas' },
            { icon: '📦', label: 'Vite', desc: 'Build ultra-rápido' },
          ].map((f) => (
            <div key={f.label} className={`glass-card ${styles.featureItem}`}>
              <span className={styles.featureIcon}>{f.icon}</span>
              <div>
                <strong>{f.label}</strong>
                <span>{f.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
