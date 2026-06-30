        const adminMenuGroups = [
            {
                title: 'MODERAÇÃO',
                items: [
                    { tab: 'visao-geral', label: 'Visão Geral', icon: 'fa-gauge', active: true },
                    { tab: 'aprovar', label: 'Aprovar Campanhas', icon: 'fa-circle-check', count: '4', countClass: 'bg-amber-100 text-amber-700' },
                    { tab: 'denuncias', label: 'Denúncias', icon: 'fa-flag', count: '6', countClass: 'bg-red-100 text-red-700' },
                    { tab: 'upgrade', label: 'Solicitações', icon: 'fa-user-arrow-up', count: '3', countClass: 'bg-slate-100 text-slate-700' },
                    { tab: 'enc-antecipados', label: 'Enc. Antecipados', icon: 'fa-circle-stop', count: '2', countClass: 'bg-blue-100 text-blue-700' }
                ]
            },
            {
                title: 'CONFIGURAÇÕES',
                items: [
                    { tab: 'taxa', label: 'Taxa da Plataforma', icon: 'fa-percent' },
                    { tab: 'areas', label: 'Áreas CNPq', icon: 'fa-microscope' },
                    { tab: 'denuncias-tipo', label: 'Motivos de Denúncia', icon: 'fa-list-check' },
                    { tab: 'rbac', label: 'Controle de Acesso', icon: 'fa-lock' }
                ]
            }
        ];
        const adminOverviewMetrics = [
            { label: 'Campanhas Ativas', value: '12', status: 'Publicadas', statusClass: 'bg-emerald-50 text-emerald-700' },
            { label: 'Aguardando Aprovação', value: '4', status: 'Em análise', statusClass: 'bg-amber-50 text-amber-700' },
            { label: 'Campanhas com Sucesso', value: '8', status: 'Encerradas', statusClass: 'bg-emerald-50 text-emerald-700' },
            { label: 'Não Atingidas', value: '3', status: 'Encerradas', statusClass: 'bg-rose-50 text-rose-700' }
        ];
        const adminPendingApprovals = [
            { submission: 'Hoje, 14:30', project: 'Testes de VRM em Placas B450', researcher: 'Lucas Novais (IFSP)', model: 'Tudo ou Nada', modelClass: 'bg-amber-100 text-amber-700', value: 'R$ 15.000' }
        ];
        const adminUpgradeRequests = [
            { requester: 'Lucas Novais', link: 'IFSP', date: '12/06/2026', status: 'Pendente', statusClass: 'bg-amber-100 text-amber-700' },
            { requester: 'Mariana Silva', link: 'Unesp', date: '08/06/2026', status: 'Aprovado', statusClass: 'bg-emerald-100 text-emerald-700' }
        ];
        const adminComplaints = [
            { type: 'Campanha', target: 'Ondas Sustentáveis', complainant: 'Pedro Costa', date: '13/06/2026', status: 'Pendente', statusClass: 'bg-amber-100 text-amber-700' },
            { type: 'Perfil', target: 'Dra. Mariana Alves', complainant: 'Clara Souza', date: '11/06/2026', status: 'Em Análise', statusClass: 'bg-blue-100 text-blue-700' }
        ];
        const adminEarlyClosures = [
            { researcher: 'Prof.ª Ana Ribeiro', campaign: 'Sensor de Poluição Urbana', model: 'Flexível', value: 'R$ 8.200', reason: 'Mudança de escopo para protótipo de campo.' }
        ];
        const adminCnpqAreas = [
            { name: 'Ciências Exatas e da Terra', status: 'Ativo', statusClass: 'bg-emerald-50 text-emerald-700' },
            { name: 'Engenharias', status: 'Ativo', statusClass: 'bg-emerald-50 text-emerald-700' },
            { name: 'Ciências Agrárias', status: 'Inativo', statusClass: 'bg-slate-100 text-slate-600', inactive: true }
        ];
        const adminComplaintReasons = [
            { name: 'Conteúdo Fraudulento', status: 'Ativo', statusClass: 'bg-emerald-50 text-emerald-700' },
            { name: 'Pesquisador Falso', status: 'Ativo', statusClass: 'bg-emerald-50 text-emerald-700' }
        ];
        const adminRbacRows = [
            { resource: 'Doar via PIX (RF-046)', anonymous: '✔', registered: '✔', researcher: '✔', admin: '✔' },
            { resource: 'Doar via Cartão (RF-047)', anonymous: '—', registered: '✔', researcher: '✔', admin: '✔' },
            { resource: 'Registrar Denúncia (RF-072)', anonymous: '—', registered: '✔', researcher: '✔', admin: '—' },
            { resource: 'Criar Campanha (RF-012)', anonymous: '—', registered: '—', researcher: '✔', admin: '—' },
            { resource: 'Publicar Endosso (RF-061)', anonymous: '—', registered: '—', researcher: '✔', admin: '—' },
            { resource: 'Moderar Projetos (RF-069)', anonymous: '—', registered: '—', researcher: '—', admin: '✔' }
        ];
