        const projectTabs = [
            {
                id: 'sobre',
                label: 'Sobre a Pesquisa',
                content: `
                    <div class="space-y-6">
                        <div>
                            <h3 class="text-xl font-black text-dark mb-3">Por que esta pesquisa importa</h3>
                            <p class="text-slate-600 leading-relaxed">Esta investigação mede a concentração de microplásticos em tecidos de peixes nativos e correlaciona os dados com sinais de estresse oxidativo e alterações metabólicas em ambientes impactados pela urbanização e agricultura intensiva.</p>
                        </div>
                        <div class="grid md:grid-cols-2 gap-4">
                            <div class="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                                <div class="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Objetivo principal</div>
                                <div class="font-bold text-dark">Mapear o risco ecológico e sanitário</div>
                            </div>
                            <div class="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                                <div class="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Impacto esperado</div>
                                <div class="font-bold text-dark">Subsídios para políticas públicas de preservação fluvial</div>
                            </div>
                        </div>
                    </div>
                `
            },
            {
                id: 'metodologia',
                label: 'Metodologia e Custos',
                content: `
                    <div class="space-y-6">
                        <div class="rounded-2xl border border-slate-200 p-6">
                            <h3 class="text-lg font-black text-dark mb-3">Fluxo metodológico</h3>
                            <ul class="space-y-3 text-slate-600">
                                <li><span class="font-semibold text-dark">1.</span> Coleta de amostras e análise de ingestão em peixes de diferentes trechos do rio.</li>
                                <li><span class="font-semibold text-dark">2.</span> Identificação por espectroscopia e validação em laboratório.</li>
                                <li><span class="font-semibold text-dark">3.</span> Comparação entre espécies nativas e indicadores ambientais.</li>
                            </ul>
                        </div>
                        <div class="grid md:grid-cols-2 gap-4">
                            <div class="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
                                <div class="text-[10px] font-black uppercase tracking-widest text-emerald-700 mb-2">Custo principal</div>
                                <div class="text-2xl font-black text-dark">R$ 18.500</div>
                            </div>
                            <div class="rounded-2xl border border-blue-200 bg-blue-50 p-5">
                                <div class="text-[10px] font-black uppercase tracking-widest text-blue-700 mb-2">Itens cobertos</div>
                                <div class="font-bold text-dark">Equipamentos, análise laboratorial e logística.</div>
                            </div>
                        </div>
                    </div>
                `
            },
            {
                id: 'atualizacoes',
                label: 'Atualizações',
                badge: '3',
                badgeClass: 'bg-slate-200 text-slate-700 px-2 py-0.5 rounded-full text-[10px] font-bold',
                content: `
                    <div class="space-y-4">
                        <div class="border-l-4 border-primary pl-4">
                            <div class="text-sm font-black text-dark">Nova coleta realizada em março</div>
                            <div class="text-sm text-slate-600 mt-1">Foram analisadas 24 amostras adicionais em área de maior pressão urbana.</div>
                        </div>
                        <div class="border-l-4 border-slate-300 pl-4">
                            <div class="text-sm font-black text-dark">Parceria com laboratório local</div>
                            <div class="text-sm text-slate-600 mt-1">A equipe passou a contar com suporte de um laboratório parceiro para validação de espectros.</div>
                        </div>
                        <div class="border-l-4 border-slate-300 pl-4">
                            <div class="text-sm font-black text-dark">Revisão do cronograma</div>
                            <div class="text-sm text-slate-600 mt-1">A fase de análise segue dentro do previsto, sem impacto no prazo final.</div>
                        </div>
                    </div>
                `
            },
            {
                id: 'endossos',
                label: 'Endossos Acadêmicos',
                badge: '2',
                badgeClass: 'bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full text-[10px] font-bold',
                content: `
                    <div class="space-y-4">
                        <div class="rounded-2xl border border-slate-200 p-5">
                            <div class="font-bold text-dark">Prof. Dr. Renato Barros</div>
                            <div class="text-sm text-slate-500 mt-1">Instituto de Biociências — UNESP</div>
                            <p class="text-sm text-slate-600 mt-3">A proposta apresenta metodologia sólida e relevância direta para conservação de ecossistemas fluviais.</p>
                        </div>
                        <div class="rounded-2xl border border-slate-200 p-5">
                            <div class="font-bold text-dark">Dra. Cíntia Mendes</div>
                            <div class="text-sm text-slate-500 mt-1">Departamento de Saúde Pública — USP</div>
                            <p class="text-sm text-slate-600 mt-3">A integração entre saúde ambiental e biodiversidade potencializa a aplicação dos resultados.</p>
                        </div>
                    </div>
                `
            }
        ];
        const projectSupportInfo = [
            {
                variant: 'default',
                title: 'Regras de pagamento',
                body: 'Contribuições anônimas são aceitas apenas via PIX. Cartão de crédito, débito e boleto estão disponíveis somente para usuários cadastrados e autenticados.'
            },
            {
                variant: 'list',
                title: 'Modelo de financiamento',
                items: [
                    '<strong>Tudo ou Nada:</strong> se a meta não for atingida, as contribuições são estornadas ou não cobradas.',
                    '<strong>Flexível:</strong> o valor arrecadado é mantido mesmo que a meta não seja alcançada.'
                ]
            },
            {
                variant: 'warning',
                title: 'Garantia Tudo ou Nada',
                body: 'Seu apoio só é efetivado (cobrado ou não devolvido) se o projeto atingir 100% da meta no prazo. Risco zero.'
            }
        ];
