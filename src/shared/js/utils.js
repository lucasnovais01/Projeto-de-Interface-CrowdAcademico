        function escapeHtml(value) {
            return String(value)
                .replace(/&/g, '&amp;')
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;')
                .replace(/\"/g, '&quot;')
                .replace(/'/g, '&#39;');
        }
        function escapeAttribute(value) {
            return String(value)
                .replace(/&/g, '&amp;')
                .replace(/"/g, '&quot;')
                .replace(/'/g, '&#39;');
        }
        function renderSidebarNav(containerId, items) {
            const container = document.getElementById(containerId);
            if (!container) return;
            container.innerHTML = items.map(item => {
                const actionAttr = item.actionMessage ? `onclick="showAction('${escapeAttribute(item.actionMessage)}')"` : '';
                return `
                    <button ${item.disabled ? 'disabled' : ''} ${actionAttr} class="w-full flex items-center justify-between px-4 py-3 text-sm font-bold rounded-xl ${item.active ? 'bg-primary/10 text-primary-dark' : item.disabled ? 'bg-slate-100 text-slate-400 border border-slate-200 cursor-not-allowed' : 'text-slate-600 hover:bg-slate-50 transition-colors'}">
                        <span class="flex items-center gap-3"><i class="fa-solid ${item.icon} w-4"></i> ${escapeHtml(item.label)}</span>
                        ${item.active ? '<i class="fa-solid fa-chevron-right text-[10px]"></i>' : ''}
                    </button>
                `;
            }).join('');
        }
        function showAction(message) {
            if(window.navigator && navigator.clipboard) {
                console.log('Action:', message);
            }
            alert(message);
        }
        function nav(viewId) {
            // Oculta todas as sections
            document.querySelectorAll('.view-section').forEach(el => {
                el.classList.remove('active');
            });
            
            const header = document.querySelector('header');
            const footer = document.querySelector('footer');
            header.style.display = 'block';
            footer.style.display = 'block';

            // Exibe a tela alvo
            const target = document.getElementById('view-' + viewId);
            if(target) {
                target.classList.add('active');
                if (viewId === 'admin') setAdminTab('visao-geral');
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }
