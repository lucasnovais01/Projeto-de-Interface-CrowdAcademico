        function renderResearcherDashboard() {
            renderSidebarNav('donor-sidebar-nav', donorSidebarItems);
            renderSidebarNav('researcher-sidebar-nav', researcherSidebarItems);
            renderProjectSupportInfo();
            const stats = document.getElementById('researcher-stats');
            const progress = document.getElementById('researcher-progress');
            const projects = document.getElementById('researcher-projects');
            const summaryCards = document.getElementById('researcher-summary-cards');
            if (stats) {
                stats.innerHTML = researcherStats.map(stat => `
                    <div class="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                        <div class="text-2xl font-black ${stat.accent}">${escapeHtml(stat.value)}</div>
                        <div class="text-xs uppercase tracking-widest text-slate-500 mt-1">${escapeHtml(stat.label)}</div>
                    </div>
                `).join('');
            }
            if (progress) {
                progress.innerHTML = `
                    <div class="flex items-center justify-between mb-3">
                        <div>
                            <div class="text-[11px] font-black uppercase tracking-widest text-slate-400">${escapeHtml(researcherProgress.title)}</div>
                            <div class="text-xl font-black text-dark mt-1">${escapeHtml(researcherProgress.value)}</div>
                        </div>
                        <span class="text-sm font-bold text-primary">${escapeHtml(researcherProgress.width)}</span>
                    </div>
                    <div class="w-full bg-slate-200 rounded-full h-3 overflow-hidden">
                        <div class="bg-primary h-full rounded-full" style="width: ${researcherProgress.width}"></div>
                    </div>
                `;
            }
            if (projects) {
                projects.innerHTML = researcherProjects.map(project => `
                    <tr class="hover:bg-slate-50 transition-colors">
                        <td class="px-6 py-4 font-semibold text-slate-700">${escapeHtml(project.campaign)}</td>
                        <td class="px-6 py-4 text-slate-600">${escapeHtml(project.gross)}</td>
                        <td class="px-6 py-4 text-slate-600">${escapeHtml(project.net)}</td>
                        <td class="px-6 py-4 text-slate-600">${escapeHtml(project.donors)}</td>
                        <td class="px-6 py-4 text-slate-600">${escapeHtml(project.deadline)}</td>
                        <td class="px-6 py-4 text-slate-600">${escapeHtml(project.goal)}</td>
                        <td class="px-6 py-4"><span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-black ${project.statusClass}">${escapeHtml(project.status)}</span></td>
                    </tr>
                `).join('');
            }
            if (summaryCards) {
                summaryCards.innerHTML = researcherSummaryCards.map(card => `
                    <div class="rounded-2xl border border-slate-200 p-5 ${card.accent}">
                        <div class="text-[11px] font-black uppercase tracking-widest">${escapeHtml(card.title)}</div>
                        <div class="text-3xl font-black mt-2">${escapeHtml(card.value)}</div>
                    </div>
                `).join('');
            }
        }
