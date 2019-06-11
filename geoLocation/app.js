//I want to make a function that grabs the user's location using the geolocation API

//First, I need to declare a variable
var getLocation = document.getElementById("yourLocation");

//Next, I need to create a function that initiates the API when the button gets clicked
function findMe() {
    if(navigator.getLocation) {
        navigator.geolocation.getCurrentPosition(displayPosition)
    } 
    //On click, the browser should get the location. If it cannot, it will write to the HTML <p> tag and say "Not Available"
    else {
        yourLocation.innerHTML = "Not Available"
    }
}

function displayPosition(position) {
    yourLocation.innerHTML = "Longitude : " + position.coords.longitude + "Latitude: " + position.coords.latitude 
}