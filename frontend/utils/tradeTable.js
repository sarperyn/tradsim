export function updateTradeTable(trades) {
  const tbody = document.querySelector("#trade-table tbody");
  const summary = document.getElementById("summary");
  tbody.innerHTML = "";

  let totalPL = 0;
  let wins = 0;
  let totalPercentPL = 0;

  trades.forEach((trade, i) => {
    const row = document.createElement("tr");

    // Convert times to Date objects
    const entryTime = new Date(trade.entryTime);
    const exitTime = new Date(trade.exitTime);

    // Duration in hours
    const durationMs = exitTime - entryTime;
    const durationHrs = (durationMs / (1000 * 60 * 60)).toFixed(1);

    // Calculate P/L based on trade side
    const sideMultiplier = (trade.side || "BUY") === "BUY" ? 1 : -1;
    const pl = (trade.exitPrice - trade.entryPrice) * sideMultiplier;
    const percentPL = ((pl / trade.entryPrice) * 100).toFixed(2);

    totalPL += pl;
    totalPercentPL += parseFloat(percentPL);
    if (pl > 0) wins++;

    row.innerHTML = `
      <td>${i + 1}</td>
      <td>${entryTime.toLocaleString()}</td>
      <td>${exitTime.toLocaleString()}</td>
      <td>${trade.entryPrice.toFixed(2)}</td>
      <td>${trade.exitPrice.toFixed(2)}</td>
      <td>${durationHrs}h</td>
      <td style="color: ${pl >= 0 ? 'green' : 'red'}">${pl.toFixed(2)}</td>
      <td style="color: ${pl >= 0 ? 'green' : 'red'}">${percentPL}%</td>
      <td>${trade.side || "Long"}</td>
    `;
    tbody.appendChild(row);
  });

  const winRate = trades.length > 0 ? ((wins / trades.length) * 100).toFixed(1) : "0";

  summary.innerHTML = `
    <p><strong>Total Trades:</strong> ${trades.length}</p>
    <p><strong>Net P/L:</strong> ${totalPL.toFixed(2)}</p>
    <p><strong>Total % P/L:</strong> ${totalPercentPL.toFixed(2)}%</p>
    <p><strong>Win Rate:</strong> ${winRate}%</p>
  `;
}

// export function updateTradeTable(trades) {
//   const tbody = document.querySelector("#trade-table tbody");
//   const summary = document.getElementById("summary");
//   tbody.innerHTML = "";

//   let totalPL = 0;
//   let wins = 0;

//   trades.forEach((trade, i) => {
//     const row = document.createElement("tr");

//     const pl = (trade.exitPrice - trade.entryPrice) * (trade.side === "BUY" ? 1 : -1);
//     totalPL += pl;
//     if (pl > 0) wins++;

//     row.innerHTML = `
//       <td>${i + 1}</td>
//       <td>${trade.entryTime}</td>
//       <td>${trade.exitTime}</td>
//       <td>${trade.entryPrice.toFixed(2)}</td>
//       <td>${trade.exitPrice.toFixed(2)}</td>
//       <td style="color: ${pl >= 0 ? 'green' : 'red'}">${pl.toFixed(2)}</td>
//     `;
//     tbody.appendChild(row);
//   });

//   const winRate = trades.length > 0 ? ((wins / trades.length) * 100).toFixed(1) : "0";

//   summary.innerHTML = `
//     <p><strong>Total Trades:</strong> ${trades.length}</p>
//     <p><strong>Net P/L:</strong> ${totalPL.toFixed(2)}</p>
//     <p><strong>Win Rate:</strong> ${winRate}%</p>
//   `;
// }