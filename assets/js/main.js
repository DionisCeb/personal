const toggleBtn = document.querySelector(".toggle_btn");
const toggleBtnImgs = document.querySelectorAll(".toggle_btn img");
const dropDownMenu = document.querySelector(".dropdown_menu");

toggleBtn.onclick = function () {
    if (dropDownMenu.classList.contains("open")) {
        dropDownMenu.classList.remove("open");
        dropDownMenu.classList.add("close");
        toggleBtnImgs.forEach((img) => {
            img.src = "https://img.icons8.com/?size=100&id=36389&format=png&color=000000";
        });
    } else {
        dropDownMenu.classList.add("open");
        dropDownMenu.classList.remove("close");
        toggleBtnImgs.forEach((img) => {
            img.src = "https://img.icons8.com/?size=100&id=46&format=png&color=000000";
        });
    }
};

document.addEventListener("click", function (event) {
    const isClickInside = toggleBtn.contains(event.target) || dropDownMenu.contains(event.target);
    if (!isClickInside) {
        dropDownMenu.classList.remove("open");
        dropDownMenu.classList.add("close");
        toggleBtnImgs.forEach((img) => {
            img.src = "./assets/img/icons/nav/nav_bar.svg";
        });
    }
});
