function insert(num) {
    const numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
}
function clean() {
    document.getElementById('resultado').innerHTML = "";
}
function back() {
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length - 1);
}
function calcular() {
    const resultado = document.getElementById('resultado').innerHTML;
    console.log(resultado)
    if (resultado) {
        document.getElementById('resultado').innerHTML = eval (resultado);
    }
}