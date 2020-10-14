# javascript-challenge

**DATA FOR ANALYSIS**

The data that provided has the following keys:

- datetime
- city
- state
- country
- shape
- durationMinutes
- comments

**SETTING UP THE app.js**
1. Using d3 I searched the HTML and selected the <tbody> tag to set variable for the table body.
2. Next, looped through tableData adding a row <tr> using forEach object append values to the keys <td>
3. Set variable for the search button. Using class activity used #click-me (Which I had to change on index.HTML)
4. Using the on event listener I created a filter variable that would take dateInput from user and use that to filter after clicking the #click-me button. (Thanks to Michelle for staying after class and asking how to set up filtered variable and filter using users input!)
5. Made corrections to HTML.

