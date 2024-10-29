document.getElementById('calcForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe y la página se recargue.

    // Obtén los valores de los inputs.
    const interes = parseFloat(document.getElementById('interes').value);     //interes
    const plazo = parseFloat(document.getElementById('plazo').value);   //plazo
    const monto = parseFloat(document.getElementById('monto').value);   //monto

    // Realiza un cálculo con los tres datos (ejemplo: suma de los tres).
    // let aux = interes * .01;
    // let aux1 = (monto * aux)/365;
    // let aux2 = (aux1 * plazo) + monto;
    // let aux3 = aux1 * plazo;
    let montoVar = monto;
    let gananciaTotal;
    let interesDia = 1 + (.01 * (interes/365));

    for (var i = 0; i < plazo; i++) {
        montoVar = montoVar * interesDia;
      }
    gananciaTotal = montoVar - monto;
    // const resultado = interes + plazo + monto;

    // Muestra el resultado en el div de resultado.
    document.getElementById('resultadototal').textContent = `${montoVar.toFixed(2)}`;
    document.getElementById('resultadoganancia').textContent = `${gananciaTotal.toFixed(2)}`;
});
