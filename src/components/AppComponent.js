/** @jsx createElement */
import createElement from "../create-element";
import ShortcutListComponent from "./ShortcutListComponent";
import getShortcuts from "../data/store";

const activeLinkClass = "active";
const hiddenComponentClass = "hidden";
var activeComponent = "page";
var activeLink = "page-link";

export default function (props) {
  return (
    <div>
      <header>
        <img src="../../images/icone-banner.png" alt="icone" />
      </header>
      <ul class="nav nav-tabs">
        <li class="nav-item">
          <a id="page-link" class="nav-link active" onClick={goto("page")}>
            Page
          </a>
        </li>
        <li class="nav-item">
          <a id="site-link" class="nav-link" onClick={goto("site")}>
            Site
          </a>
        </li>
        <li class="nav-item">
          <a id="global-link" class="nav-link" onClick={goto("global")}>
            Global
          </a>
        </li>
      </ul>
      <div id="site" class="hidden">
        <div class="site-data">
          <span class="key">current website : </span>
          <span class="value" id="website">
            Youtube.com
          </span>
        </div>
        <div class="shortcuts-space">
          <ShortcutListComponent shortcuts={getShortcuts()} />
        </div>
      </div>
      <div id="page">
        <div class="site-data">
          <span class="key">current page : </span>
          <span class="value" id="website">
            /watch
          </span>
        </div>
        <div class="shortcuts-space">
          <ShortcutListComponent
            shortcuts={getShortcuts("youtube.com", "/watch")}
          />
        </div>
      </div>
      <div id="global" class="hidden">
        <div class="site-data">
          <span class="key">Global</span>
        </div>
        <div class="shortcuts-space">
          <ShortcutListComponent shortcuts={getShortcuts("youtube.com")} />
        </div>
      </div>
    </div>
  );
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
