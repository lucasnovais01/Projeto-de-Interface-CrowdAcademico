        function renderDonorDashboard() {
            const metrics = document.getElementById('donor-metrics');
            const followed = document.getElementById('donor-followed-campaigns');
            const contributions = document.getElementById('donor-contributions');
            if (metrics) {
                metrics.innerHTML = donorMetrics.map(metric => `
                    <div class="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                        <div class="text-2xl font-black ${metric.accent}">${escapeHtml(metric.value)}</div>
                        <div class="text-xs uppercase tracking-widest text-slate-500 mt-1">${escapeHtml(metric.label)}</div>
                    </div>
                `).join('');
            }
            if (followed) {
                followed.innerHTML = donorFollowedCampaigns.map(item => `
                    <div class="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm flex items-center justify-between">
                        <div>
                            <div class="font-bold text-dark">${escapeHtml(item.title)}</div>
                            <div class="text-sm text-slate-500 mt-1">${escapeHtml(item.meta)}</div>
                        </div>
                        <span class="inline-flex items-center rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-widest ${item.accent}">${escapeHtml(item.meta)}</span>
                    </div>
                `).join('');
            }
            if (contributions) {
                contributions.innerHTML = donorContributions.map(item => `
                    <tr class="hover:bg-slate-50 transition-colors">
                        <td class="px-8 py-5 font-mono text-xs text-slate-500">${escapeHtml(item.date)}</td>
                        <td class="px-8 py-5 font-bold text-slate-700">${escapeHtml(item.project)}</td>
                        <td class="px-8 py-5 font-semibold text-dark">${escapeHtml(item.value)}</td>
                        <td class="px-8 py-5 text-slate-600">${escapeHtml(item.payment)}</td>
                        <td class="px-8 py-5"><span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-black ${item.statusClass}">${escapeHtml(item.status)}</span></td>
                    </tr>
                `).join('');
            }
        }
