//create a placeholder that prompts the user to click.
class DisplayEl {
  constructor() {
    this.hexValue = document.getElementById("hex-value");
  }

  placeholder() {
    if (!this.hexValue.innerText.trim()) {
      this.hexValue.innerText = "Press the spacebar";
    }
  }

  //check if the user has clicked the spacebar and remove the placeholder, replace with hex value
}
//create an instance
const displayEl = new DisplayEl();

//call the method
displayEl.placeholder();
