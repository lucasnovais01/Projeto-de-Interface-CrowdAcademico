# CrowdAcadêmico — Estrutura dividida

Protótipo dividido em páginas/componentes/shared, mantendo HTML/CSS/JS puro
(sem build tool de verdade — `node build.js` só concatena os arquivos pra
gerar um `dist/index.html` único, igual o de antes).

## Como rodar
```
node build.js
```
Depois abra `dist/index.html` no navegador. Sempre que editar algo em `src/`,
rode `node build.js` de novo para atualizar o `dist/index.html`.

## Estrutura

```
src/
  pages/<nome-da-tela>/
    <nome>.html       -> markup da tela (ex: pages/home/home.html)
    <nome>.data.js     -> dados mockados da tela (futura API/Nest)
    <nome>.js          -> funções de render daquela tela
  components/
    header/header.html
    footer/footer.html
    floating-nav/floating-nav.html   -> menu de debug do protótipo
  shared/
    css/global.css           -> estilos globais (transições, toggle etc.)
    js/utils.js               -> escapeHtml, nav(), showAction, renderSidebarNav
    js/tailwind.config.js     -> tema de cores/fontes da marca
  app.js                       -> inicializa os renders e abre a Home
build.js                       -> gera dist/index.html a partir de src/
dist/index.html                -> arquivo final, pronto pra abrir no navegador
```

## Mapeamento página -> futura rota React

| Pasta em src/pages | Rota React (sugestão) | Futuro endpoint Nest |
|---|---|---|
| home | `/` | `GET /projetos`, `GET /stats` |
| campanha | `/projetos/:id` | `GET /projetos/:id` |
| checkout | `/projetos/:id/checkout` | `POST /doacoes/pix` |
| login | `/login`, `/cadastro` | `POST /auth/login` |
| dash-user | `/painel/doador` | `GET /doador/me` |
| dash-pesq | `/painel/pesquisador` | `GET /pesquisador/me` |
| criar | `/projetos/novo` | `POST /projetos` |
| admin | `/admin` | `GET /admin/*` (rotas protegidas por role) |

Os arquivos `*.data.js` de cada página já isolam o que hoje é mock e amanhã
vira resposta de API — é só trocar o `const X = [...]` por um `fetch`/serviço
do Nest mantendo a mesma forma de dado.
