const ctx = document.getElementById('myDonutChart').getContext('2d');
const myDonutChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Cash', 'Other', 'Supermarket', 'Restaurant'],
        datasets: [{
            data: [600, 50, 100, 600],
            backgroundColor: ['#6692fd', '#5e58f6', '#41c3fd', '#5e5bf4'],
            borderColor: 'transparent',
            // hoverBackgroundColor: ['#ff6384', '#36a2eb', '#ffcd56', '#5e5af7']
            // borderWidth:1,
            hoverOffset: 50,
        }]
    },
    options: {
        responsive: true,
        cutout: '80%', // Size of the donut hole
        animation:{
            duration: 500,
            easing: 'easeOutBounce',
            animateScale: true,
            // animateRotate: true,
        },

        hover:{
            onHover: function(e, activeElements){
                if(activeElements.length){
                    e.target.style.cursor = 'pointer';
                } else{
                    e.terget.style.cursor = 'default';
                }
            },
            mode: 'nearest',
            intersect: true,
        },
        plugins: {
            legend: {
                position: 'top', // Position of the legend
            },
            tooltip: {
                callbacks: {
                    label: function(context) {
                        return `${context.label}: ${context.raw}`;
                    }
                }
            }
        }
        
    }
});
