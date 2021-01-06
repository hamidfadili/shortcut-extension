const activeLinkClass = "active";
const hiddenComponentClass = "hidden";
var activeComponent = "page";
var activeLink = "page-link";

function renderShortcuts() {
  render(getShortcutes(), "global");
  render(getShortcutes("youtube.com"), "site");
  render(getShortcutes("youtube.com", "/watch"), "page");
}

function render(shortcutes, scope) {
  shortcutesUI = shortcutes.length
    ? shortcutes.map((shortcut) => renderShortcut(shortcut)).join("")
    : "<p>No shortcut added</p>";
  table = document.createElement("table");
  table.innerHTML = shortcutesUI;
  renderSpace = document.querySelector("#" + scope + " .shortcuts-space");
  console.log(shortcutesUI);
  renderSpace.appendChild(table);
}

function renderShortcut(shortcut) {
  return `
    <tr>
        <td>
            <input value="${shortcut.keys}" type="text">
        </td>
        <td>
            <select name="type">
                <option selected="${
                  shortcut.actionType == "click"
                }" value="click">Click</option>
                <option selected="${
                  shortcut.actionType == "focus"
                }" value="focus">Focus</option>
                <option selected="${
                  shortcut.actionType == "open-link"
                }" value="open-link">Open link</option>
            </select>
        </td>
        <td>
            ${
              shortcut.actionType == "open-link"
                ? `<input type="text" value="${shortcut.target}">`
                : `<span>${shortcut.target}</span>`
            }
        </td>
    </tr>
  `;
}

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
  renderShortcuts();
}

init();
