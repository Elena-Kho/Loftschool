let form = document.querySelector(".form");
let sendButton = document.querySelector(".form__button");
let errorText = document.querySelector(".modal__heading--error");
let userName = form.querySelector("[name=username]");
let userEmail = form.querySelector("[name=useremail]");
let message = form.querySelector("[name=message]");
let popupSent = document.querySelector(".modal-sent");
let popupError = document.querySelector(".modal-error");
let closeSent = popupSent.querySelector(".modal__button");
let closeError = popupError.querySelector(".modal__button");
let requiredName = form.querySelector("#username");
let requiredEmail = form.querySelector("#useremail");
let requiredMessage = form.querySelector("#message");

sendButton.addEventListener("click", function (evt) {

  evt.preventDefault();

  if (validateForm(form)) {
    popupSent.classList.add("modal--show");
    requiredName.classList.remove("error");
    requiredEmail.classList.remove("error");
    requiredMessage.classList.remove("error");

    const data = new FormData();
      data.append("name", userName.value);
      data.append("phone", userEmail.value);
      data.append("comment", message.value);
      data.append("to", "111@mail.ru");

    console.log(data);

    fetch('https://webdev-api.loftschool.com/sendmail', {
      method: 'POST',
      body: data
    })
  }

  else {
      popupError.classList.add("modal--show");
      if (!userName.value) {
        requiredName.classList.add("error");
      } else {
          requiredName.classList.remove("error");
        }
      if (!userEmail.value) {
        requiredEmail.classList.add("error");
      } else{
          requiredEmail.classList.remove("error");
        }
      if (!message.value) {
        requiredMessage.classList.add("error");
      } else{
          requiredMessage.classList.remove("error");
        }
    }
});

function validateForm(form) {
  let valid = false;

  if (validateField(userName) && validateField(userEmail) && validateField(message)) {
    valid = true;
  }
  return valid;
};

function validateField(field) {
  errorText.textContent = field.validationMessage;
  return field.checkValidity();
};

closeSent.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupSent.classList.remove("modal--show");
});

closeError.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupError.classList.remove("modal--show");
});


window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popupSent.classList.contains("modal--show")) {
      popupSent.classList.remove("modal--show");
    }
    if (popupError.classList.contains("modal--show")) {
      popupError.classList.remove("modal--show");
    }
  }
});
