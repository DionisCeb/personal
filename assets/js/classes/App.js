import Navigation from "./Navigation.js";

class App {
    constructor() {
        this.navigation = new Navigation(".toggle_btn", ".toggle_btn img", ".dropdown_menu");
    }
}

export default App;
