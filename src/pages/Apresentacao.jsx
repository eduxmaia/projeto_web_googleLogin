// src/pages/Apresentacao.jsx
import { useAuth } from '../context/AuthContext'
import styles from './Apresentacao.module.css'

const SKILLS = [
  { label: 'Python', level: 90 },
  { label: 'SQL', level: 85 },
  { label: 'Machine Learning', level: 75 },
  { label: 'Data Visualization', level: 80 },
  { label: 'React / JS', level: 70 },
  { label: 'Power BI', level: 78 },
]

const INTERESTS = [
  { icon: '📊', label: 'Análise de Dados' },
  { icon: '🤖', label: 'Machine Learning' },
  { icon: '☁️', label: 'Cloud & Big Data' },
  { icon: '📈', label: 'Data Visualization' },
  { icon: '⚛️', label: 'Desenvolvimento Web' },
  { icon: '🧠', label: 'Inteligência Artificial' },
]

export default function Apresentacao() {
  const { user } = useAuth()

  return (
    <div className={`${styles.page} container`}>
      {/* Profile hero */}
      <section className={`${styles.profileHero} animate-fade-up`}>
        <div className={styles.avatarWrapper}>
          {user?.photo ? (
            <img
              src={user.photo}
              alt="Foto de perfil"
              className={styles.profilePhoto}
              referrerPolicy="no-referrer"
            />
          ) : (
            <div className={styles.avatarFallback}>EC</div>
          )}
          <div className={styles.avatarGlow} />
          <div className={styles.statusDot} />
        </div>

        <div className={styles.profileInfo}>
          <div className={styles.profileRole}>
            <span className="tag">🎓 Estudante · Área de Dados</span>
          </div>
          <h1 className={styles.profileName}>Eduardo<br />Caetano</h1>
          <p className={styles.profileBio}>
            Desenvolvedor com foco principal em <strong>Ciência e Análise de Dados</strong>.
            Apaixonado por transformar dados brutos em insights valiosos e soluções inteligentes.
            Cursando Desenvolvimento WEB e Front-end como parte da minha formação multidisciplinar.
          </p>

          {user?.email && (
            <div className={styles.contactTag}>
              <span>✉</span> {user.email}
            </div>
          )}
        </div>
      </section>

      <div className={styles.contentGrid}>
        {/* About */}
        <section className={`glass-card ${styles.card} animate-fade-up delay-1`}>
          <h2 className={styles.cardTitle}>
            <span className={styles.cardTitleIcon}>👤</span>
            Sobre Mim
          </h2>
          <div className={styles.aboutText}>
            <p>
              Olá! Sou <strong>Eduardo Caetano</strong>, estudante com sólido interesse em tecnologia e dados.
              Minha trajetória é voltada para a <strong>área de Dados</strong>, buscando sempre dominar
              as ferramentas e técnicas que permitem extrair valor de informações.
            </p>
            <p>
              Acredito que a combinação entre pensamento analítico e habilidades de desenvolvimento
              é o diferencial para criar soluções completas — do backend de dados até a interface do usuário.
            </p>
            <p>
              Este projeto é um exemplo dessa visão: utilizando tecnologias modernas como <strong>React</strong>,
              <strong> Firebase</strong> e boas práticas de front-end para criar uma aplicação funcional e bem apresentada.
            </p>
          </div>
        </section>

        {/* Habilidades */}
        <section className={`glass-card ${styles.card} animate-fade-up delay-2`}>
          <h2 className={styles.cardTitle}>
            <span className={styles.cardTitleIcon}>⚡</span>
            Habilidades Técnicas
          </h2>
          <div className={styles.skillsList}>
            {SKILLS.map((skill) => (
              <div key={skill.label} className={styles.skillRow}>
                <div className={styles.skillHeader}>
                  <span className={styles.skillName}>{skill.label}</span>
                  <span className={styles.skillPct}>{skill.level}%</span>
                </div>
                <div className={styles.skillBar}>
                  <div
                    className={styles.skillFill}
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Interesses */}
        <section className={`glass-card ${styles.card} animate-fade-up delay-3`}>
          <h2 className={styles.cardTitle}>
            <span className={styles.cardTitleIcon}>🎯</span>
            Áreas de Interesse
          </h2>
          <div className={styles.interestGrid}>
            {INTERESTS.map((item) => (
              <div key={item.label} className={styles.interestItem}>
                <span className={styles.interestIcon}>{item.icon}</span>
                <span className={styles.interestLabel}>{item.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Destaque dados */}
        <section className={`${styles.dataFocusCard} animate-fade-up delay-4`}>
          <div className={styles.dataFocusInner}>
            <div className={styles.dataFocusLeft}>
              <span className={styles.dataFocusEmoji}>📊</span>
              <div>
                <h3>Foco Principal: Dados</h3>
                <p>
                  Minha área de maior dedicação é a <strong>Ciência de Dados</strong> — desde a coleta e limpeza
                  até a modelagem preditiva e visualização de resultados. O objetivo é sempre transformar
                  dados em decisões.
                </p>
              </div>
            </div>
            <div className={styles.dataStats}>
              {[
                { val: 'Python', desc: 'Linguagem principal' },
                { val: 'SQL', desc: 'Consultas e ETL' },
                { val: 'ML', desc: 'Modelos preditivos' },
              ].map((s) => (
                <div key={s.val} className={styles.dataStat}>
                  <span className={styles.dataStatVal}>{s.val}</span>
                  <span className={styles.dataStatDesc}>{s.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
