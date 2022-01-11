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
let vunitarioMaterialValor = 0;
let qntMaterialValor = 0;
let vtotalMaterialValor = 0;
//Variáveis Confirmar display
let materialMaterial = q('#servico-input').value;
let uniMaterial = q('#uniSv-input').value;
let keyMt = 0;
//Numeração Item
let divLenMt = qA('#item-servico .item').length+1;
let nmrMt = String(divLenMt);
/* 
A linha abaixo serviu para definir o valor do ITEM no display como zero.
Nos códigos abaixo (em let addMaterialDp) observaremos o desenvolvimento do código
e o motivo da existência dessa linha.
*/
q('#item-servico-dp div').innerHTML = nmrMt.padStart(3, '0');
let nmrMtMod;
let divLenMtMod;
//Remover item
let rmItemClick = qA(".item-display-rm [data-keyMt]");
let itemOrcMt = qA("[data-keyMt]");
let keyMtRm = 0;
//Loops
let i = 0;
let j = 0;
//Valor total
let somaTotalMt = 0;
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
let addMaterial = q('#add-servico').addEventListener('click', ()=>{
    /*
    Pode-se acessar e modificar o CSS do elemento selecionado atraves do ".style".
    Neste caso eu quis acessar o display para modificá-lo, já que nas condições naturais
    ele está "none";
    */
    q('#display-servico').style.display = 'flex';
});

