        function renderAdminMenu() {
            const container = document.getElementById('admin-menu-sections');
            if (!container) return;
            container.innerHTML = adminMenuGroups.map(group => `
                <div class="mb-6">
                    <div class="text-[10px] uppercase tracking-widest text-slate-400 font-black mb-3">${escapeHtml(group.title)}</div>
                    <div class="space-y-2">
                        ${group.items.map(item => `
                            <button type="button" data-tab="${escapeHtml(item.tab)}" onclick="setAdminTab('${escapeHtml(item.tab)}')" class="admin-menu-item w-full text-left px-3 py-2.5 flex items-center gap-3 rounded-md ${currentAdminTab === item.tab ? 'bg-slate-100 border-l-2 border-primary text-dark font-semibold' : 'bg-transparent text-slate-600 hover:bg-slate-100 hover:text-dark transition-colors'}">
                                <i class="fa-solid ${escapeHtml(item.icon)} ${currentAdminTab === item.tab ? 'text-primary' : 'text-slate-400'}"></i>
                                <span class="text-sm">${escapeHtml(item.label)}</span>
                                ${item.count ? `<span class="ml-auto inline-flex items-center justify-center rounded-full ${item.countClass} text-[10px] font-black px-2 py-1">${escapeHtml(item.count)}</span>` : ''}
                            </button>
                        `).join('')}
                    </div>
                </div>
            `).join('');
        }
        function renderAdminContent() {
            const overviewMetrics = document.getElementById('admin-overview-metrics');
            const approvals = document.getElementById('admin-approvals-list');
            const upgrades = document.getElementById('admin-upgrade-list');
            const complaints = document.getElementById('admin-complaints-list');
            const earlyClosures = document.getElementById('admin-early-closures-list');
            const areas = document.getElementById('admin-areas-list');
            const reasons = document.getElementById('admin-reasons-list');
            const rbac = document.getElementById('admin-rbac-list');

            if (overviewMetrics) {
                overviewMetrics.innerHTML = adminOverviewMetrics.map(item => `
                    <tr class="hover:bg-slate-50 transition-colors">
                        <td class="px-6 py-4 font-medium text-slate-700">${escapeHtml(item.label)}</td>
                        <td class="text-right px-6 py-4 font-black ${item.label.includes('Aguardando') ? 'text-amber-600' : item.label.includes('Não') ? 'text-rose-600' : 'text-dark'}">${escapeHtml(item.value)}</td>
                        <td class="text-right px-6 py-4"><span class="inline-flex items-center px-3 py-1 rounded-sm ${item.statusClass} text-xs font-bold">${escapeHtml(item.status)}</span></td>
                    </tr>
                `).join('');
            }
            if (approvals) {
                approvals.innerHTML = adminPendingApprovals.map(item => `
                    <tr class="hover:bg-slate-50 transition-colors">
                        <td class="px-6 py-5 font-mono text-xs text-slate-500">${escapeHtml(item.submission)}</td>
                        <td class="px-6 py-5 font-bold text-slate-700">${escapeHtml(item.project)}</td>
                        <td class="px-6 py-5 text-slate-500 text-xs">${escapeHtml(item.researcher)}</td>
                        <td class="px-6 py-5">
                            <span class="inline-flex items-center gap-2 px-3 py-1 rounded-full ${item.modelClass} text-[10px] uppercase tracking-widest">${escapeHtml(item.model)}</span>
                            <div class="mt-2 text-slate-500 text-sm font-semibold">${escapeHtml(item.value)}</div>
                        </td>
                        <td class="px-6 py-5 text-right space-x-2">
                            <button onclick="showAction('Recusa de campanha simulada.');" class="text-red-600 hover:text-white hover:bg-red-600/90 px-4 py-2 rounded text-xs font-bold border border-red-300">Recusar</button>
                            <button onclick="showAction('Aprovação de captação simulada.');" class="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded text-xs font-bold">Aprovar</button>
                        </td>
                    </tr>
                `).join('');
            }
            if (upgrades) {
                upgrades.innerHTML = adminUpgradeRequests.map(item => `
                    <tr class="hover:bg-slate-50 transition-colors">
                        <td class="px-6 py-5 font-semibold text-slate-700">${escapeHtml(item.requester)}</td>
                        <td class="px-6 py-5 text-slate-600">${escapeHtml(item.link)}</td>
                        <td class="px-6 py-5 text-slate-500 text-xs">${escapeHtml(item.date)}</td>
                        <td class="px-6 py-5"><span class="inline-flex items-center gap-1 px-3 py-1 rounded-full ${item.statusClass} text-xs font-black">${escapeHtml(item.status)}</span></td>
                        <td class="px-6 py-5 text-right"><button onclick="showAction('Solicitação de upgrade em análise.');" class="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded text-xs font-bold">Ver</button></td>
                    </tr>
                `).join('');
            }
            if (complaints) {
                complaints.innerHTML = adminComplaints.map(item => `
                    <tr class="hover:bg-slate-50 transition-colors">
                        <td class="px-6 py-5 font-semibold text-slate-700">${escapeHtml(item.type)}</td>
                        <td class="px-6 py-5 text-slate-600">${escapeHtml(item.target)}</td>
                        <td class="px-6 py-5 text-slate-700">${escapeHtml(item.complainant)}</td>
                        <td class="px-6 py-5 text-slate-500 text-xs">${escapeHtml(item.date)}</td>
                        <td class="px-6 py-5"><span class="inline-flex items-center gap-1 px-3 py-1 rounded-full ${item.statusClass} text-xs font-black">${escapeHtml(item.status)}</span></td>
                        <td class="px-6 py-5 text-right"><button onclick="showAction('Abertura de denúncia.');" class="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded text-xs font-bold">Ver</button></td>
                    </tr>
                `).join('');
            }
            if (earlyClosures) {
                earlyClosures.innerHTML = adminEarlyClosures.map(item => `
                    <tr class="hover:bg-slate-50 transition-colors">
                        <td class="px-6 py-5 font-semibold text-slate-700">${escapeHtml(item.researcher)}</td>
                        <td class="px-6 py-5 text-slate-600">${escapeHtml(item.campaign)}</td>
                        <td class="px-6 py-5 text-slate-600">${escapeHtml(item.model)}</td>
                        <td class="px-6 py-5 text-slate-700 font-semibold">${escapeHtml(item.value)}</td>
                        <td class="px-6 py-5 text-slate-600">${escapeHtml(item.reason)}</td>
                        <td class="px-6 py-5 text-right"><button onclick="showAction('Análise de encerramento antecipado ativada.');" class="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded text-xs font-bold">Analisar</button></td>
                    </tr>
                `).join('');
            }
            if (areas) {
                areas.innerHTML = adminCnpqAreas.map(item => `
                    <tr class="hover:bg-slate-50 transition-colors ${item.inactive ? 'opacity-70' : ''}">
                        <td class="px-6 py-4 font-medium ${item.inactive ? 'text-slate-500' : 'text-slate-700'}">${escapeHtml(item.name)}</td>
                        <td class="px-6 py-4 text-right"><span class="inline-flex items-center px-3 py-1 rounded-sm ${item.statusClass} text-xs font-bold">${escapeHtml(item.status)}</span></td>
                    </tr>
                `).join('');
            }
            if (reasons) {
                reasons.innerHTML = adminComplaintReasons.map(item => `
                    <tr class="hover:bg-slate-50 transition-colors">
                        <td class="px-6 py-4 font-medium text-slate-700">${escapeHtml(item.name)}</td>
                        <td class="px-6 py-4 text-right"><span class="inline-flex items-center px-3 py-1 rounded-sm ${item.statusClass} text-xs font-bold">${escapeHtml(item.status)}</span></td>
                    </tr>
                `).join('');
            }
            if (rbac) {
                rbac.innerHTML = adminRbacRows.map(item => `
                    <tr class="hover:bg-slate-50">
                        <td class="py-4 font-semibold text-slate-700">${escapeHtml(item.resource)}</td>
                        <td class="py-4 text-center">${escapeHtml(item.anonymous)}</td>
                        <td class="py-4 text-center">${escapeHtml(item.registered)}</td>
                        <td class="py-4 text-center">${escapeHtml(item.researcher)}</td>
                        <td class="py-4 text-center">${escapeHtml(item.admin)}</td>
                    </tr>
                `).join('');
            }
            setAdminTab(currentAdminTab);
        }
        let currentAdminTab = 'visao-geral';
        function setAdminTab(tabId) {
            currentAdminTab = tabId;
            document.querySelectorAll('.admin-menu-item').forEach(item => {
                const isActive = item.dataset.tab === tabId;
                item.classList.toggle('bg-slate-100', isActive);
                item.classList.toggle('text-dark', isActive);
                item.classList.toggle('font-semibold', isActive);
                item.classList.toggle('border-l-2', isActive);
                item.classList.toggle('border-primary', isActive);
                item.classList.toggle('text-slate-600', !isActive);
                const icon = item.querySelector('i');
                if (icon) {
                    icon.classList.toggle('text-primary', isActive);
                    icon.classList.toggle('text-slate-400', !isActive);
                }
            });
            document.querySelectorAll('.admin-content-panel').forEach(panel => {
                panel.style.display = panel.id === 'admin-' + tabId ? 'block' : 'none';
            });
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
