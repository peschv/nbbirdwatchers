/* Pulls recent notable sightings data from eBird REST API and populates it to 
  the Sightings page. 
  The API returns data as JSON objects. For example: 
    "speciesCode":"amewig",
    "comName":"American Wigeon",
    "sciName":"Mareca americana",
    "locId":"L6584582",
    "locName":"Parc Mapleton Park",
    "obsDt":"2023-01-21 15:48",
    "howMany":1,
    "lat":46.1273259,
    "lng":-64.8461929,
    "obsValid":false,
    "obsReviewed":false,
    "locationPrivate":false,
    "subId":"S126645525",
    "subnational2Code":"CA-NB-WE",
    "subnational2Name":"Westmorland",
    "subnational1Code":"CA-NB",
    "subnational1Name":"New Brunswick",
    "countryCode":"CA",
    "countryName":"Canada",
    "userDisplayName":"Cathy Simon",
    "obsId":"OBS1611942844",
    "checklistId":"CL27613",
    "presenceNoted":false,
    "hasComments":false,
    "firstName":"Cathy",
    "lastName":"Simon",
    "hasRichMedia":false
  */
$(document).ready(function () {
  var myHeaders = new Headers();
  myHeaders.append("X-eBirdApiToken", "{{x-ebirdapitoken}}");
  
  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  }
  
  // Get table element
  var table = document.getElementById("sightings-body");
  
  /* Fetch data from eBird. Query parameters used:
      detail: full (return all fields)
      maxResults: 60 (return max 60 results)
      back: 30 (show up to 30 days of data)
  */
  fetch("https://api.ebird.org/v2/data/obs/CA-NB/recent/notable?detail=full&maxResults=60&back=30", requestOptions)
    .then(function(response) { return response.json(); })
    .then(function(json) {
      // Loop through each JSON object to populate it to the table
      for (let i = 0; i < json.length; i++) {
        console.log(json[i].comName + " -- " + json[i].locName + " -- " + json[i].obsDt);
        // Create empty row
        var row = table.insertRow(i);
        // Insert cells into the table for the 4 columns
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        // Insert JSON object text into the cells
        cell1.innerHTML = json[i].comName;
        cell2.innerHTML = json[i].locName; 
        cell3.innerHTML = json[i].obsDt;
        cell4.innerHTML = json[i].userDisplayName;
      } 
    })
 
});