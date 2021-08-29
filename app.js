console.log("Let's do math!");

window.addEventListener("load", start);

let resultcalc = 0;
let result1 = 0;
let result2 = 0;
let result3 = 0;
let result4 = 0;
let result5 = 0;
let result6 = 0;
let result7 = 0;
let resultdelete = 0;

function start() {
  console.log("function start()");
  document.querySelector("#calculate").addEventListener("click", calculate);
  document.querySelector("#clear").addEventListener("click", clearResults);
}

function calculate() {
  console.log("function calculate()");
  let firstnumber = document.querySelector("#firstnumber").value;
  let usefirstnumber = parseFloat(firstnumber);

  let secondnumber = document.querySelector("#secondnumber").value;
  let usesecondnumber = parseFloat(secondnumber);

  let operator = document.querySelector("#operator").value;

  if (operator === "add") {
    console.log("add stuff");
    console.log(usefirstnumber + usesecondnumber);
    resultcalc = usefirstnumber + usesecondnumber;
  } else if (operator === "sub") {
    console.log("subtract stuff");
    console.log(usefirstnumber - usesecondnumber);
    resultcalc = usefirstnumber - usesecondnumber;
  } else if (operator === "mul") {
    console.log("multiply stuff");
    console.log(usefirstnumber * usesecondnumber);
    resultcalc = usefirstnumber * usesecondnumber;
  } else if (operator === "div") {
    console.log("divide stuff");
    console.log(usefirstnumber / usesecondnumber);
    resultcalc = usefirstnumber / usesecondnumber;
  }
  adjustDecimals();
}

function adjustDecimals() {
  console.log("adjustDecimals()");

  if (document.querySelector("#doround:checked") !== null) {
    console.log("round number please");
    let decimaldropdown = document.querySelector("#decimals");
    let decimalvalue = decimaldropdown.value;
    console.log(decimalvalue);
    resultcalc = resultcalc.toFixed(decimalvalue);
    console.log(resultcalc);
  } else {
    console.log(resultcalc);
  }
  appendResultList();
}

function appendResultList() {
  console.log("apendResultList()");
  resultdelete = result7;
  result7 = result6;
  result6 = result5;
  result5 = result4;
  result4 = result3;
  result3 = result2;
  result2 = result1;
  result1 = resultcalc;
  console.log(result1, result2, result3, result4);
  document.querySelector("#results li:nth-of-type(7)").textContent = result1;
  document.querySelector("#results li:nth-of-type(6)").textContent = result2;
  document.querySelector("#results li:nth-of-type(5)").textContent = result3;
  document.querySelector("#results li:nth-of-type(4)").textContent = result4;
  document.querySelector("#results li:nth-of-type(3)").textContent = result5;
  document.querySelector("#results li:nth-of-type(2)").textContent = result6;
  document.querySelector("#results li:nth-of-type(1)").textContent = result7;
}

function clearResults() {
  console.log("clear results");
  result7 = 0;
  result6 = 0;
  result5 = 0;
  result4 = 0;
  result3 = 0;
  result2 = 0;
  result1 = 0;
  document.querySelector("#results li:nth-of-type(7)").textContent = result1;
  document.querySelector("#results li:nth-of-type(6)").textContent = result2;
  document.querySelector("#results li:nth-of-type(5)").textContent = result3;
  document.querySelector("#results li:nth-of-type(4)").textContent = result4;
  document.querySelector("#results li:nth-of-type(3)").textContent = result5;
  document.querySelector("#results li:nth-of-type(2)").textContent = result6;
  document.querySelector("#results li:nth-of-type(1)").textContent = result7;
}
