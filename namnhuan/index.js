const check = () => {
  let a = +document.getElementById("variable1").value;
  let checkRusult = false;
  if (a % 4 == 0 && a % 100 !== 0) {
    checkRusult = true;
  }

  if (a % 100 === 0 && a % 400 == 0) {
    checkRusult = true;
  }

  const h3 = document.getElementById("result");
  if (checkRusult) {
    h3.innerHTML = a + " là năm nhuận";
  } else {
    h3.innerHTML = a + " không phải là năm nhuận";
  }
}
