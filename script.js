class DisplayEl {
  constructor() {
    this.hexValue = Document.getElementById("hex-value");
  }

  placeholder() {
    if (!this.hexValue.innerText.trim()) {
      this.hexValue.innerText = "Press the spacebar";
    }
  }
}

const DisplayEl = new DisplayEl();
