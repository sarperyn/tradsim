export function renderAbout() {
  const container = document.getElementById("app");
  container.innerHTML = `
    <h2>About KlineSim</h2>
    <p>This is a lightweight backtesting and trading visualization tool I built for fun. In the backtesting section, I'll create a trading simulation—a game of sorts—using various models and trading strategies, starting with LLMs. My main goal is to build a plug-and-play backtesting platform for different LLMs. I'll keep this repo updated as I have enough free time to develop the project. `;
}
