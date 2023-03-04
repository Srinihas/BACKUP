var player;

var gameState;

var jumpscare, jumpscareSound;
var gameOverImg, gameOverSoundFile;
var tunnelSound;
var main;
var health;
var lightSCP, enemy, shadowSCP;

var damageAmount;

var death;
var deathDamage;

var rickRoll;

var playerFilledForm = false;

function preload() {
    tunnelSound = loadSound("./Assets/mixkit-horror-sci-fi-wind-tunnel-894.wav");
    jumpscare = loadImage("./Assets/jumpscare.png");
    main = loadSound("./Assets/mixkit-haunted-slow-orchestra-634.wav");
    gameOverImg = loadImage("./Assets/game Over.png", gameOver);
    gameOverSoundFile = loadSound("./Assets/mixkit-broken-radio-frequency-signal-2563.wav");
    jumpscareSound = loadSound("./Assets/prowler.mp3");
    death = new Death(10);
    damageAmount = 3;
    deathDamage = 100000000000;

    rickRoll = loadSound("./Assets/Rick.mp3");

    death = new Death(20);

    gameState = 0;
}

function setup() {
    createCanvas(windowWidth, windowHeight);
  
    heightSlider =
      createSlider(0, 500, 200);
    heightSlider.position(30, 300);
  
    widthSlider =
      createSlider(0, 500, 400);
    widthSlider.position(30, 340);
}

function draw() {
    background("black");

    //if (playerFilledForm) {
    //death.playing();
    //}

    if (gameState == 0) {
      
    }

    image(gameOver, 20, 40);
  
    new_height = heightSlider.value();
    new_width = widthSlider.value();
      
    img_orig.resize(new_width, new_height);

    drawSprites();
}