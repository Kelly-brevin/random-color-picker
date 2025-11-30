class DisplayEl {
  constructor() {
    this.hexValue = document.getElementById("hex-value");
  }

  placeholder() {
    if (!this.hexValue.innerText.trim()) {
      this.hexValue.innerText = "Press the spacebar";
    }
  }
}
//create an instance
const displayEl = new DisplayEl();
//cal

//call the method
