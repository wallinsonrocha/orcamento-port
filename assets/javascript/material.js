//Constantes
/* 
Aqui está uma demonstração de "simplificação" do código.
Usando essas constantes definidas podemos criar funções a fim de servir como um atalho.
Utilizando (e) => tendo o "e" como parâmetro, o que for escrito será substituído no
"querrySelector(e)". Os exemplos serão mostrado logo em seguida, já que foi muito utilizado.
 */
const qMt = (e)=> document.querySelector(e);
const qAMt = (eA) => document.querySelectorAll(eA);
//Variáveis para cálculo valor unitário
let vunitarioMaterialValor = 0;
let qntMaterialValor = 0;
let vtotalMaterialValor = 0;
//Variáveis Confirmar display
let materialMaterial = qMt('#material-input').value;
let uniMaterial = qMt('#uniMt-input').value;
let keyMt = 0;
//Numeração Item
let divLenMt = qAMt('#item-material .item').length+1;
let nmrMt = String(divLenMt);
/* 
A linha abaixo serviu para definir o valor do ITEM no display como zero.
Nos códigos abaixo (em let addMaterialDp) observaremos o desenvolvimento do código
e o motivo da existência dessa linha.
*/
qMt('#item-material-dp div').innerHTML = nmrMt.padStart(3, '0');
let nmrMtMod;
let divLenMtMod;
//Remover item
let rmItemClickMt = qAMt(".item-display-rm [data-keyMt]");
let itemOrcMt = qAMt("[data-keyMt]");
let keyMtRm = 0;
//Loops
let iMt = 0;
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
Ex.: qMt(...).addEventListener('click', adicionar());
*/
let addMaterial = qMt('#add-material').addEventListener('click', ()=>{
    /*
    Pode-se acessar e modificar o CSS do elemento selecionado atraves do ".style".
    Neste caso eu quis acessar o display para modificá-lo, já que nas condições naturais
    ele está "none";
    */
    qMt('#display-material').style.display = 'flex';
});

