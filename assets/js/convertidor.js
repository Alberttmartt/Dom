alert(`hola conectado`);

let kelvin =273.15;
let fahrenheit=32;

     function calcular () {
    let celsius= document.getElementById(`grados`).value;
    console.log(celsius);

    let calcularkelvin= celsius * kelvin;
    let calcularfahrenheit= celsius * fahrenheit;

    let etiqueta = document.getElementById(`etiqueta`);
    etiqueta.innerHTML = calcularkelvin;
    etiqueta.innerHTML(calcularfahrenheit);
}
    calcular();