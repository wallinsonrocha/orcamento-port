//Constantes
/* 
Aqui está uma demonstração de "simplificação" do código.
Usando essas constantes definidas podemos criar funções a fim de servir como um atalho.
Utilizando (e) => tendo o "e" como parâmetro, o que for escrito será substituído no
"querrySelector(e)". Os exemplos serão mostrado logo em seguida, já que foi muito utilizado.
 */
const qSv = (e)=> document.querySelector(e);
const qASv = (eA) => document.querySelectorAll(eA);
//Variáveis para cálculo valor unitário
let vunitarioServicoValor = 0;
let qntServicoValor = 0;
let vtotalServicoValor = 0;
//Variáveis Confirmar display
let keySv = 0;
//Numeração Item
let divLenSv = qASv('#item-servico .item').length+1;
let nmrSv = String(divLenSv);
/* 
A linha abaixo serviu para definir o valor do ITEM no display como zero.
Nos códigos abaixo (em let addServicoDp) observaremos o desenvolvimento do código
e o motivo da existência dessa linha.
*/
qSv('#item-servico-dp div').innerHTML = nmrSv.padStart(3, '0');
let nmrSvMod;
let divLenSvMod;
//Remover item
let rmItemClickSv = qASv(".item-display-rm [data-keySv]");
let itemOrcSv = qASv("[data-keySv]");
let keySvRm = 0;
//Loops
let iSv= 0;
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
Ex.: qSv(...).addEventListener('click', adicionar());
*/
let addServico = qSv('#add-servico').addEventListener('click', ()=>{
    /*
    Pode-se acessar e modificar o CSS do elemento selecionado atraves do ".style".
    Neste caso eu quis acessar o display para modificá-lo, já que nas condições naturais
    ele está "none";
    */
    qSv('#display-servico').style.display = 'flex';
});

