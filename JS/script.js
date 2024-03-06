function sumarNumeros() {
    // Obtener los valores de los inputs
    var num1 = document.getElementById('numero1').value;
    var num2 = document.getElementById('numero2').value;

    // Convertir valores a números y sumar
    var suma = parseFloat(num1) + parseFloat(num2);

    // Mostrar el resultado
    document.getElementById('resultado').textContent = 'Resultado: ' + suma;
}
