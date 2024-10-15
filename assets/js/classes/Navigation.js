class Navigation {
    constructor(toggleBtnSelector, imgSelector, dropDownMenuSelector) {
        this.toggleBtn = document.querySelector(toggleBtnSelector);
        this.toggleBtnImgs = document.querySelectorAll(imgSelector);
        this.dropDownMenu = document.querySelector(dropDownMenuSelector);

        this.init();
    }

    init() {
        this.toggleBtn.addEventListener("click", () => this.toggleMenu());
        document.addEventListener("click", (event) => this.handleOutsideClick(event));
    }

    toggleMenu() {
        if (this.dropDownMenu.classList.contains("open")) {
            this.closeMenu();
            this.updateImages("https://img.icons8.com/?size=100&id=36389&format=png&color=000000");
        } else {
            this.openMenu();
            this.updateImages("https://img.icons8.com/?size=100&id=46&format=png&color=000000");
        }
    }

    openMenu() {
        this.dropDownMenu.classList.add("open");
        this.dropDownMenu.classList.remove("close");
    }

    closeMenu() {
        this.dropDownMenu.classList.remove("open");
        this.dropDownMenu.classList.add("close");
    }

    updateImages(src) {
        this.toggleBtnImgs.forEach((img) => {
            img.src = src;
        });
    }

    handleOutsideClick(event) {
        const isClickInside = this.toggleBtn.contains(event.target) || this.dropDownMenu.contains(event.target);
        if (!isClickInside) {
            this.closeMenu();
            this.updateImages("./assets/img/icons/nav/nav_bar.svg");
        }
    }
}



export default Navigation;

