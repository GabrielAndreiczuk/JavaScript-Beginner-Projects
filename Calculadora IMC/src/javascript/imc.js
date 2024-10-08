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

        let classificacao;

        if(resultado_imc < 18.5)
        {
            classificacao = "abaixo do peso!";
        }
        else if(resultado_imc < 25)
        {
            classificacao = "com o peso normal!";
        }
        else if (resultado_imc < 30) 
        {
            classificacao = "com sobrepeso!";
        } 
        else if (resultado_imc < 35) 
        {
            classificacao = "com obesidade grau I!";
        } 
        else if (resultado_imc < 40) 
        {
            classificacao = "com obesidade grau II!";
        } 
        else 
        {
            classificacao = "com obesidade grau III (mórbida)!";
        }

        resultado.textContent = `${nome}, seu imc é de ${resultado_imc}. Você está ${classificacao}`;
    }
    else
    {
        resultado.textContent = "Preencha todos os campos!";
    }
    
    
}


calc.addEventListener('click', imc);