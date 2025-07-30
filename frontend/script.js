//console.log("Script loaded!");

import { setupViewerUI } from './views/viewer.js';

window.addEventListener("DOMContentLoaded", () => {
  setupViewerUI();
  document.getElementById("fetch-button").addEventListener("click", fetchKlines);
});

// document.addEventListener("DOMContentLoaded", () => {
  
// });
