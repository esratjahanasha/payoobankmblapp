document
  .getElementById("show-addM-button")
  .addEventListener("click", function () {
    showsectionbyId("add-money-form");
  });

document
  .getElementById("show-cashout-btn")
  .addEventListener("click", function () {
    showsectionbyId("cash-out-form");
  });

document.getElementById("show-tran-b").addEventListener("click", function () {
  showsectionbyId("transaction-section");
});