//Confirmar display
let addServicoDp = qSv('#add-servico-dp').addEventListener('click', ()=>{
    /* Com ".value" pegamos o valor armazenado no input */
    let ServicoServico = qSv('#servico-input').value;
    let uniServico = qSv('#uniSv-input').value;
                                            
    if(uniServico != "" && ServicoServico != "" && vtotalServicoValor != 0){

        /*
        Essa parte do código poderia ser feito usando for e algum array. Penso em modificá-lo.
        Ao criar alguma variável dentro de uma condição ou loop, eles servirão apenas para o local
        que foi criado.
        Obs.: Caso seja criado um "var" ao invés no "let", ele poderá ser usado fora do campo criado.
        É algo que talvez não desejamos.

        Ao selecionar o elemento e adicionar ".cloneNode(true)", é como se tudo que está nesse elemento poderá
        ser copiado (clonado). Sendo assim, abilitei o cloneNode em diversos elementos que serão reutilizados.

        Ao utilizar o qASv(...) é observado que eles vem seguidos de "[]". Por que isso?
        Resposta: Ao acessar o elemento utilizando document.querrySelectorAll() (nesse caso reduzi para o qA),
        nós teremos acesso a todos os elementos que herdam tal classe. Nesse caso, há 6 tags que utilizam a classe
        ".item". Para acessa-los, o uso do "[]" foi nescessário.
        */

        let areaItemServico1 = qASv('#modelo-item .item')[0].cloneNode(true);
        let areaItemServico2 = qASv('#modelo-item .item')[1].cloneNode(true);
        let areaItemServico3 = qASv('#modelo-item .item')[2].cloneNode(true);
        let areaItemServico4 = qASv('#modelo-item .item')[3].cloneNode(true);
        let areaItemServico5 = qASv('#modelo-item .item')[4].cloneNode(true);
        let areaItemServico6 = qASv('#modelo-item .item')[5].cloneNode(true);
        let rmItemServico = qSv('#modelo-item-rm .item-display').cloneNode(true);

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
        qSv('#item-servico').append(areaItemServico1);        
        //Servico
        areaItemServico2.innerHTML = qSv('#servico-input').value;
        rmItemServico.querySelectorAll('.item')[1].innerHTML = qSv('#servico-input').value;
        qSv('#servico-servico').append(areaItemServico2);
        //Unidade
        areaItemServico3.innerHTML = qSv('#uniSv-input').value;
        rmItemServico.querySelectorAll('.item')[2].innerHTML = qSv('#uniSv-input').value;
        qSv('#uni-servico').append(areaItemServico3);
        //Quantidade
        areaItemServico4.innerHTML = qSv('#qntSv-input').value;
        rmItemServico.querySelectorAll('.item')[3].innerHTML = qSv('#qntSv-input').value;
        qSv('#qnt-servico').append(areaItemServico4);
        //Valor Unitário
        let vUInS = parseInt(qSv('#vunitarioSv-input').value);
        areaItemServico5.innerHTML = `R$${(vUInS).toFixed(2)}`;
        rmItemServico.querySelectorAll('.item')[4].innerHTML = `R$${(vUInS).toFixed(2)}`;
        qSv('#vunitario-servico').append(areaItemServico5);
        //Valor total
        areaItemServico6.innerHTML = `R$${(vtotalServicoValor).toFixed(2)}`;
        rmItemServico.querySelectorAll('.item')[5].innerHTML = `R$${(vtotalServicoValor).toFixed(2)}`;
        qSv('#vtotal-servico').append(areaItemServico6);

        /* 
        Esta linha abaixo serve para atualizar as alterações que foram feitas para o display de remover.
        O append é o final de toda alteração do cloneNode, neste código.
        */
        qSv('#rm-servico-display .item-display-rm').append(rmItemServico);

        divLenSv = qASv('#item-servico .item').length+1;
        nmrSv = String(divLenSv);
        qSv('#item-servico-dp div').innerHTML = nmrSv.padStart(3, '0');

        //Display none e zerar valores
        qSv('#servico-input').value = '';
        qSv('#uniSv-input').value = '';
        qSv('#qntSv-input').value = '';
        qSv('#vunitarioSv-input').value = '';
        qSv('#vtotal-servico-dp div').innerHTML = 0;    
        
        //Remover Item
        let rmItemClickSv = qASv("#rm-servico-display [data-keySv]");
        let itemOrcSv = qASv("[data-keySv]");
        for (iSv= 0; iSv< rmItemClickSv.length; iSv++){
            /*
            Uma coisa que eu tive dificuldade para fazer foi o ato de deletar o item selecionado com um clique.
            Depois que foi criada a variável, podemos modificar uma por uma sem a nescessidade de criar mais outras (nessa caso por ser
            querrySelectorAll).
            Uma vez que adicionado o evento em cada item (no caso todos que possuem o 'data-key'), eles responderão e ativarão
            ao ser clicado. Por isso foi utilizado o 'this' no código que refere-se ao próprio elemento.
            Por esse motivo foi usei o for para criar essa condição.
            */
            rmItemClickSv[iSv].addEventListener("click", function(){
                keySvRm = this.getAttribute('data-keySv');
                let itemOrcSvLen = qASv("[data-keySv]").length;
                iSv= 0;
                while(iSv!= itemOrcSvLen){
                    itemOrcSv = qASv("#orcamento-servico [data-keySv]")[iSv];
                    try{
                        if(itemOrcSv.getAttribute('data-keySv') == keySvRm){
                            /* 
                            parentNode para acessar o "pai" de algum elemento. No caso o itemOrcSv.
                            A configuração para remover o item clicado:
                            elementoParaRemover.parentNode.removeChild(elementoParaRemover);
                             */
                            itemOrcSv.parentNode.removeChild(itemOrcSv);
                            itemOrcSvLen = qASv("[data-keySv]").length;
                            iSv= 0;
                        } else{
                            iSv++;
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
        //Valor total final
        somaTotalSv = 0;
        for(iSv= 0; iSv< qASv('#vtotal-servico div').length; iSv++){
            /* 
            Com o .textContent pegamos aquilo que está no elemento selecionado. No caso o texto.
            Após ser pego, transformamos o em float.
            Com slice, nós acessamos apenas o 3° slot do string em diante.
            O slice leva, no mínimo, um parâmetro (inicio) e no máximo 2 (o inicio e o final).
            Ex.: slice(0, 2).
             */
            let valorSv = parseFloat(qASv('#vtotal-servico div')[iSv].textContent.slice(2))
            somaTotalSv += valorSv;
        }
        qSv('#vfinal-rsl-servico').innerHTML = `R$${somaTotalSv.toFixed(2)}`;

        return vtotalServicoValor = 0;

    }else{
        return alert("Ainda há campos que devem ser preenchidos!");
    }
});

//Fechar display servico
let rmServico = qSv('#rm-servico-dp').addEventListener('click', ()=>{
    qSv('#display-servico').style.display = 'none';
});

let rmItemServicoOpen = qSv('#rm-servico').addEventListener('click', ()=>{
    qSv('#rm-servico-display').style.display = 'grid';
});

let rmItemServicoClose = qSv('#rm-servico2').addEventListener('click', ()=>{
    let rmItemServico = qASv('.rm-servico-display .item-display');

    qSv('#rm-servico-display').style.display = 'none';
    divLenSv = qASv('#item-servico .item').length+1;
    nmrSv = String(divLenSv);
    qSv('#item-servico-dp div').innerHTML = nmrSv.padStart(3, '0');

    divLenSvMod = qASv('#item-servico .item').length+1;

    /*
    O código abaixo "ordena" os numeros restantes que está na coluna ITEM.
    Se foram criados dois elementos 001 e 002 mas o 001 for apagado, o 002 não poderá continuar sendo 002.
    Sendo assim, essa parte é responsável por transformar o 002 em 001. Ou seja, ele é responsável
    em por os números em ordem.
    */

    try{
        for(iSv= 0; iSv<= divLenSvMod; iSv++){
            nmrSvMod = String(iSv+1);
            qASv('#item-servico .item')[iSv].innerHTML = nmrSvMod.padStart(3, '0');
            rmItemServicoiSv.querySelector('.item').innerHTML = nmrSvMod.padStart(3, '0');
        }
    } catch(Uncaught){
        null;
    }

    keySv = qASv('#item-servico .item').length;
    
    /* Aqui ele ordenará os atributos 'data-key' */

    for(iSv= 0; iSv< keySv; iSv++){
        qASv('#rm-servico-display .item-display')[iSv].setAttribute('data-keySv', iSv+1);
        qASv('#item-servico .item')[iSv].setAttribute('data-keySv', iSv+1);
        qASv('#servico-servico .item')[iSv].setAttribute('data-keySv', iSv+1);
        qASv('#uni-servico .item')[iSv].setAttribute('data-keySv', iSv+1);
        qASv('#qnt-servico .item')[iSv].setAttribute('data-keySv', iSv+1);
        qASv('#vunitario-servico .item')[iSv].setAttribute('data-keySv', iSv+1);
        qASv('#vtotal-servico .item')[iSv].setAttribute('data-keySv', iSv+1);
    }

    somaTotalSv = 0;
    
    //Valor total final
    for(iSv= 0; iSv< qASv('#vtotal-servico div').length; iSv++){
        let valorSv = parseFloat(qASv('#vtotal-servico div')[iSv].textContent.slice(2))
        somaTotalSv += valorSv;
    }

    qSv('#vfinal-rsl-servico').innerHTML = `R$${somaTotalSv.toFixed(2)}`;
});

//Cálculo valor unitário
/*
Foi posto eventos nos inputs para calcular o resultado da miltiplicação do valor e a quantidade de um produto.
*/
let vunitarioServico = qSv('#vunitarioSv-input').addEventListener('keyup', ()=>{
    setInterval(()=>{
        vunitarioServicoValor = qSv('#vunitarioSv-input').value;
        if(vunitarioServicoValor != 0 && qntServicoValor != 0){
            vtotalServico = vunitarioServicoValor*qntServicoValor;
            vtotalServicoValor = vtotalServico;
            return qSv('#vtotal-servico-dp div').innerHTML = vtotalServicoValor.toFixed(2);
        }
    }, 200);
});
let qntServico = qSv('#qntSv-input').addEventListener('keyup', ()=>{
    setInterval(()=>{
        qntServicoValor = qSv('#qntSv-input').value;
        if(vunitarioServicoValor != 0 && qntServicoValor != 0){
            vtotalServico2 = vunitarioServicoValor*qntServicoValor;
            vtotalServicoValor = vtotalServico2;
            return qSv('#vtotal-servico-dp div').innerHTML = vtotalServicoValor.toFixed(2);
        }
    }, 200);
});