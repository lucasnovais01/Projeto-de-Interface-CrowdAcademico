        function renderCreateFormContent() {
            const areaSelect = document.getElementById('create-area-options');
            const modelOptions = document.getElementById('create-model-options');
            if (areaSelect) {
                areaSelect.innerHTML = createAreaOptions.map(area => `
                    <option value="${escapeHtml(area.value)}">${escapeHtml(area.label)}</option>
                `).join('');
            }
            if (modelOptions) {
                modelOptions.innerHTML = createModelOptions.map(option => `
                    <label class="flex-1 rounded-2xl border border-slate-200 p-5 cursor-pointer bg-slate-50 hover:border-primary transition-all">
                        <input type="radio" name="modelo-financiamento" value="${escapeHtml(option.value)}" ${option.checked ? 'checked' : ''} class="mr-3 accent-primary">
                        <div class="font-bold text-dark mb-1">${escapeHtml(option.title)}</div>
                        <div class="text-sm text-slate-500">${escapeHtml(option.description)}</div>
                    </label>
                `).join('');
            }
        }
