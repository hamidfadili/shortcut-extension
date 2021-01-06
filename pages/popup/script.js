const activeLinkClass = "active";
const hiddenComponentClass = "hidden";
var activeComponent = "page";
var activeLink = "page-link";

function updateActive() {
  document.getElementById(componenet).classList.remove(hiddenComponentClass);
  document.getElementById(activeComponent).classList.add(hiddenComponentClass);
  activeComponent = componenet;
}

const goto = (componenet) => (e) => {
  if (activeComponent == componenet) return;

  document.getElementById(componenet).classList.remove(hiddenComponentClass);
  document.getElementById(activeComponent).classList.add(hiddenComponentClass);
  activeComponent = componenet;

  document.getElementById(activeLink).classList.remove(activeLinkClass);
  document.getElementById(e.target.id).classList.add(activeLinkClass);
  activeLink = e.target.id;
};

function init() {
  var pageLink = document.getElementById("page-link");
  var siteLink = document.getElementById("site-link");
  var globalLink = document.getElementById("global-link");

  pageLink.addEventListener("click", goto("page"));
  siteLink.addEventListener("click", goto("site"));
  globalLink.addEventListener("click", goto("global"));

  document
    .getElementById(activeComponent)
    .classList.remove(hiddenComponentClass);
  document.getElementById(activeLink).classList.add(activeLinkClass);
}

init();
