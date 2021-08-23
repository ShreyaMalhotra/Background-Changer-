var btn_red;
var btn_green;

var r = 0;
var g = 0;
var b = 0;

function setup() {
  createCanvas(400, 400);  
 
  btn_red = createButton ("RED")
  btn_red.position (100,50); 
  btn_red.mouseClicked (red_bg)


  btn_green= createButton ("GREEN")
  btn_green.position (100,100); 
  btn_green.mouseClicked (green_bg) 


  btn_blue = createButton ("BLUE")
  btn_blue.position (100,200); 
  btn_blue.mouseClicked (blue_bg) 


  btn_yellow = createButton ("YELLOW")
  btn_yellow.position (100,250); 
  btn_yellow.mouseClicked (yellow_bg) 
}

function draw() {

}

function red_bg () {
  background ("red")
}

function green_bg () {
  background ("green")
}

function blue_bg () {
  background ("blue")
}

function yellow_bg () {
  background ("yellow")
}
