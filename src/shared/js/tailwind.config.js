// Configuração do tema customizado do Tailwind (cores, fontes da marca CrowdAcadêmico)
tailwind.config = {
    theme: {
        extend: {
            fontFamily: { sans: ['Inter', 'sans-serif'], serif: ['DM Serif Display', 'serif'] },
            colors: { primary: '#0F9B58', 'primary-dark': '#0B7A45', surface: '#F8FAFC', dark: '#0F172A' }
        }
    }
}
