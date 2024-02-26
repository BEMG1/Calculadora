function calcular() {
    var numero1 = parseFloat(document.getElementById("numero1").value);
    var numero2 = parseFloat(document.getElementById("numero2").value);
    var operador = document.getElementById("operador").value;

    var resultado = realizarOperacion(numero1, numero2, operador);

    document.getElementById("resultado").innerHTML = "Resultado: " + resultado.toFixed(2);
}

function realizarOperacion(num1, num2, operador) {
    switch (operador) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            if (num2 !== 0) {
                return num1 / num2;
            } else {
                return "Error: No se puede dividir por cero";
            }
        default:
            return "Error: Operador no válido";
    }
}
