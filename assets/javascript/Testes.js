//Constantes
/* 
Aqui está uma demonstração de "simplificação" do código.
Usando essas constantes definidas podemos criar funções a fim de servir como um atalho.
Utilizando (e) => tendo o "e" como parâmetro, o que for escrito será substituído no
"querrySelector(e)". Os exemplos serão mostrado logo em seguida, já que foi muito utilizado.
 */
const q = (e)=> document.querySelector(e);
const qA = (eA) => document.querySelectorAll(eA);
//Variáveis para cálculo valor unitário
let vunitarioServicoValor = 0;
let qntServicoValor = 0;
let vtotalServicoValor = 0;
//Variáveis Confirmar display
let servicoServico = q('#servico-input').value;
let uniServico = q('#uni-input').value;
let keySv = 0;
//Numeração Item
let divLenSv = qA('#item-servico .item').length+1;
let nmrSv = String(divLenSv);
/* 
A linha abaixo serviu para definir o valor do ITEM no display como zero.
Nos códigos abaixo (em let addServicoDp) observaremos o desenvolvimento do código
e o motivo da existência dessa linha.
*/
q('#item-servico-dp div').innerHTML = nmrSv.padStart(3, '0');
let nmrSvMod;
let divLenSvMod;
//Remover item
let rmItemClick = qA(".item-display-rm [data-keysv]");
let itemOrcSv = qA("[data-keysv]");
let keysvRm = 0;
//Loops
let i = 0;
let j = 0;
//Valor total
let somaTotalSv = 0;
//Fim variáveis e constantes

//Botão Adicionar
/*
Dica para iniciantes: Podemos armazenar funções em variáveis como foi feito abaixo.
Ao utilizar o "addEventListener" estaremos aplicando um evento no elemento escolhido
do document.querrySelector() (nesse caso, o q, apenas).
Nele, como pode-se observar, há dois parâmetros: 'evento' e a função.
Neste caso, a função foi adicionada junta, mas poderia ser feita separadamente e colocada:
Ex.: q(...).addEventListener('click', adicionar());
*/
let addServico = q('#add-servico').addEventListener('click', ()=>{
    /*
    Pode-se acessar e modificar o CSS do elemento selecionado atraves do ".style".
    Neste caso eu quis acessar o display para modificá-lo, já que nas condições naturais
    ele está "none";
    */
    q('#display-servico').style.display = 'flex';
});

