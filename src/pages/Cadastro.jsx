// src/pages/Cadastro.jsx
import { useState, useEffect } from 'react'
import { useAuth } from '../context/AuthContext'
import styles from './Cadastro.module.css'

const INITIAL_FORM = {
  nome: '',
  email: '',
  telefone: '',
  cidade: '',
  estado: '',
  profissao: '',
  bio: '',
}

export default function Cadastro() {
  const { user } = useAuth()
  const [form, setForm] = useState(INITIAL_FORM)
  const [submitted, setSubmitted] = useState(false)
  const [jsonResult, setJsonResult] = useState(null)
  const [copied, setCopied] = useState(false)

  // Pre-fill name and email from Google login
  useEffect(() => {
    if (user) {
      setForm((prev) => ({
        ...prev,
        nome: user.name || '',
        email: user.email || '',
      }))
    }
  }, [user])

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = () => {
    if (!form.nome.trim() || !form.email.trim()) {
      alert('Nome e e-mail são obrigatórios.')
      return
    }

    const result = {
      id: crypto.randomUUID(),
      cadastradoEm: new Date().toISOString(),
      usuario: {
        nome: form.nome.trim(),
        email: form.email.trim(),
        telefone: form.telefone.trim() || null,
        cidade: form.cidade.trim() || null,
        estado: form.estado.trim() || null,
        profissao: form.profissao.trim() || null,
        bio: form.bio.trim() || null,
      },
      origem: {
        loginGoogle: true,
        uid: user?.uid || null,
        fotoPerfil: user?.photo || null,
      },
    }

    setJsonResult(result)
    setSubmitted(true)
    console.log('✅ Cadastro finalizado:', result)
  }

  const handleReset = () => {
    setSubmitted(false)
    setJsonResult(null)
    setForm({
      ...INITIAL_FORM,
      nome: user?.name || '',
      email: user?.email || '',
    })
    setCopied(false)
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(JSON.stringify(jsonResult, null, 2))
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className={`${styles.page} container`}>
      <div className={`${styles.header} animate-fade-up`}>
        <span className="tag">📋 Formulário</span>
        <h1 className={styles.title}>Cadastro de Usuário</h1>
        <p className={styles.subtitle}>
          Os campos de nome e e-mail foram preenchidos automaticamente com base no seu login Google.
          Complete os demais dados e clique em <strong>Finalizar Cadastro</strong>.
        </p>
      </div>

      {!submitted ? (
        <div className={`glass-card ${styles.formCard} animate-fade-up delay-1`}>
          <div className={styles.formGrid}>
            {/* Nome */}
            <div className="form-group">
              <label className="form-label">Nome Completo *</label>
              <input
                className="form-input"
                type="text"
                name="nome"
                value={form.nome}
                onChange={handleChange}
                placeholder="Seu nome completo"
              />
              <span className={styles.fieldHint}>
                🔗 Preenchido automaticamente via Google
              </span>
            </div>

            {/* Email */}
            <div className="form-group">
              <label className="form-label">E-mail *</label>
              <input
                className="form-input"
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="seu@email.com"
              />
              <span className={styles.fieldHint}>
                🔗 Preenchido automaticamente via Google
              </span>
            </div>

            {/* Telefone */}
            <div className="form-group">
              <label className="form-label">Telefone <span className={styles.optional}>(opcional)</span></label>
              <input
                className="form-input"
                type="tel"
                name="telefone"
                value={form.telefone}
                onChange={handleChange}
                placeholder="(00) 00000-0000"
              />
            </div>

            {/* Profissão */}
            <div className="form-group">
              <label className="form-label">Profissão <span className={styles.optional}>(opcional)</span></label>
              <input
                className="form-input"
                type="text"
                name="profissao"
                value={form.profissao}
                onChange={handleChange}
                placeholder="Ex: Analista de Dados"
              />
            </div>

            {/* Cidade */}
            <div className="form-group">
              <label className="form-label">Cidade <span className={styles.optional}>(opcional)</span></label>
              <input
                className="form-input"
                type="text"
                name="cidade"
                value={form.cidade}
                onChange={handleChange}
                placeholder="Ex: São Paulo"
              />
            </div>

            {/* Estado */}
            <div className="form-group">
              <label className="form-label">Estado <span className={styles.optional}>(opcional)</span></label>
              <select
                className="form-input"
                name="estado"
                value={form.estado}
                onChange={handleChange}
              >
                <option value="">Selecione...</option>
                {['AC','AL','AP','AM','BA','CE','DF','ES','GO','MA','MT','MS','MG','PA','PB','PR','PE','PI','RJ','RN','RS','RO','RR','SC','SP','SE','TO'].map(uf => (
                  <option key={uf} value={uf}>{uf}</option>
                ))}
              </select>
            </div>

            {/* Bio */}
            <div className={`form-group ${styles.fullWidth}`}>
              <label className="form-label">Breve Apresentação <span className={styles.optional}>(opcional)</span></label>
              <textarea
                className={`form-input ${styles.textarea}`}
                name="bio"
                value={form.bio}
                onChange={handleChange}
                placeholder="Fale um pouco sobre você, suas áreas de interesse, objetivos..."
                rows={4}
              />
            </div>
          </div>

          <div className={styles.formFooter}>
            <button className="btn btn-primary" onClick={handleSubmit}>
              <span>✓</span> Finalizar Cadastro
            </button>
          </div>
        </div>
      ) : (
        <div className={`${styles.resultSection} animate-fade-up`}>
          <div className={styles.successBanner}>
            <span className={styles.successIcon}>✅</span>
            <div>
              <h3>Cadastro realizado com sucesso!</h3>
              <p>O objeto JSON foi gerado e também exibido no console do navegador.</p>
            </div>
          </div>

          <div className={`glass-card ${styles.jsonCard}`}>
            <div className={styles.jsonHeader}>
              <div className={styles.jsonDots}>
                <span style={{ background: '#ff5f57' }} />
                <span style={{ background: '#febc2e' }} />
                <span style={{ background: '#28c840' }} />
              </div>
              <span className={styles.jsonLabel}>resultado.json</span>
              <button className={`btn btn-outline ${styles.copyBtn}`} onClick={handleCopy}>
                {copied ? '✓ Copiado!' : '⎘ Copiar'}
              </button>
            </div>
            <pre className={styles.jsonContent}>
              <code>{JSON.stringify(jsonResult, null, 2)}</code>
            </pre>
          </div>

          <button className="btn btn-outline" onClick={handleReset}>
            ← Novo Cadastro
          </button>
        </div>
      )}
    </div>
  )
}
