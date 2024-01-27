
const darkModeBtn = document.getElementById("dark-mode");
const lightModeBtn = document.getElementById("light-mode");
const all = document.getElementById("all-contain");
const nav = document.getElementById("nav");
const bell = document.getElementById("notification");
const search = document.getElementById("search-icon");
const hamburger = document.getElementById("hamburger");
const mainSearch = document.getElementById("main-search");
const redDiv = document.querySelectorAll(".red-div");
const greenDiv = document.querySelectorAll(".green-div");
const darkLightDiv = document.getElementById("dark-light-mode");
const ordersTable = document.querySelectorAll(".orders-table");
const bottomLeftDiv = document.querySelectorAll(".bottom-left-div");
const topRightDiv = document.querySelectorAll(".top-right-div");
const bottomRightDiv = document.querySelectorAll(".bottom-right-div");
const analyticsBox = document.querySelectorAll(".analytics-box");
const analytics = document.querySelectorAll(".analytics");
const topPlatform = document.getElementById("top-platform");
const viewButtons = document.querySelectorAll(".viewText");
const downloadButtons = document.querySelectorAll(".downloadIcon");
const platformRange = document.querySelectorAll(".platform-range");
const platformAmount = document.querySelectorAll(".platform-amount.platform-amountt");
const invoiceOverlay = document.getElementById("invoice-overlay");
const invoiceForm = document.getElementById("invoice-form");
const invoiceClose = document.getElementById("close-overlay");
const ctx = document.getElementById('myChart');
const bodyEl = document.body;

viewButtons.forEach((element) => {
    element.addEventListener("click", (el) => {
        console.log("view text click");
        const trElement = element.closest("tr");
        let name = trElement.dataset.name;
        let date = trElement.dataset.date;
        let amount = trElement.dataset.amount;
        let status = trElement.dataset.status;
        invoiceForm.elements["invoice-name"].value = name;
        invoiceForm.elements["invoice-date"].value = date;
        invoiceForm.elements["invoice-amount"].value = amount;
        invoiceForm.elements["invoice-status"].value = status;
        invoiceOverlay.classList.add("d-flex_");
        invoiceOverlay.classList.remove("d-none_");
        console.log(invoiceOverlay);
    });
});

window.addEventListener("click", (event) => {
    // Close nav menu if clicked outside
    if (nav.classList.contains("shownav") && event.target !== hamburger) {
        nav.classList.remove("shownav");
        hamburger.textContent = "menu";
    }

    if (
        event.target !== invoiceForm &&
        !invoiceOverlay.classList.contains("d-none_") &&
        !Array.from(viewButtons).includes(event.target)
    ) {
        invoiceOverlay.classList.add("d-none_");
        invoiceOverlay.classList.remove("d-flex_");
    }
});
// Event listener for hamburger
hamburger.addEventListener("click", () => {
    console.log("hamburger clicked");
    nav.classList.toggle("shownav");
    if (hamburger.textContent === "menu") {
        hamburger.textContent = "close";
    } else {
        hamburger.textContent = "menu";
    }
});

const amount = [7, 21, 3.6, 28, 9, 45,
    9.1, 18, 35, 4.5, 30, 24];

