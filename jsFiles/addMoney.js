const btn1 = document.getElementById("am-btn");

btn1.addEventListener("click", function (event) {
  event.preventDefault();

  const pinotp = getInputById("pin");
  console.log(pinotp);

  const addmoney = getInputByClass("amnt", 0);
  console.log(addmoney);

  if (isNaN(addmoney)) {
    alert("failed to add money");
    return;
  }

  if (pinotp === 123) {
    const balance = getTextFeildbyId("ac-balance");
    const total = balance + addmoney;
    const totalbalance = total.toLocaleString();

    document.getElementById("ac-balance").innerText = totalbalance;

    const p = document.createElement("p");
    p.innerText = `added:${addmoney}, so total balance= ${totalbalance}`;
    document.getElementById("transaction-section").appendChild(p);
  } else {
    alert("failed to add the moneyyyy");
  }
});
