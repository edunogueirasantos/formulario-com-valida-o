
const inputs = document.querySelectorAll(".input");
const fields = document.querySelectorAll(".field");
const form = document.querySelector("[name='form']");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    fields.forEach(function (item) {
        if (item.classList.contains("red")) {
        item.classList.replace("red", "black");

        } else if (item.classList.contains("green")) {
        item.classList.replace("green", "black");
        }
    });

    fields.forEach(function (item, i) {
        if (inputs[i].children[1].classList.contains("activeField")) {
          inputs[i].children[1].classList.replace(
            "activeField", "inactiveField");
        }
    });

    fields.forEach(function (item, i) {
    if (item.value === "") {
        item.classList.replace("black", "red");
        inputs[i].children[1].classList.replace("inactiveField", "activeField");
    } else {
        item.classList.replace("black", "green");
    }
});
});



