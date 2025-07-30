export function createHeader() {
  const header = document.createElement("header");
  header.classList.add("app-header");

  header.innerHTML = `
    <div class="logo">📈 KlineSim</div>
    <nav class="nav">
      <a href="/viewer" class="nav-link" data-link>Viewer</a>
      <a href="/about" class="nav-link" data-link>About</a>
    </nav>
  `;

  document.body.prepend(header);
}
