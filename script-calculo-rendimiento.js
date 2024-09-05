document.getElementById('calcForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe y la página se recargue.

    // Obtén los valores de los inputs.
    const dato1 = parseFloat(document.getElementById('interes').value);     //interes
    const dato2 = parseFloat(document.getElementById('plazo').value);   //plazo
    const dato3 = parseFloat(document.getElementById('monto').value);   //monto

    // Realiza un cálculo con los tres datos (ejemplo: suma de los tres).
    let aux = dato1 * .01;
    let aux1 = (dato3 * aux)/365;
    let aux2 = (aux1 * dato2) + dato3;
    let aux3 = aux1 * dato2;

    // const resultado = dato1 + dato2 + dato3;

    // Muestra el resultado en el div de resultado.
    document.getElementById('resultadototal').textContent = `${aux2.toFixed(2)}`;
    document.getElementById('resultadoganancia').textContent = `${aux3.toFixed(2)}`;
});
