var modalOpen = document.querySelector(".modal-open");
var mapOpen = document.querySelector(".map-open");

var popup = document.querySelector(".modal-write-us");
var popupMap = document.querySelector(".popup-map");

var close = document.querySelector(".modal-close");
var closeMap = document.querySelector(".modal-close-map");

var form = popup.querySelector("form");
var login = popup.querySelector("[name=name]");
var email = popup.querySelector("[name=email]");
var letter = popup.querySelector("[name=latter]")


modalOpen.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  login.focus();
});

mapOpen.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupMap.classList.add("modal-show");
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
});

closeMap.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupMap.classList.remove("modal-show");
});

window.addEventListener ("keydown", function(evt){
    if (evt.keyCode===27) {
      evt.preventDefault;
      if (popup.classList.contains("modal-show")) {
        popup.classList.remove("modal-show");
      }
    }
});

