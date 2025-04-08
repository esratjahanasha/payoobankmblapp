document
  .getElementsByClassName("btn")[0]
  .addEventListener("click", function (event) {
    event.preventDefault();
    const input = document.getElementsByClassName("ab");
    const phone = input[0].value;
    const pin = input[1].value;
    if (phone === "19" && pin === "123") {
      console.log("logged in");
      window.location.href = "./home.html";
    } else {
      alert("wrong phone or pin");
    }
  });
console.log(3 * "5");
