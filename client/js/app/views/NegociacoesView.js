class NegociacoesView extends View {

    constructor(elemento) {
        super(elemento);
    }

    _template(model) {
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
                
                <tbody>
                    ${
                        model.negociacoes.map(n => `
                            <tr>
                                <td>${DateHelper.dataParaTexto(n.data)}</td>
                                <td>${n.quantidade}</td>
                                <td>${n.valor}</td>
                                <td>${n.volume}</td>
                            </tr>
                        ` ).join('') //Join converte para string
                    }
                </tbody>
                <tfoot>
                    <td colspan="3">
                        
                    </td>
                    <td>
                        ${
                            //IISE - Immediatly instruction function expression
                            /*
                            (function() {
                                let total = 0;
                                model.negociacoes.forEach(n => total += n.volume);
                                return total;
                            })()*/

                            model.negociacoes.reduce((total, n) => total + n.volume, 0.0) //0.0 representa o valor inicial do total
                        }
                    </td>
                </tfoot>
            </table>
        `;
    }

}