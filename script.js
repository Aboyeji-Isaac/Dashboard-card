const ctx = document.getElementById('myDonutChart').getContext('2d');
const myDonutChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Cash', 'Other', 'Supermarkets', 'Restaurants'],
        datasets: [{
            data: [950, 227, 534, 343],
            backgroundColor: ['#6692fd', '#5e58f6', '#41c3fd', '#5e5bf4'],
            borderColor: 'transparent',
            borderWidth: 1,
            hoverOffset: 20, // Increase hover offset for expansion effect
        }]
    },
    options: {
        responsive: true,
        cutout: '80%', // Size of the donut hole
        plugins: {
            legend: {
                display: false, // Hide the legend
            },
            tooltip: {
                enabled: false, // Disable the tooltip
            }
        },
        hover: {
            mode: 'nearest',
            intersect: true,
        },
        animation: {
            duration: 700,
            easing:'easeOutBounce',
            animateScale: true,
            animateRotate: true,
        }
    }
});

// Hover event to update center label
document.getElementById('myDonutChart').addEventListener('mousemove', function(event) {
    const activePoints = myDonutChart.getElementsAtEventForMode(event, 'nearest', { intersect: true }, true);
    if (activePoints.length > 0) {
        const index = activePoints[0].index;
        const label = myDonutChart.data.labels[index];
        const value = myDonutChart.data.datasets[0].data[index];
        const percentage = Math.round((value / myDonutChart.data.datasets[0]._meta[0].total) * 100);

        // Update center text
        document.getElementById('centerLabelText').textContent = `$${value}`;
        document.getElementById('centerLabelSubText').textContent = `${percentage}%`;
    }
});
