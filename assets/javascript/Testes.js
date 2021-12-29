

//parentNode
//innerHTML

//Ideias que serão utilizadas
//qA('[data-keysv]')[i].getAttribute('data-keysv') == 

//Constantes
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
q('#item-servico-dp div').innerHTML = nmrSv.padStart(3, '0');
//Remover item
let keysvRm;
let itemOrcSv;
//Fim variáveis e constantes

//Botão Adicionar
//Essa parte do código vai até antes de botão remover.
let addServico = q('#add-servico').addEventListener('click', ()=>{
    q('#display-servico').style.display = 'flex';
});

//Confirmar display
let addServicoDp = q('#add-servico-dp').addEventListener('click', ()=>{
    servicoServico = q('#servico-input').value;
    uniServico = q('#uni-input').value;
                                            
    if(uniServico != 0 && servicoServico != 0 && vtotalServicoValor != 0){

        let areaItemServico1 = qA('#modelo-item .item')[0].cloneNode(true);
        let areaItemServico2 = qA('#modelo-item .item')[1].cloneNode(true);
        let areaItemServico3 = qA('#modelo-item .item')[2].cloneNode(true);
        let areaItemServico4 = qA('#modelo-item .item')[3].cloneNode(true);
        let areaItemServico5 = qA('#modelo-item .item')[4].cloneNode(true);
        let areaItemServico6 = qA('#modelo-item .item')[5].cloneNode(true);

        keySv++;
        
        areaItemServico1.setAttribute('data-keySv', keySv);
        areaItemServico2.setAttribute('data-keySv', keySv);
        areaItemServico3.setAttribute('data-keySv', keySv);
        areaItemServico4.setAttribute('data-keySv', keySv);
        areaItemServico5.setAttribute('data-keySv', keySv);
        areaItemServico6.setAttribute('data-keySv', keySv);
    
        //Add após confirmação
        //Item
        areaItemServico1.innerHTML = nmrSv.padStart(3, '0');
        q('#item-servico').append(areaItemServico1);        
        //Servico
        areaItemServico2.innerHTML = q('#servico-input').value;
        q('#servico-servico').append(areaItemServico2);
        //Unidade
        areaItemServico3.innerHTML = q('#uni-input').value;
        q('#uni-servico').append(areaItemServico3);
        //Quantidade
        areaItemServico4.innerHTML = q('#qnt-input').value;
        q('#qnt-servico').append(areaItemServico4);
        //Valor Unitário
        let vUIn = parseInt(q('#vunitario-input').value);
        areaItemServico5.innerHTML = `R$${(vUIn).toFixed(2)}`;
        q('#vunitario-servico').append(areaItemServico5);
        //Valor total
        areaItemServico6.innerHTML = `R$${(vtotalServicoValor).toFixed(2)}`;
        q('#vtotal-servico').append(areaItemServico6);

        divLenSv = qA('#item-servico .item').length+1;
        nmrSv = String(divLenSv);
        q('#item-servico-dp div').innerHTML = nmrSv.padStart(3, '0');

        //Display none e zerar valores
        q('#servico-input').value = '';
        q('#uni-input').value = '';
        q('#qnt-input').value = '';
        q('#vunitario-input').value = '';
        q('#vtotal-servico-dp div').innerHTML = 0;        

    }else{
        alert("Ainda há campos que devem ser preenchidos!");
    }
});

//Fechar e remover
//Fechar display servico
let rmServico = q('#rm-servico-dp').addEventListener('click', ()=>{
    q('#display-servico').style.display = 'none';
});

let rmItemServicoOpen = q('#rm-servico').addEventListener('click', ()=>{
    q('#rm-servico-display').style.display = 'grid';

    //qA('#servico-servico div')[0].getAttribute('data-keysv');
});

let rmItemServicoClose = q('#rm-servico2').addEventListener('click', ()=>{
    q('#rm-servico-display').style.display = 'none';

    //qA('#servico-servico div')[0].getAttribute('data-keysv');
});

//Remover Item
let rmItemClick = qA(".item-display-rm [data-keysv]");
for (let i = 0; i < rmItemClick.length; i++) {
    rmItemClick[i].addEventListener("click", function(){
        keysvRm = this.getAttribute('data-keysv');
        this.parentNode.removeChild(this);
        
        for(let i = 0; i < qA("[data-keysv]").length; i++){
            itemOrcSv = qA("#orcamento-servico [data-keysv]")[i];
            if(itemOrcSv.getAttribute('data-keysv') == keysvRm){
                //itemOrcSv.parentNode.removeChild(itemOrcSv);
                //Tentar colocar um while
                return console.log(itemOrcSv.parentNode.removeChild(itemOrcSv));
            }
        }
    });
}

//Fim botões

//Display
//Cálculo valor unitário
let vunitarioServico = q('#vunitario-input').addEventListener('keyup', ()=>{
    setInterval(()=>{
        vunitarioServicoValor = q('#vunitario-input').value;
        if(vunitarioServicoValor != 0 && qntServicoValor != 0){
            vtotalServico = vunitarioServicoValor*qntServicoValor;
            vtotalServicoValor = vtotalServico;
            return q('#vtotal-servico-dp div').innerHTML = vtotalServicoValor
        }
    }, 200);
});
let qntServico = q('#qnt-input').addEventListener('keyup', ()=>{
    setInterval(()=>{
        qntServicoValor = q('#qnt-input').value;
        if(vunitarioServicoValor != 0 && qntServicoValor != 0){
            vtotalServico2 = vunitarioServicoValor*qntServicoValor;
            vtotalServicoValor = vtotalServico2;
            return q('#vtotal-servico-dp div').innerHTML = vtotalServicoValor;
        }
    }, 200);
});