//Confirmar display
let addServicoDp = q('#add-servico-dp').addEventListener('click', ()=>{
    /* Com ".value" pegamos o valor armazenado no input */
    servicoServico = q('#servico-input').value;
    uniServico = q('#uni-input').value;
                                            
    if(uniServico != 0 && servicoServico != 0 && vtotalServicoValor != 0){

        /*
        Essa parte do código poderia ser feito usando for e algum array. Penso em modificá-lo.
        Ao criar alguma variável dentro de uma condição ou loop, eles servirão apenas para o local
        que foi criado.
        Obs.: Caso seja criado um "var" ao invés no "let", ele poderá ser usado fora do campo criado.
        É algo que talvez não desejamos.

        Ao selecionar o elemento e adicionar ".cloneNode(true)", é como se tudo que está nesse elemento poderá
        ser copiado (clonado). Sendo assim, abilitei o cloneNode em diversos elementos que serão reutilizados.

        Ao utilizar o qA(...) é observado que eles vem seguidos de "[]". Por que isso?
        Resposta: Ao acessar o elemento utilizando document.querrySelectorAll() (nesse caso reduzi para o qA),
        nós teremos acesso a todos os elementos que herdam tal classe. Nesse caso, há 6 tags que utilizam a classe
        ".item". Para acessa-los, o uso do "[]" foi nescessário.
        */

        let areaItemServico1 = qA('#modelo-item .item')[0].cloneNode(true);
        let areaItemServico2 = qA('#modelo-item .item')[1].cloneNode(true);
        let areaItemServico3 = qA('#modelo-item .item')[2].cloneNode(true);
        let areaItemServico4 = qA('#modelo-item .item')[3].cloneNode(true);
        let areaItemServico5 = qA('#modelo-item .item')[4].cloneNode(true);
        let areaItemServico6 = qA('#modelo-item .item')[5].cloneNode(true);
        let rmItemServico = q('#modelo-item-rm .item-display').cloneNode(true);

        keySv++;
        /* Com o setAttribute adicionamos um atributo no elemento selecionado seguido do seu valor */
        areaItemServico1.setAttribute('data-keySv', keySv);
        areaItemServico2.setAttribute('data-keySv', keySv);
        areaItemServico3.setAttribute('data-keySv', keySv);
        areaItemServico4.setAttribute('data-keySv', keySv);
        areaItemServico5.setAttribute('data-keySv', keySv);
        areaItemServico6.setAttribute('data-keySv', keySv);
        rmItemServico.setAttribute('data-keySv', keySv);

        /* 
        Até essa parte do código (de cima) foi criado uma condição que, quando permitida, habilita a criação de clones
        e cria atributos nelas que serão utilizados pela programação a fim de ter um fácil acesso. No caso desse código que
        foi escrito, ele será usado para apagar alguns dados.
        */
    
        //Add após confirmação
        /*
        Nessa parte, muita coisa será repetida.
        A utilização do padStart() restringe-se ao String. Com ela que foi criada a numeração
        dos itens. Primeiro foi pego a quantidade de divs dentro da area que ficará os ITEM
        e o valor foi transformado em String para ser utilizado pelo padStart.
        Ao observar sua utilização, conclui-se que ele adiciona caracteres à frente do String
        selecionado. Nesse caso, considerando a existência de 3 caracteres, o ultimo ocupará
        o último espaço (uma vez que é unidade). Caso fosse uma dezena, os dois ultimos
        caracteres seiam ocupados. Ou seja, dos caracteres criados, os que não forem utilizados 
        serão substituidos por algum valor que desejamos. Nesse caso escrevemos a String '0'.

        Ao ser feita as alterações colocamos ela com o '.append(). Diferente do innerHTML, ele
        adiciona mais elementos sem modificar o que já existe.
        */
        //Item
        areaItemServico1.innerHTML = nmrSv.padStart(3, '0');
        rmItemServico.querySelectorAll('.item')[0].innerHTML = nmrSv.padStart(3, '0');
        q('#item-servico').append(areaItemServico1);        
        //Servico
        areaItemServico2.innerHTML = q('#servico-input').value;
        rmItemServico.querySelectorAll('.item')[1].innerHTML = q('#servico-input').value;
        q('#servico-servico').append(areaItemServico2);
        //Unidade
        areaItemServico3.innerHTML = q('#uni-input').value;
        rmItemServico.querySelectorAll('.item')[2].innerHTML = q('#uni-input').value;
        q('#uni-servico').append(areaItemServico3);
        //Quantidade
        areaItemServico4.innerHTML = q('#qnt-input').value;
        rmItemServico.querySelectorAll('.item')[3].innerHTML = q('#qnt-input').value;
        q('#qnt-servico').append(areaItemServico4);
        //Valor Unitário
        let vUIn = parseInt(q('#vunitario-input').value);
        areaItemServico5.innerHTML = `R$${(vUIn).toFixed(2)}`;
        rmItemServico.querySelectorAll('.item')[4].innerHTML = `R$${(vUIn).toFixed(2)}`;
        q('#vunitario-servico').append(areaItemServico5);
        //Valor total
        areaItemServico6.innerHTML = `R$${(vtotalServicoValor).toFixed(2)}`;
        rmItemServico.querySelectorAll('.item')[5].innerHTML = `R$${(vtotalServicoValor).toFixed(2)}`;
        q('#vtotal-servico').append(areaItemServico6);

        /* 
        Esta linha abaixo serve para atualizar as alterações que foram feitas para o display de remover.
        O append é o final de toda alteração do cloneNode, neste código.
        */
        q('.item-display-rm').append(rmItemServico);

        divLenSv = qA('#item-servico .item').length+1;
        nmrSv = String(divLenSv);
        q('#item-servico-dp div').innerHTML = nmrSv.padStart(3, '0');

        //Display none e zerar valores
        q('#servico-input').value = '';
        q('#uni-input').value = '';
        q('#qnt-input').value = '';
        q('#vunitario-input').value = '';
        q('#vtotal-servico-dp div').innerHTML = 0;    
        
        //Remover Item
        let rmItemClick = qA(".item-display-rm [data-keysv]");
        let itemOrcSv = qA("[data-keysv]");
        for (i = 0; i < rmItemClick.length; i++){
            /*
            Uma coisa que eu tive dificuldade para fazer foi o ato de deletar algum item com um clique e deletar o item selecionado.
            Depois que foi criada a variável, podemos modificar uma por uma sem a nescessidade de criar mais outras (nessa caso por ser
            querrySelectorAll).
            Uma vez que adicionado o evento em cada item (no caso todos que possuem o 'data-key'), eles responderão e ativarão
            ao clicar ser clicado. Por isso foi utilizado o 'this' no código que refere-se ao próprio elemento.
            */
            rmItemClick[i].addEventListener("click", function(){
                keysvRm = this.getAttribute('data-keysv');
                let itemOrcSvLen = qA("[data-keysv]").length;
                i = 0;
                while(i != itemOrcSvLen){
                    itemOrcSv = qA("#orcamento-servico [data-keysv]")[i];
                    try{
                        if(itemOrcSv.getAttribute('data-keysv') == keysvRm){
                            /* 
                            parentNode para acessar o "pai" de algum elemento. No caso o itemOrcSv.
                            A configuração para remover o item clicado:
                            elementoParaRemover.parentNode.removeChild(elementoParaRemover);
                             */
                            itemOrcSv.parentNode.removeChild(itemOrcSv);
                            itemOrcSvLen = qA("[data-keysv]").length;
                            i = 0;
                        } else{
                            i++;
                        }
                    } catch(itemOrcSvUndefined){
                        break;
                    }
                }                
                try{
                    this.parentNode.removeChild(this);
                } catch{
                    return null;
                }
            }
            );
        }
        //Valor total
        somaTotalSv = 0;
        for(i = 0; i < qA('#vtotal-servico div').length; i++){
            /* 
            Com o .textContent pegamos aquilo que está no elemento selecionado. No caso o texto.
            Após ser pego, transformamos o em float.
            Com slice, nós acessamos apenas o 3° slot do string em diante.
            O slice leva, no mínimo, um parâmetro (inicio) e no máximo 2 (o inicio e o final).
            Ex.: slice(0, 2).
             */
            let valor = parseFloat(qA('#vtotal-servico div')[i].textContent.slice(2))
            somaTotalSv += valor;
        }
        q('#vfinal-rsl-servico').innerHTML = `R$${somaTotalSv.toFixed(2)}`;

    }else{
        alert("Ainda há campos que devem ser preenchidos!");
    }
});

