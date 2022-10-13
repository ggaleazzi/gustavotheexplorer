// init part, set your own values
var sat = {
    elt: null
    ,a: 750         // in radian
    ,r: 270          // radius
    ,da: 0.008     // in radian
    ,x: 0
    ,y: 0
    // Center is actually center (100, 100) minus
    // half the size of the orbiting object 15x15
    ,center: { x: (245 - 30), y: (125 - 30) }
}
// console.log(sat)

var sat2 = {
    elt: null
    ,a: 200         // in radian
    ,r: 270         // radius
    ,da: 0.008     // in radian
    ,x: 0
    ,y: 0
    // Center is actually center (100, 100) minus
    // half the size of the orbiting object 15x15
    ,center: { x: (245 - 30), y: (125 - 30) }
}

var sat3 = {
    elt: null
    ,a: 900         // in radian
    ,r: 270      // radius
    ,da: 0.008     // in radian
    ,x: 0
    ,y: 0
    // Center is actually center (100, 100) minus
    // half the size of the orbiting object 15x15
    ,center: { x: (245 - 30), y: (125 - 30) }
}

var sat4 = {
    elt: null
    ,a: 550         // in radian
    ,r: 375         // radius
    ,da: 0.005     // in radian
    ,x: 0
    ,y: 0
    
    // Center is actually center (100, 100) minus
    // half the size of the orbiting object 15x15
    ,center: { x: (245 - 30), y: (125 - 30) }
}

var sat5 = {
    elt: null
    ,a: 150         // in radian
    ,r: 375         // radius
    ,da: 0.005     // in radian
    ,x: 0
    ,y: 0
    
    // Center is actually center (100, 100) minus
    // half the size of the orbiting object 15x15
    ,center: { x: (245 - 30), y: (125 - 30) }
}

var sat6 = {
       elt: null
    ,a: 450         // in radian
    ,r: 375         // radius
    ,da: 0.005     // in radian
    ,x: 0
    ,y: 0
    
    // Center is actually center (100, 100) minus
    // half the size of the orbiting object 15x15
    ,center: { x: (245 - 30), y: (125 - 30) }
}

// var sat7 = {
//     elt: null
//     ,a: 750         // in radian
//     ,r: 300         // radius
//     ,da: 0.05     // in radian
//     ,x: 0
//     ,y: 0
    
//     // Center is actually center (100, 100) minus
//     // half the size of the orbiting object 15x15
//     ,center: { x: (100 - 30), y: (100 - 30) }
// }

// var sat8 = {
//     elt: null
//     ,a: 650         // in radian
//     ,r: 300         // radius
//     ,da: 0.02     // in radian
//     ,x: 0
//     ,y: 0
    
//     // Center is actually center (100, 100) minus
//     // half the size of the orbiting object 15x15
//     ,center: { x: (100 - 30), y: (100 - 30) }
// }


sat.move = function(){
    // each modification
    this.a += this.da
    this.x = this.center.x + (this.r * Math.sin(this.a));
    this.y = this.center.y + (this.r * Math.cos(this.a));
    // console.log(this.x, this.y);
    this.elt.style.top = this.y + "px";
    this.elt.style.left = this.x + "px";
}

sat2.move = function(){
    // each modification
    this.a += this.da
    this.x = this.center.x + (this.r * Math.sin(this.a));
    this.y = this.center.y + (this.r * Math.cos(this.a));
    //console.log(this.x, this.y);
    this.elt.style.top = this.y + "px";
    this.elt.style.left = this.x + "px";
}

sat3.move = function(){
    // each modification
    this.a += this.da
    this.x = this.center.x + (this.r * Math.sin(this.a));
    this.y = this.center.y + (this.r * Math.cos(this.a));
    console.log(this.x, this.y);
    this.elt.style.top = this.y + "px";
    this.elt.style.left = this.x + "px";
}

sat4.move = function(){
    // each modification
    this.a += this.da
    this.x = this.center.x + (this.r * Math.sin(this.a));
    this.y = this.center.y + (this.r * Math.cos(this.a));
    console.log(this.x, this.y);
    this.elt.style.top = this.y + "px";
    this.elt.style.left = this.x + "px";
}

sat5.move = function(){
    // each modification
    this.a += this.da
    this.x = this.center.x + (this.r * Math.sin(this.a));
    this.y = this.center.y + (this.r * Math.cos(this.a));
    console.log(this.x, this.y);
    this.elt.style.top = this.y + "px";
    this.elt.style.left = this.x + "px";
}

sat6.move = function(){
    // each modification
    this.a += this.da
    this.x = this.center.x + (this.r * Math.sin(this.a));
    this.y = this.center.y + (this.r * Math.cos(this.a));
    console.log(this.x, this.y);
    this.elt.style.top = this.y + "px";
    this.elt.style.left = this.x + "px";
}

// sat7.move = function(){
//     // each modification
//     this.a += this.da
//     this.x = this.center.x + (this.r * Math.sin(this.a));
//     this.y = this.center.y + (this.r * Math.cos(this.a));
//     console.log(this.x, this.y);
//     this.elt.style.top = this.y + "px";
//     this.elt.style.left = this.x + "px";
// }

// sat8.move = function(){
//     // each modification
//     this.a += this.da
//     this.x = this.center.x + (this.r * Math.sin(this.a));
//     this.y = this.center.y + (this.r * Math.cos(this.a));
//     console.log(this.x, this.y);
//     this.elt.style.top = this.y + "px";
//     this.elt.style.left = this.x + "px";
// }

sat.elt = document.getElementById('sat');
// console.log(sat.elt)
var loopTimer = setInterval(function(){
    sat.move();
}, 10);

sat2.elt = document.getElementById('sat2');
console.log(sat2.move())
var loopTimer = setInterval(function(){
    sat2.move();
}, 10);

sat3.elt = document.getElementById('sat3');
// console.log(sat3.elt)
var loopTimer = setInterval(function(){
    sat3.move();
}, 10);

sat4.elt = document.getElementById('sat4');
// console.log(sat3.elt)
var loopTimer = setInterval(function(){
    sat4.move();
}, 10);

sat5.elt = document.getElementById('sat5');
// console.log(sat3.elt)
var loopTimer = setInterval(function(){
    sat5.move();
}, 10);

sat6.elt = document.getElementById('sat6');
// console.log(sat3.elt)
var loopTimer = setInterval(function(){
    sat6.move();
}, 10);



// carousel 
const imgs = document.getElementById('carousel-imgs')
var i = 0; 			// Start Point
var images = [];	// Images Array
var time = 2500;	// Time Between Switch
	 
// Image List
images[0] = "images/bramport.jpg";
images[1] = "images/carrie-desktop.jpg";
images[2] = "images/chvrge.jpg";
images[3] = "images/lemalab.jpg";
images[4] = "images/localbaskit.jpg";
images[4] = "images/maxxgarage.jpg";

// Change Image
function changeImg(){
	document.slide.src = images[i];

	// Check If Index Is Under Max
	if(i < images.length - 1){
	  // Add 1 to Index
	  i++; 
	} else { 
		// Reset Back To O
		i = 0;
	}
   
	// Run function every x seconds
	setTimeout("changeImg()", time);
    
}

// Run function when page loads
window.onload=changeImg;