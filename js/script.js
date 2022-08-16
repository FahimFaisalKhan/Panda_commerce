const cards = document.querySelectorAll(".card");

// cards.style.borderRadius = 0;
for (const card of cards) {
  card.addEventListener("click", function (event) {
    card.style.borderRadius = 0;
    if (event.target.getAttribute("class") == "buy-now-button") {
      event.target.style.display = "none";
    }
  });
}

const formButton = document.getElementById("form-btn");

formButton.setAttribute("disabled", "");
formButton.style.cursor = "default";

const inputField = document.getElementsByClassName("form-control")[0];
inputField.addEventListener("keyup", function (event) {
  if (inputField.value === "Email") {
    formButton.removeAttribute("disabled");
    formButton.style.cursor = "pointer";
  } else {
    formButton.setAttribute("disabled", "");
    formButton.style.cursor = "default";
  }
});

const cardImages = document.getElementsByClassName("card-img-top");

for (const img of cardImages) {
  const imgLocation = img.getAttribute("src");
  img.addEventListener("mouseenter", function (event) {
    img.setAttribute("src", "images/banner-images/xbox.png");
  });
  img.addEventListener("mouseout", function (event) {
    img.setAttribute("src", imgLocation);
  });
}

const color = getComputedStyle(
  document.getElementById("subscribe")
).backgroundColor;

let clickCounter = 0;
document
  .getElementById("subscribe")
  .addEventListener("dblclick", function (event) {
    if (event.target.getAttribute("id") == "subscribe") {
      if (clickCounter == 0) {
        event.target.style.backgroundColor = "red";
        clickCounter++;
      } else if (clickCounter == 1) {
        event.target.style.backgroundColor = color;
        clickCounter = 0;
      }
    }
  });

const eyes = document.getElementsByClassName("eye");

for (const eye of eyes) {
  eye.addEventListener("click", function (event) {
    if (event.target.getAttribute("class") == "eye eye-open") {
      event.target.style.display = "none";
      event.target.nextElementSibling.style.display = "inline-block";
      const inputFieldFirst = event.target.parentNode.firstElementChild;
      inputFieldFirst.setAttribute("type", "text");
    } else if (event.target.getAttribute("class") == "eye eye-closed") {
      event.target.style.display = "none";
      event.target.previousElementSibling.style.display = "inline-block";
      const inputFieldSecond = event.target.parentNode.firstElementChild;
      inputFieldSecond.setAttribute("type", "password");
    }
  });
}
const inputFields = document.querySelectorAll(".input-field");
for (const field of inputFields) {
  field.nextElementSibling.nextElementSibling.style.display = "none";
  field.nextElementSibling.style.display = "none";
  field.addEventListener("keyup", function (event) {
    if (event.target.value != "") {
      event.target.nextElementSibling.style.display = "inline-block";
    } else {
      event.target.nextElementSibling.style.display = "none";

      event.target.nextElementSibling.nextElementSibling.style.display = "none";
    }
  });
}

const btn = document.getElementById("btn-s");
btn.addEventListener("click", function (event) {
  const pas = document.getElementById("pas");
  const check = document.getElementById("check");

  if (pas.value != "" && check.value != "" && pas.value == check.value) {
    btn.style.backgroundColor = "green";
  }
});
