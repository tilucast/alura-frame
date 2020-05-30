import View from './View.js'
import DateHelper from '../helpers/DateHelper.js'

export default class NegociacoesView extends View {
  template(model) {
    return `
        <table class="table table-hover table-bordered">
            <thead>
            <tr>
              <th>DATA</th>
              <th>QUANTIDADE</th>
              <th>VALOR</th>
              <th>VOLUME</th>
            </tr>
            </thead>
        
            <tbody class="table-body">
                ${model.negociacoes
                  .map(
                    (negociacao, i)=> `
                    <tr>
                        <td>${DateHelper.dateToText(negociacao.data)}</td>
                        <td>${negociacao.quantidade}</td>
                        <td>${negociacao.valor}</td>
                        <td>${negociacao.volume}</td>
                        <!--<td class="x" data-index="${i}">X</td> -->
                    </tr>
                    
                `
                  )
                  .join('')}
            </tbody>
        
            <tfoot>
                <td colspan="3">Total</td>
                <td>${model.volumeTotal}</td>
            </tfoot>
        </table>
        `;
  }
}