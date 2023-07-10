// Passo 1, usar um seletor para pegar os personagens
const personagens = document.querySelectorAll('.personagem');

// Passo 2, colocar um evento de escuta para adicionar a classe selecionado no personagem que tiver o cursor
personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {
    
    // caso o acesso seja pelo celular 
    if(window.innerWidth < 450) {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    // Passo 3, remover quem já esta selecionado e adiconar seleção
    removerSelecaoPersonagem();
    personagem.classList.add('selecionado');
    
    // Passo 1 - personagem grande alterar a imagem 
    alteraImagemPersonagem(personagem);

    // Passo 4 - alterar o titulo e descrição do personagem
    alterarNomePersonagem(personagem);

    alterarDescricaoPersonagem(personagem);
    });

});

const removerSelecaoPersonagem = () =>  document.querySelector('.selecionado').classList.remove('selecionado');

const alteraImagemPersonagem = (personagem) => {
    const idPersonagem = personagem.attributes.id.value;
    document.querySelector('.personagem-grande').src = `./src/imagens/card-${idPersonagem}.png`;
}

const alterarNomePersonagem = (personagem) => document.querySelector('#nome-personagem')
.innerText = personagem.getAttribute('name');

const alterarDescricaoPersonagem = (personagem) => document.getElementById('descricao-personagem')
.innerText = personagem.getAttribute('description');


