let Days = document.querySelector("#days");
let Months = document.querySelector("#months");
let Years = document.querySelector("#years");
// ##########################################################

document.querySelector("#Days_points").innerHTML = "--";
document.querySelector("#Months_points").innerHTML = "--";
document.querySelector("#Years_points").innerHTML = "--";

// ##########################################################
// Days section:-
document.querySelector("#submitting").addEventListener("click", function () {
    if (Days.value === null || Days.value === undefined || Days.value === "" || Days.value <= 0) {
        Days.classList.add("red");
        document.querySelector("#Reding1").style.cssText = "color:#ff0000ba";
    }
    else if (Days.value <= 31) {
        document.querySelector("#Days_points").innerHTML = `${Math.abs((new Date().getDate()) - Days.value)}: `;
        Days.classList.remove("red");
        document.querySelector("#Reding1").style.cssText = "color:black";
    }
});

// ################################################################
// Months section:-
document.querySelector("#submitting").addEventListener("click", function () {
    if (Months.value === null || Months.value === undefined || Months.value === "" || Months.value > 12 || Months.value <= 0) {
        Months.classList.add("red");
        document.querySelector("#Reding2").style.cssText = "color:#ff0000ba";
    }
    else if (Months.value <= 12) {
        Months.classList.remove("red");
        document.querySelector("#Months_points").innerHTML = `${Math.abs((((new Date().getMonth())) - Months.value)) + 1}: `;
        document.querySelector("#Reding2").style.cssText = "color:black";

    }
});

// ################################################################
// Years section:-
document.querySelector("#submitting").addEventListener("click", function () {
    if (Years.value === null || Years.value === undefined || Years.value === "" || Years.value <= 0) {
        Years.classList.add("red");
        document.querySelector("#Reding3").style.cssText = "color:#ff0000ba";
    }
    else if (Years.value <= (new Date().getFullYear()) && Months.value > new Date().getMonth()) {
        Years.classList.remove("red");
        document.querySelector("#Years_points").innerHTML = `${Math.abs((new Date().getFullYear()) - Years.value) - 1}: `;
        document.querySelector("#Reding3").style.cssText = "color:black";

    } else if (Years.value <= (new Date().getFullYear()) && Months.value <= new Date().getMonth()) {
        Years.classList.remove("red");
        document.querySelector("#Years_points").innerHTML = `${Math.abs((new Date().getFullYear()) - Years.value)}: `;
        document.querySelector("#Reding3").style.cssText = "color:black";

    }
});
console.log(new Date().getMonth());