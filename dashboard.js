
const darkModeBtn = document.getElementById("dark-mode");
const lightModeBtn = document.getElementById("light-mode");
const all = document.getElementById("all-contain");
const nav = document.getElementById("nav");
const hamburger = document.getElementById("hamburger");
const mainSearch = document.getElementById("main-search");
const redDiv = document.querySelectorAll(".red-div");
const greenDiv = document.querySelectorAll(".green-div");
const darkLightDiv = document.getElementsByClassName("dark-light-mode");
const ordersTable = document.querySelectorAll(".orders-table");
const bottomLeftDiv = document.querySelectorAll(".bottom-left-div");
const topRightDiv = document.querySelectorAll(".top-right-div");
const bottomRightDiv = document.querySelectorAll(".bottom-right-div");
const analyticsBox = document.querySelectorAll(".analytics-box");
const analytics = document.querySelectorAll(".analytics");
const viewButtons = document.querySelectorAll(".viewText");
const downloadButtons = document.querySelectorAll(".downloadIcon");
const platformRange = document.querySelectorAll(".platform-range");
const platformAmount = document.querySelectorAll(".platform-amount.platform-amountt");
const invoiceOverlay = document.getElementById("invoice-overlay");
const invoiceForm = document.getElementById("invoice-form");
const invoiceClose = document.getElementById("close-overlay");

const bodyEl = document.body;

viewButtons.forEach((element) => {
    element.addEventListener("click", () => {
        const trElement = element.closest("tr");
        let name = trElement.dataset.name;
        let date = trElement.dataset.date;
        let amount = trElement.dataset.amount;
        let status = trElement.dataset.status;
        invoiceForm.elements["invoice-name"].value = name;
        invoiceForm.elements["invoice-date"].value = date;
        invoiceForm.elements["invoice-amount"].value = amount;
        invoiceForm.elements["invoice-status"].value = status;
        invoiceOverlay.style.display = "flex";
    });
});

    invoiceClose.addEventListener("click", () => {
        invoiceOverlay.style.display = "none";
    });

    window.addEventListener("click", (event) => {
        if (event.target !== invoiceForm) {
            invoiceOverlay.style.display = "none";
        }
    });


hamburger.addEventListener("click", () => {
    console.log("hamburge")
    nav.classList.toggle("shownav");
    if (hamburger.textContent === "menu") {
        hamburger.textContent = "close";
    } else {
        hamburger.textContent = "menu";
    }
});

// darkModeBtn.addEventListener("click", () => {
//     all.classList.add("dark-background");
//     ordersTable.forEach.classList.add("theme-dark-background")
//     analytics.forEach(element => element.classListadd=> element.classList.add("theme-dark-background"));
//     bottomRightDiv.forEach.(element => elementclassList.add("theme-dark-background"));
//     mainSearch.classList.add("theme-dark-background");
//     all.classList.remove("light-background");
//     ordersTable.forEach(element => element.classList.remove("white-background"))
//     analytics.forEach(element => element.classList.remove("white-background"));
//     bottomLeftDiv.forEach(element => element.classList.remove("white-background"));
//     topRightDiv.forEach(element => element.classList.remove("white-background"));
//     bottomRightDiv.forEach(element => element.classList.remove("white-background"));
//     mainSearch.classList.remove("white-background");
//     darkModeBtn.classList.add("active-mode");
//     lightModeBtn.classList.remove("active-mode");
// });
// lightModeBtn.addEventListener("click", () => {
//     all.classList.add("light-background");
//     ordersTable.forEach(element => element.classList.add("white-background"))
//     analytics.forEach(element => element.classList.add("white-background"));
//     bottomLeftDiv.forEach(element => element.classList.add("white-background"));
//     topRightDiv.forEach(element => element.classList.add("white-background"));
//     bottomRightDiv.forEach(element => element.classList.add("white-background"));
//     mainSearch.classList.add("white-background");
//     all.classList.remove("dark-background");
//     ordersTable.forEach(element => element.classList.remove("theme-dark-background"))
//     analytics.forEach(element => element.classList.remove("theme-dark-background"));
//     bottomLeftDiv.forEach(element => element.classList.remove("theme-dark-background"));
//     topRightDiv.forEach(element => element.classList.remove("theme-dark-background"));
//     bottomRightDiv.forEach(element => element.classList.remove("theme-dark-background"));
//     mainSearch.classList.remove("theme-dark-background");
//     lightModeBtn.classList.add("active-mode");
//     darkModeBtn.classList.remove("active-mode");
// });

platformRange.forEach((element, index) => {
    const amount = platformAmount[index];
    element.addEventListener("change", (event) => {
        event.preventDefault();
        amount.textContent = "$" + element.value.replace(/\B(?=(\d{3})+(?!\d))/g, ",");;
    });
});

// const ctx = document.getElementById('myChart');
// const monthNames = [
//     "Jan", "Feb", "Mar", "Apr", "May", "Jun",
//     "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
// ];

// const amount = [7000, 21000, 3600, 28000, 9000, 45000,
// 9100, 18000, 35000, 4500, 30000, 24000];
// displayMainGraph(amount);
     
// function displayMainGraph(amounts) {
//     new Chart(ctx, {
//         type: 'bar',
//         data: {
//         labels: monthNames,
//         datasets: [{
//             label: 'Sales Trend',
//             data: amounts,
//             borderWidth: 1,
//             borderRadius: 50,
//             backgroundColor: (context) => {const lightModeBtn = document.getElementById("light-mode");
//             const index = context.dataIndex;
//             const data = context.dataset.data;
//             context.dataset.barPercentage = .85;
//             if (index === data.length - 7) return 'rgb(91, 206, 170)';
//             else return 'rgb(235, 250, 246)';
//             },
//         }]
//         },
//         options: {
//         scales: {
//             y: {
//             beginAtZero: true,
//             suggestedMax: 50000,
//             }
//         }
//         }
//     });
// }
