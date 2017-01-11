console.log("hello");

var astro = "rotaluclaC thgieW ortsA"
document.getElementById("astro").innerHTML=reverseString(astro);
//the function to reverse the string top title h1
function reverseString(astro) {
    //naming the empty variable
    var reverseMe = "";
    //runs a for loop on the string
    for (var i = astro.length -1; i >= 0; i--) {
        //adding the result of the loop to the variable
       reverseMe += astro[i];
    }
    // returning the results
        return reverseMe;
      }

var planets = [
    { planet: 'Sun', gravity: 27.9 },
    { planet: 'Mercury', gravity: 0.377 },
    { planet: 'Venus', gravity: 0.9032 },
    { planet: 'Earth', gravity: 1 },
    { planet: 'Moon', gravity: 0.1655 },
    { planet: 'Mars', gravity: 0.3895 },
    { planet: 'Jupiter', gravity: 2.640 },
    { planet: 'Saturn', gravity: 1.139 },
    { planet: 'Uranus', gravity: 0.917 },
    { planet: 'Neptune', gravity: 1.148 },
    { planet: 'Pluto', gravity: 0.06 }
];

//var myPlanet = document.getElementById("planetEach");

// for loop to iterate over the planet array

//for(var i=0; i <= planets.length; i++) {



//variable looking at the named planetEach id 
var select = document.getElementById('planetEach');

for (var i = 0; i < planets.length; i++) {
    var opt = document.createElement('option');
    opt.value = planets[i].gravity;
    opt.innerHTML = planets[i].planet;
    console.log(opt);
    select.appendChild(opt);
}

//make a click element that has a function

//var button = document.getElementById('calculateWeight');
function doesAllMath() {
    var weightBox = document.getElementById("EnterNum").value;
    console.log(weightBox);
    var selectMath = document.getElementById('planetEach').selectedIndex;
    var weightSelected = planets[selectMath].gravity;
    var planetSelected = planets[selectMath].planet;

// var ddd = gravity * weight 

    var finalWeight = weightSelected * weightBox;

    //Math.round(100 * userWeightOnPlanet) / 100;
    var lastMessage = document.getElementById('output');
    var theAnswer = "If you were on  " + planetSelected + ", your calculated weight is... " + finalWeight + ".";
    lastMessage.innerHTML = theAnswer;

}



//selected planet it's weight and the entered number

//button.onclick = function() {
//var inputWeight = document.getElementById('inputWeight');
