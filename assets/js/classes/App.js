import Navigation from "./Navigation.js";
import Popup from "../animations/popup.js";

class App {
  constructor() {
    this.navigation = new Navigation(
      ".toggle_btn",
      ".toggle_btn img",
      ".dropdown_menu"
    );
    // Initialize the Popup class
    this.popup = new Popup("popup", "showPopup", ".close-btn");
  }
}

export default App;
