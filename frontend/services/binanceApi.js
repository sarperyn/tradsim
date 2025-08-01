// binanceApi.js

//import { renderCandlestickChart } from '../charts/candleCharts.js';
import { renderCandleChart } from '../charts/candleCharts.js';
//import { renderVolumeChart } from '../charts/volumeCharts.js';


export async function fetchKlines(symbol, interval, startStr, endStr) {
  let url = `/klines?symbol=${symbol}&interval=${interval}&start_str=${startStr}`;
  if (endStr) url += `&end_str=${endStr}`;

  try {
    const res = await fetch(url);
    const json = await res.json();
    const data = json.data;

    const candlesticks = data.map(row => ({
      time: row.open_time.split("T")[0],
      open: parseFloat(row.open),
      high: parseFloat(row.high),
      low: parseFloat(row.low),
      close: parseFloat(row.close),
      volume: parseFloat(row.volume),
      EMA_20: parseFloat(row.EMA_20),
      EMA_50: parseFloat(row.EMA_50),
      EMA_100: parseFloat(row.EMA_100)
    }));

    return candlesticks;

  } catch (err) {
    alert("Failed to fetch data: " + err);
  }
}