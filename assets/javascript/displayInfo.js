//Abrir display de informações
let abrirDisplayInfo = document.querySelector('main .info').addEventListener('click', ()=>{    
    document.querySelector('#display-info').style.display = 'flex';
});


//Limpar informações
let limparDisplayInfo = document.querySelector('#display-info #btn-limpar-display').addEventListener('click', ()=>{
    document.querySelector('#cliente-value').value = '';
    document.querySelector('#att-value').value = '';
    document.querySelector('#objetivo-value').value = '';
});

//Fechar display de informações
let fecharDisplayInfo = document.querySelector('#display-info #btn-cancelar-display').addEventListener('click', ()=>{
    document.querySelector('#display-info').style.display = 'none';
});

//Display botão de confirmação
let confirmarDisplayInfo = document.querySelector('#display-info #btn-confirmar-display').addEventListener('click', ()=>{
    let valueCliente = document.querySelector('#cliente-value').value;
    let valueAtt = document.querySelector('#att-value').value;
    let valueObj = document.querySelector('#objetivo-value').value;
    document.querySelector('#cliente-nome').innerHTML = valueCliente;
    document.querySelector('#att-nome').innerHTML = valueAtt;
    document.querySelector('#objetivo-nome').innerHTML = valueObj;
    document.querySelector('#display-info').style.display = 'none';
});

