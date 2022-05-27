let altura = parseFloat(process.argv[2]);
let peso = parseInt(process.argv[3]);
let resultado = calculoIMC(altura, peso);

if(resultado <= 18.5){
    console.log('Você está anemico');
} else if(resultado >= 18.5 && resultado <= 24.9){
    console.log('Dentro do esperado');
} else if(resultado >= 25 && resultado >=30){
    console.log('Você está fofin');
}






function calculoIMC(altura, peso){
    let resultado = peso / (altura ** 2);
    return resultado;
    
}
console.log(resultado);