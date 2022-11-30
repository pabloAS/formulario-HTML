const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const textDescrip = document.getElementById("textCampo");

const Submit = form.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Deseja enviar este formulario ?");
  checkInputs();
  limparCampos();
});

function checkInputs() {
  const usernameValue = username.value;
  const emailValue = email.value;
  /* const passwordValue = password.value; */
  const textDescripValue = textDescrip.value;

  if (usernameValue === "") {
    setErrorFor(username, "O nome de usuario é obrigatorio");
  } else {
    setSuccessFor(username);
  }

  if (emailValue === "") {
    setErrorFor(email, "O Email é obrigatorio");
  } else if (!checkEmail(emailValue)) {
    setErrorFor(email, "Por favor insira um Email valido ");
  } else {
    setSuccessFor(email);
  }

  if (textDescripValue === "") {
    setErrorFor(textDescrip, "A descrição é obrigatoria");
  } else {
    setSuccessFor(textDescrip);
  }
  /*  if (passwordValue === "") {
    setErrorFor(password, "A senha é obrigatoria");
  } else if (passwordValue.length < 7) {
    setErrorFor(password, " Tem que ter no minimo 7 digitos");
  } else {
    setSuccessFor(password);
  } */

  const formControls = form.querySelectorAll(".form-control");

  const formIsValid = [...formControls].every((formControl) => {
    return formControl.className === "form-control success";
  });

  if (formIsValid) {
    console.log("O formulário está 100% válido!");
  }
}
function limparCampos() {
  document.getElementById("username").value = "";
  document.getElementById("email").value = "";
  document.getElementById("textCampo").value = "";
}
function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  small.innerText = message;
  formControl.className = "form-control error";
}
function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}
function checkEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
