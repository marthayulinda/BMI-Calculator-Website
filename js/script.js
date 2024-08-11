function validateForm(event) {
  var jk = document.getElementById("jk").value;
  var weight = document.getElementById("weight").value;
  var age = document.getElementById("age").value;
  var height = document.getElementById("height").value;

  clearErrors();

  var isValid = true;

  if (jk === "") {
    showError("jk", "*Jenis kelamin harus dipilih");
    isValid = false;
  }
  if (weight === "") {
    showError("weight", "*Berat badan harus diisi");
    isValid = false;
  }
  if (age === "") {
    showError("age", "*Umur harus diisi");
    isValid = false;
  }
  if (height === "") {
    showError("height", "*Tinggi badan harus diisi");
    isValid = false;
  }

  if (!isValid) {
    event.preventDefault();
  } else {
    alert("Form submitted successfully!");
  }
}
function clearErrors() {
  var errorMessages = document.querySelectorAll(".error-message");
  errorMessages.forEach(function (msg) {
    msg.remove();
  });
}
function showError(inputId, message) {
  var inputElement = document.getElementById(inputId);
  var errorMessage = document.createElement("div");
  errorMessage.className = "error-message";
  errorMessage.style.color = "red";
  errorMessage.innerText = message;
  inputElement.parentNode.insertBefore(errorMessage, inputElement.nextSibling);
}
