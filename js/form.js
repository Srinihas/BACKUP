class Form {
    constructor() {
      this.input = createInput("Type your username here...").attribute("placeholder", "");
      this.playButton = createButton("...");
      this.titleImg = createImg("../assets/Deathscape.png", "game title");
    }
  
    setElementsPosition() {
      this.titleImg.size(windowWidth, windowHeight);
      this.titleImg.position(0, 0);
      this.input.position(width / 2 - 110, height / 2 - 80);
      this.playButton.position(width / 2 - 90, height / 2 - 20);
    }
  
    //BP
    hide() {
      this.playButton.hide();
      this.input.hide();
    }
  
    //BP
    handleMousePressed() {
        this.playButton.mousePressed(() => {
            this.input.hide();
            this.playButton.hide();
            death.start();
        });
    }
  
    display() {
      this.setElementsPosition();
      this.handleMousePressed();
    }
  }
  