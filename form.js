
const PurchaseForm = document.getElementById("login-form");

PurchaseForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const firstname = document.getElementById("first-name");
  const lastname = document.getElementById("last-name");
  const email = document.getElementById("email-address");
  const comments = document.getElementById("order-comments");

  if (firstname.value == "" || lastname.value == "" || email.value == "" || comments.value == "") {
    alert("Please fill your details!");
  } else {
    alert("Form has been successfully submitted!");
    console.log(
    firstname.value,
    lastname.value,
    email.value,
    comments.value
    );
    firstname.value = "";
    lastname.value = "";
    email.value = "";
    comments.value = "";
  }
});





