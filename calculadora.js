function somar() {
    var s1 = parseInt(document.getElementById("sValor1").value);
    var s2 = parseInt(document.getElementById("sValor2").value);

    var soma = s1 + s2
    document.getElementById("result").value = soma;
}
function subtrair() {
    var s1 = parseInt(document.getElementById("suValor1").value);
    var s2 = parseInt(document.getElementById("suValor2").value);

    var subtracao = s1 - s2;
    document.getElementById("result1").value = subtracao;
}

function multiplicar() {
    var s1 = parseInt(document.getElementById("mValor1").value);
    var s2 = parseInt(document.getElementById("mValor2").value);

    var multiplicacao = s1 * s2;
    document.getElementById("result2").value = multiplicacao;
}

function dividir(){
    var s1 = parseInt(document.getElementById("dValor1").value);
    var s2 = parseInt(document.getElementById("dValor2").value);

    var divisao = s1 / s2;
    document.getElementById("result3").value = divisao;
}

function apagaSo(){
    document.getElementById("sValor1").value = null
    document.getElementById("sValor2").value = null
    document.getElementById("result").value = null
}

function apagaSu(){
    document.getElementById("suValor1").value = null
    document.getElementById("suValor2").value = null
    document.getElementById("result1").value = null
}

function apagaM(){
    document.getElementById("mValor1").value = null
    document.getElementById("mValor2").value = null
    document.getElementById("result2").value = null
}

function apagaD(){
    document.getElementById("dValor1").value = null
    document.getElementById("dValor2").value = null
    document.getElementById("result3").value = null
}