//simple email validation
function validateEmail(email) {
  var atPos = email.indexOf("@");
  var dotPos = email.lastIndexOf(".");
  return atPos > 0 && dotPos > atPos + 1 && dotPos < email.length - 1;
}
const addfname = document.querySelector("#first-name-input");
const addlname = document.querySelector("#last-name-input");
const addemail = document.querySelector("#email-input");
const addpass = document.querySelector("#password-input");
const submitBtn = document.querySelector("#submit-btn");

addfname.onkeyup = () => {
  addfname.classList.remove("is-valid");
  addfname.classList.remove("is-invalid");
};

addlname.onkeyup = () => {
  addlname.classList.remove("is-valid");
  addlname.classList.remove("is-invalid");
};

addemail.onkeyup = () => {
  addemail.classList.remove("is-invalid");
  addemail.classList.remove("is-valid");
};
addpass.onkeyup = () => {
  addpass.classList.remove("is-invalid");
  addpass.classList.remove("is-valid");
};

submitBtn.onclick = () => {
  let num = 0;
  if (addfname.value === "") {
    addfname.classList.add("is-invalid");
  } else {
    addfname.classList.add("is-valid");
    num++;
  }
  if (addlname.value === "") {
    addlname.classList.add("is-invalid");
  } else {
    addlname.classList.add("is-valid");
    num++;
  }
  if (addemail.value === "" || !validateEmail(addemail.value)) {
    addemail.classList.add("is-invalid");
  } else {
    addemail.classList.add("is-valid");
    num++;
  }
  if (addpass.value === "" || addpass.value.length < 6) {
    addpass.classList.add("is-invalid");
  } else {
    addpass.classList.add("is-valid");
    num++;
  }
  if (num === 4) {
    alert("Registered successfully");
  }
};
