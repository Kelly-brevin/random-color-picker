class DisplayEl {
  constructor() {
    this.hexValue = document.getElementById("hex-value");
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
      if (e.key === "") {
        //call the method with the random color logic
      }
    });
  }
  randomColor() {
    const values = [];
    for (let i = 0; i < 3; i++) {
      values.push(Math.floor(Math.random() * 255));
    }
    console.log(values);
  }
}

//Logic to generate  random HEX values,store them in a variable

const displayEl = new DisplayEl();

//call the method
displayEl.randomColor();
