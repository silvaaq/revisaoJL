function converterMedidas() {
    var quilometros = parseFloat(document.getElementById("quilometros").value);
    var resultadoElement = document.getElementById("resultado");
  
    if (isNaN(quilometros)) {
      resultadoElement.innerHTML = "Por favor, insira um valor válido de quilômetros.";
      return;
    }
  
    var hectometros = quilometros * 10;
    var decametros = quilometros * 100;
    var decimetros = quilometros * 10000;
    var centimetros = quilometros * 100000;
    var milimetros = quilometros * 1000000;
  
    resultadoElement.innerHTML = "Hectômetros: " + hectometros.toFixed(2) + " hm<br>";
    resultadoElement.innerHTML += "Decâmetros: " + decametros.toFixed(2) + " dam<br>";
    resultadoElement.innerHTML += "Decímetros: " + decimetros.toFixed(2) + " dm<br>";
    resultadoElement.innerHTML += "Centímetros: " + centimetros.toFixed(2) + " cm<br>";
    resultadoElement.innerHTML += "Milímetros: " + milimetros.toFixed(2) + " mm";
  }
  