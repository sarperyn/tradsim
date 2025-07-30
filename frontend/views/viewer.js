// views/viewer.js
import { fetchKlines } from '../services/binanceApi.js';

export function setupViewerUI() {
  const fetchBtn = document.getElementById("fetch-button");
  if (fetchBtn) {
    fetchBtn.addEventListener("click", fetchKlines);
  }
}

