//camelCase - Aluguel de Jogos

// Implementar os botões para que alterem ao serem clicados e também a imagem dos jogos disponíveis;

//Tentando fazer a functio para o botao1 mudar ----- Não funcionou MAS FOI UTILIZADO NO LAÇO ABAIXO
        //function alterarStatus(id){
        //    let botao1 = document.getElementById('game-1');
        //    if(botao1.classList.contains('dashboard__item__button')){
        //      botao1.classList.remove('dashboard__item__button');
        //      botao1.classList.add('dashboard__item__button dashboard__item__button--return');
        //    }else{
        //      botao1.classList.remove('dashboard__item__button dashboard__item__button--return');
        //     botao1.classList.add('dashboard__item__button >Alugar<');
        //    }
        //}
        //alterarStatus(id);
//      ---------   

//  Usando o apoio da aula:

function alterarStatus(id){
    let jogoClicado = document.getElementById(`game-${id}`);
    let imagem = jogoClicado.querySelector('.dashboard__item__img');              //filtrando os elementos
    let botao = jogoClicado.querySelector('.dashboard__item__button');            //disponiveis para cada jogo

    if(imagem.classList.contains('dashboard__item__img--rented')){                //aqui mimha ideia tava certa
        imagem.classList.remove('dashboard__item__img--rented');
    }else{
        imagem.classList.add('dashboard__item__img--rented');
    }
                                                                                   // poderia fazer os IFs juntos
    if(botao.classList.contains('dashboard__item__button--return')){               //aqui eu tava meio certo
        botao.textContent = 'Alugar'                                               //para mudar o texto do botao
        botao.classList.remove('dashboard__item__button--return');
    }else{
        botao.classList.add('dashboard__item__button--return');
        botao.textContent = 'Devolver'
    }
}





