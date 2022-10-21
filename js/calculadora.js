const nome = prompt('Digite o seu nome')
document.getElementById('nome').innerText = nome;

function verificar(campo){
    if(campo.value != ""){
        campo.style = "border: 1px solid green";
    }
    else {
        campo.style = "border: 1px solid red";
    }
}
document.getElementById('valor1').addEventListener("change",function(){
    verificar(this);
});
document.getElementById('valor2').addEventListener("change",function(){
    verificar(this);
});

function calcular() {
    const valor1 = document.getElementById('valor1').value;
    const valor2 = document.getElementById('valor2').value;
    const departamento = document.getElementById('departamento').value;
    const resultado = document.getElementById('resultado');
if(valor1 == "" || valor2 == ""){
    alert('Erro!!! Preencha todos os campos !!');
}
else{
    if(departamento == "1"){
        resultado.value = parseInt(valor1) + parseInt(valor2);
        document.getElementById('resultado').innerText = resultado;
    }
    else if(departamento == "2"){
        resultado.value = valor1 - valor2;

        document.getElementById('resultado').innerText = resultado;
    }
    else if(departamento == "3"){
        resultado.value = valor1 / valor2;
        document.getElementById('resultado').innerText = resultado;
    }
    else if(departamento == "4"){
        resultado.value = valor1 * valor2;
        document.getElementById('resultado').innerText = resultado;
    }
}
}

const btnCalcular = document.getElementById('btnCalcular');
btnCalcular.addEventListener("click",calcular);