// build.js
// Concatena os pedaços de src/ (páginas, componentes, shared) em um único
// dist/index.html, para o protótipo continuar rodando como antes (sem
// build tool, sem servidor) enquanto o código-fonte fica organizado.
//
// Uso: node build.js

const fs = require('fs');
const path = require('path');

const SRC = path.join(__dirname, 'src');
const DIST = path.join(__dirname, 'dist');

const read = (...p) => fs.readFileSync(path.join(SRC, ...p), 'utf-8');

const pageOrder = [
  'home', 'campanha', 'checkout', 'login',
  'dash-user', 'dash-pesq', 'criar', 'admin',
];

const pagesHtml = pageOrder
  .map((p) => read('pages', p, `${p}.html`))
  .join('\n');

const jsFiles = [
  // dados de cada página (mock — futuramente viria da API Nest)
  ...pageOrder
    .filter((p) => fs.existsSync(path.join(SRC, 'pages', p, `${p}.data.js`)))
    .map((p) => read('pages', p, `${p}.data.js`)),
  // utilitários e navegação compartilhados
  read('shared', 'js', 'utils.js'),
  // funções de render de cada página
  ...pageOrder
    .filter((p) => fs.existsSync(path.join(SRC, 'pages', p, `${p}.js`)))
    .map((p) => read('pages', p, `${p}.js`)),
  // inicialização da aplicação
  read('app.js'),
].join('\n');

const html = `<!DOCTYPE html>
<html lang="pt-BR" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CrowdAcadêmico - Protótipo Funcional v6</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=DM+Serif+Display&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
    <script>
${read('shared', 'js', 'tailwind.config.js')}
    </script>
    <style>
${read('shared', 'css', 'global.css')}
    </style>
</head>
<body class="bg-surface text-slate-800 flex flex-col min-h-screen">

${read('components', 'floating-nav', 'floating-nav.html')}

${read('components', 'header', 'header.html')}

    <div id="app" class="flex-grow flex flex-col w-full">
${pagesHtml}
    </div>

${read('components', 'footer', 'footer.html')}
    <script>
${jsFiles}
    </script>
</body>
</html>
`;

fs.mkdirSync(DIST, { recursive: true });
fs.writeFileSync(path.join(DIST, 'index.html'), html);
console.log('✔ dist/index.html gerado com sucesso.');
