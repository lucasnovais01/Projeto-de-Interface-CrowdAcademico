        function renderHomeProfiles() {
            const container = document.getElementById('profiles-grid');
            if (!container) return;
            container.innerHTML = homeProfiles.map(profile => `
                <div class="bg-white rounded-2xl border border-slate-200 shadow-md p-5 hover:-translate-y-1 transition-all flex flex-col">
                    <div class="flex items-center gap-3 mb-4">
                        <div class="inline-flex items-center justify-center w-10 h-10 rounded-xl ${profile.iconBg} shadow-sm flex-shrink-0"><i class="fa-solid ${profile.icon} text-sm"></i></div>
                        <div class="text-[10px] font-black uppercase tracking-widest text-slate-400">${escapeHtml(profile.title)}</div>
                    </div>
                    <h3 class="text-lg font-bold text-dark mb-2">${escapeHtml(profile.heading)}</h3>
                    <p class="text-sm text-slate-500 leading-relaxed flex-1">${escapeHtml(profile.description)}</p>
                    <div class="mt-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 border-t border-slate-100 pt-4">
                        <span class="w-2 h-2 rounded-full ${profile.badge}"></span> ${escapeHtml(profile.footer)}
                    </div>
                </div>
            `).join('');
        }
        function renderHomeStats() {
            const container = document.getElementById('home-stats');
            if (!container) return;
            container.innerHTML = homeStats.map(stat => `
                <div class="py-4 md:py-0"><div class="text-4xl md:text-5xl font-black mb-2 tracking-tight ${stat.valueClass}">${escapeHtml(stat.value)}</div><div class="text-slate-400 text-sm font-bold uppercase tracking-widest">${escapeHtml(stat.label)}</div></div>
            `).join('');
        }
        function renderFeaturedProjects() {
            const container = document.getElementById('project-cards');
            if (!container) return;
            container.innerHTML = featuredProjects.map(project => `
                <div onclick="nav('campanha')" class="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-2xl transition-all cursor-pointer flex flex-col group h-full hover:-translate-y-1">
                    <div class="h-44 relative overflow-hidden bg-slate-900">
                        <img src="${project.image}" class="w-full h-full object-cover opacity-80 group-hover:scale-110 group-hover:opacity-100 transition-all duration-700">
                        <span class="absolute top-4 right-4 ${project.badgeClasses} text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-widest shadow-lg border">${escapeHtml(project.badge)}</span>
                    </div>
                    <div class="p-5 flex-1 flex flex-col">
                        <span class="text-[11px] font-black text-primary uppercase tracking-widest mb-1 block">${escapeHtml(project.category)}</span>
                        <h3 class="font-bold text-base text-dark leading-tight mb-2 group-hover:text-primary transition-colors">${escapeHtml(project.title)}</h3>
                        <p class="text-sm text-slate-500 mb-4 line-clamp-2 leading-relaxed">${escapeHtml(project.description)}</p>
                        <div class="flex items-center gap-3 mb-4">
                            <div class="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border ${project.avatarClasses}">${escapeHtml(project.avatar)}</div>
                            <div>
                                <div class="text-sm font-bold text-slate-700 flex items-center gap-1">${escapeHtml(project.researcher)} <i class="fa-solid fa-circle-check text-primary text-[10px]"></i></div>
                                <div class="text-xs text-slate-500">${escapeHtml(project.institution)}</div>
                            </div>
                        </div>
                        <div class="mt-auto">
                            <div class="flex justify-between items-end mb-2">
                                <span class="font-black text-dark text-xl">${escapeHtml(project.value)}</span>
                                <span class="text-xs font-bold text-slate-400">${escapeHtml(project.progressLabel)}</span>
                            </div>
                            <div class="w-full bg-slate-100 rounded-full h-2.5 mb-4 overflow-hidden border border-slate-200/50">
                                <div class="bg-primary h-full rounded-full" style="width: ${project.progressWidth}"></div>
                            </div>
                            <div class="flex justify-between items-center text-xs font-medium text-slate-500">
                                <span class="bg-slate-100 px-2 py-1 rounded-md"><i class="fa-solid fa-users mr-1"></i> ${escapeHtml(project.supportLabel)}</span>
                                <span class="bg-slate-100 px-2 py-1 rounded-md"><i class="fa-regular fa-clock mr-1"></i> ${escapeHtml(project.timeLabel)}</span>
                            </div>
                        </div>
                    </div>
                </div>
            `).join('');
        }
        function renderHomeContent() {
            renderHomeProfiles();
            renderHomeStats();
            renderFeaturedProjects();
        }
