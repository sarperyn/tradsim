
// emaToggles.js

export function bindEMAToggle(id, seriesRef, color, accessor, candleChartRef, candleDataRef) {
  const checkbox = document.getElementById(id);
  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      seriesRef.value = candleChartRef.addLineSeries({ color, lineWidth: 1.5 });
      seriesRef.value.setData(candleDataRef.map(c => ({ time: c.time, value: c[accessor] })));
    } else {
      if (seriesRef.value) {
        candleChartRef.removeSeries(seriesRef.value);
        seriesRef.value = null;
      }
    }
  });
}
