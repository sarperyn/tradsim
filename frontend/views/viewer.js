// views/viewer.js
import { renderCandleChart } from '../charts/candleCharts.js';
import { fetchKlines } from '../services/binanceApi.js';

export function renderViewer() {
  const container = document.getElementById("app");
  container.innerHTML = `
    <h2>Binance Klines Viewer</h2>
    <div class="container">
      <label>Symbol:</label>
      <input type="text" id="symbol" value="BTCUSDT" />

      <label>Interval:</label>
      <select id="interval">
        <option value="1s">1s</option>
        <option value="1m">1m</option>
        <option value="3m">3m</option>
        <option value="5m">5m</option>
        <option value="30m">30m</option>
        <option value="1h">1h</option>
        <option value="2h">2h</option>
        <option value="4h">4h</option>
        <option value="1d" selected>1d</option>
        <option value="1w">1w</option>
        <option value="1M">1M</option>
      </select>

      <label>Start:</label>
      <input type="date" id="start_str" />

      <label>End:</label>
      <input type="date" id="end_str" />

      <button id="fetch-button">Get Klines</button>
    </div>

    <div class="toggle-group">
      <label><input type="checkbox" id="toggle-ema20" /> EMA 20</label>
      <label><input type="checkbox" id="toggle-ema50" /> EMA 50</label>
      <label><input type="checkbox" id="toggle-ema100" /> EMA 100</label>
    </div>

    <div id="candle-container"></div>
    <div id="volume-container"></div>
  `;

  // Attach the fetch handler
  document.getElementById("fetch-button").addEventListener("click", async () => {
  const symbol = document.getElementById("symbol").value;
  const interval = document.getElementById("interval").value;
  const startStr = document.getElementById("start_str").value;
  const endStr = document.getElementById("end_str").value;

  try{
    const data = await fetchKlines(symbol, interval, startStr, endStr);
    renderCandleChart(data);
  } catch(err){
    alert("Error: " + err.message);
    }
  });
}
