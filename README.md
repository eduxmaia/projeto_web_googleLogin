# Aplicação Web com React — Eduardo Caetano

Projeto acadêmico desenvolvido para a disciplina de **Desenvolvimento WEB e Front-end**.  
Aplicação React com autenticação real via Google (Firebase), navegação entre telas e cadastro de usuários.

## Funcionalidades

- **Login real com Google** via Firebase Authentication
- **Tela Home** — ponto de entrada com botão de login e navegação
- **Tela de Apresentação** — perfil individual com foto do Google e dados do desenvolvedor
- **Tela de Cadastro** — formulário com pré-preenchimento e geração de JSON
- Proteção de rotas para usuários não autenticados
- Estado persistente via Firebase Auth

## 🛠 Tecnologias

| Tecnologia | Uso |
|---|---|
| React 18 | Interface e componentes |
| Vite | Build e dev server |
| React Router v6 | Navegação entre telas |
| Firebase Auth | Login com Google |
| CSS Modules | Estilização por componente |

## 👨‍💻 Autor

**Eduardo Caetano** — foco principal em Ciência e Análise de Dados

## ⚙️ Como rodar localmente

### 1. Clone o repositório
```bash
git clone https://github.com/eduxmaia/projeto_web_googleLogin
cd projeto-web
```

### 2. Instale as dependências
```bash
npm install
```

### 3. Configure o Firebase
Veja a seção abaixo para criar o arquivo `.env`.

### 4. Rode o projeto
```bash
npm run dev
```

Acesse: http://localhost:5173

## 🔥 Configurar Firebase + criar o .env

### Passo 1 — Criar o projeto no Firebase
1. Acesse [console.firebase.google.com](https://console.firebase.google.com)
2. Clique em **Adicionar projeto** → dê um nome → crie
3. No menu lateral, clique em **Authentication** → **Primeiros passos**
4. Clique na aba **Sign-in method** → habilite **Google** → salve

### Passo 2 — Pegar as credenciais
1. Clique no ícone de engrenagem ⚙ → **Configurações do projeto**
2. Role até **Seus apps** → clique em **</>** (Web)
3. Dê um nome ao app → clique em **Registrar app**
4. Você verá um bloco assim:
```js
const firebaseConfig = {
  apiKey: "AIzaSy...",
  authDomain: "meu-projeto.firebaseapp.com",
  projectId: "meu-projeto",
  storageBucket: "meu-projeto.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc123"
};
```

### Passo 3 — Criar o arquivo .env
Na **raiz do projeto** (mesma pasta do `package.json`), crie um arquivo chamado `.env` e cole:
```
VITE_FIREBASE_API_KEY=AIzaSy...
VITE_FIREBASE_AUTH_DOMAIN=meu-projeto.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=meu-projeto
VITE_FIREBASE_STORAGE_BUCKET=meu-projeto.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=123456789
VITE_FIREBASE_APP_ID=1:123456789:web:abc123
```
> Substitua os valores pelos que aparecem no seu console do Firebase.

### Passo 4 — Adicionar localhost como domínio autorizado
1. No Firebase Console → **Authentication** → aba **Settings**
2. Em **Domínios autorizados**, confirme que `localhost` está na lista


## 🔗 Links

- **Repositório GitHub:** https://github.com/eduxmaia/projeto_web_googleLogin