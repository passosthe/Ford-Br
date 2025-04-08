const checkboxTermos = document.getElementById('termos');
const botaoEnviar = document.getElementById('botaoEnviar');
const dialogTermos = document.getElementById('dialog-termos');
const form = document.querySelector('.form-ford');


// Atualizar botão quando o checkbox mudar
checkboxTermos.addEventListener('change', () => {
    botaoEnviar.disabled = !checkboxTermos.checked;
});
// Verificar no envio do formulário
form.addEventListener('submit', (event) => {
    if (!checkboxTermos.checked) {
        event.preventDefault(); // Impede o envio
        dialogTermos.showModal();
        botaoEnviar.disabled = true; // Força o botão a permanecer desabilitado
    }
    // Se estiver marcado, o formulário será enviado normalmente
    console.log(event);
});



// Fechar o diálogo
function fecharDialog() {
    dialogTermos.close();
}

