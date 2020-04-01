class NegociacoesView extends View {
  template(model) {
    return `
        <table class="table table-hover table-bordered">
            <thead>
            <tr>
              <th onclick="negociacaoController.ordenarNegociacoes('data')">DATA</th>
              <th onclick="negociacaoController.ordenarNegociacoes('quantidade')">QUANTIDADE</th>
              <th onclick="negociacaoController.ordenarNegociacoes('valor')">VALOR</th>
              <th onclick="negociacaoController.ordenarNegociacoes('volume')">VOLUME</th>
            </tr>
            </thead>
        
            <tbody class="table-body">
                ${model.negociacoes
                  .map(
                    (n, i)=> `
                    <tr>
                        <td>${DateHelper.dateToText(n.data)}</td>
                        <td>${n.quantidade}</td>
                        <td>${n.valor}</td>
                        <td>${n.volume}</td>
                        <td data-index="${i}" onclick="negociacaoController.removerNegociacao(this)">X</td>
                    </tr>
                    
                `
                  )
                  .join('')}
            </tbody>
        
            <tfoot>
                <td colspan="3"></td>
                <td>${model.volumeTotal}</td>
            </tfoot>
        </table>
        `;
  }
}