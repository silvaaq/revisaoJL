function converterTemperatura() {
    var tempCelsius = parseFloat(document.getElementById("tempCelsius").value);
    var resultadoElement = document.getElementById("resultado");
  
    if (isNaN(tempCelsius)) {
      resultadoElement.innerHTML = "Por favor, insira um valor válido de temperatura em Celsius.";
      return;
    }
  
    var tempFahrenheit = (tempCelsius * 9/5) + 32;
    var tempKelvin = tempCelsius + 273.15;
  
    resultadoElement.innerHTML = "Temperatura em Fahrenheit: " + tempFahrenheit.toFixed(2) + " °F<br>";
    resultadoElement.innerHTML += "Temperatura em Kelvin: " + tempKelvin.toFixed(2) + " K";
  }
  