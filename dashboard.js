const ctx = document.getElementById('myChart');
const monthNames = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

const amount = [7000, 21000, 3600, 28000, 9000, 45000,
9100, 18000, 35000, 4500, 30000, 24000];
displayMainGraph(amount);
     
function displayMainGraph(amounts) {
    new Chart(ctx, {
        type: 'bar',
        data: {
        labels: monthNames,
        datasets: [{
            label: 'Sales Trend',
            data: amounts,
            borderWidth: 1,
            borderRadius: 50,
            backgroundColor: (context) => {
            const index = context.dataIndex;
            const data = context.dataset.data;
            context.dataset.barPercentage = .85;
            if (index === data.length - 7) return 'rgb(91, 206, 170)';
            else return 'rgb(235, 250, 246)';
            },
        }]
        },
        options: {
        scales: {
            y: {
            beginAtZero: true,
            suggestedMax: 50000,
            }
        }
        }
    });
}