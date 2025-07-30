import { bindEMAToggle } from '../components/emaToggles.js';

let candleChart, candleSeries, candleChartRef = null;
let ema20Series = { value: null };
let ema50Series = { value: null };
let ema100Series = { value: null };
export let candleDataRef = [];

export function renderCandleChart(candles) {
  candleDataRef = candles;
  if (candleChart) candleChart.remove();

  candleChart = LightweightCharts.createChart(document.getElementById("candle-container"), {
    width: 1000,
    height: 400,
    layout: { background: { color: "#ffffff" }, textColor: "#000" },
    grid: { vertLines: { color: '#eee' }, horzLines: { color: '#eee' } },
    timeScale: { timeVisible: true, secondsVisible: false }
  });

  candleChartRef = candleChart;
  candleSeries = candleChart.addCandlestickSeries();
  candleSeries.setData(candles);

  // EMA toggles
  bindEMAToggle("toggle-ema20", ema20Series, "#ff9800", "EMA_20", candleChartRef, candleDataRef);
  bindEMAToggle("toggle-ema50", ema50Series, "#2196f3", "EMA_50", candleChartRef, candleDataRef);
  bindEMAToggle("toggle-ema100", ema100Series, "#9c27b0", "EMA_100", candleChartRef, candleDataRef);
}

// export function getCandleChartRef() {
//   return candleChartRef;
// }
