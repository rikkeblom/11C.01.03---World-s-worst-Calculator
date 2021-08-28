console.log("Let's do math!");

window.addEventListener("load", start);

function start() {
  console.log("function start()");
  document.querySelector("#calculate").addEventListener("click", calculate);
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
  } else if (operator === "sub") {
    console.log("subtract stuff");
    console.log(usefirstnumber - usesecondnumber);
  } else if (operator === "mul") {
    console.log("multiply stuff");
    console.log(usefirstnumber * usesecondnumber);
  } else if (operator === "div") {
    console.log("divide stuff");
    console.log(usefirstnumber / usesecondnumber);
  }
}
