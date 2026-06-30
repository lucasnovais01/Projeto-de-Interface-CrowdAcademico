        function renderProjectSupportInfo() {
            const container = document.getElementById('project-support-info');
            if (!container) return;
            container.innerHTML = projectSupportInfo.map(item => {
                if (item.variant === 'list') {
                    return `
                        <div class="bg-slate-50 border border-slate-200 rounded-2xl p-4 mb-4">
                            <p class="font-semibold text-slate-800 mb-2">${escapeHtml(item.title)}</p>
                            <ul class="list-disc list-inside text-sm text-slate-600 space-y-2">
                                ${item.items.map(entry => `<li>${entry}</li>`).join('')}
                            </ul>
                        </div>
                    `;
                }
                if (item.variant === 'warning') {
                    return `
                        <div class="bg-amber-50 border border-amber-200 rounded-xl p-4 text-xs text-amber-800 leading-relaxed flex items-start gap-3">
                            <i class="fa-solid fa-shield-halved mt-0.5 text-amber-500 text-lg"></i>
                            <div><strong>${escapeHtml(item.title)}:</strong> ${escapeHtml(item.body)}</div>
                        </div>
                    `;
                }
                return `
                    <div class="bg-slate-50 border border-slate-200 rounded-2xl p-4 mb-4">
                        <p class="font-semibold text-slate-800 mb-2">${escapeHtml(item.title)}</p>
                        <p>${escapeHtml(item.body)}</p>
                    </div>
                `;
            }).join('');
        }
        function renderProjectTabs() {
            const buttonsContainer = document.getElementById('project-tab-buttons');
            const panelsContainer = document.getElementById('project-tab-panels');
            if (!buttonsContainer && !panelsContainer) return;

            if (buttonsContainer) {
                buttonsContainer.innerHTML = projectTabs.map(tab => `
                    <button onclick="setProjectTab('${tab.id}')" id="tab-btn-${tab.id}" class="${tab.id === 'sobre' ? 'bg-slate-100 text-dark font-bold' : 'text-slate-500 hover:bg-slate-50 hover:text-dark font-medium'} px-6 py-3 rounded-xl text-sm whitespace-nowrap transition flex items-center gap-2">
                        ${escapeHtml(tab.label)}
                        ${tab.badge ? `<span class="${tab.badgeClass || 'bg-slate-200 text-slate-700 px-2 py-0.5 rounded-full text-[10px] font-bold'}">${escapeHtml(tab.badge)}</span>` : ''}
                    </button>
                `).join('');
            }

            if (panelsContainer) {
                panelsContainer.innerHTML = projectTabs.map(tab => `
                    <div id="tab-${tab.id}" class="tab-content ${tab.id === 'sobre' ? 'active' : ''}">
                        ${tab.content}
                    </div>
                `).join('');
            }
        }
        function setProjectTab(tab) {
            const tabs = ['sobre', 'metodologia', 'atualizacoes', 'endossos'];
            tabs.forEach(current => {
                const content = document.getElementById('tab-' + current);
                const button = document.getElementById('tab-btn-' + current);
                if (content) content.classList.toggle('active', current === tab);
                if (button) {
                    button.classList.toggle('bg-slate-100', current === tab);
                    button.classList.toggle('text-dark', current === tab);
                    button.classList.toggle('text-slate-500', current !== tab);
                }
            });
        }
