// Bootstrap Dashboard — script.js
// Chart.js v2.9.4 + (optional) Feather icons

document.addEventListener('DOMContentLoaded', () => {
  // Feather only matters if you use data-feather="...".
  if (window.feather && typeof window.feather.replace === 'function') {
    try { window.feather.replace(); } catch (e) { console.warn('Feather replace failed:', e); }
  }

  // Chart
  const canvas = document.getElementById('myChart');
  if (!canvas) {
    console.warn('Canvas #myChart not found.');
    return;
  }

  if (typeof Chart === 'undefined') {
    console.error('Chart.js is not loaded. Ensure the CDN for Chart.js is before this file.');
    return;
  }

  const ctx = canvas.getContext('2d');

  const labels = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const data =   [ 15339,     21345,      18483,        24003,         23489,     24092,     12034 ];

  // Match the Bootstrap demo: no fill, straight segments, hidden legend.
  /* global Chart */
  // eslint-disable-next-line no-unused-vars
  const myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels,
      datasets: [{
        label: 'Weekly Sales',
        data,

        borderColor: '#0d6efd',      // Bootstrap primary
        borderWidth: 2,
        pointRadius: 0,              // no individual point dots
        lineTension: 0,              // straight segments
        fill: false,                 // no area fill under line
        backgroundColor: 'transparent'
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,    // let the canvas fill its container (.chart-wrap)

      legend: { display: false },

      tooltips: { mode: 'index', intersect: false },
      hover:     { mode: 'nearest', intersect: true },

      scales: {
        xAxes: [{
          gridLines: { display: false },
          ticks: { autoSkip: false } // show all weekday labels
        }],
        yAxes: [{
          gridLines: { color: 'rgba(0, 0, 0, 0.1)' }, // a touch stronger like the demo
          ticks: {
            beginAtZero: false,
            callback: function (value) {
              try { return Number(value).toLocaleString(); } catch (e) { return value; }
            }
          }
        }]
      }
    }
  });
});
