class Popup {
  constructor(popupId, triggerId, closeClass) {
    this.popup = document.getElementById(popupId);
    this.trigger = document.getElementById(triggerId);
    this.closeBtn = this.popup.querySelector(closeClass);

    this.init();
  }

  init() {
    // Show the pop-up when clicking the trigger
    this.trigger.addEventListener("click", (event) => {
      event.preventDefault();
      this.show();
    });

    // Close the pop-up when clicking the close button
    this.closeBtn.addEventListener("click", () => {
      this.hide();
    });
  }

  show() {
    this.popup.style.display = "flex";
  }

  hide() {
    this.popup.style.display = "none";
  }
}

export default Popup;
