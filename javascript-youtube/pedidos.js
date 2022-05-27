class Pedidos
{
    numero;
    itens;
    endereco;
    nome;

    constructor(numero, itens, endereco, nome){
        this.numero = numero;
        this.itens = itens;
        this.endereco = endereco;
        this.nome = nome;
    }
}

class FilaDePedidos
{
    fila = [];

    adicionarAFila(Pedido){
        this.fila.push(Pedido);
    }

    verFilaDePedidos(){
        let fila = '';
        this.fila.forEach(pedido => {
            fila += pedido.numero + ' ' + pedido.nome + ' ' + pedido.endereco + "\n";
        });

        return fila;
    }

    retirarPedidoDaFila(){
        this.fila.shift();
    }

    verTamanhoDaFila(){
        return this.fila.length;
    }

}

let Pedido = new Pedidos(222, ['hamburguer', 'refri'], 'rua vivalde 99', 'Vinicius K' )
let Pedido2 = new Pedidos(223, ['arrox', 'batata'], 'rua Oito', 'Clara');

let fila = new FilaDePedidos()
fila.adicionarAFila(Pedido);
fila.adicionarAFila(Pedido2);

fila.adicionarAFila(
    new Pedidos(225, ['creme', 'paçoca'], 'rua Ceis', 'Jorbo')
)

let filaDePedidos = fila.verFilaDePedidos();

console.log(fila.verTamanhoDaFila());





console.log(filaDePedidos);

fila.retirarPedidoDaFila();
console.log(fila.verFilaDePedidos());
console.log(fila.verTamanhoDaFila());
