import { fetchKlines } from "../services/binanceApi.js";

export function renderBacktesting(){
    const container = document.getElementById("app");
    container.innerHTML = `
    <h2>Backtesting Beta</h2>
    <div class="container">
      <label>Symbol:</label>
      <input type="text" id="symbol" value="BTCUSDT" />

      <label>Interval:</label>
      <select id="interval">
        <option value="1s">1s</option>
        <option value="1m">1m</option>
        <option value="1h">1h</option>
        <option value="1d" selected>1d</option>
        <option value="1w">1w</option>
      </select>

      <label>Start:</label>
      <input type="date" id="start_str" />

      <label>End:</label>
      <input type="date" id="end_str" />

      <button id="fetch-button">Get Klines</button>
    </div>

    <div id="candle-container"></div>
  `;
}