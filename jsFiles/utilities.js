// common shared functions

function getInputById(idd) {
  const inputvalue1 = document.getElementById(idd).value;
  const inputnum = parseFloat(inputvalue1);
  return inputnum;
}

function getInputByClass(classes, index) {
  const inputvalue = document.getElementsByClassName(classes);
  const inputnum1 = inputvalue[index].value;
  const inputnum2 = parseFloat(inputnum1);
  return inputnum2;
}

function getTextFeildbyId(text) {
  const t = document.getElementById(text).innerText;
  const cleanedt = t.replace(/,/g, "");
  const tex = parseFloat(cleanedt);
  return tex;
}

function showsectionbyId(id) {
  document.getElementById("add-money-form").classList.add("hidden");
  document.getElementById("cash-out-form").classList.add("hidden");
  document.getElementById("transaction-section").classList.add("hidden");

  document.getElementById(id).classList.remove("hidden");
}
