const addition = () => {
  let a = parseFloat(document.getElementById("variable1").value);
  let b = +document.getElementById("variabale2").value;
  let result = a + b;
  const h3 = document.getElementById("result");
  h3.innerHTML = "Result addition: " + result;
}

const subtraction = () => {
  let a = +document.getElementById("variable1").value;
  let b = +document.getElementById("variabale2").value;
  let result = a - b;
  const h3 = document.getElementById("result");
  h3.innerHTML = "Result subtraction: " + result;
}

const multiplication = () => {
  let a = +document.getElementById("variable1").value;
  let b = +document.getElementById("variabale2").value;
  let result = a * b;
  const h3 = document.getElementById("result");
  h3.innerHTML = "Result multiplication: " + result;
}

const division = () => {
  let a = +document.getElementById("variable1").value;
  let b = +document.getElementById("variabale2").value;
  let result = a / b;
  const h3 = document.getElementById("result");
  h3.innerHTML = "Result division: " + result;
}