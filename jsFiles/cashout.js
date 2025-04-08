const cbtn = document.getElementById("btn");

cbtn.addEventListener("click", function (event) {
  event.preventDefault();

  const cashout = getInputByClass("amnt", 1);
  const pin = getInputById("cpin");

  if (isNaN(cashout)) {
    alert("failed to cashout");
    return;
  }

  if (pin === 123) {
    const balance = getTextFeildbyId("ac-balance");
    if (cashout > balance) {
      alert("u dont have enough money");
      return;
    }
    const newb = balance - cashout;
    const newbalance = newb.toLocaleString();

    document.getElementById("ac-balance").innerText = newbalance;

    const div = document.createElement("div");
    div.innerHTML = `<br/><h3 class="text-center text-black"> cash out info:</h3>
    <p>${cashout} tk withdraw, so the total balance now= ${newbalance} tk</p>`;

    document.getElementById("transaction-section").append(div);
  } else {
    alert("failed to cash out");
  }
});
