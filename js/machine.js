var dispDiv = document.getElementById("display");
var greenBean = document.getElementById("gBean");
var dropzone = document.getElementById("dropzone");
var levelselection = document.getElementById("levelSelection");



var lbutton = document.getElementById("lbutton");
var mbutton = document.getElementById("mbutton");
var dbutton = document.getElementById("dbutton");

var title = document.getElementById("title");
var content = document.getElementById("content");
var picture = document.getElementById("picture");

var machine = document.getElementById("machine");
var smoke = document.getElementById("smoke");

var continueButton = document.getElementById("continue");
var roastButton = document.getElementById("roastButton");
var coolingButton = document.getElementById("coolingButton");
var getButton = document.getElementById("getButton");
var quizButton = document.getElementById("quizButton");
var resetButton = document.getElementById("resetButton");
var nextButton = document.getElementById("nextButton");

var actionButton = document.getElementById("action");
var nextArrow = document.getElementById("nextArrow");

//Check whether bean has been loaded
var beanLoad = 0;

//Check whether levels of roasting has been selected
var selection = 0;

var smoking = 0;

//check whether bean is on the screen
var beanScreen = 0;


var stage = 0;


//this is for debugging 
//smoke1();

cooling = function(){
   var sound = document.getElementById("steamSound");
  title.innerHTML = "Cooling";
  content.innerHTML ="Once the beans have been roasted to your desired roast you need to cool the coffee beans quickly to stop the roast from continuing. There are a number of methods to do this, here are a few.";
  picture.src="Photos/coffeefinishrolling.jpg";;
    sound.play();
  smoke1();
  
  setTimeout(function(){
    actionButton.removeEventListener("click", cooling);
    nextArrow.style.diplay="inline";
    actionButton.innerHTML="Get the bean!";
    actionButton.addEventListener("click", getBean);
    
  },3000);
  
}

roasting = function(){
  
  var sound = document.getElementById("roastBean");
  sound.play();
  machine.style.animation = "shake 2s";
  lbutton.style.animation = "shake 2s";
  mbutton.style.animation = "shake 2s";
  dbutton.style.animation = "shake 2s";
  document.getElementById("llabel").style.animation= "shake 2s";;
  document.getElementById("mlabel").style.animation= "shake 2s";;
  document.getElementById("dlabel").style.animation= "shake 2s";;
    
  actionButton.innerHTML = "";
  nextArrow.style.display = "none";
  
}

getBean = function() {
  
   if(beanScreen < 1){
    
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
    myBean.style.zIndex="2";
  dispDiv.appendChild(myBean);
    getButton.style.display="none";
    quizButton.style.display="inline";
    resetButton.style.display="inline";
      beanScreen=1;
    
  }
}


resetButton.addEventListener("click", function(){
  
  window.location.href= "machine.html";
  
})

quizButton.addEventListener("click", function(){
  
  window.location.href= "quiz.html";
  
})


function dropSound() {
  
    var sound = document.getElementById("beanSpill");
    sound.play();
}

function smoke1(){
  
  if(smoking<1){
      //put smoking animation here
  smoke.style.display = "inline";
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
    //console.log("dropped!");
  
    greenBean.style.display = "none";
    beanLoad = 1;
  dropzone.style.display="none";
  levelselection.style.display="inline";
  
    //console.log("beanload value is" +beanLoad)
    dropSound();
  
    stage++;

    selectStage();
    
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}

function selectStage() {
    //activation button selection
    lbutton.addEventListener("click", function(){
    
  lbutton.src = "SVG/CoffeeSVG/GlowingButton.svg";
    var sound = document.getElementById("buttonClick");
    sound.play();
  selection = 1;
  mbutton.src = "SVG/CoffeeSVG/button.svg";
  dbutton.src = "SVG/CoffeeSVG/button.svg";
  roastingStage();
})

    mbutton.addEventListener("click", function(){
    
  mbutton.src = "SVG/CoffeeSVG/GlowingButton.svg";
    var sound = document.getElementById("buttonClick");
    sound.play();
  selection=2;
  lbutton.src = "SVG/CoffeeSVG/button.svg";
  dbutton.src = "SVG/CoffeeSVG/button.svg";
      
        roastingStage();


    
})

    dbutton.addEventListener("click", function(){
    
  dbutton.src = "SVG/CoffeeSVG/GlowingButton.svg";
        var sound = document.getElementById("buttonClick");
    sound.play();
    selection =3;
    lbutton.src = "SVG/CoffeeSVG/button.svg";
    mbutton.src = "SVG/CoffeeSVG/button.svg";
        roastingStage();


})
    
}


function roastingStage() {
  
    console.log("selection value is" +selection)

    if(selection > 0 && beanLoad > 0){
      levelselection.style.display="none";
      rightArrow.style.display= "none";
      nextArrow.style.display = "inline";
      actionButton.innerHTML = "Roast it";
      
      actionButton.addEventListener("click",roasting);
    
  setTimeout(function(){    
        nextArrow.style.display = "inline";
    title.innerHTML = "ROASTING";
  content.innerHTML ="Roasting coffee transforms the chemical and physical properties of green coffee beans into roasted coffee products. The roasting process is what produces the characteristic flavor of coffee by causing the green coffee beans to change in taste.";
  picture.src="Photos/coffeefinishrolling.jpg";;

        actionButton.innerHTML = "Cool it off";
    actionButton.removeEventListener("click", roasting);
        actionButton.addEventListener("click", function(){
          cooling();
        })
    // smoke();
 }, 4000);
  
}

    }
  
  

  //etTimeout(function(){ cooling(); }, 10);

  



