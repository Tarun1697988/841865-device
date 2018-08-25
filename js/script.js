var modalOpen = document.querySelector(".modal-open");
var mapOpen = document.querySelector(".map-open");
var servicesButton = document.querySelectorAll(".services-item .button");
var serviceSlide = document.querySelectorAll(".services-slide");

var popup = document.querySelector(".modal-write-us");
var popupMap = document.querySelector(".popup-map");

var close = document.querySelector(".modal-close")
var closeMap = document.querySelector(".modal-close-map")

modalOpen.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
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

servicesButton[0].addEventListener("click", function (evt) {
  evt.preventDefault();
  for (var i = 0; i < 3; i++) {
    servicesButton[i].classList.remove("current-button");
    serviceSlide[i].classList.remove("services-slide-active");
  };
  servicesButton[0].classList.add("current-button");
  serviceSlide[0].classList.add("services-slide-active");
});
servicesButton[1].addEventListener("click", function (evt) {
  evt.preventDefault();
  for (var i = 0; i < 3; i++) {
    servicesButton[i].classList.remove("current-button");
    serviceSlide[i].classList.remove("services-slide-active");
  };
  servicesButton[1].classList.add("current-button");
  serviceSlide[1].classList.add("services-slide-active");
});
servicesButton[2].addEventListener("click", function (evt) {
  evt.preventDefault();
  for (var i = 0; i < 3; i++) {
    servicesButton[i].classList.remove("current-button");
    serviceSlide[i].classList.remove("services-slide-active");
  };
  servicesButton[2].classList.add("current-button");
  serviceSlide[2].classList.add("services-slide-active");
});