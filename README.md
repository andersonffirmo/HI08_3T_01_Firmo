# HI08_3T_01_Firmo - Material Didático Digital (Capítulo 07)
### O Pensamento Político e Social no Século XIX • Escola Parque Ipiranga
**Docente Responsável**: Prof. Anderson Firmo • 8º Ano do Ensino Fundamental

Este projeto é um site estático moderno (HTML + JS + CSS) projetado para rodar com 100% de compatibilidade no **GitHub** e no **GitHub Pages**.

---

## 🚀 Como Publicar no GitHub Pages (Passo a Passo)

### Opção 1: Automático via GitHub Actions (Recomendado)
1. Exporte ou envie este repositório para a sua conta no **GitHub** (via branch `main` ou `master`).
2. No seu repositório no GitHub, clique em **Settings** (Configurações).
3. No menu lateral esquerdo, clique em **Pages**.
4. Em **Build and deployment** > **Source**, selecione **GitHub Actions**.
5. O GitHub executará o fluxo `.github/workflows/deploy.yml` automaticamente e publicará o site online em poucos segundos no endereço:
   `https://<seu-usuario>.github.io/<nome-do-repositorio>/`

---

### Opção 2: Gerar os arquivos HTML e JS Estáticos localmente
Se desejar gerar a pasta final com os arquivos puros de HTML, JS e CSS:

```bash
# 1. Instalar dependências
npm install

# 2. Compilar para HTML/JS estático puro
npm run build
```

Os arquivos estáticos otimizados serão gerados na pasta **`dist/`**:
- `dist/index.html`
- `dist/assets/*.js`
- `dist/assets/*.css`
- `dist/assets/*` (imagens e fontes)

Você pode hospedar o conteúdo da pasta `dist/` diretamente em qualquer servidor estático, GitHub Pages (branch `gh-pages` ou pasta `/docs`), Vercel, Netlify ou servidor escolar.

---

## 🛠️ Tecnologias Utilizadas
- **HTML5 & Vanilla JavaScript Bundle** (Vite + React 19)
- **Tailwind CSS** com a paleta oficial da Escola Parque Ipiranga:
  - Laranja: `#FD7600`
  - Verde: `#016E01`
  - Fundo: `#FBFBFB`
  - Dourado: `#C9A84C`
- **Ícones**: Lucide React
- **Áudio**: Web Speech API nativa do navegador
- **Armazenamento**: `localStorage` nativo do navegador para o progresso das 25 seções
