var num1 = document.getElementById("number1")
var num2 = document.getElementById("number2")

function addNumbers() {
  var result;
  var answer = document.getElementById("answer")
  result = parseInt(num1.value) + parseInt(num2.value);

  answer.innerHTML = result;
}

function subNumbers() {
  var result;
  var answer = document.getElementById("answer");
  result = parseInt(num1.value) - parseInt(num2.value);

  answer.innerHTML = result;
}

function divNumbers() {
  var result;
  var answer = document.getElementById("answer");
  result = parseInt(num1.value) / parseInt(num2.value);

  answer.innerHTML = result;
}

function timesNumbers() {
  var result;
  var answer = document.getElementById("answer");
  result = parseInt(num1.value) * parseInt(num2.value);

  answer.innerHTML = result;
}


function clearList() {
  var answer = document.getElementById("answer");
  var num1 = document.getElementById("number1");
  var num2 = document.getElementById("number2");

  answer.innerHTML = '';
  num1.value = '';
  num2.value = '';

}
