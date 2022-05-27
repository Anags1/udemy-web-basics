function contar() 
{
    let inicio = document.getElementById('inicio');
    let fim = document.getElementById('fim');
    let passo = document.getElementById('passo');
    let contagem = document.getElementById('contagem');

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) 
    {
        contagem.innerHTML = 'É necessário o total preenchimento dos dados para iniciar a contagem.'
    } else 
    {
        contagem.innerHTML = 'Contando: <br>';
        let inicio2 = Number(inicio.value);
        let fim2 = Number(fim.value);
        let passo2 = Number(passo.value);

        if (passo <= 0)
        {
            alert('[ERRO] - Mínimo de 1 passo!');
        }

        if (inicio2 < fim2) 
        {
            for (let c = inicio2; c <= fim2; c += passo2) 
            {
                contagem.innerHTML += `${c} \u{1F449}`;
            }
        } else 
        {
            for (let c = inicio2; c <= fim2; c -= passo2) 
            {
                contagem.innerHTML += `${c} \u{1F449}`;
            }
        }
    } contagem.innerHTML += `\u{1F3C1}`;
}
