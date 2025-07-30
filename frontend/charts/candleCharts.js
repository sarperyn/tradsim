import { bindEMAToggle } from '../components/emaToggles.js';

let candleChart, volumeChart;
let candleSeries, volumeSeries;
let candleChartRef = null;
let candleDataRef = [];

let ema20Series = { value: null };
let ema50Series = { value: null };
let ema100Series = { value: null };

export function renderCandlestickChart(candles) {
  candleDataRef = candles;
  if (candleChart) candleChart.remove();
  if (volumeChart) volumeChart.remove();

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

  volumeChart = LightweightCharts.createChart(document.getElementById("volume-container"), {
    width: 1000,
    height: 150,
    layout: { background: "#ffffff", textColor: "#000" },
    grid: { vertLines: { color: '#eee' }, horzLines: { color: '#eee' } },
    timeScale: { timeVisible: true, secondsVisible: false }
  });

  const volumeData = candles.map(c => ({
    time: c.time,
    value: c.volume,
    color: c.close > c.open ? '#26a69a' : '#ef5350'
  }));

  volumeSeries = volumeChart.addHistogramSeries({
    color: '#26a69a',
    priceFormat: { type: 'volume' },
    scaleMargins: { top: 0, bottom: 0 }
  });

  volumeSeries.setData(volumeData);

  const mainTimeScale = candleChart.timeScale();
  const volTimeScale = volumeChart.timeScale();

  mainTimeScale.subscribeVisibleTimeRangeChange(() => {
    const range = mainTimeScale.getVisibleRange();
    if (range) volTimeScale.setVisibleRange(range);
  });
}