darkModeBtn.addEventListener("click", () => {
    sessionStorage.setItem("darkOrLightMode", "dark");
    isDark = true;
    // displayMainGraph(amount);
    all.classList.add("dark-background");
    bodyEl.classList.add("dark-background");
    nav.classList.add("theme-light-background");
    bell.classList.add("white");
    search.classList.add("white");
    ordersTable.forEach(element => element.classList.add("theme-dark-background"));
    analytics.forEach(element => element.classList.add("theme-dark-background"));
    analyticsBox.forEach(element => element.classList.add("theme-dark-background"));
    topPlatform.classList.add("theme-dark-background");
    bottomRightDiv.forEach(element => element.classList.add("theme-dark-background"));
    topRightDiv.forEach(element => element.classList.add("theme-dark-background"));
    mainSearch.classList.add("theme-dark-background");
    ctx.classList.add("theme-dark-background");
    darkLightDiv.classList.add("theme-dark-background");
    bodyEl.classList.remove("dark-background");
    all.classList.remove("light-background");
    ordersTable.forEach(element => element.classList.remove("white-background"))
    analytics.forEach(element => element.classList.remove("white-background"));
    analyticsBox.forEach(element => element.classList.remove("white-background"));
    bottomLeftDiv.forEach(element => element.classList.remove("white-background"));
    topRightDiv.forEach(element => element.classList.remove("white-background"));
    bottomRightDiv.forEach(element => element.classList.remove("white-background"));
    mainSearch.classList.remove("white-background");
    ctx.classList.remove("white-background");
    topPlatform.classList.remove("white-background");
    darkLightDiv.classList.remove("white-background");
    darkModeBtn.classList.add("active-mode");
    lightModeBtn.classList.remove("active-mode");
    all.classList.add("white");
    invoiceClose.classList.add("white");
    darkModeBtn.classList.remove("white");
    darkModeBtn.classList.add("black");
    mainSearch.classList.add("white");
});
lightModeBtn.addEventListener("click", () => {
    sessionStorage.setItem("darkOrLightMode", "light");
    isDark = false;
    // displayMainGraph(amount);
    bodyEl.classList.add("light-background");
    all.classList.add("light-background");
    ordersTable.forEach(element => element.classList.add("white-background"))
    analytics.forEach(element => element.classList.add("white-background"));
    analyticsBox.forEach(element => element.classList.add("white-background"));
    topPlatform.classList.add("white-background");
    bottomLeftDiv.forEach(element => element.classList.add("white-background"));
    topRightDiv.forEach(element => element.classList.add("white-background"));
    bottomRightDiv.forEach(element => element.classList.add("white-background"));
    mainSearch.classList.add("white-background");
    ctx.classList.add("white-background");
    darkLightDiv.classList.add("white-background");
    bodyEl.classList.remove("dark-background");
    all.classList.remove("dark-background");
    ordersTable.forEach(element => element.classList.remove("theme-dark-background"))
    analytics.forEach(element => element.classList.remove("theme-dark-background"));
    analyticsBox.forEach(element => element.classList.remove("theme-dark-background"));
    bottomLeftDiv.forEach(element => element.classList.remove("theme-dark-background"));
    topRightDiv.forEach(element => element.classList.remove("theme-dark-background"));
    bottomRightDiv.forEach(element => element.classList.remove("theme-dark-background"));
    mainSearch.classList.remove("theme-dark-background");
    ctx.classList.remove("theme-dark-background");
    topPlatform.classList.remove("theme-dark-background");
    darkLightDiv.classList.remove("theme-dark-background");
    lightModeBtn.classList.add("active-mode");
    darkModeBtn.classList.remove("active-mode");
    all.classList.remove("white");
    nav.classList.remove("theme-light-background");
    invoiceClose.classList.remove("white");
    darkModeBtn.classList.remove("white");
    darkModeBtn.classList.add("black");
    mainSearch.classList.remove("white");
    bell.classList.remove("white");
    search.classList.remove("white");
});

const dark_ = sessionStorage.getItem("darkOrLightMode");
let isDark = false;
if (dark_) isDark = true;
if (dark_ == "dark") {
    console.log("Check: ", sessionStorage.getItem("darkOrLightMode"));
    const clickEvent = new Event("click");
    darkModeBtn.dispatchEvent(clickEvent);
}

// Event listener for invoiceClose
invoiceClose.addEventListener("click", () => {
    invoiceOverlay.classList.add("d-none_");
    invoiceOverlay.classList.remove("d-flex_");
});

platformRange.forEach((element, index) => {
    const amount = platformAmount[index];
    element.addEventListener("change", (event) => {
        event.preventDefault();
        amount.textContent = "$" + element.value.replace(/\B(?=(\d{3})+(?!\d))/g, ",");;
    });
});

const monthNames = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

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
            backgroundColor: "rgb(235, 250, 246)",
            // hoverBackgroundColor: "rgb(91, 206, 170)",
            hoverBackgroundColor: (context) => {
                const gradient = context.chart.ctx.createLinearGradient(0, 0, 0, context.chart.height);
                gradient.addColorStop(0, 'rgb(5, 128, 89)');
                gradient.addColorStop(0, 'rgb(5, 128, 89)');
                gradient.addColorStop(0, 'rgb(5, 128, 89)');
                gradient.addColorStop(0, 'rgb(5, 128, 89)');
                gradient.addColorStop(1, 'rgb(255, 255, 255)');
                return gradient;
            },
        }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    suggestedMax: 50,
                    ticks: {
                        color: isDark ? "rgb(91, 206, 170)" : "rgb(148, 148, 148)" ,
                        callback: function (value, index, values) {
                            return "$" + value.toFixed(3);
                        }
                    }
                },
                x: {
                    ticks: {
                        color: isDark ? "rgb(91, 206, 170)" : "rgb(148, 148, 148)",
                    }
                }
            },
            plugins: {
                tooltip: {
                    callbacks: {
                        label: (context) => {
                            const value = context.parsed.y.toFixed(3);
                            return "$" + value;
                        }
                    }
                }
            }
        }
    });
}

function hideLoadingOverlay() {
    document.getElementById('loadingOverlay').style.display = 'none';
}
setTimeout(() => {
    hideLoadingOverlay();
}, 1000);
// hideLoadingOverlay();
