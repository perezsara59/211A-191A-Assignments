const myMap = L.map('mapArea').setView([34.0709, -118.444], 5);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

function addMarker(data){
        // console.log(data)
        // these are the names of our fields in the google sheets:
        L.marker([data.lat,data.lng]).addTo(myMap).bindPopup(`
        <h2>What is your age: ${data.whatisyourage}</h2>
        <h3>How did you make the appointment: ${data.howdidyoumaketheappointment}</h3>
        `)
        return data.whatisyourage, data.howdidyoumaketheappointment
}

let url = "https://spreadsheets.google.com/feeds/list/1YnrdHkRTiosew86JyY39UX_B9fY3qMyAV-Ct0TdH498/o5w70g4/public/values?alt=json"

fetch(url)
	.then(response => {
		return response.json();
		})
    .then(data =>{
                // console.log(data)
                formatData(data)
        }
)


function formatData(theData){
        const formattedData = [] /* this array will eventually be populated with the contents of the spreadsheet's rows */
        const rows = theData.feed.entry
        for(const row of rows) {
          const formattedRow = {}
          for(const key in row) {
            if(key.startsWith("gsx$")) {
                  formattedRow[key.replace("gsx$", "")] = row[key].$t
            }
          }
          formattedData.push(formattedRow)
        }
        console.log(formattedData)
        formattedData.forEach(addMarker)        
}
