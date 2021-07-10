const mapCenter = [40,-118];
let zoomLevel=5
const myMap = L.map('mapArea').setView(mapCenter, zoomLevel);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

// create a function to add markers
function addMarker(lat,lng,title,message,zoom){
    console.log(message)
    L.marker([lat,lng]).addTo(myMap).bindPopup(`<h2>${title}</h2>`)
    createButtons(lat,lng,title,zoom); // new line!!!
    return message
}

// create a function to add buttons with a fly to command
function createButtons(lat,lng,title,zoom){
    const newButton = document.createElement("button"); // adds a new button
    newButton.id = "button"+title; // gives the button a unique id
    newButton.innerHTML = title; // gives the button a title
    newButton.setAttribute("lat",lat); // sets the latitude 
    newButton.setAttribute("lng",lng); // sets the longitude 
    newButton.addEventListener('mouseover', function(){
        myMap.flyTo([lat,lng],zoom); 
    })
    document.body.appendChild(newButton); //this adds the button to our page.
} 

// use our marker functions
addMarker(36.089060460282006, -112.08251953125,'Grand Canyon', 'national park #1')
addMarker(37.85100126460795,-119.56146240234375,'Yosemite','national park #2')
addMarker(36.50963615733049,-118.56994628906249,'Sequoia','national park #3')
addMarker(44.59829048984011,-110.54443359375,'Yellowstone','national park #4')

