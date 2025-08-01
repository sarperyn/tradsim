import { createHeader } from "./components/header.js";
import { renderViewer } from "./views/viewer.js";
import { renderAbout } from "./views/about.js";
import { renderBacktesting } from "./views/backtesting.js";

const routes = {
  "/": renderViewer,
  "/viewer": renderViewer,
  "/about": renderAbout,
  "/backtesting": renderBacktesting,
};

function navigateTo(url) {
  history.pushState(null, null, url);
  router();
}

function router() {
  const path = window.location.pathname;
  const route = routes[path];
  if (route) {
    document.getElementById("app").innerHTML = "";
    route(); // Render page
  } else {
    document.getElementById("app").innerHTML = "<h2>404 - Page Not Found</h2>";
  }
}

window.addEventListener("DOMContentLoaded", () => {
  const appContainer = document.createElement("div");
  appContainer.id = "app";
  document.body.appendChild(appContainer);

  createHeader();

  // Intercept clicks (after header is created)
  document.addEventListener("click", (e) => {
    if (e.target.matches("[data-link]")) {
      e.preventDefault();
      navigateTo(e.target.href);
    }
  });

  // Back/forward navigation
  window.addEventListener("popstate", router);

  // Initial route
  router();
});
