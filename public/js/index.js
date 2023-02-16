let lampadaQuebrada = false

function acenderLampada(){
    if(!lampadaQuebrada){
        const lampada = document.getElementById('lampada')
        lampada.src = './public/img/lampada_acessa.jpg'
    }
}

function apagarLampada(){
    if(!lampadaQuebrada){
        const lampada = document.getElementById('lampada')
        lampada.src = './public/img/lampada_apagada.jpg'
    }
}

function quebrarLampada(){
    if(!lampadaQuebrada){
        const lampada = document.querySelector('#lampada')
        lampada.src = './public/img/lampada_quebrada.jpg'
        lampadaQuebrada = true

        // primeira parte: criar o elemento
        const botaoRestaurar = document.createElement('button')
        botaoRestaurar.innerText = 'Restaurar lampada'
        botaoRestaurar.onclick = restaurarLampada
        botaoRestaurar.id = 'btn-restaurar'

        // segunda parte: adicionar o elemento criado aonde
        //                queremos
        const divContainer = document.querySelector('.lampada')
        divContainer.appendChild(botaoRestaurar)
    }
}

function restaurarLampada(){
    const lampada = document.querySelector('#lampada')
    lampada.src = './public/img/lampada_apagada.jpg'
    lampadaQuebrada = false
    
    // 
    const btnRestaurar = document.querySelector('#btn-restaurar')
    btnRestaurar.remove()
}

function pedirNome() {
            const nome = prompt('Qual o teu nome?');
            const texto = document.querySelector('#aparecerNome');
            texto.innerText = `Opa ${nome}!  Você está deixando o seu site
    dinâmico! \n Fim dos testes`;
        }


 let contador = 0;

const paragrafo = document.getElementById('paragrafo');
const decrementar = document.getElementById('decrementar')
const zerar = document.getElementById('zerar')
const incrementar = document.getElementById('incrementar')


incrementar.addEventListener('click', function() {
    paragrafo.innerHTML = `O contador está com ${++contador} cliques.`
});


zerar.addEventListener('click', function() {
    count = 0;
    paragrafo.innerHTML = ''
});

decrementar.addEventListener('click', function() {
    paragrafo.innerHTML = `O contador está com ${--contador} cliques.`
});

const card = document.querySelectorAll('.card');
card.forEach(function(card)  {
    card.setAttribute('style', 'background-color:#e16e0e')
});

const tituloCard = document.querySelectorAll('.titulo-card');
for (const h2 of tituloCard) {
    h2.style = 'color: #2b385b; padding: 30px 0px;';
    h2.innerText = 'Meu Card';
}

const listaPCards = document.querySelectorAll('.descricao-card');
for (const p of listaPCards) {
    p.style = 'color: white; margin-bottom: 30px; font-size: 0.95rem';
    p.innerHTML = 'Descrição modificada pelo JavaScript';
    
   
}


const listaBtnEditCards = document.querySelectorAll('.botao-editar');
for (const button of listaBtnEditCards) {
    button.style = 'color: white; background-color:green; padding: 10px; border-radius: 10px; border-style:none;';
    button.setAttribute("onclick", "editarCard()");
}
const listaBtnDelCards = document.querySelectorAll('.botao-apagar');
listaBtnDelCards.forEach((div, index) => {
    div.style = 'color: white; background-color:red; padding: 10px; border-radius: 10px; border-style:none;';
    div.setAttribute("onclick", `apagarCard(${ index })`);
});

function editarCard() {
    alert("Clicou em Editar!");
}
function apagarCard(id) {
    if (confirm("Tem certeza que deseja apagar o card?") == true) {
        card[id].remove();
    } else {
        alert('cancelado')
    }
}
