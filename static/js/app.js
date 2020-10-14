// from data.js
let tableData = data;

// YOUR CODE HERE!
// Get a reference to the table body
const tbody = d3.select("tbody");
// Console.log the ufo data from data.js
console.log(data);

// Step 1: Loop Through `data` and console.log each ufo report object
data.forEach(sighting => console.log(sighting));

// Step 2:  Use d3 to append one table row `tr` for each ufo report object
data.forEach(sighting => {
//   console.log(sighting);
  let row = tbody.append("tr");
  row.append("td").text(sighting.datetime);
  row.append("td").text(sighting.city);
  row.append("td").text(sighting.state);
  row.append("td").text(sighting.country);
  row.append("td").text(sighting.shape);
  row.append("td").text(sighting.durationMinutes);
  row.append("td").text(sighting.comments);
});


// Getting a reference to the button on the page with the id property set to `click-me`
let button = d3.select("#click-me");

// You can also define the click handler inline
button.on("click", function() {
// Select the input element and get the raw HTML node
  let dateInput=d3.select('#date-filter');
  // Get the value property of the input element
  let dateValue = dateInput.property('value');
  console.log(dateInput);
  console.log()
    
});