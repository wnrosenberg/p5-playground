/**
 * This file contains the JS for the current p5 project.
 */

/**
 * VARIABLES - define variables first
 */
// var img;
var pg;

/**
 * PRELOAD - pre-load any assets that will be needed for this project
 */
function preload() {
  // img = loadImage('url')
}

/**
 * SETUP - perform any initialization before we start drawing our project
 */
function setup() {
  createCanvas(640, 480, WEBGL);
}


/**
 * DRAW - run in a loop, 
 */
function draw(){
  var dirY = (mouseY / height - 0.5) *2;
  var dirX = (mouseX / width - 0.5) *2;
  directionalLight(250, 250, 250, dirX, -dirY, 0.25);
  ambientMaterial(250);
  sphere(50, 64);


}