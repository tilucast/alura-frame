/* const tabelaBody = document.querySelector('.table-body');
const formulario = document.querySelector('.form');
const buttonSubmit = document.querySelector('.btn-primary');

buttonSubmit.addEventListener("click", event =>{
    const valoresForm = pegarForm(formulario);
    
   criarElementoTabela(valoresForm);

   const volumesTotal = document.querySelectorAll('.volumes');

    mostrarVolumeTotal(volumesTotal);
    
    formulario.reset();
    event.preventDefault();
});


function pegarForm (form){
    const valores = {
        data: form.data.value,
        quantidade: form.quantidade.value,
        valor: form.valor.value
    }

    return valores;
}

function criarElementoTabela(valores){
    const criarTr = document.createElement('tr');
    tabelaBody.appendChild(criarTr);

    criarTr.appendChild(criarInfoTd(valores.data, 'data'));
    criarTr.appendChild(criarInfoTd(valores.quantidade, 'quantidade'));
    criarTr.appendChild(criarInfoTd(valores.valor, 'valor'));
    criarTr.appendChild(criarInfoTd(volume(valores.quantidade, valores.valor), 'volumes'));
}

function criarInfoTd (dado, classe){
    const criarTd = document.createElement('td');
    criarTd.textContent = dado;
    criarTd.classList.add(classe);

    return criarTd;
}

function volume(quantidade,valor){
    let volume = quantidade * valor;

    return volume;
}

function mostrarVolumeTotal(volumes){
    let x = []
    volumes.forEach(volume =>{
        let valoresVolumes = parseInt(volume.textContent);
        x.push(valoresVolumes)
        let sum = x.reduce((a,b) => a + b, 0 );    
    })
} */

const campos = [
  document.querySelector('#data'),
  document.querySelector('#quantidade'),
  document.querySelector('#valor'),
];

const tbody = document.querySelector('table tbody');
const formulario = document.querySelector('.form');

formulario.addEventListener('submit', event => {
  const tr = document.createElement('tr');

  campos.forEach(campo => {
    const td = document.createElement('td');
    td.textContent = campo.value;
    tr.appendChild(td);
  });

  const tdVolume = document.createElement('td');
  tdVolume.textContent = campos[1].value * campos[2].value;

  tr.appendChild(tdVolume);

  tbody.appendChild(tr);

  formulario.data.focus();
  formulario.reset();
  event.preventDefault();
});
