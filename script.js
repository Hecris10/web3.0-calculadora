function soma() {
  var soma1 = document.getElementById("soma1").value;
  console.log(soma1);
  var soma2 = document.getElementById("soma2").value;
  var resultado = parseInt(soma1) + parseInt(soma2);
  document.getElementById("soma-resultado").value = resultado;
}

function subtracao() {
  var sub1 = document.getElementById("subtracao1").value;
  var sub2 = document.getElementById("subtracao2").value;
  var resultado = parseInt(sub1) - parseInt(sub2);
  document.getElementById("subtracao-resultado").value = resultado;
}

function multiplicacao() {
  var mult1 = document.getElementById("multiplicacao1").value;
  var mult2 = document.getElementById("multiplicacao2").value;
  var resultado = parseInt(mult1) * parseInt(mult2);
  document.getElementById("multiplicacao-resultado").value = resultado;
}

function divisao() {
  var div1 = document.getElementById("divisao1").value;
  var div2 = document.getElementById("divisao2").value;
  var resultado = parseInt(div1) / parseInt(div2);
  document.getElementById("divisao-resultado").value = resultado;
}
