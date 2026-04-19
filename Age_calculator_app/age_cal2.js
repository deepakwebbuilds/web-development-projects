// simple greeting
let userName = prompt("Enter your name");

if (userName) {
    document.getElementById("greeting").textContent = "Hello " + userName;
} else {
    document.getElementById("greeting").textContent = "Hello";
}


// age calculation
document.getElementById("calculateage").addEventListener("click", function (e) {
    e.preventDefault();

    let d = document.getElementById("birthDay").value;
    let m = document.getElementById("birthMonth").value;
    let y = document.getElementById("birthYear").value;

    let result = document.getElementById("ageResult");

    // basic check
    if (d === "" || m === "" || y === "") {
        result.textContent = "Please fill all fields";
        result.classList.add("show");
        return;
    }

    d = parseInt(d);
    m = parseInt(m);
    y = parseInt(y);

    // rough validation
    if (m < 1 || m > 12 || d < 1 || d > 31) {
        result.textContent = "Invalid date";
        result.classList.add("show");
        return;
    }

    let today = new Date();
    let birth = new Date(y, m - 1, d);

    if (birth > today) {
        result.textContent = "Date can't be in future";
        result.classList.add("show");
        return;
    }

    let age = today.getFullYear() - y;

    if (
        today.getMonth() < (m - 1) ||
        (today.getMonth() === (m - 1) && today.getDate() < d)
    ) {
        age--;
    }

    result.textContent = "You are " + age + " years old";

    // small animation trigger
    result.classList.remove("show");
    setTimeout(function () {
        result.classList.add("show");
    }, 50);
});