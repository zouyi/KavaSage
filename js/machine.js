var dispDiv = document.getElementById("display");
var greenBean = document.getElementById("gBean");

var lbutton = document.getElementById("lbutton");
var mbutton = document.getElementById("mbutton");
var dbutton = document.getElementById("dbutton");

var title = document.getElementById("title");
var content = document.getElementById("content");
var picture = document.getElementById("picture");

var machine = document.getElementById("machine");

var continueButton = document.getElementById("continue");
var roastButton = document.getElementById("roastButton");
var coolingButton = document.getElementById("coolingButton");
var getButton = document.getElementById("getButton");


//Check whether bean has been loaded
var beanLoad = 0;

//Check whether levels of roasting has been selected
var selection = 0;

var smoking = 0;

//this is for debugging 
smoke();


lbutton.addEventListener("click", function(){
    
  lbutton.src = "SVG/CoffeeSVG/GlowingButton.svg";
    var sound = document.getElementById("buttonClick");
    sound.play();
  selection = 1;
  mbutton.src = "SVG/CoffeeSVG/button.svg";
  dbutton.src = "SVG/CoffeeSVG/button.svg";
  roasting();

    
})

mbutton.addEventListener("click", function(){
    
  mbutton.src = "SVG/CoffeeSVG/GlowingButton.svg";
    var sound = document.getElementById("buttonClick");
    sound.play();
  selection=2;
  lbutton.src = "SVG/CoffeeSVG/button.svg";
  dbutton.src = "SVG/CoffeeSVG/button.svg";
  roasting();

    
})

dbutton.addEventListener("click", function(){
    
  dbutton.src = "SVG/CoffeeSVG/GlowingButton.svg";
        var sound = document.getElementById("buttonClick");
    sound.play();
    selection =3;
    lbutton.src = "SVG/CoffeeSVG/button.svg";
    mbutton.src = "SVG/CoffeeSVG/button.svg";
    roasting();

})


roastButton.addEventListener("click", function(){


          var sound = document.getElementById("roastBean");
        sound.play();
      
      machine.style.animation = "shake 2s";
      
  
  

  title.innerHTML = "ROASTING";
  content.innerHTML ="Roasting is cool";
  picture.src="Photos/coffeefinishrolling.jpg";;
  
  roastButton.style.display="none";
    
  setTimeout(function(){    

        coolingButton.style.display="inline";
 }, 4000);
  

  
})

coolingButton.addEventListener("click", function(){
  
  var sound = document.getElementById("steamSound");
  title.innerHTML = "Cooling";
  coolingButton.style.display = "none";
  content.innerHTML ="Cooling is cool";
  picture.src="Photos/coffeefinishrolling.jpg";;
    sound.play();
  smoke();
  
  setTimeout(function(){
    getButton.style.display = "inline";
    
  },3000);
})

getButton.addEventListener("click", function(){
  
  
    var popsound = document.getElementById("popSound");
  popsound.play();

  var  myBean = document.createElement("img");
  myBean.setAttribute("id", "myBean");
  
  if(selection == 1){
    
      myBean.src="SVG/coffeeSVG/Lightbean.svg";
      title.innerHTML = "Light Roasted";
  content.innerHTML ="Light Roast is cool";
  picture.src="Photos/LightRoastedBean.jpg";
  
      
  } else if (selection==2){
    
    
      myBean.src="SVG/coffeeSVG/mediumBean.svg";
      title.innerHTML = "Medium Roasted";
      content.innerHTML ="Medium Roast is cool";
      picture.src="Photos/MediumRoastBean.jpg";
  } else if (selection==3){
    
    
      myBean.src="SVG/coffeeSVG/darkBean.svg";
      title.innerHTML = "Dark Roasted";
      content.innerHTML ="Dark Roast is cool";
      picture.src="Photos/DarkRoastedBean.jpg";
  }


  myBean.style.top = "-1420px";
  myBean.style.left = "100px";
  myBean.style.width="10%";
  myBean.style.position="relative";
  dispDiv.appendChild(myBean);

  
})


function dropSound() {
  
    var sound = document.getElementById("beanSpill");
    sound.play();
}

function roasting() {
  
      console.log("selection value is" +selection)

    if(selection > 0 && beanLoad > 0){
      
      roastButton.style.display = "inline";
    }
    
   
  //etTimeout(function(){ cooling(); }, 10);

  
}

function getBean() {
  
  
}

function smoke (){
  
  if(smoking<1){
      //put smoking animation here
  var smoke = document.createElement("img");
  smoke.setAttribute("id", "smoke");
  smoke.src="SVG/coffeeSVG/Smoke.svg";
  smoke.style.top = "-1420px";
  smoke.style.left = "400px";
  smoke.style.width="20%";
  smoke.style.position="relative";
  dispDiv.appendChild(smoke);
  
  smoke.style.animation = "smokeRising 3s infinite";
    smoking=1;
  }


}

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
      //roasting();
  

    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    console.log("dropped!");
    greenBean.style.display = "none";
    beanLoad = 1;
    console.log("beanload value is" +beanLoad)
    dropSound();
   roasting();
    
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
  
  
}