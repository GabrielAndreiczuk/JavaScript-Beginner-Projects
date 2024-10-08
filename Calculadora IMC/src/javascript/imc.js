const calc = document.getElementById('calc');

function imc()
{
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if(nome !== '' && altura !== '' && peso !== '')
    {
        const resultado_imc = (peso / (altura * altura)).toFixed(2);
        resultado.textContent = nome + " seu imc é de " + resultado_imc;
    }
    else
    {
        resultado.textContent = "Preencha todos os campos!";
    }
    
    
}


calc.addEventListener('click', imc);