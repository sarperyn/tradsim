import { fetchKlines } from "../services/binanceApi.js";
import { runEMACrossStrategy } from "../strategies/emaCross.js";
import { updateTradeTable } from "../utils/tradeTable.js";


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

    <div id="trade-results">
    <h3>Trade History</h3>
    <table id="trade-table">
      <thead>
        <tr>
          <th>#</th>
          <th>Entry Time</th>
          <th>Exit Time</th>
          <th>Entry Price</th>
          <th>Exit Price</th>
          <th>Duration</th>
          <th>P/L</th>
          <th>P/L (%)</th>
          <th>Type</th>
        </tr>
      </thead>
      <tbody></tbody>
    </table>
    <div id="summary"></div>
  </div>
  `;
  document.getElementById("fetch-button").addEventListener("click", async () => {
    const symbol = document.getElementById("symbol").value;
    const interval = document.getElementById("interval").value;
    const startStr = document.getElementById("start_str").value;
    const endStr = document.getElementById("end_str").value;

    try {
      const data = await fetchKlines(symbol, interval, startStr, endStr);

      const trades = runEMACrossStrategy(data);
      updateTradeTable(trades);
      //console.log("Trades:", trades);

    } catch (err) {
      alert("Backtesting data fetch failed: " + err.message);
    }
});
}
