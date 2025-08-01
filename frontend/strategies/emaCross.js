export function runEMACrossStrategy(candles) {
  const trades = [];
  let position = null;

  for (let i = 1; i < candles.length; i++) {
    const prev = candles[i - 1];
    const curr = candles[i];

    if (
      prev.EMA_20 == null || isNaN(prev.EMA_20) ||
      prev.EMA_50 == null || isNaN(prev.EMA_50) ||
      curr.EMA_20 == null || isNaN(curr.EMA_20) ||
      curr.EMA_50 == null || isNaN(curr.EMA_50)
    ) continue;

    // console.log(`i=${i}  prev.EMA_20=${prev.EMA_20}  prev.EMA_50=${prev.EMA_50}`);
    // console.log(`         curr.EMA_20=${curr.EMA_20}  curr.EMA_50=${curr.EMA_50}`);
    // console.log("Pompae")

    // Cross above --> BUY
    if (prev.EMA_20 < prev.EMA_50 && curr.EMA_20 >= curr.EMA_50) {
      if (!position) {
        position = {
          entryTime: curr.time,
          entryPrice: curr.close,
          side: "BUY"
        };
      }
    }

    // Cross below --> SELL
    else if (prev.EMA_20 > prev.EMA_50 && curr.EMA_20 <= curr.EMA_50) {
      if (position) {
        const exitPrice = curr.close;
        const profit = exitPrice - position.entryPrice;

        trades.push({
          ...position,
          exitTime: curr.time,
          exitPrice,
          profit: parseFloat(profit.toFixed(2))
        });

        position = null;
      }
    }
  }

  return trades;
}
