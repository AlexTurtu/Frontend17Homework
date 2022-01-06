//variables
var firstName = document.querySelector("#firstName");
var lastName = document.querySelector("#lastName");
var genderM = document.querySelector("#gender-m");
var genderF = document.querySelector("#gender-f");
var finalMessage = document.querySelector(".final-message");
var finalMessageLeft = document.querySelector(".finalMessageLeft");
var finalMessageRight = document.querySelector(".finalMessageClose");
var submintBtn = document.querySelector("#submit-btn");
var messageBox = document.querySelector("#message-box");
var genderTitle = document.querySelector(".gender-title");
var gender;

//functions

function checkFisrtName() {
  //check fisrt name
  if (/^[a-zA-Z]/.test(firstName.value)) {
    firstName.style.borderColor = "black";
    return true;
  } else {
    firstName.style.borderColor = "red";
    return false;
  }
}
function checkLastName() {
  //check last name
  if (/[a-zA-Z]/.test(lastName.value)) {
    lastName.style.borderColor = "black";
    return true;
  } else {
    lastName.style.borderColor = "red";
    return false;
  }
}
function clearNames() {
  //clear fields + top ribbon
  firstName.value = "";
  lastName.value = "";
  messageBox.value = "";
  genderM.cheked = false;
  genderF.checked = false;
}
function sucessMessage() {
  //top ribbon generator
  finalMessage.classList.remove("hidden");
  finalMessageLeft.innerHTML =
    "<i class='fas fa-check-circle'></i> Thank you for contacting us, " +
    firstName.value;
  finalMessageRight.innerHTML =
    "<p id='messageClose' onclick='messageClose()'> &#x2715</p>";
}
function checkGender() {
  //check if gender is selected
  if (genderM.checked || genderF.checked) {
    if (genderM.checked) {
      gender = "male";
    } else if (genderF.checked) {
      gender = "female";
    }
    genderTitle.style.color = "black";
    return true;
  } else {
    genderTitle.style.color = "red";
    return false;
  }
}

function messageClose() {
  // close top Success message
  finalMessage.classList.add("hidden");
  location.reload();
}
function checkMessageBox() {
  //check if thextbox is not empty
  if (messageBox.value == "") {
    messageBox.style.borderColor = "red";
    return false;
  } else {
    messageBox.style.borderColor = "black";
    return true;
  }
}

function submitMessage() {
  // all checks before finish
  console.log(firstName.value);
  console.log(lastName.value);
  console.log(messageBox.value);

  if (
    checkFisrtName() == true &&
    checkLastName() == true &&
    checkGender() == true &&
    checkMessageBox() == true
  ) {
    sucessMessage();
    clearNames();
  }
  console.log(gender);
}

firstName.addEventListener("blur", checkFisrtName);
lastName.addEventListener("blur", checkLastName);
messageBox.addEventListener("blur", checkMessageBox);
submintBtn.addEventListener("click", submitMessage);