//Fechar display servico
let rmServico = q('#rm-servico-dp').addEventListener('click', ()=>{
    q('#display-servico').style.display = 'none';
});

let rmItemServicoOpen = q('#rm-servico').addEventListener('click', ()=>{
    q('#rm-servico-display').style.display = 'grid';
});

let rmItemServicoClose = q('#rm-servico2').addEventListener('click', ()=>{
    let rmItemServico = qA('.item-display-rm .item-display');

    q('#rm-servico-display').style.display = 'none';
    divLenSv = qA('#item-servico .item').length+1;
    nmrSv = String(divLenSv);
    q('#item-servico-dp div').innerHTML = nmrSv.padStart(3, '0');

    divLenSvMod = qA('#item-servico .item').length+1;

    try{
        for(i = 0; i <= divLenSvMod; i++){
            nmrSvMod = String(i+1);
            qA('#item-servico .item')[i].innerHTML = nmrSvMod.padStart(3, '0');
            rmItemServico[i].querySelector('.item').innerHTML = nmrSvMod.padStart(3, '0');
        }
    } catch(Uncaught){
        null;
    }

    keySv = qA('#item-servico .item').length;
    
    for(i = 0; i < keySv; i++){
        qA('#rm-servico-display .item-display')[i].setAttribute('data-keysv', i+1);
        qA('#item-servico .item')[i].setAttribute('data-keysv', i+1);
        qA('#servico-servico .item')[i].setAttribute('data-keysv', i+1);
        qA('#uni-servico .item')[i].setAttribute('data-keysv', i+1);
        qA('#qnt-servico .item')[i].setAttribute('data-keysv', i+1);
        qA('#vunitario-servico .item')[i].setAttribute('data-keysv', i+1);
        qA('#vtotal-servico .item')[i].setAttribute('data-keysv', i+1);
    }

    somaTotalSv = 0;

    for(i = 0; i < qA('#vtotal-servico div').length; i++){
        let valor = parseFloat(qA('#vtotal-servico div')[i].textContent.slice(2))
        somaTotalSv += valor;
    }

    q('#vfinal-rsl-servico').innerHTML = `R$${somaTotalSv.toFixed(2)}`;
});

//Cálculo valor unitário
let vunitarioServico = q('#vunitario-input').addEventListener('keyup', ()=>{
    setInterval(()=>{
        vunitarioServicoValor = q('#vunitario-input').value;
        if(vunitarioServicoValor != 0 && qntServicoValor != 0){
            vtotalServico = vunitarioServicoValor*qntServicoValor;
            vtotalServicoValor = vtotalServico;
            return q('#vtotal-servico-dp div').innerHTML = vtotalServicoValor.toFixed(2);
        }
    }, 200);
});
let qntServico = q('#qnt-input').addEventListener('keyup', ()=>{
    setInterval(()=>{
        qntServicoValor = q('#qnt-input').value;
        if(vunitarioServicoValor != 0 && qntServicoValor != 0){
            vtotalServico2 = vunitarioServicoValor*qntServicoValor;
            vtotalServicoValor = vtotalServico2;
            return q('#vtotal-servico-dp div').innerHTML = vtotalServicoValor.toFixed(2);
        }
    }, 200);
});