//Confirmar display
let addMaterialDp = q('#add-servico-dp').addEventListener('click', ()=>{
    /* Com ".value" pegamos o valor armazenado no input */
    materialMaterial = q('#servico-input').value;
    uniMaterial = q('#uniSv-input').value;
                                            
    if(uniMaterial != 0 && materialMaterial != 0 && vtotalMaterialValor != 0){

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

        let areaItemMaterial1 = qA('#modelo-item .item')[0].cloneNode(true);
        let areaItemMaterial2 = qA('#modelo-item .item')[1].cloneNode(true);
        let areaItemMaterial3 = qA('#modelo-item .item')[2].cloneNode(true);
        let areaItemMaterial4 = qA('#modelo-item .item')[3].cloneNode(true);
        let areaItemMaterial5 = qA('#modelo-item .item')[4].cloneNode(true);
        let areaItemMaterial6 = qA('#modelo-item .item')[5].cloneNode(true);
        let rmItemMaterial = q('#modelo-item-rm .item-display').cloneNode(true);

        keyMt++;
        /* Com o setAttribute adicionamos um atributo no elemento selecionado seguido do seu valor */
        areaItemMaterial1.setAttribute('data-keyMt', keyMt);
        areaItemMaterial2.setAttribute('data-keyMt', keyMt);
        areaItemMaterial3.setAttribute('data-keyMt', keyMt);
        areaItemMaterial4.setAttribute('data-keyMt', keyMt);
        areaItemMaterial5.setAttribute('data-keyMt', keyMt);
        areaItemMaterial6.setAttribute('data-keyMt', keyMt);
        rmItemMaterial.setAttribute('data-keyMt', keyMt);

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
        areaItemMaterial1.innerHTML = nmrMt.padStart(3, '0');
        rmItemMaterial.querySelectorAll('.item')[0].innerHTML = nmrMt.padStart(3, '0');
        q('#item-servico').append(areaItemMaterial1);        
        //Servico
        areaItemMaterial2.innerHTML = q('#servico-input').value;
        rmItemMaterial.querySelectorAll('.item')[1].innerHTML = q('#servico-input').value;
        q('#servico-servico').append(areaItemMaterial2);
        //Unidade
        areaItemMaterial3.innerHTML = q('#uniSv-input').value;
        rmItemMaterial.querySelectorAll('.item')[2].innerHTML = q('#uniSv-input').value;
        q('#uni-servico').append(areaItemMaterial3);
        //Quantidade
        areaItemMaterial4.innerHTML = q('#qntSv-input').value;
        rmItemMaterial.querySelectorAll('.item')[3].innerHTML = q('#qntSv-input').value;
        q('#qnt-servico').append(areaItemMaterial4);
        //Valor Unitário
        let vUIn = parseInt(q('#vunitarioSv-input').value);
        areaItemMaterial5.innerHTML = `R$${(vUIn).toFixed(2)}`;
        rmItemMaterial.querySelectorAll('.item')[4].innerHTML = `R$${(vUIn).toFixed(2)}`;
        q('#vunitario-servico').append(areaItemMaterial5);
        //Valor total
        areaItemMaterial6.innerHTML = `R$${(vtotalMaterialValor).toFixed(2)}`;
        rmItemMaterial.querySelectorAll('.item')[5].innerHTML = `R$${(vtotalMaterialValor).toFixed(2)}`;
        q('#vtotal-servico').append(areaItemMaterial6);

        /* 
        Esta linha abaixo serve para atualizar as alterações que foram feitas para o display de remover.
        O append é o final de toda alteração do cloneNode, neste código.
        */
        q('.item-display-rm').append(rmItemMaterial);

        divLenMt = qA('#item-servico .item').length+1;
        nmrMt = String(divLenMt);
        q('#item-servico-dp div').innerHTML = nmrMt.padStart(3, '0');

        //Display none e zerar valores
        q('#servico-input').value = '';
        q('#uniSv-input').value = '';
        q('#qntSv-input').value = '';
        q('#vunitarioSv-input').value = '';
        q('#vtotal-servico-dp div').innerHTML = 0;    
        
        //Remover Item
        let rmItemClick = qA(".item-display-rm [data-keyMt]");
        let itemOrcMt = qA("[data-keyMt]");
        for (i = 0; i < rmItemClick.length; i++){
            /*
            Uma coisa que eu tive dificuldade para fazer foi o ato de deletar o item selecionado com um clique.
            Depois que foi criada a variável, podemos modificar uma por uma sem a nescessidade de criar mais outras (nessa caso por ser
            querrySelectorAll).
            Uma vez que adicionado o evento em cada item (no caso todos que possuem o 'data-key'), eles responderão e ativarão
            ao ser clicado. Por isso foi utilizado o 'this' no código que refere-se ao próprio elemento.
            Por esse motivo foi usei o for para criar essa condição.
            */
            rmItemClick[i].addEventListener("click", function(){
                keyMtRm = this.getAttribute('data-keyMt');
                let itemOrcMtLen = qA("[data-keyMt]").length;
                i = 0;
                while(i != itemOrcMtLen){
                    itemOrcMt = qA("#orcamento-servico [data-keyMt]")[i];
                    try{
                        if(itemOrcMt.getAttribute('data-keyMt') == keyMtRm){
                            /* 
                            parentNode para acessar o "pai" de algum elemento. No caso o itemOrcMt.
                            A configuração para remover o item clicado:
                            elementoParaRemover.parentNode.removeChild(elementoParaRemover);
                             */
                            itemOrcMt.parentNode.removeChild(itemOrcMt);
                            itemOrcMtLen = qA("[data-keyMt]").length;
                            i = 0;
                        } else{
                            i++;
                        }
                    } catch(itemOrcMtUndefined){
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
        somaTotalMt = 0;
        for(i = 0; i < qA('#vtotal-servico div').length; i++){
            /* 
            Com o .textContent pegamos aquilo que está no elemento selecionado. No caso o texto.
            Após ser pego, transformamos o em float.
            Com slice, nós acessamos apenas o 3° slot do string em diante.
            O slice leva, no mínimo, um parâmetro (inicio) e no máximo 2 (o inicio e o final).
            Ex.: slice(0, 2).
             */
            let valor = parseFloat(qA('#vtotal-servico div')[i].textContent.slice(2))
            somaTotalMt += valor;
        }
        q('#vfinal-rsl-servico').innerHTML = `R$${somaTotalMt.toFixed(2)}`;

    }else{
        alert("Ainda há campos que devem ser preenchidos!");
    }
});

//Fechar display servico
let rmMaterial = q('#rm-servico-dp').addEventListener('click', ()=>{
    q('#display-servico').style.display = 'none';
});

let rmItemMaterialOpen = q('#rm-servico').addEventListener('click', ()=>{
    q('#rm-servico-display').style.display = 'grid';
});

let rmItemMaterialClose = q('#rm-servico2').addEventListener('click', ()=>{
    let rmItemMaterial = qA('.item-display-rm .item-display');

    q('#rm-servico-display').style.display = 'none';
    divLenMt = qA('#item-servico .item').length+1;
    nmrMt = String(divLenMt);
    q('#item-servico-dp div').innerHTML = nmrMt.padStart(3, '0');

    divLenMtMod = qA('#item-servico .item').length+1;

    /*
    O código abaixo "ordena" os numeros restantes que está na coluna ITEM.
    Se foram criados dois elementos 001 e 002 mas o 001 for apagado, o 002 não poderá continuar sendo 002.
    Sendo assim, essa parte é responsável por transformar o 002 em 001. Ou seja, ele é responsável
    em por os números em ordem.
    */

    try{
        for(i = 0; i <= divLenMtMod; i++){
            nmrMtMod = String(i+1);
            qA('#item-servico .item')[i].innerHTML = nmrMtMod.padStart(3, '0');
            rmItemMaterial[i].querySelector('.item').innerHTML = nmrMtMod.padStart(3, '0');
        }
    } catch(Uncaught){
        null;
    }

    keyMt = qA('#item-servico .item').length;
    
    /* Aqui ele ordenará os atributos 'data-key' */

    for(i = 0; i < keyMt; i++){
        qA('#rm-servico-display .item-display')[i].setAttribute('data-keyMt', i+1);
        qA('#item-servico .item')[i].setAttribute('data-keyMt', i+1);
        qA('#servico-servico .item')[i].setAttribute('data-keyMt', i+1);
        qA('#uni-servico .item')[i].setAttribute('data-keyMt', i+1);
        qA('#qnt-servico .item')[i].setAttribute('data-keyMt', i+1);
        qA('#vunitario-servico .item')[i].setAttribute('data-keyMt', i+1);
        qA('#vtotal-servico .item')[i].setAttribute('data-keyMt', i+1);
    }

    somaTotalMt = 0;
    
    //Valor total final
    for(i = 0; i < qA('#vtotal-servico div').length; i++){
        let valor = parseFloat(qA('#vtotal-servico div')[i].textContent.slice(2))
        somaTotalMt += valor;
    }

    q('#vfinal-rsl-servico').innerHTML = `R$${somaTotalMt.toFixed(2)}`;
});

//Cálculo valor unitário
/*
Foi posto eventos nos inputs para calcular o resultado da miltiplicação do valor e a quantidade de um produto.
*/
let vunitarioMaterial = q('#vunitarioSv-input').addEventListener('keyup', ()=>{
    setInterval(()=>{
        vunitarioMaterialValor = q('#vunitarioSv-input').value;
        if(vunitarioMaterialValor != 0 && qntMaterialValor != 0){
            vtotalMaterial = vunitarioMaterialValor*qntMaterialValor;
            vtotalMaterialValor = vtotalMaterial;
            return q('#vtotal-servico-dp div').innerHTML = vtotalMaterialValor.toFixed(2);
        }
    }, 200);
});
let qntMaterial = q('#qntSv-input').addEventListener('keyup', ()=>{
    setInterval(()=>{
        qntMaterialValor = q('#qntSv-input').value;
        if(vunitarioMaterialValor != 0 && qntMaterialValor != 0){
            vtotalMaterial2 = vunitarioMaterialValor*qntMaterialValor;
            vtotalMaterialValor = vtotalMaterial2;
            return q('#vtotal-servico-dp div').innerHTML = vtotalMaterialValor.toFixed(2);
        }
    }, 200);
});