//Confirmar display
let addMaterialDp = qMt('#add-material-dp').addEventListener('click', ()=>{
    /* Com ".value" pegamos o valor armazenado no input */
    materialMaterial = qMt('#material-input').value;
    uniMaterial = qMt('#uniMt-input').value;
                                            
    if(uniMaterial != "" && materialMaterial != "" && vtotalMaterialValor != 0){
        

        /*
        Essa parte do código poderia ser feito usando for e algum array. Penso em modificá-lo.
        Ao criar alguma variável dentro de uma condição ou loop, eles servirão apenas para o local
        que foi criado.
        Obs.: Caso seja criado um "var" ao invés no "let", ele poderá ser usado fora do campo criado.
        É algo que talvez não desejamos.

        Ao selecionar o elemento e adicionar ".cloneNode(true)", é como se tudo que está nesse elemento poderá
        ser copiado (clonado). Sendo assim, abilitei o cloneNode em diversos elementos que serão reutilizados.

        Ao utilizar o qAMt(...) é observado que eles vem seguidos de "[]". Por que isso?
        Resposta: Ao acessar o elemento utilizando document.querrySelectorAll() (nesse caso reduzi para o qA),
        nós teremos acesso a todos os elementos que herdam tal classe. Nesse caso, há 6 tags que utilizam a classe
        ".item". Para acessa-los, o uso do "[]" foi nescessário.
        */

        let areaItemMaterial1 = qAMt('#modelo-item .item')[0].cloneNode(true);
        let areaItemMaterial2 = qAMt('#modelo-item .item')[1].cloneNode(true);
        let areaItemMaterial3 = qAMt('#modelo-item .item')[2].cloneNode(true);
        let areaItemMaterial4 = qAMt('#modelo-item .item')[3].cloneNode(true);
        let areaItemMaterial5 = qAMt('#modelo-item .item')[4].cloneNode(true);
        let areaItemMaterial6 = qAMt('#modelo-item .item')[5].cloneNode(true);
        let rmItemMaterial = qMt('#modelo-item-rm .item-display').cloneNode(true);

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
        qMt('#item-material').append(areaItemMaterial1);        
        //Servico
        areaItemMaterial2.innerHTML = qMt('#material-input').value;
        rmItemMaterial.querySelectorAll('.item')[1].innerHTML = qMt('#material-input').value;
        qMt('#material-material').append(areaItemMaterial2);
        //Unidade
        areaItemMaterial3.innerHTML = qMt('#uniMt-input').value;
        rmItemMaterial.querySelectorAll('.item')[2].innerHTML = qMt('#uniMt-input').value;
        qMt('#uni-material').append(areaItemMaterial3);
        //Quantidade
        areaItemMaterial4.innerHTML = qMt('#qntMt-input').value;
        rmItemMaterial.querySelectorAll('.item')[3].innerHTML = qMt('#qntMt-input').value;
        qMt('#qnt-material').append(areaItemMaterial4);
        //Valor Unitário
        let vUInM = parseInt(qMt('#vunitarioMt-input').value);
        areaItemMaterial5.innerHTML = `R$${(vUInM).toFixed(2)}`;
        rmItemMaterial.querySelectorAll('.item')[4].innerHTML = `R$${(vUInM).toFixed(2)}`;
        qMt('#vunitario-material').append(areaItemMaterial5);
        //Valor total
        areaItemMaterial6.innerHTML = `R$${(vtotalMaterialValor).toFixed(2)}`;
        rmItemMaterial.querySelectorAll('.item')[5].innerHTML = `R$${(vtotalMaterialValor).toFixed(2)}`;
        qMt('#vtotal-material').append(areaItemMaterial6);

        /* 
        Esta linha abaixo serve para atualizar as alterações que foram feitas para o display de remover.
        O append é o final de toda alteração do cloneNode, neste código.
        */
        qMt('#rm-material-display .item-display-rm').append(rmItemMaterial);

        divLenMt = qAMt('#item-material .item').length+1;
        nmrMt = String(divLenMt);
        qMt('#item-material-dp div').innerHTML = nmrMt.padStart(3, '0');

        //Display none e zerar valores
        qMt('#material-input').value = '';
        qMt('#uniMt-input').value = '';
        qMt('#qntMt-input').value = '';
        qMt('#vunitarioMt-input').value = '';
        qMt('#vtotal-material-dp div').innerHTML = 0;    
        
        //Remover Item
        let rmItemClickMt = qAMt("#rm-material-display [data-keyMt]");
        let itemOrcMt = qAMt("[data-keyMt]");
        for (iMt = 0; iMt < rmItemClickMt.length; iMt++){
            /*
            Uma coisa que eu tive dificuldade para fazer foi o ato de deletar o item selecionado com um clique.
            Depois que foi criada a variável, podemos modificar uma por uma sem a nescessidade de criar mais outras (nessa caso por ser
            querrySelectorAll).
            Uma vez que adicionado o evento em cada item (no caso todos que possuem o 'data-key'), eles responderão e ativarão
            ao ser clicado. Por isso foi utilizado o 'this' no código que refere-se ao próprio elemento.
            Por esse motivo foi usei o for para criar essa condição.
            */
            rmItemClickMt[iMt].addEventListener("click", function(){
                keyMtRm = this.getAttribute('data-keyMt');
                let itemOrcMtLen = qAMt("[data-keyMt]").length;
                iMt = 0;
                while(iMt != itemOrcMtLen){
                    itemOrcMt = qAMt("#orcamento-material [data-keyMt]")[iMt];
                    try{
                        if(itemOrcMt.getAttribute('data-keyMt') == keyMtRm){
                            /* 
                            parentNode para acessar o "pai" de algum elemento. No caso o itemOrcMt.
                            A configuração para remover o item clicado:
                            elementoParaRemover.parentNode.removeChild(elementoParaRemover);
                             */
                            itemOrcMt.parentNode.removeChild(itemOrcMt);
                            itemOrcMtLen = qAMt("[data-keyMt]").length;
                            iMt = 0;
                        } else{
                            iMt++;
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
        for(iMt = 0; iMt < qAMt('#vtotal-material div').length; iMt++){
            /* 
            Com o .textContent pegamos aquilo que está no elemento selecionado. No caso o texto.
            Após ser pego, transformamos o em float.
            Com slice, nós acessamos apenas o 3° slot do string em diante.
            O slice leva, no mínimo, um parâmetro (inicio) e no máximo 2 (o inicio e o final).
            Ex.: slice(0, 2).
             */
            let valorMt = parseFloat(qAMt('#vtotal-material div')[iMt].textContent.slice(2))
            somaTotalMt += valorMt;
        }
        qMt('#vfinal-rsl-material').innerHTML = `R$${somaTotalMt.toFixed(2)}`;

        return vtotalMaterialValor = 0;

    }else{
        return alert("Ainda há campos que devem ser preenchidos!");
    }
});

//Fechar display servico
let rmMaterial = qMt('#rm-material-dp').addEventListener('click', ()=>{
    qMt('#display-material').style.display = 'none';
});

let rmItemMaterialOpen = qMt('#rm-material').addEventListener('click', ()=>{
    qMt('#rm-material-display').style.display = 'grid';
});

let rmItemMaterialClose = qMt('#rm-material2').addEventListener('click', ()=>{
    let rmItemMaterial = qAMt('.rm-material-display .item-display');

    qMt('#rm-material-display').style.display = 'none';
    divLenMt = qAMt('#item-material .item').length+1;
    nmrMt = String(divLenMt);
    qMt('#item-material-dp div').innerHTML = nmrMt.padStart(3, '0');

    divLenMtMod = qAMt('#item-material .item').length+1;

    /*
    O código abaixo "ordena" os numeros restantes que está na coluna ITEM.
    Se foram criados dois elementos 001 e 002 mas o 001 for apagado, o 002 não poderá continuar sendo 002.
    Sendo assim, essa parte é responsável por transformar o 002 em 001. Ou seja, ele é responsável
    em por os números em ordem.
    */

    try{
        for(iMt = 0; iMt <= divLenMtMod; iMt++){
            nmrMtMod = String(iMt+1);
            qAMt('#item-material .item')[iMt].innerHTML = nmrMtMod.padStart(3, '0');
            rmItemMaterial[iMt].querySelector('.item').innerHTML = nmrMtMod.padStart(3, '0');
        }
    } catch(Uncaught){
        null;
    }

    keyMt = qAMt('#item-material .item').length;
    
    /* Aqui ele ordenará os atributos 'data-key' */

    for(iMt = 0; iMt < keyMt; iMt++){
        qAMt('#rm-material-display .item-display')[iMt].setAttribute('data-keyMt', iMt+1);
        qAMt('#item-material .item')[iMt].setAttribute('data-keyMt', iMt+1);
        qAMt('#material-material .item')[iMt].setAttribute('data-keyMt', iMt+1);
        qAMt('#uni-material .item')[iMt].setAttribute('data-keyMt', iMt+1);
        qAMt('#qnt-material .item')[iMt].setAttribute('data-keyMt', iMt+1);
        qAMt('#vunitario-material .item')[iMt].setAttribute('data-keyMt', iMt+1);
        qAMt('#vtotal-material .item')[iMt].setAttribute('data-keyMt', iMt+1);
    }

    somaTotalMt = 0;
    
    //Valor total final
    for(iMt= 0; iMt< qAMt('#vtotal-material div').length; iMt++){
        let valorMt = parseFloat(qAMt('#vtotal-material div')[iMt].textContent.slice(2))
        somaTotalMt += valorMt;
    }

    qMt('#vfinal-rsl-material').innerHTML = `R$${somaTotalMt.toFixed(2)}`;
});

//Cálculo valor unitário
/*
Foi posto eventos nos inputs para calcular o resultado da miltiplicação do valor e a quantidade de um produto.
*/
let vunitarioMaterial = qMt('#vunitarioMt-input').addEventListener('keyup', ()=>{
    setInterval(()=>{
        vunitarioMaterialValor = qMt('#vunitarioMt-input').value;
        if(vunitarioMaterialValor != 0 && qntMaterialValor != 0){
            vtotalMaterial = vunitarioMaterialValor*qntMaterialValor;
            vtotalMaterialValor = vtotalMaterial;
            return qMt('#vtotal-material-dp div').innerHTML = vtotalMaterialValor.toFixed(2);
        }
    }, 200);
});
let qntMaterial = qMt('#qntMt-input').addEventListener('keyup', ()=>{
    setInterval(()=>{
        qntMaterialValor = qMt('#qntMt-input').value;
        if(vunitarioMaterialValor != 0 && qntMaterialValor != 0){
            vtotalMaterial2 = vunitarioMaterialValor*qntMaterialValor;
            vtotalMaterialValor = vtotalMaterial2;
            return qMt('#vtotal-material-dp div').innerHTML = vtotalMaterialValor.toFixed(2);
        }
    }, 200);
});