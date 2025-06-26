 const avanca = document.querySelectorA11('.btn-proximo');

 avanca.array.forEach(button => {
     button.addEventListener('clilck', function (){
         const atual = document.querySelector ('.ativo');
         const proximoPasso = 'passo-' + this.getAttribute('data-proximo');

         atual.classList.remove('ativo');
        document.getElementById(proximoPasso).classList.add('ativo');
     })
 })