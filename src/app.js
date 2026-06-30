// Ponto de entrada do protótipo: inicializa todas as páginas e abre a Home.
// Cada chamada abaixo corresponde a uma página/feature, hoje em src/pages/*.
// Quando migrar para React, cada render* vira o "useEffect inicial" ou o
// próprio corpo do componente da respectiva página.

renderHomeContent();        // src/pages/home
renderProjectTabs();        // src/pages/campanha
renderDonorDashboard();     // src/pages/dash-user
renderResearcherDashboard();// src/pages/dash-pesq
renderCreateFormContent();  // src/pages/criar
renderAdminMenu();          // src/pages/admin
renderAdminContent();       // src/pages/admin

// Navegação inicial do protótipo (definida em shared/js/utils.js)
nav('home');
