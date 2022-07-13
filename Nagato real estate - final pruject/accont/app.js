let btnAdd = document.querySelector(".add-btn"); // add div btn
let containerProperty = document.querySelector(".user-property"); //property container
// create container with property data container function
function displayData() {
  let priceInput = document.querySelector(".price").value;
  let addresInput = document.querySelector(".addres").value;
  let statesInput = document.querySelector(".states").value;
  let phoneInput = document.querySelector(".phone-number").value;
  let emailInput = document.querySelector(".email").value;
  let propertyInput = document.querySelector(".property-status").value;
  console.log(priceInput);
// condition on the inputs
  if (
    priceInput == "" ||
    addresInput == "" ||
    statesInput == "" ||
    phoneInput == "" ||
    emailInput == "" ||
    propertyInput == ""
  ) {
    return alert("fill all the inputs");
  }

  containerProperty.innerHTML += `<div class="property-data bg-light d-flex flex-column col-md-8"><h4 class="">price:${priceInput}$</h4>
 <h4 class="">adders ${addresInput}</h4>
 <h4 class="">states:${statesInput}</h4>
 <h4 class="">${emailInput}</h4>
 <h4 class="">${phoneInput}</h4>
 <h4 class="">status${propertyInput}$</h4></div>`;
}
// event on the add div btn
btnAdd.addEventListener("click", displayData);
