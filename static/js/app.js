// from data.js
var tableData = data;

// YOUR CODE HERE!
// Get a reference to the table body
const tbody = d3.select("tbody");
// Console.log the ufo data from data.js
console.log(data);

// Step 1: Loop Through `data` and console.log each ufo report object
data.forEach(sighting => console.log(sighting));

// Step 2:  Use d3 to append one table row `tr` for each ufo report object
data.forEach(sighting => {
  console.log(sighting);
  let row = tbody.append("tr");
});

// Step 3:  Use `Object.entries` to console.log each ufo report value
data.forEach(sighting => {
  let row = tbody.append("tr");
  console.log(Object.values(sighting))
  console.log(Object.entries(sighting))
});

// Step 4: Use d3 to append 1 cell per ufo report value (datetime, city, state, country, shape, durationMinutes,comments)
data.forEach(sighting => {
  let row = tbody.append("tr");
  Object.values(sighting).forEach(value => {
    console.log(value);
    // Append a cell to the row for each value
    // in the ufo report object
    let cell = row.append("td");
  });
});

// Step 5: Use d3 to update each cell's text with
// ufo report values (datetime, city, state, country, shape, durationMinutes,comments)
data.forEach(sighting => {
  let row = tbody.append("tr");
  Object.values(sighting).forEach(value => {
    // Append a cell to the row for each value
    // in the weather report object
    var cell = row.append("td");
    cell.text(value);
  });
});

data.forEach((sighting) => {
    let row = tbody.append("tr");
    Object.values(sighting).forEach(value => {
      let cell = row.append("td");
      cell.text(value);
    });
  });