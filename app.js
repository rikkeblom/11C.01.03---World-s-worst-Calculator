console.log("Let's do math!");

window.addEventListener("load", start);

let result;

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
    result = usefirstnumber + usesecondnumber;
  } else if (operator === "sub") {
    console.log("subtract stuff");
    console.log(usefirstnumber - usesecondnumber);
    result = usefirstnumber - usesecondnumber;
  } else if (operator === "mul") {
    console.log("multiply stuff");
    console.log(usefirstnumber * usesecondnumber);
    result = usefirstnumber * usesecondnumber;
  } else if (operator === "div") {
    console.log("divide stuff");
    console.log(usefirstnumber / usesecondnumber);
    result = usefirstnumber / usesecondnumber;
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
    result = result.toFixed(decimalvalue);
    console.log(result);
  } else {
    console.log(result);
  }
}

function clearResults() {
  console.log("clear results");
}
