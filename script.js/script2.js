let chart;

function updateChart() {

  if (!habits || habits.length === 0) {
    return;
  }

  const completed = habits.filter(h => h.done).length;
  const pending = habits.length - completed;

  if (chart) {
    chart.destroy();
  }

  const ctx = document.getElementById("progressChart").getContext("2d");

  chart = new Chart(ctx, {
    type: "pie",
    data: {
      labels: ["Completed", "Pending"],
      datasets: [{
        data: [completed, pending],
        backgroundColor: ["#4CAF50", "#FF5252"]
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false
    }
  });
}
