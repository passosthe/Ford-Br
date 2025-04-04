// // Aplicação do evento após o HTML ser carregado
document.addEventListener('DOMContentLoaded', () => {

    // Animação para o formulario aparecer na tela 
   const form = document.querySelector('.formulario');
    form.style.opacity = 0;
    form.style.transform = 'translateY(100vh)';

    setTimeout(() => {
        form.style.opacity = 1;
        form.style.transform = 'translateY(0)';
    }, 100)
   
    // Propriedade focus nos inputs
    const inputs = document.querySelectorAll('.usuario-escreve');
    inputs.forEach((input) => {
        input.addEventListener('focus', () => {
            input.classList.add('in-focus');
        });
        input.addEventListener('blur', () => { 
            input.classList.remove('in-focus');
        }); 
    });

    // Animação ao passar o mouse no botao
    const button= document.querySelector("button[type='submit']");
    button.addEventListener('mouseover', () => button.classList.add('in-mouseover-btn'));
    button.addEventListener('mouseout', () => button.classList.remove('in-mouseover-btn'));
    
    // Animação ao passar o mouse no botao na imagem
    const imagem = document.querySelector(".imagem");
    imagem.addEventListener('mouseover', () => imagem.classList.add('in-mouseover-img'));
    imagem.addEventListener('mouseout', () => imagem.classList.remove('in-mouseover-img'));
});
   
   
   
   
    
    
     
    
    