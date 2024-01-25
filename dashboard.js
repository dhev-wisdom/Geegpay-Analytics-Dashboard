document.addEventListener("DOMContentLoaded", () => {

const ctx = document.getElementById('myChart1');

const monthNames = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];


// const data = await fetchFunc(url);
// Mock data
const data = {payment: [
    {year: 2024, month: 1, amount: 98},
    {year: 2024, month: 2, amount: 918},
    {year: 2024, month: 3, amount: 918},
    {year: 2024, month: 4, amount: 1918},
    {year: 2024, month: 5, amount: 2918},
    {year: 2024, month: 6, amount: 4918},
    {year: 2024, month: 7, amount: 3918},
    {year: 2024, month: 8, amount: 918},
    ], totalAmount: 2264};

const currentYear = new Date().getFullYear();

const paymentData_ = data.payment.map((item) => ({
    amount: item.amount,
    month: getMonthName(item.month),
    year: item.year,
}));

const paymentData = paymentData_.filter(item => item.year === currentYear);

function getMonthName(monthNumber) {
    const monthIndex = Math.max(1, Math.min(12, monthNumber)) - 1;
    return monthNames[monthIndex];
}

const amounts = paymentData.map(item => item.amount); // Get amounts directly

const validMonths = paymentData.map(item => item.month);

const filteredAmounts = amounts.filter((_, index) => validMonths.includes(monthNames[index]));

// Get the last valid index for trimming
let endIndex = filteredAmounts.length - 1;
    while (endIndex >= 0 && filteredAmounts[endIndex] === 0) {
    endIndex--;
}

let trimmedAmounts = filteredAmounts.slice(0, endIndex + 1);
if (trimmedAmounts.length === 0) trimmedAmounts = [0];

monthyRevenue.textContent = `Le ${trimmedAmounts[(trimmedAmounts.length) - 1]}`;
displayMainGraph(trimmedAmounts);
     
function displayMainGraph(amounts) {
    console.log("amounts: ", amounts);
    new Chart(ctx, {
        type: 'bar',
        data: {
        labels: monthNames,
        datasets: [{
            label: 'Monthly Revenue',
            data: amounts,
            borderWidth: 1,
            borderRadius: 7,
            backgroundColor: (context) => {
            const index = context.dataIndex;
            const data = context.dataset.data;
            context.dataset.barPercentage = .85;
            if (index === data.length - 1) return 'rgb(0, 115, 198)';
            else return 'rgb(230, 230, 230)';
            },
        }]
        },
        options: {
        scales: {
            y: {
            beginAtZero: true,
            // suggestedMax: 1000000,
            // stepSize: 200000,
            ticks: {
                callback: function (value, index, values) {
                    if (value >= 1000000) return value / 1000000 + 'M';
                    if (value >= 1000 && value <= 1000000) return value / 1000 + 'K';
                    else return value;
                },
            },
            }
        }
        }
    });
}
});