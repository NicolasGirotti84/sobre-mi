// Función suma
function suma(num1, num2) {
    return num1 + num2;
}

// Función resta
function resta(num1, num2) {
    return num1 - num2;
}

// Función producto
function multiplicacion(num1, num2) {
    return num1 * num2;
}

// Función división
function division(num1, num2) {
    if (num2 === 0) {
        window.alert("No se puede dividir por cero, utilice el botón 'limpiar' e inicie nuevamente.");
        return;
    }
    return num1 / num2;
}

// Función resultado
function calcularResultado() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let operador = document.getElementById("operador").value;
    let resultado = 0;

// validación de datos numericos - ambos campos deben estar completos para que la calculadora funcione

    if (isNaN(num1) || isNaN(num2)) {
        alert("Error: Por favor, Ingrese valores numéricos válidos en ambos campos.");
        return;
}                   

// eleccion de la función de acuerdo al operador
    switch (operador) {
        case "suma":
            resultado = suma(num1, num2);
            break;
        case "resta":
            resultado = resta(num1, num2);
            break;
        case "producto":
            resultado = multiplicacion(num1, num2);
            break;
        case "division":
            resultado = division(num1, num2);
            break;
        default:
            alert("Operador no válido");
            return;
    }
/* Limitar los resultados a un máximo de 20 caracteres */
    if (resultado > 99999999999999999999 || resultado < -9999999999999999999) {
        alert("El resultado es demasiado largo para mostrarse en pantalla - el máximo resultado que puede mostrar esta calculadora es de 20 caracteres")
        resultado = 0
    }

    document.getElementById("resultado").textContent = " = " + resultado;
}

// Función para limpiar la calculadora y poder utilizarla nuevamente sin tener que recargar la pagina
function limpiarCalculadora() {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("resultado").textContent = " = " + 0;
}