class DisplayEl {
  constructor() {
    this.hexValue = document.getElementById("hex-value");
    this.placeHolder();
    this.clickEvent = this.clickEvent.bind(this);

    //Listen for space bar clicks
    this.clickEvent();
  }
  //create a placeholder that prompts the user to click.
  placeHolder() {
    if (!this.hexValue.innerText.trim()) {
      this.hexValue.innerText = "Press the spacebar";
    }
  }

  //check if the user has clicked the spacebar and remove the placeholder.
  //listener is set to the whole page. An event object will be returned with info as to what key was pressed
  clickEvent() {
    document.addEventListener("keydown", (e) => {
      if (e.key === " ") {
        //call the method with the random color logic
        const color = this.randomColor();

        //set the background color of the page
        document.body.style.backgroundColor = color;

        //replace the placeholder text with the hex value
        this.hexValue.innerText = color;
      }
    });
  }
  randomColor() {
    const values = [];
    for (let i = 0; i < 3; i++) {
      values.push(Math.floor(Math.random() * 256));
    }
    let hex =
      "#" + values.map((num) => num.toString(16).padStart(2, "0")).join("");

    return hex;
  }
}

const displayEl = new DisplayEl();
