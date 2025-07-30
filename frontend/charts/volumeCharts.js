//import { getCandleChartRef } from './candleCharts.js';

// let volumeChart, volumeSeries;

// export function renderVolumeChart(candles) {
//   if (volumeChart) volumeChart.remove();

//   volumeChart = LightweightCharts.createChart(document.getElementById("volume-container"), {
//     width: 1000,
//     height: 150,
//     layout: { background: "#ffffff", textColor: "#000" },
//     grid: { vertLines: { color: '#eee' }, horzLines: { color: '#eee' } },
//     timeScale: { timeVisible: true, secondsVisible: false }
//   });

//   const volumeData = candles.map(c => ({
//     time: c.time,
//     value: c.volume,
//     color: c.close > c.open ? '#26a69a' : '#ef5350'
//   }));

//   volumeSeries = volumeChart.addHistogramSeries({
//     color: '#26a69a',
//     priceFormat: { type: 'volume' },
//     scaleMargins: { top: 0, bottom: 0 }
//   });

//   volumeSeries.setData(volumeData);

//   // Sync time scale with candle chart
//   const candleChartRef = getCandleChartRef();
//   const volTimeScale = volumeChart.timeScale();
//   const mainTimeScale = candleChartRef.timeScale();

//   mainTimeScale.subscribeVisibleTimeRangeChange(() => {
//     const range = mainTimeScale.getVisibleRange();
//     if (range) volTimeScale.setVisibleRange(range);
//   });
// }
