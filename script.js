function soma() {
  var soma1 = document.getElementById("soma1").value;
  console.log(soma1);
  var soma2 = document.getElementById("soma2").value;
  var resultado = parseFloat(soma1).toString() + parseFloat(soma2);
  console.log(resultado);
  document.getElementById("soma-resultado").value = resultado;
}

function subtracao() {
  var sub1 = document.getElementById("subtracao1").value;
  var sub2 = document.getElementById("subtracao2").value;
  var resultado = parseFloat(sub1) - parseFloat(sub2);
  document.getElementById("subtracao-resultado").value = resultado;
}

function multiplicacao() {
  var mult1 = document.getElementById("multiplicacao1").value;
  var mult2 = document.getElementById("multiplicacao2").value;
  var resultado = parseFloat(mult1) * parseFloat(mult2);
  document.getElementById("multiplicacao-resultado").value = resultado;
}

function divisao() {
  var div1 = document.getElementById("divisao1").value;
  var div2 = document.getElementById("divisao2").value;
  var resultado = parseFloat(div1) / parseFloat(div2);
  document.getElementById("divisao-resultado").value = resultado;
}
