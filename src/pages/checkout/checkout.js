        function copyPix() {
            const pixField = document.getElementById('pix-code');
            if (!pixField) {
                showAction('Não foi possível copiar o código PIX.');
                return;
            }
            const value = pixField.value;
            if (navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText(value).then(() => {
                    showAction('Código PIX copiado para a área de transferência.');
                }).catch(() => {
                    showAction('Cópia automática não disponível. Selecione e copie manualmente.');
                });
            } else {
                pixField.select();
                document.execCommand('copy');
                showAction('Código PIX copiado para a área de transferência.');
            }
        }
